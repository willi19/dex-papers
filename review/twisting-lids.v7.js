// Twisting Lids Off with Two Hands — review v7 (2026-09-04, sparsity trim; current)
// v6 re-read against the skill's "skip it when" column. problem 3 items to 2 (the two
// closed routes merge, and the reward-recipe point becomes a clause), researchNotes 3
// to 2 (the open question restated a limitation, so its payload moved into that
// limitation). 98% of v6.
//
// CORRECTION, same day: problem[0] described the task as "every twisting cycle breaks
// the contact set and rebuilds it, and during each release one hand holds the whole
// object". Neither clause is in the paper; both were plausible reconstruction carried
// in since v4. Replaced with the three movements Section 3 actually lists, and the
// same gloss was removed from coreInsight. Every other clause was verified against the
// PDF by phrase search.
// SECOND CORRECTION, same day: problem[1] enumerated glove, exoskeleton and vision rig
// categories the paper never separates, which was related-work recital rather than the
// problem. Its last sentence about reward recipes was a stump left by the v7 trim, which
// cut the half that carried the point, so it moved into coreInsight where it motivates
// the contact reward.
// The live copy is paper_summaries.js. Edit that, not this snapshot.
window.DETAILED_PAPER_SUMMARIES = window.DETAILED_PAPER_SUMMARIES || {};
window.DETAILED_PAPER_SUMMARIES["twisting-lids-v7"] = {
    shortTitle: "Twisting Lids Off",
    title: "Twisting Lids Off with Two Hands",
    venue: "CoRL 2024",
    badges: ["sim-to-real RL", "bimanual", "Allegro × 2", "exploration shaping", "zero-shot transfer"],
    figure: "../overview_assets/twisting-lids/teaser.png",
    figureCaption: "Two 16-DoF Allegro hands on fixed UR5e arms, one RealSense D435, and a policy trained on plain simulated cylinders. It runs zero-shot on household jars that share none of the training objects' properties.",
    tldr: "Two multi-fingered hands hold a bottle in the air and keep unscrewing its lid, trained by RL in simulation with no demonstrations and transferred zero-shot. The authors argue the barrier is exploration rather than control, so they tell the policy which fingertips belong on which part of the object and delete the rollouts that have entered a known trap. A policy trained on plain simulated cylinders turns the best real bottle 946° in 30 s, where every baseline stays in single or double digits.",
    coreInsight: "Two hands can hold an articulated object in a vast number of ways and almost none of those ways permit twisting, so RL across 32 finger DoF spends its budget in configurations from which the task is unreachable. The reward recipes on the shelf come from single-hand reorientation of a single-part body, so none of them says which surface a finger belongs on. The authors put their prior on that gap, and apply it from both directions: a keypoint contact reward pays each fingertip for sitting near the surface it has been assigned, base for one hand and lid for the other, while two early-termination rules delete rollouts that have already fallen into a known trap. Figure 4 backs the reading over 5 seeds, since disabling the reward leaves the policy on the floor for the whole run and halving it lands between that and the full method, so the prior acts by degree. The novelty sits in the framing rather than the algorithm: PPO is untouched, and what changes is treating bimanual multi-part manipulation as a contact-mode search, which leaves everything else free to be coarse. The object is two points, the threads are a normal force from a third link, the actor is a three-layer MLP, and the behaviour that emerges was never scripted: in-grasp reorientation into a stable hold, then one hand holding the object stable while the other twists the lid. <em>Interpretation:</em> the reward and the terminations are one intervention seen from two sides, one naming where to go and one deleting where not to go, and the paper presents them as separate contributions.",
    problem: [
      "The object is two rigid, near-cylindrical parts on a continuous revolute joint, and it has to stay in the hands throughout. The paper lists three movements the policy has to find on its own: grasp the dropped bottle and rotate it into a suitable pose, place the fingers of the hand nearer the lid around it to start the twisting motion, then coordinate both hands so the object does not drop while one of them twists. Most of the interaction modes RL stumbles into lead nowhere: the object gets stuck between fingers, or the fingertips pinch it low where they cannot reposition it into the palm.",
      "Both obvious routes are closed. Demonstrations are how the field does contact-rich manipulation, but the data does not exist for two multi-fingered hands, and every rig built to collect it gives up latency, accuracy, dexterity or cost. Simulation is the other route, and friction in a threaded revolute joint has no faithful cheap model: the authors report that tuning static friction between two revolute-jointed bodies does not reach the realism they need."
    ],
    pipeline: [
      {name:"Object model", text:"The bottle URDF is a base, a lid on a continuous revolute joint, and a brake link that a prismatic joint presses against the lid. That normal force stands in for a screwed cap, and the authors report it as the only approach they found that simulates the static friction well. No thread geometry exists anywhere in the model."},
      {name:"Episode and termination", text:"Both hands start palms-up and the simulator drops a bottle onto the fingers with randomised pose, so no stable grasp exists at t=0. An episode resets when the hands fail to reach a twist-ready pose in time, and when the bottle's z-position drops, which is the signature of the pinch-too-low trap."},
      {name:"Policy and reward", text:"The policy reads joint positions, its own previous targets, and the estimated 3D centres of base and lid, then emits relative joint targets for a PD controller at 10 Hz. Four reward terms carry weights 2.5 / 500.0 / 20 / -0.001 and -1.0: lid rotation, the keypoint contact term, a pose term on the bottle axis, and work and action penalties. PPO trains it against a critic that reads privileged simulator state the policy never sees, under wide domain randomisation."},
      {name:"Perception at deployment", text:"Segment Anything masks the body and the lid on the first frame of a trajectory, XMem tracks them afterwards, and noisy depth from one RealSense D435 lifts the two mask centres into 3D."}
    ],
    methodDetails: [
      {name:"What the metrics hide", text:"The paper reports no success rate. Angular Displacement counts degrees turned, and Time-to-Fail measures the interval from the object being held until it slips or lodges, capped at 30 s. The two trade off: a policy that grips and never turns scores a full TTF with AD near zero, which is what No-Asym and Large do in the table below. Holding is the easy half of the task, and the metric pair is what stops that from reading as success."}
    ],
    figures: [
      {
        src:"../overview_assets/twisting-lids/fig03_perception_reward.png",
        title:"Figure 3: what the policy sees and what the reward asks for",
        shows:"Left, the deployment perception stack from RGB frame to two segmentation masks to a depth reading. Right, the three task rewards drawn onto the hands, with the reference contact point sets in green on the body and red on the lid.",
        matters:"The green and red point clouds are the fingertip-to-surface assignment made visible. The reward asks for a contact configuration rather than a motion, and the picture shows how coarse that specification is."
      },
      {
        src:"../overview_assets/twisting-lids/fig04_ablations.png",
        title:"Figure 4: the contact reward intensity sweep",
        shows:"Training curves over 5 seeds, single-object training on top and multi-object below, comparing the contact reward disabled, reduced to 50%, and at full strength.",
        read:"AD is averaged per execution step rather than reported in degrees, so the values are small and the ordering is what carries meaning. Shading is one standard deviation.",
        matters:"The same ordering appears in both rows, which is what turns the exploration claim into the paper's strongest causal evidence."
      }
    ],
    equations: [
      {
        name:"Keypoint finger contact reward",
        formula:"r_contact = Σ_i [ 1 / (1 + α·d(X^L, F_i^L)) + 1 / (1 + α·d(X^R, F_i^R)) ]\n\n    d(A, x) = min_i ‖A_i − x‖₂",
        intuition:"Pay each fingertip for sitting near the surface it has been assigned. The form is the argument: a be-in-contact-somewhere term would carve one smooth basin over the whole surface, while a min over sampled points gives each fingertip its own nearest-point basin and turns the fingertip-to-surface relation into a discrete assignment, so the gradient pulls towards one configuration instead of the average of all valid ones. <em>Interpretation:</em> the paper reports the intensity correlation and does not analyse the form.",
        terms:[
          "<code>X^L, X^R</code>: reference point sets sampled on the base and on the lid, placed by a person.",
          "<code>F^L, F^R ∈ ℝ⁴ˣ³</code>: the four fingertips of each hand.",
          "<code>d</code>: distance to the <em>nearest</em> reference point, rather than to the surface."
        ],
        matters:"The reciprocal keeps the term bounded and dense everywhere, so it supplies gradient from the first random rollout, which is when the objective supplies nothing.",
        consequence:"Its weight is 500.0 against 2.5 on the objective it serves. Halving the intensity costs sample efficiency and final performance, and disabling it removes the skill."
      },
      {
        name:"Twisting reward",
        formula:"r_twisting = Δθ = q_bottle(t+1) − q_bottle(t)",
        intuition:"Pay for lid rotation accumulated this step, where q_bottle is the revolute joint angle between base and lid. There is no goal angle and no terminal bonus.",
        matters:"Angular Displacement is this quantity integrated over a trial, which is why the paper reports degrees instead of a success rate.",
        consequence:"A reward with no terminus produces a policy with no terminus. Removal, the thing the household experiments measure, never appears in the objective."
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
      "<strong>The task needs closed-loop reaction.</strong> Replaying a trajectory that succeeded in simulation gives the <em>lowest</em> time-to-fail of any method, 7.67 s, because the bottle rolls off the fingers. A deterministic motion pattern does not survive contact with a real object.",
      "<strong>Object state has to be observed, and two points of it are enough here.</strong> Prior single-hand rotation work runs on implicit tactile sensing through proprioception, and that baseline reaches 1.33° AD where the full policy reaches 946.33°. No baseline uses a richer representation, so two points are enough for this system rather than shown to be the minimum.",
      "<strong>Both transfer failures concern the policy's relationship to information.</strong> Feeding privileged state to the critic alone is what makes transfer work, since without the asymmetry the policy holds the bottle a full 30.00 s and turns it 18.67°. An enlarged actor matches the full policy in simulation and reaches 2.00° on the robot, which the authors read as overfitting to the simulator. Neither failure is visible in simulation.",
      "<strong>Generalisation, scored on a task nobody trained.</strong> Ten household containers judged by whether the lid comes off: 33.75% overall, tracking turns required rather than familiarity, from 60% on HairMask (1 turn) down to 10% on PeanutButter and EmptyNutella (5 turns). An accident helps here, which the project page reports: the mask tracker follows spatial continuity, so when a lid comes free it reads the exposed thread instead of the detached cap and the observation stays coherent through the one event the simulation never modelled.",
      "<strong>Protocol, and one claim left unchecked.</strong> Five 3D-printed bottles, 20 trials each, 30 s cap, three best policies from ten seeds, and one deployed policy averages four complete turns in 30 s on the blue bottle. The authors also state that theirs is the first sim-to-real RL system enabling such capabilities on bimanual multi-fingered hands, qualified by to the best of our knowledge. This summary has not checked that against the literature."
    ],
    limitations: [
      "<strong>Contact-level control, no task-level structure.</strong> The objective is per-step rotation with no goal and no planner, and the simulated cap turns without end. The lid coming free, which is what the household experiments score, is absent from training and from the reward, which is where the numbers fall off: 10% on the objects needing five turns.",
      "Both exploration mechanisms are authored by hand for this object class. Someone chose which surfaces carry contact points and someone knew that pinch-too-low was the trap worth terminating on. The idea transfers; this instantiation does not, until a segmentation model can place the point sets on its own.",
      "Reported numbers are the three best of ten seeds and the spreads stay wide there (946.33 ± 383.81°, and 499.50 ± 578.23° on the wood bottle, a standard deviation larger than the mean). The arms never move either: two UR5e arms hold the hands fixed, and a person places the object onto the upturned fingers to start every trial.",
      "Robustness is demonstrated in pieces. The perturbation test swaps the vision stack for marker-based detection to isolate force robustness from occlusion, so the two are never shown together. Shape generalisation is far weaker for turning than for holding, since the out-of-distribution square bottle survives the full 30 s but reaches 43° against 946°."
    ],
    takeaway: [
      "When a task's difficulty lives in which contacts to make rather than in what torques to send, spend the prior there. The rest of the stack can be coarse.",
      "Design the metric pair before running the experiment. Where holding on is easier than making progress, a single-axis metric will rank a stalling policy first.",
      "Policy capacity is a sim-to-real hyperparameter. A network that matches in simulation and dies on the robot is reporting overfitting to the simulator rather than a control failure."
    ],
    researchNotes: [
      "<strong>Worth stealing:</strong> modelling your own calibration tag inside the simulation scene, which turns camera extrinsics into one matched-pair solve with no checkerboard sweep.",
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
