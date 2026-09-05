// Twisting Lids Off with Two Hands — review v8 (2026-09-04, code cross-check; current)
// v7 read the PDF and the project page. v8 adds the third source the paper-reading skill
// asks for, the released repo (ToruOwO/twisting-lids), and the config contradicted one
// claim: v7 read the appendix list "alpha1 = 2.5, alpha2 = 500.0, ..." in the order the
// reward terms are introduced and concluded that the contact reward carries 500.0
// against 2.5 on the twisting reward. DualURBottle.yaml binds them the other way,
// rotation 500.0 and finger distance 2.5, so that sentence was wrong and is replaced by
// the per-step budget, where the code's clamps put rotation at 10 and contact at 40.
// Four other code findings landed where they change a reading: the left hand carries 3x
// the action and work penalty of the right (so the hold-versus-twist split is closer to
// specified than emergent), the drop termination also costs -50, the pose termination is
// 0.2 rad from the tenth second, and the reference points are rings generated from each
// object's own radius rather than placed per object. The first-system claim, left
// unchecked in v7, is closed against the paper's own related work: Dynamic Handover is
// the nearest neighbour and the authors separate it by contact richness.
// Every other clause is unchanged from v7.
// CORRECTION, same day: the tldr ran 84 words against a 40-word median across this
// file. Two things went, both owned elsewhere: the baseline comparison (comparison and
// evidence carry it) and the "the authors argue the barrier is exploration rather than
// control" wrapper, which framed a fact instead of stating it. 68 words, same claims.
// THIRD CORRECTION, same day: methodDetails now says that every row of Table 1 is a
// lesion of the same system and that the authors report no comparable learning-based
// method, so the table is not read as a method comparison. This also closes the
// gait-constraint baseline, flagged as missing when v5 was reviewed.
// FOURTH CORRECTION, same day: the tldr's 946° was decoration. The paper has no
// external baseline and no success rate, and the tldr carried neither the spread
// (±383.81) nor the seed protocol, so the number read as firmer than it is. The result
// sentence now carries what only this system has, zero-shot transfer from plain
// simulated cylinders to unseen real containers. comparison and evidence keep the 946°,
// where the protocol makes it readable.
// FIFTH CORRECTION, same day: coreInsight was one 310-word paragraph, written on the
// schema's "one connected argument" rule. A sentence audit found four chain sentences
// plus four loose observations, which is the case the schema wants an array for. Four
// bullets now, each one thought, with the causal chain kept inside one bullet rather
// than split across them. The "the reward and the terminations are one intervention
// seen from two sides" sentence went, since bullet two already says from both
// directions.
// SIXTH CORRECTION, same day: tldr becomes three bullets and the renderer moves Problem
// above Core insight, so the page reads TL;DR, Problem, Core insight. Both renderers
// take a string or an array for tldr, so the other summaries are unaffected.
// SEVENTH CORRECTION, same day: written for a reader who works in the field, which is
// now a rule in the skill. problem loses the three movements the paper enumerates (a
// reader predicts them) and the account of why teleoperation rigs fall short (true of
// the field, not of this paper), keeping the two RL failure modes and the friction gap
// the brake link answers. 180 words to 85. The pipeline stops explaining what an
// asymmetric critic is, and the equation stops defining that a hand has four fingertips.
// EIGHTH CORRECTION, same day: problem said most interaction modes RL falls into lead
// nowhere, which is the same fact as the first core insight bullet, where it comes with
// the reason. coreInsight keeps it. problem keeps the two concrete traps, which is what
// the second bullet means by a known trap and what the terminations delete.
// NINTH CORRECTION, same day: "Figure 4 backs the reading ... so the prior acts by
// degree" was compressed past the point of meaning. It named no reading, used an idiom
// for a curve at zero, left "in between" without its two endpoints, and buried the
// point, which is that performance scales with the reward's strength. Same claim, said.
// TENTH CORRECTION, same day: the same read-it-alone pass over every remaining field.
// One accuracy fix, since the household objects share plenty with the training set and
// it is their physical properties that lie outside it. Units restored on the two reward
// budgets. Two sentences that ran on wordplay ("no terminus", "deleted and priced") say
// the thing instead. Two headings that named an abstraction now name the result. "the
// minimum" replaced, since the paper shows two points suffice and never shows they are
// the least the task needs. methodDetails splits, so the metric pair and the table's
// composition stop sharing one block.
// ELEVENTH CORRECTION, 2026-09-05: "a threaded joint has no faithful cheap model" was
// an abstraction sitting in front of the concrete fact it abstracts, which the next
// clause already stated. The abstraction goes and the sourced sentence stays, naming
// what has to be modelled: the static friction that holds a screwed lid against the
// body, which is what the brake link answers.
// The live copy is paper_summaries.js. Edit that, not this snapshot.
window.DETAILED_PAPER_SUMMARIES = window.DETAILED_PAPER_SUMMARIES || {};
window.DETAILED_PAPER_SUMMARIES["twisting-lids-v8"] = {
    shortTitle: "Twisting Lids Off",
    title: "Twisting Lids Off with Two Hands",
    venue: "CoRL 2024",
    badges: ["sim-to-real RL", "bimanual", "Allegro × 2", "exploration shaping", "zero-shot transfer"],
    figure: "../overview_assets/twisting-lids/teaser.png",
    figureCaption: "Two 16-DoF Allegro hands on fixed UR5e arms, one RealSense D435, and a policy trained on plain simulated cylinders. It runs zero-shot on household jars whose physical properties lie far outside the training set.",
    tldr: [
      "Two multi-fingered hands hold a bottle in the air and keep unscrewing its lid, learned by RL in simulation on plain cylinders with no demonstrations.",
      "Exploration across 32 finger DoF is the bottleneck, so the reward assigns each fingertip a surface and two termination rules delete the rollouts that reach a known trap.",
      "The policy transfers zero-shot to real bottles and to household jars it never saw."
    ],
    coreInsight: [
      "<strong>The bottleneck is which contacts to make.</strong> Two hands can hold an articulated object in a vast number of ways and almost none of those ways permit twisting, so RL across 32 finger DoF spends its budget in configurations from which the task is unreachable. The reward recipes on the shelf come from single-hand reorientation of a single-part body, so none of them says which surface a finger belongs on.",
      "<strong>The prior goes on that gap, from both directions.</strong> A keypoint contact reward pays each fingertip for sitting near the surface it has been assigned, base for one hand and lid for the other, while two early-termination rules delete rollouts that have already fallen into a known trap. Figure 4 is the evidence, over 5 seeds: with the contact reward disabled the curve never leaves the bottom of the plot, and half intensity lands between that and full strength, so performance scales with the intensity of the prior.",
      "<strong>The novelty sits in the framing rather than the algorithm.</strong> PPO is untouched, and treating bimanual multi-part manipulation as a contact-mode search leaves everything else free to be coarse, down to a two-point object and a three-layer MLP.",
      "<strong>What the authors call emergent needs one qualification.</strong> The policy has to reorient a dropped bottle into a stable hold before twisting is possible, and the gaits that do it appear on their own. The division of labour is closer to specified, since the reward assigns the left hand to the base and the released code charges that hand three times the action and work penalty it charges the right."
    ],
    problem: [
      "The object is articulated and has to stay in the hands throughout. Two failures recur: the object gets stuck between fingers, and the fingertips pinch it low where they cannot reposition it into the palm.",
      "Demonstration data for two multi-fingered hands does not exist, and simulation has a gap of its own. The thing to model is the static friction that holds a screwed lid against the body, and the authors report that tuning friction between two revolute-jointed bodies does not reach the realism they need."
    ],
    pipeline: [
      {name:"Object model", text:"The bottle URDF is a base, a lid on a continuous revolute joint, and a brake link that a prismatic joint presses against the lid. That normal force stands in for a screwed cap, and the authors report it as the only approach they found that simulates the static friction well. No thread geometry exists anywhere in the model."},
      {name:"Episode and termination", text:"Both hands start palms-up and the simulator drops a bottle onto the fingers with randomised pose, so no stable grasp exists at t=0. An episode resets when the hands fail to reach a twist-ready pose in time, and when the bottle's z-position drops, which is the signature of the pinch-too-low trap. The released config puts numbers on both: from the tenth second the bottle axis has to stay within 0.2 rad of the target direction, and dropping below the height threshold also costs a penalty of 50, so the trap ends the episode and costs reward."},
      {name:"Policy and reward", text:"The policy reads joint positions, its own previous targets, and the estimated 3D centres of base and lid, then emits relative joint targets for a PD controller at 10 Hz. Four reward terms shape it: lid rotation, the keypoint contact term, a pose term on the bottle axis, and work and action penalties. PPO trains it with an asymmetric critic under wide domain randomisation."},
      {name:"Perception at deployment", text:"Segment Anything masks the body and the lid on the first frame of a trajectory, XMem tracks them afterwards, and noisy depth from one RealSense D435 lifts the two mask centres into 3D."}
    ],
    methodDetails: [
      {name:"What the metrics hide", text:"The paper reports no success rate. Angular Displacement counts degrees turned, and Time-to-Fail measures the interval from the object being held until it slips or lodges, capped at 30 s. The two trade off: a policy that grips and never turns scores a full TTF with AD near zero, which is what No-Asym and Large do in the table below. Holding is the easy half of the task, and reading the pair together is what stops a stalling policy from looking successful."},
      {name:"What the table compares", text:"Every row is a lesion of the same system, since the authors report no learning-based method comparable on this task. The table establishes which components the system needs and compares it to no alternative approach. The one borrowed component, a gait constraint reward taken from in-hand reorientation work, stays in Figure 5 as qualitative analysis, where it produces erratic finger motion and unnatural grasps."}
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
        matters:"The ordering repeats for single-object and for multi-object training, so the effect does not depend on one training setup. This is the paper's strongest causal evidence for the exploration account."
      }
    ],
    equations: [
      {
        name:"Keypoint finger contact reward",
        formula:"r_{contact} = Σ_{i} [ \\frac{1}{1 + α·d(X^{L}, F_{i}^{L})} + \\frac{1}{1 + α·d(X^{R}, F_{i}^{R})} ]\n\n    d(A, x) = min_{i} ‖A_{i} − x‖_{2}",
        intuition:"Pay each fingertip for sitting near the surface it has been assigned. The form is the argument: a be-in-contact-somewhere term would carve one smooth basin over the whole surface, while a min over sampled points gives each fingertip its own nearest-point basin and turns the fingertip-to-surface relation into a discrete assignment, so the gradient pulls towards one configuration instead of the average of all valid ones. <em>Interpretation:</em> the paper reports the intensity correlation and does not analyse the form.",
        terms:[
          "<code>X<sup>L</sup>, X<sup>R</sup></code>: reference point sets on the base and on the lid. The released assets make them rings, eight points around the cap and two rings of eight around the base, each ring sized from that object's own measured radius.",
          "<code>d</code>: distance to the <em>nearest</em> reference point, rather than to the surface."
        ],
        matters:"The reciprocal keeps the term bounded and dense everywhere, so it supplies gradient from the first random rollout, which is when the objective supplies nothing.",
        consequence:"The paper prints five weights without saying which term takes which, and the released config binds them: 2.5 here against 500.0 on lid rotation. The per-step budget reverses that ordering: the clamp on rotation, below, caps that term at 10 reward per step, while this one reaches 40 when every fingertip sits on a reference point. Halving the intensity costs sample efficiency and final performance, and disabling it removes the skill."
      },
      {
        name:"Twisting reward",
        formula:"r_{twisting} = Δθ = q_{bottle}(t+1) − q_{bottle}(t)",
        intuition:"Pay for lid rotation accumulated this step, where q<sub>bottle</sub> is the revolute joint angle between base and lid. There is no goal angle and no terminal bonus.",
        matters:"Angular Displacement is this quantity integrated over a trial, which is why the paper reports degrees instead of a success rate.",
        consequence:"The reward has no end state, so the policy has none either. Removing the lid is what the household experiments score, and it never appears in the objective. The released code also clamps Δθ at 0.02 rad per step, so the term saturates at 11°/s, and the deployed policy runs more than three times past that at 41.26°/s. <em>Interpretation:</em> the speed comes from the contact configuration rather than from reward pressure."
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
      "<strong>Object state has to be observed, and two points of it are enough here.</strong> Prior single-hand rotation work runs on implicit tactile sensing through proprioception, and that baseline reaches 1.33° AD where the full policy reaches 946.33°. No baseline tries a richer representation, so two points are shown to be enough here and never shown to be the least the task needs.",
      "<strong>Two failures appear only on the robot.</strong> Feeding privileged state to the critic alone is what makes transfer work, since without the asymmetry the policy holds the bottle a full 30.00 s and turns it 18.67°. An enlarged actor matches the full policy in simulation and reaches 2.00° on the robot, which the authors read as overfitting to the simulator. Neither failure is visible in simulation.",
      "<strong>Generalisation, scored on a task nobody trained.</strong> Ten household containers judged by whether the lid comes off: 33.75% overall, tracking turns required rather than familiarity, from 60% on HairMask (1 turn) down to 10% on PeanutButter and EmptyNutella (5 turns). An accident helps here, which the project page reports: the mask tracker follows spatial continuity, so when a lid comes free it reads the exposed thread instead of the detached cap and the observation stays coherent through the one event the simulation never modelled.",
      "<strong>Protocol, and what the first-system claim rests on.</strong> Five 3D-printed bottles, 20 trials each, 30 s cap, three best policies from ten seeds, and one deployed policy averages four complete turns in 30 s on the blue bottle. The authors also state that theirs is the first sim-to-real RL system enabling such capabilities on bimanual multi-fingered hands, qualified by to the best of our knowledge. Their own related work names the nearest neighbour: Dynamic Handover throws and catches between two dexterous hands on real hardware, and the authors separate it from their task by contact richness and by having to hold the object stable throughout. The claim rests on that distinction rather than on bimanual sim-to-real transfer being new."
    ],
    limitations: [
      "<strong>Contact-level control, no task-level structure.</strong> The objective is per-step rotation with no goal and no planner, and the simulated cap turns without end. The lid coming free, which is what the household experiments score, is absent from training and from the reward, which is where the numbers fall off: 10% on the objects needing five turns.",
      "Both exploration mechanisms are authored for this object class. A person decided that fingertips belong on rings around the cap and around the base, and that pinch-too-low was the trap worth terminating on. The generator then sizes those rings from each object's own radius, so the prior scales across the bottle set for free and stops at the class boundary: a real object still needs a segmenter to find the two surfaces.",
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
