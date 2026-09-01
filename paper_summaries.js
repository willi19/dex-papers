// Source-checked detailed reading notes. Only completed records are linked from the library.
window.DETAILED_PAPER_SUMMARIES = {
  "multi-keypoint-affordance": {
    shortTitle: "Multi-Keypoint Affordance",
    title: "Multi-Keypoint Affordance Representation for Functional Dexterous Grasping",
    venue: "RA-L 2025",
    badges: ["affordance learning", "large vision models", "contact-guided", "functional grasp"],
    figure: "https://arxiv.org/html/2502.20018/x2.png",
    figureCaption: "CMKA learns three task-relevant object keypoints from Ego images with Exo human-contact supervision; KGT turns their calibrated 3D geometry into a wrist target pose.",
    tldr: "CMKA uses paired Ego object images and Exo human-operation images during training. SAM/DINO clustering proposes object points; task-conditioned selection chooses three points whose Ego features match an Exo contact prototype. At inference, RGB-D lifts those points to 3D and KGT computes a wrist pose. A separate FAH/GAAF-Dex coarse gesture class supplies the hand configuration.",
    problem: [
      "A single affordance heatmap says where an interaction may occur, but does not constrain the full orientation of a dexterous hand.",
      "Functional grasping needs object-side points associated with the functional finger, little finger, and wrist geometry.",
      "The method seeks weak supervision from human Exo interaction images instead of training CMKA with dense contact-point labels."
    ],
    output: [
      "At inference: three 2D task-relevant object keypoints from an Ego image and an affordance class.",
      "With RGB-D plus calibration: a wrist target pose (R, T) from KGT.",
      "The paper reuses a coarse hand-gesture parameter J from the FAH/GAAF-Dex setup; it does not itself predict a geometry-refined full-hand grasp."
    ],
    pipeline: [
      {name:"Ego candidate proposal",text:"During CMKA training, DINOv2 features feed an Ego-only LMSC module: SAM produces S region masks, then K-means finds J feature clusters per mask. Each center is mapped to its nearest real pixel, yielding N=S×J candidate 2D points (best reported setting: S=3, J=4, N=12)."},
      {name:"Task-conditioned Ego selection",text:"A learnable table W∈R^(T×N), indexed by the affordance class, selects three candidates. Features in circular neighborhoods around those three Ego points are projected and summed into fgk."},
      {name:"Exo contact supervision",text:"A parallel Exo image goes through DINOv2 and an affordance-specific CAM. LOCATE Extract/PartSelect yields an object-part contact prototype fop. Cosine similarity between fop and fgk supervises the Ego selection."},
      {name:"RGB-D and KGT",text:"At inference only the Ego branch and task label are used. Depth at the three 2D locations produces 3D points. Calibration converts them to object-side Fo, Lo, Wo; the corresponding hand anchors F, L, W define two coordinate frames, whose relative transform is the wrist target (R,T)."},
      {name:"Coarse hand execution",text:"The real-robot setup combines the wrist target with a coarse gesture J from FAH/GAAF-Dex. That predecessor represents J as one of 14 gesture prototypes with five-finger flexion and thumb-abduction angles. The MKA paper does not specify its arm IK, trajectory, or low-level controller."}
    ],
    methodDetails: [
      {name:"What a candidate keypoint is",text:"K-means operates in PCA-reduced DINO feature space, not image-coordinate space. For each cluster center Cn, the nearest actual mask pixel feature is selected; that pixel's (u,v) is Kn. The cluster number itself has no wrist/finger semantic meaning."},
      {name:"What Exo transfers",text:"Exo does not provide three point coordinates. It provides a class-specific contact-region feature prototype. The loss therefore says that the selected Ego points jointly resemble a human-contact region for the task."},
      {name:"KGT geometry",text:"KGT uses calibrated object anchors Fo, Lo, Wo to make an object frame: origin Wo, x along Wo→Fo, and z normal to the Fo–Lo plane. The analogous hand frame comes from robot-hand anchors W, F, L. Their relative pose yields the wrist transform."},
      {name:"FAH versus MKA",text:"FAH is the Functional Affordance Hand-object Interaction dataset. Its predecessor GAAF-Dex predicts one of 14 coarse gesture classes; each class stores hand-angle parameters. MKA uses this coarse gesture J but contributes the multi-keypoint wrist-pose calculation."}
    ],
    equations: [
      {
        name:"Candidate-point recovery",
        formula:"K_n = arg min_(x ∈ X_i^PCA) ||x − C_n||²",
        meaning:"For a K-means center Cn in one SAM mask's feature set, choose the nearest real pixel feature x. Its image location becomes a candidate keypoint."
      },
      {
        name:"Ego–Exo contact alignment",
        formula:"f_gk = Σ_(i=1)^3 proj(F_ki)\nL_cos = 1 − cos(f_op, f_gk)",
        meaning:"The three selected Ego neighborhood features are summed, then matched to the Exo contact prototype. This loss is permutation-invariant over the three selected features."
      },
      {
        name:"KGT frame alignment",
        formula:"x_o = normalize(W_oF_o)\nz_o = normalize(W_oF_o × W_oL_o)\ny_o = z_o × x_o\nR = (R_O^I)^(-1) R_H^I",
        meaning:"Three non-collinear calibrated object points define an object frame. KGT aligns it with the frame defined by the hand's wrist, functional-finger, and little-finger anchors."
      }
    ],
    novelty: [
      "<strong>Candidate points from foundation-model features:</strong> SAM constrains proposals to object regions, while multi-scale DINO features separate visually distinct parts inside each region.",
      "<strong>Cross-view weak supervision:</strong> Exo human-contact features supervise Ego keypoint selection without requiring CMKA to train on dense point labels.",
      "<strong>Three-point wrist geometry:</strong> calibrated functional-finger, little-finger, and wrist anchors define a full object-side coordinate frame for KGT."
    ],
    comparison: {
      headers:["Method family","Affordance representation","Task adaptation"],
      rows:[
        ["Heatmap-based affordance","Coarse interaction regions","Often requires retraining"],
        ["Grasp-quality prediction","Scalar score per candidate","Limited to predefined grasp set"],
        ["<strong>Multi-Keypoint Affordance</strong>","Three task-relevant candidate-selected points","KGT supplies wrist pose; FAH/GAAF-Dex supplies coarse hand gesture"]
      ]
    },
    evidence: [
      "FAH contains 5,858 images over 18 tools and 6 affordance classes, spanning Ego and Exo views.",
      "The paper reports its best candidate configuration at S=3 masks and J=4 clusters per mask (N=12).",
      "On FAH affordance grounding, it reports a 45.35% KLD improvement over its ReKep* baseline.",
      "Real-robot results report average functional-grasp success of 60% across Click Flashlight, Press Drill, and Press Spraybottle, versus 20% for GAAF-Dex."
    ],
    limitations: [
      "The paper says W selects three candidates but does not give an explicit scoring/assignment equation for the top-3 operation or role-specific ordering of those points.",
      "Because fgk is a sum of the three Ego features, its stated Exo alignment loss alone does not distinguish permutations of functional-finger, little-finger, and wrist roles.",
      "The authors add little-finger and wrist-projection annotations to the FAH test set and use hand-model calibration for real execution; this is more qualified than a fully annotation-free end-to-end system.",
      "MKA outputs a static wrist target and relies on an external coarse gesture J. It does not specify detailed object geometry reconstruction, trajectory generation, collision optimization, arm IK, or force-feedback control."
    ],
    takeaway: [
      "<strong>Classification:</strong> weakly supervised affordance localization + geometric wrist-pose construction; it is not an end-to-end dexterous grasp policy.",
      "<strong>Read it for:</strong> the candidate-keypoint / Exo-contact-transfer design and the three-point KGT construction; keep the external calibration and coarse-gesture dependency in mind."
    ],
    links: [
      {label:"arXiv",url:"https://arxiv.org/abs/2502.20018"},
      {label:"Code & demos",url:"https://github.com/PopeyePxx/MKA"}
    ]
  },

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
  },

  "aspire": {
    shortTitle: "ASPIRE",
    title: "ASPIRE: Agentic Skills Discovery for Robotics",
    venue: "arXiv 2026",
    badges: ["code-as-policy", "coding agent", "skill library", "evolutionary search"],
    figure: "../overview_assets/aspire.png",
    figureCaption: "A coordinator dispatches actor coding agents; each debugs a robot program against the execution engine, evolutionary search samples program variants, and audited repairs flow back into a shared skill library.",
    tldr: "A frontier coding agent writes code-as-policy robot programs, reads a per-primitive multimodal trace of what actually went wrong, patches the program, and distils the validated fix into a shared skill library that later tasks retrieve as in-context guidance. The trace engine — not the search — carries most of the gain, and the library is what transfers across tasks and embodiments.",
    problem: [
      "With only a binary success signal, an agent cannot tell whether a failure came from incorrect perception, an unstable grasp, a planning error, or a downstream recovery failure, so it cannot localise a root cause or target a repair.",
      "Fixes are discarded once a task ends: in the authors’ phrasing, the agent solving its hundredth task is effectively no more experienced than the agent solving its first.",
      "Prior robotic coding agents operate inside fixed, human-engineered pipelines and receive only coarse task-level feedback."
    ],
    output: [
      "An executable code-as-policy program per task, written over a predefined perception / planning / control API.",
      "A growing shared skill library whose entries are failure signature, when-to-apply condition, repair strategy and a representative code sketch.",
      "Skills that transfer zero-shot to held-out long-horizon tasks and reduce token cost when programming a different real robot."
    ],
    pipeline: [
      {name:"Robot execution engine", text:"Every primitive call is logged with the invoked API, its inputs and outputs, return status and multimodal evidence — RGB keyframes, overlays, grasp candidates, object poses and motion-planning results. The agent inspects salient primitive logs selectively rather than reading everything, progressively localises the failure, and validates a candidate repair by re-execution."},
      {name:"Diagnosis and patch", text:"The actor coding agent reads the trace, forms a hypothesis about the failing primitive, edits the program, and validates the fix on debugging configurations before proposing it as reusable."},
      {name:"Coordinator audit", text:"Actors report structured findings summarising the failure mode, the validated fix and the potentially transferable repair pattern. A coordinator checks compliance with the allowed API policy and promotes only debug-validated, reusable repairs into the shared library. Actors never exchange raw trajectories."},
      {name:"Evolutionary search", text:"Each generation proposes K candidate programs conditioned on the top-performing previous programs and the failure traces they produced, executes all of them, and keeps the best. The stated purpose is to avoid collapse into local repair loops where the agent repeatedly patches the same failed strategy."},
      {name:"Retrieval on new tasks", text:"Future actors retrieve library entries as in-context guidance. Categories span localisation, navigation, motion primitives, object-level grasping, scene understanding and debugging workflows, so adaptation gets faster as the library grows."}
    ],
    methodDetails: [
      {name:"What a skill actually is", text:"Not a macro-action or a learned policy: a compact in-context record of a debugging pattern. The paper’s worked example is a navigate-and-pick-up-radio task where repeated navigate_to_pose calls return PLANNING_ERROR because the generated navigation target lies too close to the table boundary; the admitted skill says to sample alternative approach directions around the object before retrying perception and grasping when planner errors recur near an obstacle boundary."},
      {name:"Coordinator–actor split", text:"A central coordinator dispatches actor coding agents to individual tasks and owns the shared library. Parallelism is across tasks, and the only channel between actors is the audited library, which keeps the shared state small and vetted."},
      {name:"Relationship to CaP-X", text:"ASPIRE is built on CaP-Gym, and its principal baseline throughout is CaP-Agent0 — the training-free agent from the CaP-X paper by an overlapping author group. Read the two together: CaP-X measures how far test-time interaction gets you, ASPIRE adds persistence across tasks."},
      {name:"Where the gain comes from", text:"The ablation is unusually clear. Without the execution engine or evolutionary search the agent reaches 14% macro-average on LIBERO-Pro; adding the engine alone reaches 62%; adding evolutionary search on top reaches 72%. Fine-grained failure attribution is worth roughly five times what the search is worth."}
    ],
    equations: [
      {
        name:"Evolutionary search over programs (Algorithm 1)",
        formula:"P* ← P₀ ; H ← ∅\nfor i = 1 … T:\n    {P₁ … P_K} ~ Agent( P*, H_failures )\n    score_k, trace_k ← Execute(P_k)   ;   H ← H ∪ trace_k\n    P* ← argmax_k score_k   (if it beats P*)\n    break if score(P*) ≥ θ\nvalidate P* on held-out configs → extract skills",
        meaning:"Each generation samples K whole-program variants conditioned on the best program so far together with the failure traces from previous evaluations, so the agent explores distinct strategies instead of refining one solution. Search terminates on a success threshold θ, and only the validated best program contributes skills."
      },
      {
        name:"Skill admission",
        formula:"finding = ( failure_signature, when_to_apply, repair_strategy, code_sketch )\nLibrary ← Library ∪ {finding}\n    iff  debug_validated(finding) ∧ coordinator_audit(finding)",
        meaning:"Nothing enters the shared library on the strength of a single successful run. A repair must have been validated on debugging configurations and then pass a coordinator audit for API-policy compliance and reusability, which is what keeps the library from filling with task-specific noise."
      }
    ],
    novelty: [
      "<strong>Per-primitive multimodal traces instead of binary reward:</strong> failure attribution becomes a lookup over logged perception, planning and control calls with their visual evidence, which is what makes targeted repair possible at all.",
      "<strong>Repairs promoted to durable skills:</strong> an audit step turns one-off debugging into shared, retrievable knowledge, so the agent’s hundredth task genuinely benefits from the first ninety-nine.",
      "<strong>Population search over programs:</strong> conditioning K variants on prior failures explores alternative task strategies rather than re-patching one failing approach.",
      "<strong>Sim-to-real skill transfer without policy transfer:</strong> what crosses the embodiment gap is debugging knowledge in text, not weights or trajectories."
    ],
    comparison: {
      headers:["Benchmark", "ASPIRE", "CaP-Agent0 (CaP-X)"],
      rows:[
        ["LIBERO-Pro, macro-average", "<strong>0.72</strong>", "0.18"],
        ["Robosuite, mean over 7 tasks (100 trials each)", "<strong>0.81</strong>", "0.68"],
        ["Robosuite two_arm_handover", "<strong>0.92</strong>", "0.20"],
        ["Robosuite nut_assembly", "0.09", "0.00"],
        ["BEHAVIOR-1K radio pickup, task success", "<strong>0.88</strong>", "0.56 (human 0.36)"],
        ["Zero-shot LIBERO-Pro long-horizon", "<strong>0.305</strong>", "0.038 (with retries)"]
      ]
    },
    evidence: [
      "LIBERO-Pro: 0.72 macro-average against 0.18 for CaP-Agent0; best case libero-object under position perturbation, 0.98 vs 0.22.",
      "Robosuite over 100 trials per task: mean 0.81 vs 0.68, driven by two_arm_handover going from 0.20 to 0.92. Not uniform — two_arm_lift is slightly worse (0.71 vs 0.74) and nut_assembly remains near-unsolved at 0.09.",
      "BEHAVIOR-1K over 25 seeds: radio pickup 0.88 task success against a human baseline of 0.36 and CaP-Agent0’s 0.56; soda can 0.88 vs human 0.72.",
      "Zero-shot transfer scales with library size on held-out long-horizon tasks: 0.047 at N=0, 0.137 at N=25, 0.215 at N=50, 0.305 at N=90, against 0.038 for CaP-Agent0 with retries.",
      "Real bimanual YAM station: tokens-to-first-success drop 41% / 89% / 76% across three tasks, and the open-drawer task goes from 0/20 to 11/20 successes when sim-discovered skills are supplied.",
      "Ablation on LIBERO-Pro macro-average: 14% with neither component, 62% with the execution engine, 72% with engine plus evolutionary search."
    ],
    limitations: [
      "The authors state it is not yet a fully autonomous real-world lifelong learner: real deployment still needs robust success detection, safe reset, safety monitoring and calibration maintenance.",
      "The loop depends on a frozen frontier LLM (Claude Opus 4.6 with a 1M-token context) and they have not verified that smaller or weaker models can sustain the same debugging loop.",
      "Programs are written against a predefined primitive API; a task needing sensing, control or interaction outside those primitives must be approximated inefficiently or the API extended by a human.",
      "Skill-library memory management is unsolved — entries can become stale, overly specific, redundant or misleading, and retrieval, pruning, ranking and re-validation are named as future work.",
      "The debug-and-search loop is compute-intensive, consuming many LLM calls and rollouts per task; scaling to very large task suites needs cheaper inference or more sample-efficient search."
    ],
    takeaway: [
      "<strong>Classification:</strong> an agentic code-as-policy system with persistent cross-task memory — not a learned policy, and not a new RL algorithm.",
      "<strong>Read it for:</strong> the trace-engine design and the evidence that fine-grained failure attribution (14% → 62%) dominates clever search (62% → 72%), plus the library-size scaling curve as a concrete measure of compounding experience.",
      "<strong>Read alongside:</strong> CaP-X, whose CaP-Gym it builds on and whose CaP-Agent0 is its baseline, and ENPIRE, which pushes the same agentic loop onto real hardware."
    ],
    links: [
      {label:"arXiv",url:"https://arxiv.org/abs/2607.00272"},
      {label:"PDF",url:"https://arxiv.org/pdf/2607.00272"},
      {label:"Project",url:"https://research.nvidia.com/labs/gear/aspire/"},
      {label:"Code",url:"https://github.com/NVlabs/ASPIRE"}
    ]
  },

  "capx": {
    shortTitle: "CaP-X",
    title: "CaP-X: A Framework for Benchmarking and Improving Coding Agents for Robot Manipulation",
    venue: "arXiv 2026",
    badges: ["code-as-policy", "benchmark", "test-time scaling", "GRPO sim-to-real"],
    figure: "../overview_assets/capx.png",
    figureCaption: "Task success over model release date across 7 tasks and 12 models against human-written programs, above the CaP-Gym / CaP-Bench / CaP-Agent0 stack.",
    tldr: "A measuring apparatus for code-as-policy agents — CaP-Gym, a REPL environment over 187 manipulation tasks, and CaP-Bench, which sweeps abstraction, interaction and perceptual grounding — plus two answers built from what it reveals: CaP-Agent0, training-free, and CaP-RL, a post-trained 7B coder. The organising finding is that frontier models still trail human experts at low-level robot code, and that interaction budget closes the gap far more than nicer primitives do.",
    problem: [
      "Code-as-policy results had been reported anecdotally, without a controlled way to separate what the agent contributes from what human-designed primitives contribute.",
      "High-level primitives flatter an agent and, in the authors’ words, impose a generality ceiling that masks failures in low-level reasoning.",
      "It was unclear whether the shortfall of coding agents is a reasoning limit or simply a limit on how much interaction and visual grounding they are given."
    ],
    output: [
      "CaP-Gym: a hierarchical control framework on the Gymnasium interface binding the environment loop to a stateful code executor, exposed as a Read-Eval-Print Loop over 187 tasks.",
      "CaP-Bench: eight tiers crossing abstraction level, single- vs multi-turn interaction and perceptual grounding, with a measured human-expert baseline.",
      "CaP-Agent0, a training-free agent, and CaP-RL, a GRPO post-trained Qwen2.5-Coder-7B-Instruct that transfers sim-to-real."
    ],
    pipeline: [
      {name:"CaP-Gym environment", text:"Integrates 187 tasks — Robosuite (7), LIBERO-PRO (130) and BEHAVIOR (50) — covering tabletop, bimanual and mobile manipulation. Perception primitives include SAM3 for language-conditioned segmentation and Molmo 2 for open-vocabulary pointing, alongside OpenCV and Open3D; control primitives include motion planners and IK solvers such as PyRoki, so the agent reasons in Cartesian space while collision checking, reachability and action-space transforms are delegated."},
      {name:"Abstraction axis", text:"The same task is solvable with human-designed high-level primitives such as stack_objs_in_order(), or with atomic ones such as solve_ik() and sam3_text_prompt(). Making this a controlled variable is what exposes the low-level reasoning gap."},
      {name:"Tier sweep", text:"S1–S4 are single-turn: privileged state with high-level primitives, noisy perception with high-level primitives, low-level primitives with usage examples, low-level primitives without examples. M1–M4 are multi-turn: text-only execution feedback, raw RGB observations, the Visual Differencing Module, and low-level primitives with visual differencing. Seven core tasks, 100 trials per tier, 12 models."},
      {name:"Visual Differencing Module", text:"Rather than interleaving raw frames, a VLM converts observations into structured natural language — a scene description on the first turn, then an explicit description of what changed between the previous and current observation."},
      {name:"Skill synthesis and ensembling", text:"Recurring successful function definitions are harvested from rollouts into a library of 9 verified task-agnostic primitives; parallel ensembled reasoning issues 9 queries, either to one model or 3 each to GPT-5.2, Claude Opus 4.5 and Gemini-3-Pro, with temperature variation for output diversity."},
      {name:"CaP-RL post-training", text:"GRPO on Qwen2.5-Coder-7B-Instruct over Cube Lift, Cube Stack and Spill Wipe, deliberately using the privileged state-based APIs of tier S1 so that perception and control error do not compound during training."}
    ],
    methodDetails: [
      {name:"The human baseline is measured, not assumed", text:"Seven of the authors, each with 2+ years of robotics experience, wrote programs at tier S4 (low-level primitives, no examples) and averaged 88.5% single-turn success. Every model comparison is against that number rather than against another model."},
      {name:"Why multi-turn helps so much", text:"Text-only execution traces already let agents introspect state — they proactively inject diagnostic print statements to surface hidden symbolic variables, then verify and retry. Visual differencing adds what stdout cannot show, and beats both raw image interleaving and execution-only feedback across all tasks."},
      {name:"The result that reframes the field", text:"Agents on low-level primitives with multi-turn feedback (M4) not only surpass high-level single-turn (S2) but reach parity with high-level multi-turn (M3). The ceiling was the interaction budget, not the API abstraction."},
      {name:"What survives sim-to-real", text:"The paper’s explanation for its small sim-to-real gap is that the transferred object is the code-as-action-space: the agent learns to compose perception and control tools that are fixed across simulation and reality, so nothing embodiment-specific has to cross the boundary."}
    ],
    equations: [
      {
        name:"Multi-turn code-as-policy loop (tiers M1–M4)",
        formula:"c_t   ← LLM( task, API, {c_i, r_i}_{i<t}, d_t )\nr_t   ← Exec(c_t)            // stdout / stderr / return status\nd_t   ← VDM(o_{t-1}, o_t)    // structured language description of the change\nrepeat until verified success or turn budget exhausted",
        meaning:"Each turn the agent emits a program, receives structured execution feedback and a language description of what visibly changed, and revises. The tiers differ only in which of r_t and d_t are available and in whether the API is high- or low-level."
      },
      {
        name:"Visual differencing",
        formula:"t = 1 :  d_1 = VLM_describe(o_1)\nt > 1 :  d_t = VLM_diff(o_{t-1}, o_t)",
        meaning:"The first turn grounds the scene; every later turn reports only the delta. Converting pixels to structured text before they reach the coding agent outperforms handing it the raw frames."
      },
      {
        name:"Parallel ensembled reasoning",
        formula:"single-model : 9 samples from one model\nmulti-model  : 3 samples each from {GPT-5.2, Claude Opus 4.5, Gemini-3-Pro}\nselect by execution verification",
        meaning:"Nine independent attempts with temperature variation, resolved by which program actually verifies in the environment — test-time compute spent on breadth rather than on longer single chains."
      }
    ],
    novelty: [
      "<strong>Abstraction as a controlled variable:</strong> separating what the agent contributes from what the primitive library contributes, which anecdotal code-as-policy demos conflate.",
      "<strong>A real human-expert baseline (88.5% at S4):</strong> the comparison target is people writing the same low-level programs, not another model.",
      "<strong>Visual differencing instead of raw frames:</strong> structured language deltas beat image interleaving for a coding agent.",
      "<strong>Evidence that interaction beats abstraction:</strong> low-level plus multi-turn reaches high-level multi-turn parity, relocating the bottleneck from API design to interaction budget.",
      "<strong>Code-as-action-space as the transfer mechanism:</strong> a 7B coder post-trained in sim holds up on real hardware because the tools are identical on both sides."
    ],
    comparison: {
      headers:["Task", "Base 7B", "CaP-RL (sim)", "Human (sim)", "CaP-RL (real)", "Human (real)"],
      rows:[
        ["Cube Lift", "25%", "<strong>80%</strong>", "93%", "84%", "92%"],
        ["Cube Stack", "4%", "<strong>44%</strong>", "73%", "76%", "84%"],
        ["Spill Wipe", "30%", "<strong>93%</strong>", "100%", "—", "—"]
      ]
    },
    evidence: [
      "Human expert baseline: 88.5% average single-turn success at tier S4, from 7 authors with 2+ years of robotics experience. No frontier model among the 12 evaluated matches it.",
      "Success rises monotonically with primitive abstraction, but M4 (low-level plus multi-turn with visual differencing) surpasses S2 and reaches parity with M3.",
      "CaP-Agent0, operating only on low-level primitives, matches or exceeds human-written programs on 4 of 7 tasks.",
      "BEHAVIOR mobile manipulation: CaP-Agent0 reaches 80% on Pick up Radio against a human 36%, and ties at 72% on Pick up Soda Can.",
      "LIBERO-PRO against trained VLAs without any task-specific training data: libero-object under position perturbation 0.22 for CaP-Agent0 vs 0.17 for π0.5, and it is notably more robust to instruction variation where VLAs degrade under task perturbation.",
      "CaP-RL over 100 sim trials: Cube Lift 25% → 80%, Cube Stack 4% → 44%, Spill Wipe 30% → 93%. Over 25 real trials on a Franka Emika: Cube Lift 84%, Cube Stack 76%."
    ],
    limitations: [
      "There is no dedicated limitations section; the constraints below are read off the setup and appendices.",
      "RL post-training was restricted to privileged state-based APIs at tier S1 to avoid compounding perception and control error, so behaviour under real perception noise is less established.",
      "The 9 task-agnostic skill primitives were synthesised from S3 rollouts across the 12 models on the 7 Robosuite tasks, so their coverage is bounded by that seed set.",
      "Evaluating all 12 models over broader task distributions is called prohibitively expensive, so the wider VLA comparisons lean on CaP-Agent0 alone rather than the full model sweep.",
      "Real-world results are demonstrations on specific tasks and embodiments rather than a quantified sweep across conditions."
    ],
    takeaway: [
      "<strong>Classification:</strong> a benchmark and framework paper that also ships two agents — the contribution is the controlled measurement, and CaP-Agent0 / CaP-RL are what the measurement implies.",
      "<strong>Read it for:</strong> the tier design, the 88.5% human baseline, and the M4-reaches-M3 result, which is the strongest available argument that code-as-policy is interaction-limited rather than abstraction-limited.",
      "<strong>Read alongside:</strong> ASPIRE, which takes CaP-Gym as its substrate and CaP-Agent0 as its baseline, and adds persistence across tasks."
    ],
    links: [
      {label:"arXiv",url:"https://arxiv.org/abs/2603.22435"},
      {label:"PDF",url:"https://arxiv.org/pdf/2603.22435"},
      {label:"Code",url:"https://github.com/capgym/cap-x"}
    ]
  }
};
