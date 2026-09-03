// Twisting Lids Off with Two Hands — review v3 (2026-09-03, anti-slop rewrite)
// Snapshot of the paper_summaries.js entry at commit 9e9a5c3, before the v4 source-read rewrite.
// Prose-only pass over v2: em dash 42 -> 0, -ly adverbs 37 -> 2, all 99 numbers unchanged.
window.DETAILED_PAPER_SUMMARIES = window.DETAILED_PAPER_SUMMARIES || {};
window.DETAILED_PAPER_SUMMARIES["twisting-lids-v3"] = {
    shortTitle: "Twisting Lids Off",
    title: "Twisting Lids Off with Two Hands",
    venue: "CoRL 2024",
    badges: ["sim-to-real RL", "bimanual", "Allegro × 2", "exploration shaping", "zero-shot transfer"],
    figure: "../overview_assets/twisting-lids/teaser.png",
    figureCaption: "Two 16-DoF Allegro hands on fixed UR5e arms, one RealSense D435, and a policy trained on plain simulated cylinders. It runs zero-shot on household jars that differ in shape, size, mass, material and colour.",
    tldr: "Two multi-fingered hands hold a bottle in mid-air and keep unscrewing its lid. One hand stabilises the body while the other grips the cap, rotates it, releases and grips again. Nobody demonstrates any of this: PPO in Isaac Gym learns the whole behaviour. The authors spend the paper on making that search tractable, and they attack it from two sides, with a keypoint contact reward that says which fingertips belong on the body and which on the lid, and early-termination rules that kill rollouts stuck in the failure modes exploration keeps rediscovering. Two supporting decisions carry the transfer. A brake link fakes the static friction of a threaded joint the simulator cannot model, and the object representation shrinks to two 3D points (body centre, lid centre) from SAM + XMem masks with noisy depth. On the best real bottle the policy twists 946° in 30 s, where every baseline manages single digits.",
    problem: [
      "The object is <em>multi-part and articulated</em>: two near-cylindrical rigid bodies joined by a continuous revolute joint. Both hands hold it in the air, with 32 finger DoF to coordinate and no table or fixture to lean on. The policy has to rotate the lid as far as it can while the object stays in the hands.",
      "Three phases have to happen, and nobody tells the policy about any of them. Catch the dropped object and reorient it in-grasp into a workable pose. Move the hand nearer the cap into a finger placement that can start the rotation. Then coordinate both hands so the object survives the moment the twisting hand lets go to re-grip.",
      "That last moment decides the task. Every cycle breaks the contact set and rebuilds it, and during each release one hand holds the whole object. Most interaction modes RL stumbles into lead nowhere: the bottle wedges between fingers, or gets pinched low where no finger motion recovers it into the palm. Raw exploration spends its budget on rollouts that teach nothing.",
      "Simulation blocks the other route. Physics engines still have no good model of static friction inside a threaded revolute joint, and the authors report that tuning friction between two revolute-jointed bodies does not reach the realism they need.",
      "For tasks this contact-rich the field reaches for demonstrations: build a teleoperation rig, cover the task distribution, imitate. That works with parallel jaws. With two multi-fingered hands it stalls, because nobody has collected high-quality bimanual multi-finger demonstrations, and the available gloves, exoskeletons and vision-based retargeting rigs each give up latency, accuracy, dexterity or cost.",
      "Reusing the reward recipes from single-hand in-hand reorientation fails too. Those rewards describe one hand rotating a single-part rigid body, and they say nothing about which surface each finger belongs on."
    ],
    output: [
      "One RL policy. It trains in simulation on synthetic cylinders, transfers zero-shot, and runs at 10 Hz on two Allegro hands that UR5e arms hold in fixed poses.",
      "Behaviour the authors never scripted: in-grasp reorientation into a stable holding pose, a stabilising grasp by one hand, and a repeated grip-rotate-release gait by the other.",
      "Generalisation to 10 novel household containers (peanut butter, Nutella, gummy jars, hair mask, earplug tubes). On some of them the continuous twisting takes the lid <em>off</em>, which nobody trained the policy to do."
    ],
    pipeline: [
      {name:"Brake-link object model", text:"The simulated bottle URDF carries three parts: a base link, a lid link on a continuous revolute joint, and a brake link that a prismatic joint presses against the lid. That normal force produces the frictional resistance of a screwed-on cap, and no thread geometry enters the simulation. It stays cheap enough for large-scale parallel RL, and the authors report it as the one approach they found that reproduces the static friction well."},
      {name:"Initialisation without a grasp", text:"Both hands start in a canonical palms-up pose with Gaussian noise on the joint angles, and the simulator drops the object onto the fingers with randomised translation and rotation. The authors hand the policy no stable grasp to begin from. The choice is deliberate: the policy has to learn in-grasp reorientation into a stable holding pose before any twisting can start."},
      {name:"Reset strategy as exploration pruning", text:"Two early-termination rules, which the paper introduces to circumvent the dimensionality of the exploration problem. Reset when the hands fail to bring the bottle into a twist-ready pose inside a short time limit. Reset when the bottle's z-position drops below a threshold, the signature of the pinch-too-low trap where the fingertips hold the object somewhere they cannot recover it from. Neither rule rewards anything. They stop the sampler from paying for rollouts that cannot teach."},
      {name:"Observation and action", text:"The policy sees hand joint positions, the previous commanded targets, and the estimated 3D centres of bottle base and lid. It emits relative joint targets: clipped to [-1, 1], scaled by 0.1, smoothed by an exponential moving average with coefficient 0.75, then integrated into the PD controller's target. That smoothing keeps real fingers from chattering against a held object."},
      {name:"Reward", text:"Twisting reward (lid rotation per step) supplies the objective. The keypoint finger contact reward supplies the structure. A pose reward keeps the bottle axis aligned with a target direction, and work and action penalties suppress jerky motion. The weights run 2.5 / 500.0 / 20 / -0.001 / -1.0, which puts the contact term two orders of magnitude above the objective it serves."},
      {name:"Training", text:"PPO with an asymmetric critic. The value network sees privileged state that the policy never gets: joint velocities, all fingertip and contact keypoint positions, object orientation and velocities, the applied random forces, brake torque, and the mass, friction and shape randomisation scales. Domain randomisation covers object mass (0.03 to 0.1 kg), friction, ±5% shape scale, PD gains, random pushes, and noise on observations, actions and frame lag."},
      {name:"Real-time perception", text:"Segment Anything produces two masks (body, lid) on the first frame of each trajectory, and XMem tracks them from there. Noisy depth from one RealSense D435 lifts the mask centres into 3D, which gives the two points the policy trained on, at 10 Hz to match the control loop."},
      {name:"Systems plumbing", text:"Extrinsics come from one marker tag, through a trick worth stealing. The authors model the same tag in the simulation scene, which gives them corner coordinates in the camera frame and the world frame as matched pairs, so the extrinsic matrix solves in one step with no checkerboard sweep. ZeroMQ carries messages between hands, camera and workstation to hold the 10 Hz loop. Each real trial starts from a tabulated canonical finger pose, with a person placing the object onto the upturned fingers."}
    ],
    methodDetails: [
      {name:"Why the reward samples points and takes a min", text:"The reward samples a finite point set on the base and another on the lid, then scores each fingertip by its distance to the <em>nearest</em> point in its set. That discretisation does more work than the formula shows. A continuous be-in-contact-somewhere term would carve one smooth basin over the whole surface. A min over K sampled points gives each fingertip its own nearest-point basin and turns the fingertip-to-surface assignment discrete, so the gradient pulls towards one configuration instead of the average of all valid ones. The paper skips this analysis and reports only that the intensity of the term correlates with sample efficiency and final performance. It stays the most plausible account of why so blunt a term unlocks the task."},
      {name:"Reward and reset are one idea from two directions", text:"Both mechanisms shrink the search, and reading one without the other misstates the paper. The contact reward supplies a prior about where the fingers should end up. The termination rules delete the trajectories where they will not. Neither counts as a control insight. Both are exploration engineering, and the paper's claim is that for bimanual multi-part manipulation the difficulty lives there."},
      {name:"What the metrics measure, and what they let a policy hide", text:"The paper reports no success rate. Angular Displacement (AD) counts the total degrees the lid turned. Time-to-Fail (TTF) measures the interval from the object being held until it slips or becomes lodged, capped at the 30 s trial. Velocity is AD/TTF. AD and TTF trade off against each other, so you have to read them as a pair. A policy that grips the bottle and never turns it scores a full 30.00 s TTF with AD near zero, which is the No-Asym and Large signature in the table. Holding is the easy half of this task, and the metric pair keeps that from reading as success."},
      {name:"Two points suffice, and the vision cannot be dropped", text:"The authors expected a fine-grained contact task to need dense object geometry, and a two-point representation surprised them. The converse holds as well. The proprioception-only policy, which works for single-hand rotation through implicit tactile sensing in prior work, collapses here: 1.33° AD on the blue bottle against 946.33°. Joint angles alone do not say where the lid sits relative to the body."},
      {name:"A bigger network transfers worse", text:"The enlarged actor matches the full policy in simulation and fails on the robot (2.00° AD on the blue bottle). The authors read that as overfitting to simulation and treat policy capacity as a sim-to-real hyperparameter for contact-rich tasks. The final actor is a three-layer MLP (256-256-128). The critic, which never has to transfer, runs 512-512-512."},
      {name:"How dynamic is this?", text:"The paper describes the task as requiring dynamic dexterity, and that claim deserves a closer look. The motion is quasi-static regrasping. The paper's own contrast case for dynamic bimanual dexterity is throw-and-catch, which it separates out as brief rather than sustained. What the task demands is continuous coordination through repeated contact transitions, and the difficulty comes from the object being unsupported at every one of them, not from speed."},
      {name:"The setup is the hard one by choice", text:"An appendix retrains the same system on bottles held vertically, changing the initialisation and switching perception off. The authors note that the horizontal setup in the main text is harder, because holding the object mid-air against gravity is where the common failure lives: stabilisation goes first, then the object drops. The vertical variant designs that failure away."},
      {name:"An accidental robustness", text:"The project page reports a side effect of XMem favouring spatial continuity. When a lid comes free, the tracker keeps following the exposed thread region instead of chasing the detached cap, which holds the observation together through the one event the simulation never modelled."}
    ],
    equations: [
      {
        name:"Twisting reward",
        formula:"r_twisting = Δθ = q_bottle^{t+1} − q_bottle^{t}",
        meaning:"The per-step rotation of the lid about the object axis. It is dense, unbounded and direction-signed. The reward asks the policy to keep turning and never names a goal angle, which is why the headline metric counts total angular displacement instead of successes."
      },
      {
        name:"Keypoint finger contact reward",
        formula:"r_contact = Σ_i [ 1 / (1 + α·d(X^L, F_i^L)) + 1 / (1 + α·d(X^R, F_i^R)) ]\n\n    d(A, x) = min_i ‖A_i − x‖₂",
        meaning:"X^L and X^R are point sets sampled on base and lid. F^L, F^R ∈ ℝ^{4×3} hold the two hands' fingertips. The min inside d carries the load: each fingertip scores against its nearest sampled point, which turns the term into a discrete assignment of fingertips to surfaces instead of a motion specification."
      },
      {
        name:"Pose reward",
        formula:"r_pose = − arccos( ⟨ x_axis , v ⟩ )",
        meaning:"Keeps the bottle's main axis aligned with a fixed direction v, so the object stays in an orientation where both hands can reach their assigned surfaces."
      },
      {
        name:"Action integration",
        formula:"q̃_{t+1} = q̃_t + η · EMA(a_t)",
        meaning:"Actions are increments on the PD target rather than absolute poses, and a low-pass filter smooths them before integration. This is the standard recipe for keeping a high-gain position-controlled hand from destabilising its own grasp."
      }
    ],
    novelty: [
      "<strong>Simulating a threaded joint by not simulating it:</strong> a brake link on a prismatic joint reproduces the static friction of a screwed cap at a fraction of the cost of contact-accurate thread modelling, and it opens large-scale RL on this object class.",
      "<strong>Exploration shaped from both ends:</strong> a reward that assigns fingertips to surfaces, paired with termination rules that delete the known dead-end interaction modes. The transferable lesson is that for bimanual multi-part manipulation the bottleneck is the contact mode, so spend the prior there rather than on control architecture.",
      "<strong>A two-point object representation:</strong> body centre and lid centre, nothing else. A segmentation-and-tracking stack can deliver those two points in real time, and they carry no shape information by design, which is why a policy trained on plain cylinders transfers to a Nutella jar.",
      "<strong>First sim-to-real RL system on bimanual multi-fingered hands</strong> for a task requiring sustained coordinated contact, as opposed to prior bimanual dexterous work that was simulation-only or dynamic-but-brief."
    ],
    comparison: {
      headers:["Real, BlueBottle unless noted", "AD° ↑", "TTF s ↑", "Vel °/s ↑", "SquareBottle AD° (OOD) ↑"],
      rows:[
        ["<strong>Ours</strong>", "<strong>946.33</strong>", "23.67", "<strong>41.26</strong>", "<strong>43.00</strong>"],
        ["Open-loop replay of a sim trajectory", "128.33", "7.67", "11.68", "29.67"],
        ["No vision (proprioception only)", "1.33", "21.67", "0.04", "5.00"],
        ["No asymmetric critic", "18.67", "<strong>30.00</strong>", "0.62", "0.00"],
        ["Larger actor network", "2.00", "22.33", "0.14", "1.67"]
      ]
    },
    evidence: [
      "Real-world Table 1: five 3D-printed bottles, 20 trials each capped at 30 s, three best policies out of ten seeds. The full method wins on both metrics for every object, survives the full 30 s without dropping on four of five, and one deployed policy averages four complete turns in 30 s on the blue bottle.",
      "The baselines show the metric trade-off. No-Asym holds the blue bottle for the full 30.00 s and turns it 18.67°. That TTF looks strong until you read it against AD, which exposes a policy that learned to grip and stall.",
      "The open-loop replay baseline has the <em>lowest</em> time-to-fail (7.67 s): replaying a trajectory that succeeded in simulation makes the bottle roll off the fingers. This is the cleanest evidence that the task demands closed-loop reaction to object state rather than a deterministic motion pattern.",
      "Simulation ablations over 5 seeds: reducing the finger contact reward makes policies fail to acquire the skill at all, and replacing it with an in-hand-reorientation-style gait constraint reward yields erratic finger motion and unnatural grasps.",
      "Multi-object training edges out single-object training even when each is evaluated on its own setup. The authors read the object spread as an implicit curriculum rather than a generalisation tax.",
      "Perturbation test: the object is poked and pushed with a picker tool at random times; the policy reorients it back into a stable pose and resumes twisting.",
      "Generalisation to 10 unseen household containers, scored on the novel task of fully removing the lid: 33.75% overall, 60% on HairMask and 50% on FiberGummies (few turns needed), down to 10% on PeanutButter and EmptyNutella (five turns needed). Under the paper's per-turn accounting, in-distribution objects requiring one turn are removed 100% of the time.",
      "The vertical-bottle variant keeps the reward, the object model and the training recipe untouched. The initial hand pose is the one change."
    ],
    limitations: [
      "<strong>It fixes contact-level control, not task-level structure.</strong> No planner, no subtask decomposition, no goal state. The reward is per-step lid rotation, so the policy learns to keep turning without end. Nothing in the formulation represents removal itself, the moment the threads run out and the cap has to come away, and that is where the household-object numbers fall off (33.75% overall, 10% on objects needing five turns).",
      "The simulated cap twists without end by construction, so the transition the downstream task cares about, the lid coming free, sits outside the training distribution.",
      "The arms do not move. Two UR5e arms hold the hands in fixed poses and only the 16-DoF hands are controlled, and a person places the object onto the upturned fingers to start each trial. This is a skill, not an autonomous pipeline.",
      "Both exploration mechanisms are hand-authored for this object class. Someone had to choose which surfaces to sample contact points on, and someone had to know that pinch-too-low was the failure worth terminating on. The recipe generalises as an idea; the instantiation does not.",
      "Reported numbers come from the three best of ten seeds, and the spreads stay wide even there (946.33 ± 383.81°, 499.50 ± 578.23° on the wood bottle). Read this as seed sensitivity rather than average behaviour. The Large-actor result, which matched in simulation and died in transfer, points the same way.",
      "The out-of-distribution square bottle is held for the full 30 s but barely turned (43° against 946° in-distribution), so shape generalisation is much weaker for twisting than for stabilising.",
      "The perturbation experiment swaps the vision stack for marker-based detection to isolate occlusion. Robustness to external forces and robustness of the SAM/XMem pipeline under heavy occlusion therefore appear in separate experiments, never in the same one.",
      "Perception needs a first-frame segmentation per trajectory to seed the tracker, and there is no tactile or force sensing anywhere in the loop despite contact defining the whole task."
    ],
    takeaway: [
      "<strong>Classification:</strong> a sim-to-real RL system paper for one continuous bimanual dexterous skill, with no demonstrations, no learned dynamics model and no task planner.",
      "<strong>Read it for:</strong> the case that exploration over contact modes is the binding constraint in contact-rich bimanual manipulation, and that the fix stays unglamorous at both ends, a reward encoding fingertip-to-surface assignment and termination rules deleting the dead-end modes. Two negative results come free: proprioception alone does not carry this task, and a bigger policy transfers worse.",
      "<strong>Steal from it:</strong> the AD/TTF metric pair for any task where holding on is easier than making progress, and the simulate-your-own-calibration-tag trick for solving camera extrinsics without a checkerboard.",
      "<strong>Read alongside:</strong> AsymDex, which builds the stabilise-versus-manipulate asymmetry into its structure rather than its reward; DexMachina and ManipTrans, which reach bimanual dexterity from human demonstrations instead of from scratch; and Sequential Dexterity for the task-level chaining this paper leaves out."
    ],
    links: [
      {label:"arXiv",url:"https://arxiv.org/abs/2403.02338"},
      {label:"PDF",url:"https://arxiv.org/pdf/2403.02338"},
      {label:"Project",url:"https://toruowo.github.io/bimanual-twist/"},
      {label:"Code",url:"https://github.com/ToruOwO/twisting-lids"},
      {label:"Proceedings",url:"https://proceedings.mlr.press/v270/lin25c.html"}
    ]
};
