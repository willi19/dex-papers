// Twisting Lids Off with Two Hands — review v2 (2026-09-02 09:48, revised; current)
// Snapshot of the paper_summaries.js entry at commit 9e8fc12
//   "Revise the Twisting Lids summary and add report-writing review notes"
// The live copy is paper_summaries.js — edit that, not this snapshot.
// Read it at review/paper.html?id=twisting-lids-v2
window.DETAILED_PAPER_SUMMARIES = window.DETAILED_PAPER_SUMMARIES || {};
window.DETAILED_PAPER_SUMMARIES["twisting-lids-v2"] = {
    shortTitle: "Twisting Lids Off",
    title: "Twisting Lids Off with Two Hands",
    venue: "CoRL 2024",
    badges: ["sim-to-real RL", "bimanual", "Allegro × 2", "exploration shaping", "zero-shot transfer"],
    figure: "../overview_assets/twisting-lids.png",
    figureCaption: "Two 16-DoF Allegro hands on fixed UR5e arms, a single RealSense D435, and a policy trained only on simplistic simulated cylinders — deployed zero-shot on household jars that differ in shape, size, mass, material and colour.",
    tldr: "Hold a bottle-like object in mid-air with two multi-fingered hands and keep unscrewing its lid: one hand stabilises the body while the other repeatedly grips the cap, rotates it, releases and re-grips. Nothing is demonstrated — PPO in Isaac Gym learns the whole behaviour. The paper is really about making that search tractable, and it attacks it from two sides: a keypoint contact reward that says which fingertips belong on the body and which on the lid, and early-termination rules that kill rollouts trapped in the failure modes exploration keeps rediscovering. Two supporting decisions carry the transfer — a brake link that fakes the static friction of a threaded joint the simulator cannot model, and an object representation of just two 3D points (body centre, lid centre) from SAM + XMem masks plus noisy depth. On the best real bottle the policy twists 946° in 30 s where every baseline manages single digits.",
    problem: [
      "The task is continuous bimanual in-hand manipulation of a <em>multi-part articulated</em> object — two near-cylindrical rigid bodies joined by a continuous revolute joint — held entirely in the air, with 32 finger DoF to coordinate and no table or fixture to lean on. The objective is to rotate the lid as far as possible while the object never leaves the hands.",
      "Success requires three phases that the policy is never told about: firmly grasp the dropped object and reorient it in-grasp into a workable pose; bring the hand nearer the cap into a finger placement that can initiate rotation; then keep both hands coordinated so the object survives the moment the twisting hand lets go to re-grip.",
      "That last moment is the crux. The contact set must be broken and rebuilt every cycle, and during each release the other hand alone is preventing a drop. Most interaction modes RL stumbles into are dead ends — the bottle wedges between fingers, or gets pinched low where it can never be recovered into the palm — so raw exploration burns its entire budget on rollouts that teach nothing.",
      "Simulation is the second obstacle. Static friction inside a threaded revolute joint is a long-standing unsolved problem in physics engines, and the authors report that naively tuning friction between two revolute-jointed bodies is simply not realistic enough in their simulator.",
      "The field's default answer for tasks this contact-rich is demonstrations — assume a teleoperation rig can cover the task distribution and imitate it. That holds for parallel jaws and breaks for two multi-fingered hands: there is no high-quality bimanual multi-finger demonstration data, and existing gloves, exoskeletons and vision-based retargeting rigs trade away either latency, accuracy, dexterity or cost.",
      "The other default — reuse the reward recipes that solved single-hand in-hand reorientation — also fails, because those rewards describe one hand rotating a single-part rigid body and say nothing about which surface each finger belongs on."
    ],
    output: [
      "One RL policy, trained purely in simulation on synthetic cylinders and transferred zero-shot, running at 10 Hz on two Allegro hands held in fixed poses by UR5e arms.",
      "Emergent behaviour, not scripted: in-grasp reorientation into a stable holding pose, a stabilising grasp by one hand, and a repeated grip–rotate–release gait by the other.",
      "Generalisation to 10 novel household containers (peanut butter, Nutella, gummy jars, hair mask, earplug tubes) and, as a by-product of continuous twisting, actual lid <em>removal</em> on some of them — a task the policy was never trained for."
    ],
    pipeline: [
      {name:"Brake-link object model", text:"The simulated bottle URDF has three parts: a base link, a lid link on a continuous revolute joint, and a brake link that a prismatic joint presses constantly against the lid. The resulting normal force generates the frictional resistance a screwed-on cap would have, without simulating threads at all. Cheap enough for large-scale parallel RL, and the authors state it was the only approach they found that reproduces the static friction convincingly."},
      {name:"Initialisation without a grasp", text:"Both hands start in a canonical palms-up pose with joint angles perturbed by Gaussian noise, and the object is dropped onto the fingers with randomised translation and rotation. No stable grasp configuration is assumed at initialisation — which is a deliberate choice, since it forces the policy to learn in-grasp reorientation into a stable holding pose before any twisting can begin."},
      {name:"Reset strategy as exploration pruning", text:"Two early-termination rules, introduced explicitly to circumvent the dimensionality of the exploration problem. Reset if the hands fail to bring the bottle into a twist-ready pose within a short time limit; reset if the bottle's z-position falls below a threshold, which is the signature of the pinch-too-low trap where fingertips hold the object somewhere they can never recover it from. Neither rule rewards anything — they just stop the sampler from paying for rollouts that cannot teach."},
      {name:"Observation and action", text:"The policy sees hand joint positions, the previous commanded targets, and the estimated 3D centres of bottle base and lid. It emits relative joint targets, clipped to [-1, 1], scaled by 0.1, smoothed by an exponential moving average with coefficient 0.75, then integrated into the PD controller's target. The smoothing is what keeps real fingers from chattering against a held object."},
      {name:"Reward", text:"Twisting reward (lid rotation per step) supplies the objective; the keypoint finger contact reward supplies the structure; a pose reward keeps the bottle axis aligned with a target direction; work and action penalties suppress jerky motion. Weights are 2.5 / 500.0 / 20 / -0.001 / -1.0 — the contact term is weighted two orders of magnitude above the objective it is meant to serve."},
      {name:"Training", text:"PPO with an asymmetric critic. The value network sees privileged state the policy never does — joint velocities, all fingertip and contact keypoint positions, object orientation and velocities, the random forces applied, brake torque, and the mass / friction / shape randomisation scales. Domain randomisation covers object mass (0.03–0.1 kg), friction, ±5% shape scale, PD gains, random pushes, plus observation, action and frame-lag noise."},
      {name:"Real-time perception", text:"Segment Anything produces two masks (body, lid) on the first frame of each trajectory; XMem tracks them thereafter. Mask centres in the image plane are lifted to 3D with noisy depth from a single RealSense D435, giving exactly the two points the policy was trained on, at 10 Hz to match the control loop."},
      {name:"Systems plumbing", text:"Extrinsics come from a single marker tag, calibrated by a trick worth stealing: the same tag is modelled in the simulation scene, so corner coordinates are available in both camera and world frames as matched pairs and the extrinsic matrix solves directly — no checkerboard sweep, no multi-pose solve. ZeroMQ carries messages between hands, camera and workstation to keep the 10 Hz loop reliable, and each real trial starts from a tabulated canonical finger pose with the object placed by hand onto the upturned fingers."}
    ],
    methodDetails: [
      {name:"Why discretised contact points, not a surface distance", text:"The reward samples a finite point set on the base and another on the lid, and scores each fingertip by its distance to the <em>nearest</em> point in its set. That discretisation is doing more work than the formula suggests. A continuous be-in-contact-somewhere term would give a single smooth basin over the whole surface; a min over K sampled points gives each fingertip a nearest-point basin and makes the fingertip-to-surface assignment discrete, so gradients pull towards a specific configuration rather than towards an average of all valid ones. The paper does not analyse this — it reports only that intensity of the term correlates with sample efficiency and final performance — but it is the most plausible account of why such a blunt term unlocks the task."},
      {name:"Reward and reset are the same idea from two directions", text:"Both mechanisms exist to shrink the search, and reading either alone misstates the paper. The contact reward supplies a prior about where the fingers should end up; the termination rules remove the trajectories where they demonstrably will not. Neither is a control insight — they are exploration engineering, and the paper's real claim is that for bimanual multi-part manipulation this is where the difficulty actually lives."},
      {name:"What the metrics measure, and what they let a policy hide", text:"There is no success rate. Angular Displacement (AD) is total degrees the lid was twisted; Time-to-Fail (TTF) is the interval from the object being held until it slips or becomes lodged, capped at the 30 s trial; Velocity is AD/TTF. AD and TTF trade off, and reading them together is essential — a policy that grips the bottle securely and never turns it scores a perfect TTF of 30.00 s with AD near zero, which is precisely the No-Asym and Large signature in the table. Holding is the easy half of this task; the metric pair is what keeps that from looking like success."},
      {name:"Two points is enough — and vision is non-negotiable", text:"The authors expected a fine-grained contact task to need dense object geometry and were surprised a two-point representation sufficed. The converse also holds: the proprioception-only policy, which works for single-hand rotation via implicit tactile sensing in prior work, collapses here — 1.33° AD on the blue bottle against 946.33°. Where the lid sits relative to the body cannot be inferred from joint angles alone."},
      {name:"A bigger network transfers worse", text:"The enlarged actor matches the full policy in simulation and fails in the real world (2.00° AD on the blue bottle). The authors read this as overfitting to simulation and conclude that policy capacity is itself a sim-to-real hyperparameter for contact-rich tasks. The final actor is a small three-layer MLP (256-256-128); the critic, which never has to transfer, is 512-512-512."},
      {name:"How dynamic is this, really?", text:"The paper describes the task as requiring dynamic dexterity, but worth reading that claim precisely. The motion is quasi-static regrasping — the paper's own contrast case for genuinely dynamic bimanual dexterity is throw-and-catch, which it distinguishes as brief rather than sustained. What is actually demanded here is continuous coordination through repeated contact transitions, and the difficulty is that the object is unsupported at every one of them, not that anything moves fast."},
      {name:"The setup is deliberately the hard one", text:"An appendix retrains the same system on bottles held vertically, changing only the initialisation and switching perception off. The authors note the horizontal setup in the main text is harder because holding the object mid-air against gravity is exactly where the common failure — loss of stabilisation, then drop — lives; the vertical variant designs that failure away."},
      {name:"An accidental robustness", text:"The project page reports that because XMem favours spatial continuity, when a lid actually comes free the tracker keeps following the exposed thread region rather than chasing the detached cap — which happens to keep the observation sane through the one event the simulation never modelled."}
    ],
    equations: [
      {
        name:"Twisting reward",
        formula:"r_twisting = Δθ = q_bottle^{t+1} − q_bottle^{t}",
        meaning:"The per-step rotation of the lid about the object axis. Dense, unbounded and direction-signed — the policy is asked to keep turning, never to reach a goal angle, which is why the headline metric is total angular displacement rather than a success rate."
      },
      {
        name:"Keypoint finger contact reward",
        formula:"r_contact = Σ_i [ 1 / (1 + α·d(X^L, F_i^L)) + 1 / (1 + α·d(X^R, F_i^R)) ]\n\n    d(A, x) = min_i ‖A_i − x‖₂",
        meaning:"X^L and X^R are point sets sampled on base and lid; F^L, F^R ∈ ℝ^{4×3} are the two hands' fingertips. The min inside d is the load-bearing part: each fingertip is scored against its nearest sampled point, making this a discrete assignment of fingertips to surfaces rather than a motion specification."
      },
      {
        name:"Pose reward",
        formula:"r_pose = − arccos( ⟨ x_axis , v ⟩ )",
        meaning:"Keeps the bottle's main axis aligned with a fixed direction v, so the object stays in an orientation where both hands can reach their assigned surfaces."
      },
      {
        name:"Action integration",
        formula:"q̃_{t+1} = q̃_t + η · EMA(a_t)",
        meaning:"Actions are increments on the PD target, not absolute poses, and are low-pass filtered before integration — the standard recipe for keeping a high-gain position-controlled hand from destabilising its own grasp."
      }
    ],
    novelty: [
      "<strong>Simulating a threaded joint by not simulating it:</strong> a brake link on a prismatic joint reproduces the static friction of a screwed cap at a fraction of the cost of contact-accurate thread modelling, and is what makes large-scale RL on this object class possible at all.",
      "<strong>Exploration shaped from both ends:</strong> a reward that assigns fingertips to surfaces, paired with termination rules that delete the known dead-end interaction modes. The transferable lesson is that for bimanual multi-part manipulation the bottleneck is the contact mode, so spend the prior there rather than on control architecture.",
      "<strong>A two-point object representation:</strong> body centre and lid centre, and nothing else. It is what a segmentation-and-tracking stack can deliver reliably in real time, and it deliberately carries no shape information — which is why a policy trained on plain cylinders transfers to a Nutella jar.",
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
      "Real-world Table 1: five 3D-printed bottles, 20 trials each capped at 30 s, three best policies out of ten seeds. The full method wins on both metrics for every object; it survives the full 30 s without dropping on four of five, and one deployed policy averages four complete turns in 30 s on the blue bottle.",
      "The baselines illustrate the metric trade-off directly. No-Asym holds the blue bottle for the full 30.00 s and turns it 18.67° — a bold TTF number that means the policy learned to grip and stall. Only reading it against AD exposes that as failure.",
      "The open-loop replay baseline has the <em>lowest</em> time-to-fail (7.67 s): replaying a trajectory that succeeded in simulation makes the bottle roll off the fingers. This is the cleanest evidence that the task demands closed-loop reaction to object state rather than a deterministic motion pattern.",
      "Simulation ablations over 5 seeds: reducing the finger contact reward makes policies fail to acquire the skill at all, and replacing it with an in-hand-reorientation-style gait constraint reward yields erratic finger motion and unnatural grasps.",
      "Multi-object training slightly outperforms single-object training even when each is evaluated on its own setup — the authors read the object spread as an implicit curriculum rather than a generalisation tax.",
      "Perturbation test: the object is poked and pushed with a picker tool at random times; the policy reorients it back into a stable pose and resumes twisting.",
      "Generalisation to 10 unseen household containers, scored on the novel task of fully removing the lid: 33.75% overall, 60% on HairMask and 50% on FiberGummies (few turns needed), down to 10% on PeanutButter and EmptyNutella (five turns needed). Under the paper's per-turn accounting, in-distribution objects requiring one turn are removed 100% of the time.",
      "The vertical-bottle variant is trained with no change to the reward, the object model or the training recipe — only the initial hand pose."
    ],
    limitations: [
      "<strong>It fixes contact-level control, not task-level structure.</strong> There is no planner, no subtask decomposition and no goal state: the reward is per-step lid rotation, so the policy learns to keep turning indefinitely. Removing a lid — knowing when the threads have run out and pulling the cap away — is never represented, which is exactly where the household-object numbers fall off (33.75% overall; 10% on objects needing five turns).",
      "The simulated cap twists infinitely by construction, so the transition that matters most for the downstream task — the lid coming free — is outside the training distribution entirely.",
      "The arms do not move. Two UR5e arms hold the hands in fixed poses and only the 16-DoF hands are controlled; a human places the object onto the upturned fingers to start each trial. This is a skill, not an autonomous pipeline.",
      "Both exploration mechanisms are hand-authored for this object class. Someone had to choose which surfaces to sample contact points on, and someone had to know that pinch-too-low was the failure worth terminating on. The recipe generalises as an idea; the instantiation does not.",
      "Reported numbers come from the three best of ten seeds, with large spreads even then (946.33 ± 383.81°, 499.50 ± 578.23° on the wood bottle). Seed sensitivity, not average behaviour, is the honest reading — and the Large-actor result, which matched in simulation and died in transfer, points the same way.",
      "The out-of-distribution square bottle is held for the full 30 s but barely turned (43° against 946° in-distribution), so shape generalisation is much weaker for twisting than for stabilising.",
      "The perturbation experiment swaps the vision stack for marker-based detection to isolate the effect of occlusion — so robustness to external forces and robustness of the SAM/XMem pipeline under heavy occlusion are demonstrated separately, never together.",
      "Perception needs a first-frame segmentation per trajectory to seed the tracker, and there is no tactile or force sensing anywhere in the loop despite the task being defined entirely by contact."
    ],
    takeaway: [
      "<strong>Classification:</strong> a sim-to-real RL system paper for a single continuous bimanual dexterous skill — no demonstrations, no learned dynamics model, no task planner.",
      "<strong>Read it for:</strong> the case that in contact-rich bimanual manipulation the binding constraint is exploration over contact modes, and that the fix is unglamorous on both ends — a reward encoding fingertip-to-surface assignment, and termination rules deleting the dead-end modes. Plus two useful negative results: proprioception alone is not enough here, and a bigger policy transfers worse.",
      "<strong>Steal from it:</strong> the AD/TTF metric pair for any task where holding on is easier than making progress, and the simulate-your-own-calibration-tag trick for solving camera extrinsics without a checkerboard.",
      "<strong>Read alongside:</strong> AsymDex, which imposes the stabilise-versus-manipulate asymmetry structurally rather than through reward; DexMachina and ManipTrans, which reach bimanual dexterity from human demonstrations instead of from scratch; and Sequential Dexterity for the task-level chaining this paper deliberately leaves out."
    ],
    links: [
      {label:"arXiv",url:"https://arxiv.org/abs/2403.02338"},
      {label:"PDF",url:"https://arxiv.org/pdf/2403.02338"},
      {label:"Project",url:"https://toruowo.github.io/bimanual-twist/"},
      {label:"Code",url:"https://github.com/ToruOwO/twisting-lids"},
      {label:"Proceedings",url:"https://proceedings.mlr.press/v270/lin25c.html"}
    ]
};
