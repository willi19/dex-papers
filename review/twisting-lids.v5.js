// Twisting Lids Off with Two Hands — review v5 (2026-09-03, structural rewrite; superseded by v6)
// Same reading as v4, reshaped under the paper-reading skill's writing philosophy: the
// exploration story is told once instead of across five fields, the design-decision table
// is folded into causal evidence passages, and designDecisions / whatMatters / novelty are
// dropped as restatement. No claim or number changed (multiset compared against v4).
// The live copy is paper_summaries.js. Edit that, not this snapshot.
window.DETAILED_PAPER_SUMMARIES = window.DETAILED_PAPER_SUMMARIES || {};
window.DETAILED_PAPER_SUMMARIES["twisting-lids-v5"] = {
    shortTitle: "Twisting Lids Off",
    title: "Twisting Lids Off with Two Hands",
    venue: "CoRL 2024",
    badges: ["sim-to-real RL", "bimanual", "Allegro × 2", "exploration shaping", "zero-shot transfer"],
    figure: "../overview_assets/twisting-lids/teaser.png",
    figureCaption: "Two 16-DoF Allegro hands on fixed UR5e arms, one RealSense D435, and a policy trained on plain simulated cylinders. It runs zero-shot on household jars that differ from the training objects in every property the training set held fixed: shape, size, mass, material, colour.",
    tldr: "Two multi-fingered hands hold a bottle in the air and keep unscrewing its lid, with no demonstrations anywhere in the pipeline. The authors argue that the barrier is exploration rather than control: across 32 finger DoF almost every interaction mode RL discovers is a dead end, and nothing tells it which ones are not. Their answer is to constrain which fingertips belong on which part of the object and to delete the rollouts that have entered a known trap, leaving a plain RL objective to reward turning the lid. A policy trained on simulated cylinders transfers zero-shot and turns the best real bottle 946° in 30 s, where every baseline stays in single or double digits.",
    coreInsight: [
      "Two hands can hold an articulated object in a vast number of ways and almost none of those ways permit twisting, so RL spends its budget in configurations from which the task is unreachable. The authors put their prior on contact structure and apply it from both directions: a keypoint contact reward pays each fingertip for sitting near the surface it has been assigned, base for one hand and lid for the other, while two early-termination rules delete the rollouts that have already fallen into a known trap. Figure 4 backs the reading over 5 seeds, since disabling the contact reward leaves the policy on the floor for the whole run and a 50% version lands between that and the full method. <em>Interpretation:</em> the reward and the terminations are one intervention seen from two sides, one naming where to go and one deleting where not to go, and the paper presents them as separate contributions.",
      "Everything else can be as coarse as the task tolerates. The object is two points, the threads are a normal force from a third link, and the actor is a three-layer MLP."
    ],
    problem: [
      "The object is <em>multi-part and articulated</em>: two near-cylindrical rigid bodies on a continuous revolute joint. Both hands hold it in the air, with 32 finger DoF to coordinate and no table or fixture to lean on. The lid has to turn as far as possible while the object stays in the hands.",
      "Three phases have to happen and nobody tells the policy about any of them: catch the dropped object and reorient it in-grasp into a workable pose, move the second hand into a finger placement that can start the rotation, then coordinate both hands so the object survives the moment the twisting hand lets go to re-grip.",
      "That last moment decides the task. Every cycle breaks the contact set and rebuilds it, and during each release one hand holds the whole object. Most interaction modes RL stumbles into lead nowhere: the bottle wedges between fingers, or gets pinched low where no finger motion recovers it into the palm.",
      "For tasks this contact-rich the field reaches for demonstrations. With parallel jaws that works. With two multi-fingered hands it stalls, because high-quality bimanual multi-finger demonstration data does not exist, and the available gloves, the exoskeletons and the vision-based retargeting rigs each give up latency, accuracy, dexterity or cost. Reward recipes carried over from single-hand in-hand reorientation describe one hand rotating a single-part rigid body, and they say nothing about which surface each finger belongs on.",
      "The simulation route has its own obstacle. Modelling friction and contact in a threaded revolute joint has been a long-standing difficulty in robotic simulation, and the authors report that tuning static friction between two revolute-jointed bodies does not reach the realism they need."
    ],
    output: [
      "One RL policy. It trains in simulation on synthetic cylinders, transfers zero-shot, and runs at 10 Hz on two Allegro hands that UR5e arms hold in fixed poses.",
      "Behaviour the authors never scripted: in-grasp reorientation into a stable holding pose, one hand stabilising while the other runs a grip-rotate-release gait, and recovery from an unstable state by adjusting the finger gaits of both hands, which the project page shows on objects far outside the training distribution.",
      "A skill that reaches 10 novel household containers. On some of them the continuous twisting takes the lid <em>off</em>, a task outside the training objective."
    ],
    pipeline: [
      {name:"Object model in simulation", text:"The bottle URDF has three links: a base, a lid on a continuous revolute joint, and a brake link that a prismatic joint presses against the lid. That normal force stands in for a screwed cap, and the authors report it as the only approach they found that simulates the static friction well. Bodies range from 82 to 86 in diameter and 55 to 67 in height with caps of 62 to 70 by 20 to 33, in the units the paper prints. Training runs in Isaac Gym."},
      {name:"Episode start", text:"Both hands hold a canonical palms-up pose with Gaussian noise on the joint angles. The simulator drops a bottle onto the fingers with randomised translation and z-rotation. No stable grasp exists at t=0, so the policy has to build one."},
      {name:"Termination", text:"An episode resets when the hands fail to bring the bottle into a twist-ready pose inside a short time limit, and when the bottle's z-position falls below a threshold, which is the signature of the pinch-too-low trap."},
      {name:"Observation and action", text:"The policy reads hand joint positions, the previous commanded targets, and the estimated 3D centres of base and lid. It emits relative joint targets, clipped to [-1, 1], scaled by 0.1, smoothed by an exponential moving average with coefficient 0.75, then added to the PD controller's target."},
      {name:"Reward", text:"Four terms with weights 2.5 / 500.0 / 20 / -0.001 and -1.0: lid rotation per step, the keypoint finger contact term, a pose term holding the bottle axis against a fixed direction, and work and action penalties."},
      {name:"Training", text:"PPO with an asymmetric critic (clip 0.2, horizon 16, γ 0.99, GAE 0.95, adaptive learning rate at KL 0.016). The value network reads privileged state the policy never sees: joint velocities, the fingertip and contact keypoint positions, object orientation and velocities, applied random forces, brake torque, and the randomisation scales for mass, for friction and for shape. Domain randomisation spans object mass 0.03 to 0.1 kg, friction 0.5 to 1.5, ±5% shape, PD gains, random pushes, and noise on observations, on actions and on frame lag."},
      {name:"Perception at deployment", text:"Segment Anything produces a body mask and a lid mask on the first frame of a trajectory and XMem tracks them afterwards. Noisy depth from one RealSense D435 lifts the two mask centres into 3D at 10 Hz, which matches the control rate."},
      {name:"Systems plumbing", text:"Camera extrinsics come from a single marker tag that the authors also model in the simulation scene, which yields corner coordinates in the camera and world frames as matched pairs. ZeroMQ carries messages between the hands, the camera and the workstation. Each real trial starts from a tabulated canonical finger pose with a person placing the object onto the upturned fingers."}
    ],
    methodDetails: [
      {name:"What the metrics hide", text:"The paper reports no success rate. Angular Displacement counts degrees turned, Time-to-Fail measures the interval from the object being held until it slips or lodges (capped at 30 s), and Velocity is their ratio. The first two trade off: a policy that grips and never turns scores a full TTF with AD near zero, which is what No-Asym and Large do in Table 1. Holding is the easy half of the task, and the metric pair is what stops that from reading as success. Note that Figure 4 averages AD by total execution steps, so those axis values are not degrees."},
      {name:"How dynamic is this?", text:"The abstract calls the behaviour dynamic and dexterous. The motion is quasi-static regrasping. The paper's own point of comparison for dynamic bimanual work is throwing and catching, which it distinguishes as less contact-rich rather than as slower. <em>Interpretation:</em> the demand here is continuous coordination through repeated contact transitions, and the difficulty is that the object is unsupported at every one of them."},
      {name:"The horizontal setup is the hard one by choice", text:"An appendix retrains the system on bottles held upright, changing the initialisation and switching perception off, with no other change. The authors state that the vertical setup prevents the most common failure, loss of stabilisation followed by a drop, by design."},
      {name:"An accidental robustness", text:"The project page reports that the mask tracker prioritises spatial continuity over semantics. When a lid comes free the tracker reads the position of the exposed thread instead of the detached cap, which keeps the observation coherent through the one event the simulation never modelled."}
    ],
    figures: [
      {
        src:"../overview_assets/twisting-lids/fig02_object_model.png",
        title:"Figure 2: the object model and the four object sets",
        shows:"Panel A is the simulated bottle: a base link, a lid link on a revolute joint, and the brake link that a prismatic joint drives along the same axis. B is the simulated training set, C the 3D-printed evaluation bottles, D the household containers.",
        read:"Follow the two joint labels in A. The revolute joint A-B is the degree of freedom the policy turns. The prismatic joint A-C is the one the authors added.",
        matters:"It makes the simulation trick inspectable. No thread geometry appears anywhere, only a third body pressed against the lid.",
        supports:"The size of the transfer gap: B is four plain cylinders, D is a shelf of jars that share no property with them."
      },
      {
        src:"../overview_assets/twisting-lids/fig03_perception_reward.png",
        title:"Figure 3: what the policy sees and what the reward asks for",
        shows:"Left, the deployment perception stack from RGB frame to two segmentation masks to a depth reading. Right, the three task rewards drawn onto the hands, with the reference contact point sets marked in green on the body and red on the lid.",
        read:"On the right, yellow arrows mark the finger contact term pulling fingertips towards their assigned point set, the white arrow marks lid rotation, and the blue arrow marks the axis the pose term holds.",
        matters:"The green and red point clouds are the fingertip-to-surface assignment made visible. The reward asks for a contact configuration rather than a motion, and the picture shows how coarse that specification is.",
        supports:"Both halves of the method: the reward design, and the claim that a two-point object representation carries deployment."
      },
      {
        src:"../overview_assets/twisting-lids/fig04_ablations.png",
        title:"Figure 4: the contact reward intensity sweep and the vision ablation",
        shows:"Training curves over 5 seeds. Top row single-object training, bottom row multi-object. The left half varies the contact reward intensity across disabled, reduced to 50%, and full. The right half compares the full policy against a proprioception-only policy.",
        read:"x-axis is environment steps, up to 2e8 and 3e8. AD is averaged per execution step rather than reported in degrees, so the values are small and the ordering is what carries meaning. Shading is one standard deviation.",
        matters:"The same ordering shows up twice, once in the single-object row and again in the multi-object one, with a standard deviation band drawn around each curve over 5 seeds. That repetition is what turns the ordering stated above into the paper's strongest causal evidence.",
        supports:"The exploration argument, and the reading that the prior acts by degree rather than as a switch."
      }
    ],
    equations: [
      {
        name:"Keypoint finger contact reward",
        formula:"r_contact = Σ_i [ 1 / (1 + α·d(X^L, F_i^L)) + 1 / (1 + α·d(X^R, F_i^R)) ]\n\n    d(A, x) = min_i ‖A_i − x‖₂",
        intuition:"Pay each fingertip for sitting near the surface it has been assigned, and pay it most at the point of contact. Read the form rather than the symbols: a be-in-contact-somewhere term would carve one smooth basin over the whole surface, while a min over sampled points gives each fingertip its own nearest-point basin and turns the fingertip-to-surface relation into a discrete assignment. The gradient then pulls towards one configuration instead of the average of all valid ones. <em>Interpretation:</em> the paper does not analyse the form and reports only the intensity correlation, but this is the most plausible account of why so blunt a term unlocks the task.",
        terms:[
          "<code>X^L, X^R</code>: reference point sets sampled on the base and on the lid.",
          "<code>F^L, F^R ∈ ℝ^{4×3}</code>: the four fingertips of each hand.",
          "<code>d</code>: distance to the <em>nearest</em> reference point, rather than to the surface.",
          "<code>α</code>: scaling inside the reciprocal, which sets the rate at which the reward decays with distance."
        ],
        matters:"Without it the policy never acquires the skill. The reciprocal form keeps the term bounded and dense everywhere, so it supplies gradient from the first random rollout, which is when the objective term supplies nothing.",
        consequence:"Its weight is 500.0 against 2.5 on the objective it serves, two orders of magnitude. Lowering the intensity to 50% costs sample efficiency and final performance rather than breaking training outright, and disabling it removes the skill."
      },
      {
        name:"Twisting reward",
        formula:"r_twisting = Δθ = q_bottle^{t+1} − q_bottle^{t}",
        intuition:"Pay for lid rotation accumulated this step. There is no goal angle and no terminal bonus, so the task has no completion condition.",
        terms:["<code>q_bottle</code>: the revolute joint angle between base and lid, read from the simulator."],
        matters:"It defines what the system is for, and it defines the evaluation. Angular Displacement is this quantity integrated over a trial, which is why the paper reports degrees instead of a success rate.",
        consequence:"A reward with no terminus produces a policy with no terminus. The behaviour never stops turning, and removal, the thing the household experiments measure, never appears in the objective."
      }
    ],
    comparison: {
      headers:["Real, BlueBottle unless noted", "AD° ↑", "TTF s ↑", "Vel °/s ↑", "SquareBottle AD° (OOD) ↑"],
      rows:[
        ["<strong>Ours</strong>", "<strong>946.33</strong> ±383.81", "23.67", "<strong>41.26</strong>", "<strong>43.00</strong>"],
        ["Open-loop replay of a sim trajectory", "128.33 ±217.96", "7.67", "11.68", "29.67"],
        ["No vision (proprioception only)", "1.33", "21.67", "0.04", "5.00"],
        ["No asymmetric critic", "18.67", "<strong>30.00</strong>", "0.62", "0.00"],
        ["Larger actor network", "2.00", "22.33", "0.14", "1.67"]
      ]
    },
    evidence: [
      "<strong>The task needs closed-loop reaction.</strong> Replaying a trajectory that succeeded in simulation gives the <em>lowest</em> time-to-fail of any method, 7.67 s, because the bottle rolls off the fingers before anything else can go wrong. A deterministic motion pattern does not survive contact with a real object.",
      "<strong>Object state has to be observed, and two points of it are enough here.</strong> Prior single-hand rotation work gets by on implicit tactile sensing through proprioception, so the authors test that: proprioception alone reaches 1.33° AD where the full policy reaches 946.33°, which says that this task needs the lid located relative to the body. Note what the comparison does not establish. No baseline uses a richer representation, so two points are enough for this system rather than shown to be the minimum.",
      "<strong>Both transfer failures are about the policy's relationship to information.</strong> Because the deployed policy cannot read simulator state, the authors feed that state to the value network alone; training without the asymmetry produces a policy that holds the bottle for a full 30.00 s and turns it 18.67°. Because capacity buys simulation performance that need not survive transfer, they keep the actor at 256-256-128 against a 512-512-512 critic; the enlarged actor reaches 2.00° AD on the robot while matching the full policy in simulation, which the authors read as overfitting to the simulator. Neither failure shows up in simulation, and the enlarged-actor half of that comparison appears as a sentence with no table behind it.",
      "<strong>Three reward variants, side by side.</strong> Figure 5 compares behaviour instead of numbers: the full reward gives a stable grasp with a smooth twisting motion, a gait constraint reward carried over from in-hand reorientation gives erratic finger motion and unnatural grasps, and the reduced contact reward gives somewhat natural behaviour on a loose grasp. The authors keep this one for qualitative analysis, so the gait-constraint baseline never reaches a table.",
      "<strong>Real-world protocol.</strong> Five 3D-printed bottles, 20 trials each, 30 s cap, three best policies from ten seeds. The full method leads on both metrics for every object, holds four of five for the full 30 s, and one deployed policy averages four complete turns in 30 s on the blue bottle.",
      "<strong>Generalisation, scored on a task nobody trained.</strong> Ten household containers, judged by whether the lid comes off: 33.75% overall. The spread tracks turns required rather than familiarity, from 60% on HairMask (1 turn) down to 10% on PeanutButter and EmptyNutella (5 turns). FiberGummies reaches 50% while also needing 5 turns. Under the paper's accounting, where in-distribution objects are defined to need one turn, those are removed 100% of the time.",
      "<strong>Perturbation.</strong> A picker tool pokes and pushes the object at random times, and the policy recovers a stable pose and resumes. The authors swap the vision stack for marker-based detection here to separate force robustness from occlusion, so the two are never demonstrated together.",
      "<strong>Multi-object training.</strong> A small edge over single-object training even when each is evaluated on its own setup. The authors call this a surprise and read the object spread as an implicit curriculum.",
      "<strong>One claim this summary has not checked.</strong> The authors state that theirs is the first sim-to-real RL system enabling such capabilities on bimanual multi-fingered hands, qualified by to the best of our knowledge. Verifying it needs a literature sweep that was not done here."
    ],
    limitations: [
      "<strong>Contact-level control, no task-level structure.</strong> The objective is per-step rotation with no goal and no planner, and the simulated cap turns without end. The transition the household experiments score, the lid coming free, is absent from training and from the reward, which is where the numbers fall off: 10% on the objects needing five turns.",
      "Both exploration mechanisms are authored by hand for this object class. Someone chose which surfaces carry contact points and someone knew that pinch-too-low was the trap worth terminating on. The idea transfers; this instantiation does not.",
      "Reported numbers come from the three best of ten seeds, and the spreads stay wide there (946.33 ± 383.81°, and 499.50 ± 578.23° on the wood bottle, a standard deviation larger than the mean). Read this as seed sensitivity rather than expected behaviour.",
      "The arms never move. Two UR5e arms hold the hands fixed, only the 16-DoF hands are controlled, and a person places the object onto the upturned fingers to start every trial.",
      "Shape generalisation is far weaker for turning than for holding: the out-of-distribution square bottle survives the full 30 s but reaches 43° against 946°."
    ],
    takeaway: [
      "When a task's difficulty lives in which contacts to make rather than in what torques to send, spend the prior there. The rest of the stack can be coarse.",
      "Design the metric pair before running the experiment. Where holding on is easier than making progress, a single-axis metric will rank a stalling policy first.",
      "Policy capacity is a sim-to-real hyperparameter. A network that matches in simulation and dies on the robot is reporting overfitting to the simulator rather than a control failure."
    ],
    researchNotes: [
      "<strong>Worth stealing:</strong> modelling your own calibration tag inside the simulation scene, which turns camera extrinsics into one matched-pair solve with no checkerboard sweep.",
      "<strong>Open question:</strong> the reference point sets are placed by a person. Could they come from a segmentation model at training time, which would turn the contact prior from an object-specific annotation into a procedure?",
      "<strong>Open question:</strong> the brake link is never validated against a thread-accurate simulator or against measured torques, so its fidelity is asserted rather than measured. A torque comparison would be cheap and would settle it.",
      "<strong>Read alongside:</strong> AsymDex, which builds the stabilise-versus-manipulate asymmetry into its structure rather than its reward; DexMachina and ManipTrans, which reach bimanual dexterity from human demonstrations; and Sequential Dexterity for the task-level chaining this paper leaves out."
    ],
    links: [
      {label:"arXiv",url:"https://arxiv.org/abs/2403.02338"},
      {label:"PDF",url:"https://arxiv.org/pdf/2403.02338"},
      {label:"Project",url:"https://toruowo.github.io/bimanual-twist/"},
      {label:"Code",url:"https://github.com/ToruOwO/twisting-lids"},
      {label:"Proceedings",url:"https://proceedings.mlr.press/v270/lin25c.html"}
    ]
};
