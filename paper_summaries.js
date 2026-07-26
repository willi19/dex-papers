// Source-checked detailed reading notes. Only completed records are linked from the library.
window.DETAILED_PAPER_SUMMARIES = {
  "object-centric-motion-priors": {
    shortTitle: "Object-Centric Motion Priors",
    title: "Learning Object-Centric Motion Priors from Human for Robotic Dexterous Manipulation",
    venue: "AAAI 2026",
    badges: ["RL + human HOI", "trajectory prior", "sim-to-real", "cross-embodiment"],
    figure: "../overview_assets/object-centric-motion-priors.png",
    figureCaption: "The paper's method and real-world task families: motion prediction, retargeting, trajectory-guided PPO, and deployment.",
    tldr: "Predict a human demonstration’s future hand–object trajectory, retarget the hand motion, and use the predicted object motion as a reusable PPO reward. The object trajectory—not a new RL algorithm—is the paper’s central contribution.",
    problem: [
      "Pure hand-motion retargeting is kinematic: embodiment mismatch makes the resulting robot trajectory physically unreliable.",
      "Standard dexterous RL repeatedly hand-designs task rewards such as lift, rotate, or articulate.",
      "The method needs to transfer across objects, initial poses, task families, and three different robot hands."
    ],
    output: [
      "A state-based dexterous skill policy for one reference trajectory.",
      "Delta end-effector pose and delta finger-joint commands.",
      "YCB grasping, articulated-object manipulation, and obstacle-aware grasping in simulation and on hardware."
    ],
    pipeline: [
      {name:"Motion prior",text:"Train one autoregressive Transformer on DexYCB and ARCTIC to predict future hand and object states from an initial interaction state."},
      {name:"Retargeting",text:"Convert the predicted human fingertip trajectory into robot joint targets with constrained inverse kinematics and temporal smoothing."},
      {name:"Trajectory-guided RL",text:"Train a PPO policy to follow both the retargeted robot motion and the predicted object motion while establishing stable contact."},
      {name:"Deployment",text:"Use system identification and domain randomization for zero-shot sim-to-real; rerun retargeting and RL for a new hand embodiment."}
    ],
    methodDetails: [
      {name:"Predictor representation",text:"A hand state is a MANO pose; an object state is translation plus quaternion in a frame centered at the object’s initial geometry. For articulated objects, the moving part is represented relative to the base. A 100-point object cloud is encoded by PointNet and concatenated with the pose history."},
      {name:"Predictor architecture",text:"A six-layer GPT-2 predicts the next hand–object state from a 10-step history, then feeds its own prediction back autoregressively until the dataset sequence horizon is reached. One model covers DexYCB and bimanual ARCTIC; DexYCB inputs are zero-padded to the shared dimensionality."},
      {name:"From a robot scene to a human-style state",text:"At inference, robot fingertips and joints are treated as a semantic subset of the 21 MANO joints. The authors replace FrankMocap’s 2D reprojection objective with 3D alignment to robot forward-kinematics joints, while adapting MANO shape to robot link lengths. FoundationPose supplies the object’s 6D pose."},
      {name:"Policy interface",text:"The PPO state contains robot joint positions and the object’s 6D pose. The action contains delta end-effector pose and delta hand-joint positions; inverse kinematics converts the arm target to joint commands."},
      {name:"Training and transfer",text:"Policies train for one million steps in 1,024 parallel SAPIEN environments. System identification tunes PID and force limits; domain randomization perturbs observation noise, friction, object scale, and mass before zero-shot hardware deployment."}
    ],
    equations: [
      {
        name:"Autoregressive motion prediction",
        formula:"L_motion = Σₜ₌₁^Ω [ α‖s_t^h − ŝ_t^h‖₂ + β‖s_t^o − ŝ_t^o‖₂ ]\nα = 1,  β = 2,  history length n = 10",
        meaning:"Supervise human-hand and object-state prediction jointly. The object term gets twice the weight because object dimensions occupy a smaller fraction of the combined state."
      },
      {
        name:"Hand-motion retargeting",
        formula:"L_retarget(q_t) = Σᵢ₌₁⁵ ‖xᵢᵗ − fᵢ(q_t)‖₂ + β‖q_t − q_{t−1}‖₂\nsubject to q_lower ≤ q_t ≤ q_upper",
        meaning:"Match each human fingertip xᵢ to the robot fingertip produced by forward kinematics fᵢ(q), while keeping consecutive joint configurations smooth."
      },
      {
        name:"RL objective",
        formula:"π* = arg max_π  E[ Σₜ₌₀ᴴ γᵗ r(s_t, a_t | τ_i) ]",
        meaning:"Each policy is trained against a predicted reference trajectory τᵢ. PPO itself is standard; the useful question is what information enters r."
      },
      {
        name:"Total reward",
        formula:"R = λ₁ R_follow-hand + λ₂ R_follow-object\n    + λ₃ R_contact + λ₄ R_success",
        meaning:"Hand following, contact, and sparse success are familiar dexterous-RL terms. The reusable task signal is the object-following component."
      },
      {
        name:"Object-following reward",
        formula:"R_follow-object = exp(−α₄ ‖T̂ᵒ_t − Tᵒ_t‖₂)\n                + exp(−α₅ ‖log((q̂ᵒ_t)⁻¹ ⊗ qᵒ_t)‖₂)",
        meaning:"Reward the current object translation Tᵒ and orientation qᵒ for matching the future object state predicted from human data. This replaces a separate lift/rotate/open reward for each task."
      }
    ],
    novelty: [
      "<strong>Object motion becomes the task specification:</strong> the human-object predictor says what should happen to the object, while RL discovers robot-specific contacts that make it happen.",
      "<strong>Guidance is split cleanly:</strong> retargeted hand motion narrows exploration; object following preserves the task outcome when exact hand imitation is physically impossible.",
      "<strong>One reward structure spans several tasks:</strong> only obstacle avoidance adds an extra collision penalty."
    ],
    rewardBaseline: [
      "<strong>Common:</strong> joint/end-effector imitation, thumb-plus-finger contact, sparse task success, and PPO.",
      "<strong>Special:</strong> dense tracking of a predicted future object trajectory, used in place of task-specific lift or articulation shaping.",
      "<strong>Still task-dependent:</strong> the obstacle task adds a large collision penalty, so the claim is reduced reward engineering rather than literally zero task-specific design."
    ],
    comparison: {
      headers:["Method","Reference signal","Physical correction"],
      rows:[
        ["AnyTeleop-style retargeting","Human fingertip motion","None"],
        ["ManipTrans","Retargeted hand motion","Residual RL"],
        ["HOP","Learned human-object prior","Policy conditioned on prior"],
        ["<strong>This paper</strong>","Predicted hand + object trajectory","PPO with object-following reward"]
      ]
    },
    evidence: [
      "Real-world YCB grasping averages 0.77 success across DexYCB objects, non-DexYCB objects, and novel poses.",
      "Real-world articulated manipulation averages 0.53; obstacle-aware grasping averages 0.63.",
      "Simulation evaluation uses five seeds and 100 trials; hardware evaluation repeats each setting 20 times.",
      "The method is demonstrated on Allegro, ROBOTERA XHand1, and Inspire hands."
    ],
    limitations: [
      "It trains a separate state-based skill policy per reference trajectory rather than one general visual policy.",
      "A new embodiment still requires retargeting, system identification, and RL training.",
      "Reward weights are carefully tuned, and obstacle avoidance needs an additional task-specific penalty.",
      "The motion predictor inherits the coverage and estimation quality of DexYCB and ARCTIC."
    ],
    takeaway: [
      "<strong>Classification:</strong> human-motion prior + retargeting + trajectory-guided RL; not imitation learning alone and not a VLA.",
      "<strong>Read it for:</strong> a clear example of using predicted object motion as a general-purpose reward signal."
    ],
    links: [
      {label:"AAAI paper",url:"https://ojs.aaai.org/index.php/AAAI/article/view/38892"},
      {label:"PDF",url:"https://ojs.aaai.org/index.php/AAAI/article/download/38892/42854"}
    ]
  },

  "latentvla": {
    shortTitle: "LatentVLA",
    title: "LatentVLA: Taming Latent Space for Generalizable and Long-Horizon Bimanual Manipulation",
    venue: "AAAI 2026",
    badges: ["VLA", "latent action", "diffusion", "bimanual", "long-horizon"],
    figure: "../overview_assets/latentvla.png",
    figureCaption: "LatentVLA separates latent-action representation, diffusion planning, and low-level action decoding.",
    tldr: "Learn a continuous action latent from mixed human-video and robot data, plan a 16-step latent sequence with diffusion, then decode it into bimanual actions. Language attention removes irrelevant visual motion; absolute time disambiguates visually similar task phases.",
    problem: [
      "Action diffusion preserves fine motion but is expensive to scale directly across large heterogeneous datasets.",
      "Inverse-dynamics latent actions scale to unlabeled video, but can encode distractors and confuse approach/recede states that look alike.",
      "Discrete VQ latents introduce quantization artifacts that are especially harmful for fine bimanual control."
    ],
    output: [
      "A language-conditioned 14-DoF bimanual action policy.",
      "A 16-step continuous latent-action plan decoded into executable actions.",
      "Long-horizon behaviors adapted to eight real-world bimanual tasks."
    ],
    pipeline: [
      {name:"TA-LAM",text:"Infer a single-step continuous latent action from five timesteps of vision, language, and proprioception using language-guided visual attention and explicit episode-time encoding."},
      {name:"Joint grounding",text:"Predict the next observation on all video and decode actions only where robot labels exist, so human video supplies dynamics while robot data anchors embodiment."},
      {name:"LADT",text:"Freeze TA-LAM and train a diffusion Transformer to generate 16 future latent actions conditioned on recent observations, language, proprioception, and latent history."},
      {name:"Target adaptation",text:"Freeze the latent representation and action decoder; fine-tune only the high-level LADT planner on target-platform demonstrations."}
    ],
    methodDetails: [
      {name:"Data split and role",text:"D_pretrain contains more than 2.5 million sequences from 52 sources: unlabeled human video, labeled multi-embodiment RDT-1B trajectories, simulation, and roughly 0.5 million real demonstrations from AgiBot World Beta plus LatentVLA-Dexterous. D_finetune is a separate 1,600-hour collection for eight target tasks."},
      {name:"Policy interface",text:"Each labeled trajectory provides multi-view RGB observations, a 14D bimanual proprioceptive state, a language instruction, and a 14D bimanual action. TA-LAM compresses a five-frame history into one 512D latent action."},
      {name:"TA-LAM internals",text:"A frozen SigLIP image/text pair creates an instruction-conditioned attention mask. A Transformer inverse-dynamics model encodes the masked visual history, language, state, absolute episode time, and relative position. A forward-dynamics head predicts the next observation; a small MLP action decoder grounds the latent on robot-only labels."},
      {name:"LADT planning",text:"With TA-LAM frozen, LADT denoises a horizon of 16 future latent actions. Its context includes the recent observation history, current proprioception, language, and previously inferred latent actions, so the plan is generated as a coherent chunk rather than one code at a time."},
      {name:"Fine-tuning boundary",text:"Target-platform adaptation updates LADT while keeping the inverse-dynamics representation and action decoder frozen. The decoded 16-action sequence is trained against expert action chunks, preserving the broad latent learned during pretraining."}
    ],
    equations: [
      {
        name:"Task-focused visual attention",
        formula:"A_t^(v) = softmax(E_img(I_t^(v)) E_text(ℓ)ᵀ / √d)\nf_t^visual = Concat_v E_vis(I_t^(v) ⊙ Upsample(A_t^(v)))",
        meaning:"Use the instruction ℓ to select task-relevant regions in each camera view before learning motion, reducing background and bystander dynamics in the latent."
      },
      {
        name:"Temporally disentangled latent",
        formula:"C_{t−k} = Concat(f_{t−k}^visual, E_ℓ(ℓ), s_{t−k}, γ(t−k)) + PE(k)\nZ_t = LatentHead(T_enc(C_{t−h}, …, C_t))",
        meaning:"Absolute episode time γ says which phase the task is in; relative positional encoding PE describes order inside the short history. The paper uses h = 4 and latent dimension 512."
      },
      {
        name:"Mixed-data latent objective",
        formula:"L_TA-LAM = L_recon + λ_act L_action\nL_recon = ‖Ô_{t+1} − O_{t+1}‖₂²\nL_action = ‖â_t − a_t‖₂²",
        meaning:"Next-frame reconstruction trains on unlabeled human and robot video; action decoding trains only on labeled robot sequences."
      },
      {
        name:"Latent diffusion planner",
        formula:"L_LADT = E_{k, ε, c_t}[‖ε − ε_θ(Z_future,k^noisy, k, c_t)‖₂²]",
        meaning:"Rather than autoregressing discrete codes, LADT denoises an entire future sequence in the continuous latent space."
      }
    ],
    novelty: [
      "<strong>The latent is explicitly spatiotemporal:</strong> language attention addresses spatial distraction and absolute episode time addresses temporal aliasing.",
      "<strong>Representation and planning use different data:</strong> TA-LAM absorbs unlabeled video; LADT learns plans from action-labeled trajectories.",
      "<strong>Continuous latent diffusion:</strong> the planner keeps diffusion’s multimodality without VQ tokenization, while the frozen decoder preserves executable motion."
    ],
    comparison: {
      headers:["Family","Strength","LatentVLA’s change"],
      rows:[
        ["Diffusion Policy / RDT","High-fidelity continuous action generation","Moves diffusion planning into a pretrained latent space"],
        ["LAPA-style latent action","Scales to action-free video","Avoids discrete codes and adds temporal/language grounding"],
        ["<strong>LatentVLA</strong>","Mixed video pretraining + latent diffusion","Freezes low-level representation during target adaptation"]
      ]
    },
    evidence: [
      "TA-LAM pretraining includes roughly 0.5 million real-world demonstration sequences plus heterogeneous human, robot, and simulation data.",
      "Target adaptation uses a held-out 1,600-hour dataset over eight bimanual tasks.",
      "Mean real-world success is reported as 63.8%; on towel folding the full model reaches 58%.",
      "Replacing continuous latent diffusion with VQ-VAE + autoregressive GPT drops towel-folding success from 58% to 25%; removing absolute time drops it to 31%."
    ],
    limitations: [
      "The authors report sensitivity to complete object occlusion and highly reflective surfaces.",
      "The approach still relies on a very large proprietary pretraining and fine-tuning corpus.",
      "The decoder is embodiment-specific enough that the reported transfer recipe is not a zero-shot embodiment swap.",
      "Most of the architectural gain is evaluated within the authors’ data and hardware stack."
    ],
    takeaway: [
      "<strong>Classification:</strong> VLA / imitation learning with continuous latent-action diffusion.",
      "<strong>Read it for:</strong> how action-free human video, labeled robot data, and diffusion planning are assigned distinct roles instead of being mixed in one objective."
    ],
    links: [
      {label:"AAAI paper",url:"https://ojs.aaai.org/index.php/AAAI/article/view/38926"},
      {label:"PDF",url:"https://ojs.aaai.org/index.php/AAAI/article/download/38926/42888"}
    ]
  },

  "pkda": {
    shortTitle: "PKDA",
    title: "Dexterous Manipulation Transfer via Progressive Kinematic-Dynamic Alignment",
    venue: "AAAI 2026",
    badges: ["RL + retargeting", "human video", "residual policy", "cross-hand"],
    figure: "../overview_assets/pkda.png",
    figureCaption: "PKDA first proposes a kinematic trajectory, then corrects contact dynamics and reconstructs wrist motion.",
    tldr: "Turn a human RGB manipulation video into a robot trajectory in stages: precise fingertip retargeting supplies the main action, a small residual RL policy repairs grasp physics, and object motion reconstructs the wrist path after grasping.",
    problem: [
      "Direct retargeting matches appearance but not force closure or contact dynamics.",
      "Training full dexterous control from scratch wastes exploration on a high-dimensional wrist-and-finger action space.",
      "A transfer system should work across tasks, object categories, and hands without designing a new reward for every sequence."
    ],
    output: [
      "A complete wrist-and-finger control trajectory reconstructed from monocular human video.",
      "A grasping residual policy around a retargeted primary action.",
      "Transferred manipulation for Adroit, Allegro, and LEAP hands, including open-loop hardware execution."
    ],
    pipeline: [
      {name:"Interaction Perceptor",text:"Estimate human fingertips, palm orientation, object trajectory, contact points, and object geometry from a known-model dataset or raw RGB video."},
      {name:"Trajectory Proposer",text:"Retarget human fingertips in world coordinates to robot joint angles; palm orientation is only an auxiliary constraint."},
      {name:"ContactAdapt Optimizer",text:"Start from a thumb-guided pre-grasp, locally restrict wrist exploration, and learn a residual action that turns the kinematic proposal into a stable grasp."},
      {name:"Wrist Trajectory Planner",text:"After grasping, preserve the hand–object transform and derive the robot wrist trajectory from the demonstrated object trajectory."}
    ],
    methodDetails: [
      {name:"Perception outputs",text:"For every video frame, the perceptor extracts an 18D human-hand state—five 3D fingertips plus 3D palm orientation—a 6D object pose, two to five fingertip contact points, and an object mesh. Contacts are fingertip–surface distances below 5 cm."},
      {name:"Two perception modes",text:"When an object model is known, HFL-Net estimates hand and object trajectories. For raw RGB without a model, HOLD jointly reconstructs hand and object geometry; convex decomposition repairs the reconstructed mesh for collision checks."},
      {name:"Primary trajectory",text:"Nonlinear optimization matches robot fingertips directly in the world frame, rather than matching fingertip-to-wrist vectors that amplify hand-size differences. Palm geodesic error and temporal joint smoothing are secondary terms. Inverse dynamics converts the resulting joint sequence to A_primary."},
      {name:"RL initialization",text:"The starting state is the last collision-free frame at which the thumb is closest to its demonstrated contact. The shared object goal is the first demonstrated pose displaced 0.1 m from the start, turning different tasks’ initial phase into a common pick-up problem."},
      {name:"Action-space rescaling",text:"The first six action dimensions control wrist translation and rotation; the remaining dimensions control fingers. Only the wrist is compressed to a local neighborhood around the pre-grasp configuration, leaving fingers free to explore contact."},
      {name:"Reward activation",text:"Approach reward pulls fingertips toward extracted contacts. Grasp reward activates only when every fingertip is within 6 cm and combines physical contact with cosine similarity to retargeted joints. Lift reward activates after the thumb and one more finger contact the object."}
    ],
    equations: [
      {
        name:"Kinematic alignment",
        formula:"min_{q_t}  w_f E_f + w_o E_o + w_s E_s\nE_f = Σᵢ₌₁ᴷ ‖vᵢᴴ(H_t) − vᵢᴿ(q_t)‖²\nE_s = ‖q_t − q_{t−1}‖²",
        meaning:"Prioritize accurate world-frame fingertip positions, add palm-orientation alignment E_o, and smooth the joint sequence. This becomes the primary control A_primary."
      },
      {
        name:"Residual contact correction",
        formula:"a_t = A_primary,t + Δa_t\nΔa_t ~ π_residual(s_t)",
        meaning:"RL does not rediscover the demonstrated motion. It only changes the proposed action enough to produce stable, robot-specific contact."
      },
      {
        name:"Unified grasp reward",
        formula:"R = r_approach + r_grasp + r_lift\nr_grasp activates when all fingertips are within ε = 0.06 m\nr_grasp includes r_contact + r_similarity",
        meaning:"Approach targets demonstrated contacts, grasp combines collision-based multi-contact and joint-angle imitation, and lift moves the object to a shared pick-up goal."
      },
      {
        name:"Post-grasp wrist reconstruction",
        formula:"T_t = o_t · (T_grasp⁻¹ · o_grasp)⁻¹",
        meaning:"Assuming little hand–object sliding after a stable grasp, use the demonstrated object pose o_t and the fixed relative transform at grasp time to recover wrist motion."
      }
    ],
    novelty: [
      "<strong>Progressive alignment:</strong> solve morphology first, contact physics second, and operational wrist semantics third instead of forcing one policy to learn all three.",
      "<strong>Residual RL is tightly localized:</strong> thumb-guided initialization and wrist action rescaling make exploration occur near a plausible pre-grasp.",
      "<strong>Task intention follows object motion:</strong> the post-grasp wrist planner preserves actions such as rise–tilt–put-down without frame-by-frame robot imitation."
    ],
    rewardBaseline: [
      "<strong>Common:</strong> fingertip approach, contact, pose imitation, lift, PPO-style residual learning.",
      "<strong>Special:</strong> the reward is reusable because the reference contacts and primary trajectory are extracted from each video, while exploration is constrained around the proposed grasp.",
      "<strong>Main contribution:</strong> system decomposition and initialization—not a fundamentally new reward term."
    ],
    comparison: {
      headers:["Method","What is aligned","Missing piece addressed by PKDA"],
      rows:[
        ["AnyTeleop","Hand kinematics","No dynamic contact correction"],
        ["PGDM","Reference trajectory via RL","Needs expert pre-grasp/reference setup"],
        ["D-Grasp","Dynamic grasp from a pose","Specialized reward and single-frame reference"],
        ["<strong>PKDA</strong>","Fingertips → contact → object motion","Progressive transfer from raw human video"]
      ]
    },
    evidence: [
      "Across 40 full-information manipulation tasks, PKDA reports 84.2% grasp success, 77.6% follow success, and 73.3% transfer success.",
      "Transfer success is 72.5% on Allegro and 67.5% on LEAP despite different kinematics.",
      "Real hardware uses a UR10 arm with a LEAP hand on Shake, Pour, and Stamp, executed open loop.",
      "Ablations show fingertip–wrist-vector retargeting and non-thumb initialization reduce transfer success."
    ],
    limitations: [
      "The paper explicitly focuses on relatively stable hand–object contact; frequent multi-contact changes remain future work.",
      "Post-grasp wrist reconstruction assumes negligible relative sliding.",
      "Hardware validation covers three representative tasks and open-loop execution, not the full 40-task suite.",
      "Perception or reconstructed-mesh errors directly affect contact extraction and retargeting."
    ],
    takeaway: [
      "<strong>Classification:</strong> human-video retargeting + residual RL; a data-generation/skill-transfer pipeline rather than a general visual policy.",
      "<strong>Read it for:</strong> a strong template for reducing RL to local contact repair after deterministic kinematic initialization."
    ],
    links: [
      {label:"AAAI paper",url:"https://ojs.aaai.org/index.php/AAAI/article/view/38874"},
      {label:"PDF",url:"https://ojs.aaai.org/index.php/AAAI/article/download/38874/42836"}
    ]
  },

  "sns-grasp": {
    shortTitle: "SNS-Grasp",
    title: "SNS-Grasp: Semantic-guided Noise Scaling for Grasp Generation",
    venue: "AAAI 2026",
    badges: ["grasp synthesis", "diffusion", "intent conditioning", "MANO"],
    figure: "../overview_assets/sns-grasp.png",
    figureCaption: "SNS-Grasp uses intent gradients to rescale diffusion noise per joint, followed by geometry-aware refinement.",
    tldr: "Generate a hand grasp for an intent such as use or hold, estimate which joints matter to that intent from a classifier’s gradients, reduce diffusion noise only for those joints, and refine the resulting MANO mesh against object geometry.",
    problem: [
      "Intent-aware grasps need different fingers to be precise for different tasks.",
      "Standard diffusion injects isotropic noise, treating every hand joint as equally uncertain.",
      "MANO’s fixed skinning can still produce penetration or poor local contact even when the semantic pose is correct."
    ],
    output: [
      "A MANO hand pose and translation conditioned on object point cloud and manipulation intent.",
      "Task-specific grasp distributions: intent-critical joints are stable while other joints retain diversity.",
      "A refined hand mesh with reduced hand–object interpenetration."
    ],
    pipeline: [
      {name:"Intent recognizer",text:"Train a lightweight hold/use classifier on about 17,000 grasps; use its gradient with respect to each joint as a semantic-importance signal."},
      {name:"Exploratory denoising",text:"Run standard isotropic diffusion once to obtain a candidate used by the frozen intent recognizer."},
      {name:"SNS-Diff",text:"Restart from the same initial noise and attenuate each joint’s noise according to its intent criticality."},
      {name:"FGR",text:"Couple joint features to object vertices through SDF-guided cross-attention, then iteratively refine the mesh with ResKAN blocks."}
    ],
    methodDetails: [
      {name:"Recognizer input",text:"The intent recognizer concatenates a 778-vertex MANO mesh with a 4,096-point object cloud and passes them through channel and spatial mixers. A 0.414M-parameter head predicts hold or use; the classifier is frozen before grasp generation."},
      {name:"Two-pass sampling",text:"The model first denoises isotropic x_T to an exploratory grasp y_0. Gradients of the ground-truth intent loss with respect to each joint rotation are measured on y_0. Denoising then restarts from the same x_T with the per-joint SNS scale, isolating the effect of semantic noise modulation."},
      {name:"SNS-Diff conditioning",text:"Diffusion time uses sinusoidal features, intent uses a trainable 16D lookup, and the object cloud uses a 4,096D basis-point-set representation. Each is projected to 256D and fused by three Semantic Calibration Transformer blocks before predicting MANO rotation and global translation."},
      {name:"Geometry signal",text:"FGR converts the current MANO pose into 778 mesh vertices and computes one signed distance to the object per vertex. Joint parameters form 17 attention queries; per-vertex SDF features form keys and values, so joint updates depend on nearby object geometry rather than MANO’s fixed skinning alone."},
      {name:"Iterative refinement",text:"Three ResKAN refinement steps concatenate the current pose, SDF values, and joint–vertex attention features, then update MANO parameters. Reconstruction and bidirectional contact losses train the refinement while retaining the semantic pose proposed by SNS-Diff."}
    ],
    equations: [
      {
        name:"Joint semantic criticality",
        formula:"γ_j = |∂L_int / ∂θ_j| · σ(z)  ∈ [0, ∞)",
        meaning:"A joint is critical when changing it strongly affects intent-classification loss, weighted by the classifier’s confidence in the ground-truth intent."
      },
      {
        name:"Semantic-guided noise scaling",
        formula:"x_{j,T}^SNS = x_{j,T} · 1/(1 + γ_j)",
        meaning:"High-criticality joints receive little noise and remain semantically stable; low-criticality joints retain nearly the original noise and therefore natural variation."
      },
      {
        name:"Joint-specific variance bound",
        formula:"Var(p(x_{j,0}^SNS)) ≤ C / (1 + γ_j)²",
        meaning:"Under the paper’s DDPM derivation, increasing semantic criticality contracts that joint’s generated distribution quadratically."
      },
      {
        name:"Geometry refinement loss",
        formula:"L = λ₁‖m̃₀ − m₀‖₂ + λ₂‖ẽ₀ − e₀‖₂\n    + λ₃ L_hand→object + λ₄ L_object→hand",
        meaning:"Preserve the target mesh and edge structure while penalizing hand-to-object and object-to-hand penetration/contact errors."
      }
    ],
    novelty: [
      "<strong>Conditioning changes the stochastic process:</strong> intent does not merely enter as another feature; it determines a separate noise magnitude for each joint.",
      "<strong>Criticality is learned, not hand-coded:</strong> classifier gradients identify which joints preserve hold versus use semantics.",
      "<strong>Semantic generation and physical repair are separated:</strong> SNS-Diff controls intent and diversity; FGR handles local geometry."
    ],
    comparison: {
      headers:["Method family","Semantic control","Noise / refinement"],
      rows:[
        ["Isotropic grasp diffusion","Intent as conditioning","Same noise scale for every joint"],
        ["RAGG-style retrieval","Retrieve intent-matched examples","Standard generation/refinement"],
        ["<strong>SNS-Grasp</strong>","Classifier gradient per joint","Anisotropic noise + SDF cross-attention"]
      ]
    },
    evidence: [
      "The intent recognizer has 0.414M parameters and reports 98.7% test classification accuracy.",
      "Evaluation uses OakInk and GRAB with hold/use intent labels and unseen-object tests.",
      "The paper reports an 82.06% human preference rate and 3.306 cm³ interaction volume.",
      "Noise-schedule ablations support reducing—not increasing—noise on semantically critical joints."
    ],
    limitations: [
      "The demonstrated intent vocabulary is narrow, centered on hold versus use rather than open-ended language.",
      "Criticality depends on the frozen classifier; classifier shortcuts or poor calibration become noise-schedule errors.",
      "The method synthesizes human MANO grasps, so robot execution still requires retargeting and control.",
      "Physical feasibility is evaluated geometrically; this is not a closed-loop dynamic grasping policy."
    ],
    takeaway: [
      "<strong>Classification:</strong> intent-conditioned grasp synthesis / diffusion, not RL and not a robot policy.",
      "<strong>Read it for:</strong> a concrete mechanism that makes diffusion uncertainty joint-specific and task-specific."
    ],
    links: [
      {label:"AAAI paper",url:"https://ojs.aaai.org/index.php/AAAI/article/view/37909"},
      {label:"PDF",url:"https://ojs.aaai.org/index.php/AAAI/article/download/37909/41871"}
    ]
  }
};
