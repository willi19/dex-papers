// Twisting Lids Off with Two Hands — review v1 (2026-09-02 07:14, draft)
// Snapshot of the paper_summaries.js entry at commit 0d1eef4
//   "Add source-checked summary for Twisting Lids Off with Two Hands"
// Superseded by v2. Read it at review/paper.html?id=twisting-lids-v1
window.DETAILED_PAPER_SUMMARIES = window.DETAILED_PAPER_SUMMARIES || {};
window.DETAILED_PAPER_SUMMARIES["twisting-lids-v1"] = {
    shortTitle: "Twisting Lids Off",
    title: "Twisting Lids Off with Two Hands",
    venue: "CoRL 2024",
    badges: ["sim-to-real RL", "bimanual", "Allegro × 2", "contact reward", "zero-shot transfer"],
    figure: "../overview_assets/twisting-lids/teaser.png",
    figureCaption: "Two 16-DoF Allegro hands on fixed UR5e arms, a single RealSense D435, and a policy trained only on simplistic simulated cylinders — deployed zero-shot on household jars that differ in shape, size, mass, material and colour.",
    tldr: "The task is to hold a bottle-like object in mid-air with two multi-fingered hands and keep unscrewing its lid: one hand stabilises the body while the other repeatedly grips the cap, rotates it, releases and re-grips. Nothing is demonstrated — PPO in Isaac Gym learns the whole behaviour, and three unglamorous design choices carry the transfer. A brake link fakes the static friction of a threaded joint that the simulator cannot model; a keypoint-based finger contact reward tells RL which fingertips belong on the body and which on the lid, turning a hopeless exploration problem into a solvable one; and the only exteroception is two 3D points (body centre, lid centre) from SAM + XMem masks plus noisy depth. On the best real bottle the policy twists 946° in 30 s where every baseline manages single digits.",
    problem: [
      "The task is continuous bimanual in-hand manipulation of a <em>multi-part articulated</em> object — two near-cylindrical rigid bodies joined by a continuous revolute joint — held entirely in the air, with 32 finger DoF to coordinate and no table or fixture to lean on.",
      "It is hard because the contact set has to be broken and rebuilt on every cycle: the twisting hand must let go of the cap to re-grip it, and during exactly that interval the other hand is solely responsible for not dropping the object. Most of the interaction modes RL stumbles into are dead ends (the bottle wedges between fingers, or gets pinched low where it can never be repositioned into the palm), so raw exploration yields almost no learning signal.",
      "Simulation is the second obstacle. Static friction inside a threaded revolute joint is a long-standing unsolved problem in physics engines, and the authors report that naively tuning friction between two revolute-jointed bodies is simply not realistic enough in their simulator.",
      "The field's default answer for tasks this contact-rich is demonstrations — assume a teleoperation rig can cover the task distribution and imitate it. That assumption holds for parallel jaws and breaks for two multi-fingered hands: the paper's background section notes there is no high-quality bimanual multi-finger demonstration data, and existing gloves, exoskeletons and vision-based retargeting rigs trade away either latency, accuracy, dexterity or cost.",
      "The alternative default — reuse the reward recipes that solved single-hand in-hand reorientation — also fails, because those rewards are written for one hand rotating a single-part rigid body. They say nothing about which fingers should sit on the body versus the cap, and that contact structure is precisely what this task is about."
    ],
    output: [
      "One RL policy, trained purely in simulation on synthetic cylinders and transferred zero-shot: it observes hand joint positions, previous target positions, and the estimated 3D centres of bottle base and lid, and emits relative PD joint targets for both hands at 10 Hz.",
      "Emergent behaviour, not scripted: in-grasp reorientation into a stable holding pose, a stabilising grasp by one hand, and a repeated grip–rotate–release gait by the other.",
      "Generalisation to 10 novel household containers (peanut butter, Nutella, gummy jars, hair mask, earplug tubes) and, as a by-product of continuous twisting, actual lid <em>removal</em> on some of them — a task the policy was never trained for."
    ],
    pipeline: [
      {name:"Brake-link object model", text:"The simulated bottle URDF has three parts: a base link, a lid link on a continuous revolute joint, and a brake link that a prismatic joint presses constantly against the lid. The resulting normal force generates the frictional resistance a screwed-on cap would have, without simulating threads at all. It is cheap enough for large-scale parallel RL, and the authors state it was the only approach they found that reproduces the static friction convincingly."},
      {name:"Initialisation and early termination", text:"Both hands start in a canonical palms-up pose (joint angles perturbed by Gaussian noise) and the object is dropped onto the fingers with randomised translation and rotation. No stable grasp is assumed, so the policy must first reorient the object in-grasp. Two reset rules prune the exploration tree: terminate if the hands fail to bring the bottle into a twist-ready pose within a short time limit, and terminate if the bottle's z-position drops below a threshold (the pinched-too-low trap)."},
      {name:"Action interface", text:"Policy outputs are relative joint targets, clipped to [-1, 1], scaled by 0.1, smoothed by an exponential moving average with coefficient 0.75, and integrated into the PD controller's target. The smoothing is what keeps the real fingers from chattering against a held object."},
      {name:"Reward", text:"Twisting reward (lid rotation per step) supplies the objective; the keypoint finger contact reward supplies the structure; a pose reward keeps the bottle axis aligned with a target direction; work and action penalties suppress jerky motion. Weights are 2.5 / 500.0 / 20 / -0.001 / -1.0."},
      {name:"Training", text:"PPO with an asymmetric critic. The value network sees privileged state the policy never does — joint velocities, all fingertip and contact keypoint positions, object orientation and velocities, the random forces applied, brake torque, and the mass / friction / shape randomisation scales. Domain randomisation covers object mass (0.03–0.1 kg), friction, ±5% shape scale, PD gains, random pushes, plus observation, action and frame-lag noise."},
      {name:"Real-time perception", text:"Segment Anything produces two masks (body, lid) on the first frame of each trajectory; XMem tracks them thereafter. Mask centres in the image plane are lifted to 3D with noisy depth from a single RealSense D435, giving exactly the two points the policy was trained on, at 10 Hz to match the control loop."}
    ],
    methodDetails: [
      {name:"What the contact reward actually encodes", text:"Two sets of reference points are attached to the object — one on the base, one on the lid — and each of the four fingertips of the corresponding hand is rewarded for being near its nearest reference point. It never prescribes a trajectory or a finger gait; it prescribes which surface each fingertip belongs to. That single piece of structure is what converts an intractable search into one PPO solves within budget, and its intensity correlates positively with both sample efficiency and final performance."},
      {name:"Two points is enough — and vision is non-negotiable", text:"The authors expected a fine-grained contact task to need dense object geometry and were surprised that a two-point representation sufficed. The converse also holds: the proprioception-only policy, which works for single-hand rotation via implicit tactile sensing in prior work, collapses here — 1.33° of angular displacement on the blue bottle against 946.33°. Knowing where the lid is relative to the body cannot be inferred from joint angles alone."},
      {name:"A bigger network transfers worse", text:"The enlarged actor matches the full policy in simulation and fails in the real world (2.00° on the blue bottle). The authors read this as overfitting to simulation, and conclude that policy capacity is itself a sim-to-real hyperparameter for contact-rich tasks. The final actor is a small three-layer MLP (256-256-128); the critic, which never has to transfer, is 512-512-512."},
      {name:"The setup is deliberately the hard one", text:"An appendix retrains the same system on a vertical setup — bottles held upright — changing only the initialisation and switching perception off. The authors note the horizontal setup in the main text is harder because holding the object mid-air against gravity is exactly where the common failure (loss of stabilisation, then drop) lives; the vertical variant designs that failure away."},
      {name:"An accidental robustness", text:"The project page reports that because XMem favours spatial continuity, when a lid actually comes free the tracker keeps following the exposed thread region rather than chasing the detached cap — which happens to keep the observation sane through the one event the simulation never modelled."}
    ],
    equations: [
      {
        name:"Twisting reward",
        formula:"r_twisting = Δθ = q_bottle^{t+1} − q_bottle^{t}",
        meaning:"The per-step rotation of the lid about the object axis. Dense, unbounded and direction-signed — the policy is asked to keep turning, never to reach a goal angle, which is why the metric is total angular displacement rather than a success rate."
      },
      {
        name:"Keypoint finger contact reward",
        formula:"r_contact = Σ_i [ 1 / (1 + α·d(X^L, F_i^L)) + 1 / (1 + α·d(X^R, F_i^R)) ]\n\n    d(A, x) = min_i ‖A_i − x‖₂",
        meaning:"X^L and X^R are reference point sets attached to base and lid; F^L, F^R ∈ ℝ^{4×3} are the two hands' fingertips. Each fingertip is pulled towards its nearest reference point, so the reward specifies a contact assignment, not a motion. Weakening this term is the single ablation that kills the task."
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
      "<strong>Reward as contact assignment:</strong> rather than shaping the motion, the finger contact reward states which fingertips belong on the body and which on the lid. This is the paper's transferable lesson — for bimanual multi-part manipulation the exploration bottleneck is the contact mode, so put the prior there.",
      "<strong>A two-point object representation:</strong> body centre and lid centre, and nothing else. It is what a segmentation-and-tracking stack can deliver reliably in real time, and it deliberately carries no shape information — which is why a policy trained on plain cylinders transfers to a Nutella jar.",
      "<strong>First sim-to-real RL system on bimanual multi-fingered hands</strong> for a task requiring sustained coordinated contact, as opposed to prior bimanual dexterous work that was simulation-only or dynamic-but-brief (throw-and-catch)."
    ],
    comparison: {
      headers:["Real-world, 30 s trials", "BlueBottle AD°", "WoodBottle AD°", "SquareBottle AD° (OOD)", "BlueBottle TTF (s)"],
      rows:[
        ["<strong>Ours</strong>", "<strong>946.33</strong>", "<strong>499.50</strong>", "<strong>43.00</strong>", "<strong>23.67</strong>"],
        ["Open-loop replay of a sim trajectory", "128.33", "2.67", "29.67", "7.67"],
        ["No vision (proprioception only)", "1.33", "1.07", "5.00", "21.67"],
        ["No asymmetric critic", "18.67", "0.67", "0.00", "30.00"],
        ["Larger actor network", "2.00", "0.00", "1.67", "22.33"]
      ]
    },
    evidence: [
      "Real-world Table 1: five 3D-printed bottles, 20 trials each capped at 30 s, three best policies out of ten seeds. The full method wins AD and TTF on every object; it holds the full 30 s without dropping on four of five, and one deployed policy averages four complete turns in 30 s on the blue bottle.",
      "The open-loop replay baseline has the lowest time-to-fail (7.67 s on the blue bottle): replaying a trajectory that succeeded in simulation makes the bottle roll off the fingers. This is the cleanest evidence that the task demands closed-loop reaction to object state rather than a deterministic motion pattern.",
      "Simulation ablations over 5 seeds: reducing the finger contact reward makes policies fail to acquire the skill at all, and replacing it with an in-hand-reorientation-style gait constraint reward yields erratic finger motion and unnatural grasps. A weaker contact reward also means worse sample efficiency.",
      "Multi-object training slightly outperforms single-object training even when each is evaluated on its own setup — the authors read the object spread as an implicit curriculum rather than a generalisation tax.",
      "Perturbation test: the object is poked and pushed with a picker tool at random times; the policy reorients it back into a stable pose and resumes twisting.",
      "Generalisation to 10 unseen household containers, scored on the novel task of fully removing the lid: 33.75% overall, 60% on HairMask and 50% on FiberGummies (few turns needed), down to 10% on PeanutButter and EmptyNutella (five turns needed). Under the paper's per-turn accounting, in-distribution objects requiring one turn are removed 100% of the time.",
      "The vertical-bottle variant is trained with no change to the reward, the object model or the training recipe — only the initial hand pose."
    ],
    limitations: [
      "<strong>It fixes contact-level control, not task-level structure.</strong> There is no planner, no subtask decomposition and no notion of a goal state: the reward is per-step lid rotation, so the policy learns to keep turning indefinitely. Removing a lid — knowing when the threads have run out and pulling the cap away — is never represented, which is exactly where the household-object numbers fall off (33.75% overall; 10% on the objects needing five turns).",
      "The simulated cap twists infinitely by construction, so the one transition that matters most for the downstream task — the lid coming free — is outside the training distribution entirely.",
      "The arms do not move. Two UR5e arms hold the hands in fixed poses and only the 16-DoF hands are controlled; a human also places the object onto the upturned fingers to start each trial. The system is a skill, not an autonomous pipeline.",
      "The reference contact points that make the contact reward work must be authored by hand for this object class. The recipe generalises as an idea, but every new multi-part object type needs someone to decide which surfaces the fingertips belong on.",
      "Reported numbers come from the three best of ten seeds, and variance is large even then (946.33 ± 383.81°, 499.50 ± 578.23°). Seed sensitivity, not average behaviour, is the honest reading.",
      "The out-of-distribution square bottle is held for the full 30 s but barely turned (43° against 946° in-distribution), so shape generalisation is much weaker for twisting than for stabilising.",
      "The perturbation experiment swaps the vision stack for marker-based detection to isolate the effect of occlusion — so robustness to external forces and robustness of the SAM/XMem pipeline under heavy occlusion are demonstrated separately, never together.",
      "Perception needs a calibrated camera and a first-frame segmentation per trajectory, and there is no tactile or force sensing anywhere in the loop.",
      "Policy capacity is fragile: a larger actor matched the full method in simulation and did not transfer, and the authors identify observation and action noise as the domain-randomisation parameters that dominate policy variance."
    ],
    takeaway: [
      "<strong>Classification:</strong> a sim-to-real RL system paper for a single continuous bimanual dexterous skill — no demonstrations, no learned dynamics model, no task planner.",
      "<strong>Read it for:</strong> the argument that in contact-rich bimanual manipulation the binding constraint is exploration over contact modes, and that the cheapest fix is a reward encoding the fingertip-to-surface assignment; plus two useful negative results — proprioception alone is not enough here, and a bigger policy transfers worse.",
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
