// Paper database for the local browser (index.html).
// Edit this file to add papers, then commit. No build step needed.
window.PAPERS = [
  // ===== Dexterous manipulation reading list (repo root) =====
  {
    title: "Twisting Lids Off with Two Hands",
    collection: "Dex Manipulation",
    file: "2024_Berkeley_TwistingLidsOffTwoHands.pdf",
    arxiv: "https://arxiv.org/abs/2403.02338",
    project: "https://toruowo.github.io/bimanual-twist/",
    venue: "CoRL 2025",
    tags: ["Berkeley", "RL", "sim-to-real", "bimanual", "bottle-cap", "Allegro", "manipulation"]
  },
  {
    title: "Visual Dexterity: In-hand Reorientation of Novel and Complex Object Shapes",
    image: "https://taochenshh.github.io/projects/files/visual_dexterity/teaser.png",
    collection: "Dex Manipulation",
    file: "2023_MIT_VisualDexterity_SciRobotics.pdf",
    arxiv: "https://arxiv.org/abs/2211.11744",
    project: "https://taochenshh.github.io/projects/visual-dexterity",
    venue: "Science Robotics 2023",
    tags: ["MIT", "RL", "sim-to-real", "in-hand-reorientation", "manipulation"]
  },
  {
    title: "DeXtreme: Transfer of Agile In-hand Manipulation from Simulation to Reality",
    collection: "Dex Manipulation",
    file: "2023_NVIDIA_DeXtreme.pdf",
    arxiv: "https://arxiv.org/abs/2210.13702",
    project: "https://dextreme.org",
    venue: "ICRA 2023",
    tags: ["NVIDIA", "RL", "sim-to-real", "in-hand-reorientation", "Allegro", "manipulation"]
  },
  {
    title: "Sequential Dexterity: Chaining Dexterous Policies for Long-Horizon Manipulation",
    image: "https://sequential-dexterity.github.io/assets/images/method_v8.png",
    collection: "Dex Manipulation",
    file: "2023_Stanford_SequentialDexterity.pdf",
    arxiv: "https://arxiv.org/abs/2309.00987",
    project: "https://sequential-dexterity.github.io",
    venue: "CoRL 2023",
    tags: ["Stanford", "RL", "tool-use", "long-horizon", "Allegro", "manipulation"]
  },
  {
    title: "Bimanual Dexterity for Complex Tasks (Bidex)",
    image: "https://bidex-teleop.github.io/resources/operator_tabletop_1.gif",
    collection: "Dex Manipulation",
    file: "2024_CMU_Bidex.pdf",
    arxiv: "https://arxiv.org/abs/2411.13677",
    project: "https://bidex-teleop.github.io",
    venue: "CoRL 2024",
    tags: ["CMU", "teleoperation", "bimanual", "LEAP", "data-collection"]
  },
  {
    title: "Learning Dexterous In-Hand Manipulation",
    collection: "Dex Manipulation",
    file: "2020_OpenAI_LearningDexterousInHand.pdf",
    arxiv: "https://arxiv.org/abs/1808.00177",
    project: "https://openai.com/index/learning-dexterity",
    venue: "IJRR 2020",
    tags: ["OpenAI", "RL", "sim-to-real", "in-hand-reorientation", "Shadow", "manipulation"]
  },
  {
    title: "Solving Rubik's Cube with a Robot Hand",
    collection: "Dex Manipulation",
    file: "2019_OpenAI_RubiksCube.pdf",
    arxiv: "https://arxiv.org/abs/1910.07113",
    project: null,
    venue: "arXiv 2019",
    tags: ["OpenAI", "RL", "sim-to-real", "in-hand-reorientation", "Shadow", "manipulation"]
  },
  {
    title: "Dexterous Manipulation with Deep RL: Efficient, General, and Low-Cost",
    collection: "Dex Manipulation",
    file: "2019_Berkeley_DexterousManipDeepRL.pdf",
    arxiv: "https://arxiv.org/abs/1810.06045",
    project: null,
    venue: "ICRA 2019",
    tags: ["Berkeley", "RL", "real-world", "valve", "door", "Allegro", "manipulation"]
  },

  // ----- Dexterous manipulation (in-hand reorientation, tactile, learning-from-human, contact-rich) -----
  // Snowballed from RobustDexGrasp/DexGraspNet2 references. Link-only; cites = Semantic Scholar.
  {
    title: "A System for General In-Hand Object Re-Orientation",
    collection: "Dex Manipulation", file: null, cites: 312,
    arxiv: "https://arxiv.org/abs/2111.03043", project: null, venue: "CoRL 2021",
    desc: "RL system reorienting 2,000+ objects in-hand (facing up or down) via a gravity curriculum and a vision-based student policy.",
    tags: ["MIT", "RL", "sim-to-real", "in-hand-reorientation", "manipulation"]
  },
  {
    title: "In-Hand Object Rotation via Rapid Motor Adaptation",
    collection: "Dex Manipulation", file: null, cites: 184,
    arxiv: "https://arxiv.org/abs/2210.04887", project: null, venue: "CoRL 2022",
    desc: "Learns continuous z-axis in-hand rotation over diverse objects via rapid motor adaptation, transferring to a real hand from proprioception.",
    tags: ["Berkeley", "RL", "sim-to-real", "in-hand-reorientation", "manipulation"]
  },
  {
    title: "General In-Hand Object Rotation with Vision and Touch",
    collection: "Dex Manipulation", file: null, cites: 167,
    arxiv: "https://arxiv.org/abs/2309.09979", project: null, venue: "CoRL 2023",
    desc: "Rotates objects about a chosen axis using fused vision and touch, distilled from a privileged sim teacher to a real multi-finger hand.",
    tags: ["RL", "sim-to-real", "in-hand-reorientation", "tactile", "manipulation"]
  },
  {
    title: "Rotating without Seeing: Towards In-hand Dexterity through Touch",
    collection: "Dex Manipulation", file: null, cites: 149,
    arxiv: "https://arxiv.org/abs/2303.10880", project: null, venue: "RSS 2023",
    desc: "Touch-only in-hand rotation with dense binary tactile sensing over the hand, trained in sim and transferred to novel objects.",
    tags: ["UCSD", "RL", "sim-to-real", "in-hand-reorientation", "tactile"]
  },
  {
    title: "AnyRotate: Gravity-Invariant In-Hand Object Rotation with Sim-to-Real Touch",
    collection: "Dex Manipulation", file: null, cites: 55,
    arxiv: "https://arxiv.org/abs/2405.07391", project: null, venue: "CoRL 2024",
    desc: "Gravity-invariant multi-axis in-hand rotation using dense rich tactile sensing, sim-to-real across arbitrary rotation axes.",
    tags: ["RL", "sim-to-real", "in-hand-reorientation", "tactile"]
  },
  {
    title: "DexMV: Imitation Learning for Dexterous Manipulation from Human Videos",
    collection: "Dex Manipulation", file: null, cites: 309,
    arxiv: "https://arxiv.org/abs/2108.05877", project: null, venue: "ECCV 2022",
    desc: "Extracts hand-object motion from human videos and retargets it to imitation-learn dexterous manipulation policies (relocate, pour, place).",
    tags: ["UCSD", "imitation-learning", "human-video", "dexterous", "manipulation"]
  },
  {
    title: "From One Hand to Multiple Hands: Imitation Learning for Dexterous Manipulation from Single-Camera Teleoperation",
    collection: "Dex Manipulation", file: null, cites: 154,
    arxiv: "https://arxiv.org/abs/2204.12490", project: null, venue: "RA-L 2022",
    desc: "Single-camera teleoperation to collect demos and imitation-learn dexterous manipulation, transferring across hand embodiments.",
    tags: ["UCSD", "imitation-learning", "teleoperation", "dexterous", "manipulation"]
  },
  {
    title: "VideoDex: Learning Dexterity from Internet Videos",
    collection: "Dex Manipulation", file: null, cites: 151,
    arxiv: "https://arxiv.org/abs/2212.04498", project: null, venue: "CoRL 2022",
    desc: "Leverages human internet videos as visual and action priors to learn dexterous manipulation on a real robot hand.",
    tags: ["CMU", "imitation-learning", "human-video", "dexterous", "manipulation"]
  },
  {
    title: "Dexterous Imitation Made Easy: A Learning-Based Framework for Efficient Dexterous Manipulation",
    collection: "Dex Manipulation", file: null, cites: 144,
    arxiv: "https://arxiv.org/abs/2203.13251", project: null, venue: "ICRA 2023",
    desc: "Low-cost nearest-neighbor imitation framework (DIME) learning dexterous manipulation from a handful of teleoperated demos.",
    tags: ["NYU", "imitation-learning", "teleoperation", "dexterous", "manipulation"]
  },
  {
    title: "State-Only Imitation Learning for Dexterous Manipulation",
    collection: "Dex Manipulation", file: null, cites: 144,
    arxiv: "https://arxiv.org/abs/2004.04650", project: null, venue: "IROS 2021",
    desc: "Imitation learning for dexterous manipulation from state-only demonstrations (no expert actions) via learned inverse dynamics.",
    tags: ["Berkeley", "imitation-learning", "dexterous", "manipulation"]
  },
  {
    title: "Robotic Telekinesis: Learning a Robotic Hand Imitator by Watching Humans on Youtube",
    collection: "Dex Manipulation", file: null, cites: 143,
    arxiv: "https://arxiv.org/abs/2202.10448", project: null, venue: "RSS 2022",
    desc: "Learns a human-to-robot hand-arm retargeting from internet videos enabling low-cost real-time teleoperation of a dexterous hand.",
    tags: ["CMU", "imitation-learning", "human-video", "teleoperation", "dexterous"]
  },
  {
    title: "Object-Centric Dexterous Manipulation from Human Motion Data",
    collection: "Dex Manipulation", file: null, cites: 66,
    arxiv: "https://arxiv.org/abs/2411.04005", project: null, venue: "CoRL 2024",
    desc: "Learns dexterous manipulation from human motion-capture data via an object-centric representation, transferring to a real hand.",
    tags: ["imitation-learning", "human-video", "dexterous", "manipulation"]
  },
  {
    title: "Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning",
    collection: "Dex Manipulation", file: null, cites: 194,
    arxiv: "https://arxiv.org/abs/2206.08686", project: null, venue: "NeurIPS 2022",
    desc: "Bi-DexHands benchmark of 20 bimanual dexterous tasks with massively parallel RL baselines spanning human developmental skills.",
    tags: ["RL", "bimanual", "dexterous", "benchmark", "manipulation"]
  },
  {
    title: "DexMimicGen: Automated Data Generation for Bimanual Dexterous Manipulation via Imitation Learning",
    collection: "Dex Manipulation", file: null, cites: 146,
    arxiv: "https://arxiv.org/abs/2410.24185", project: null, venue: "ICRA 2025",
    desc: "Automatically generates large bimanual dexterous demonstration datasets from a few human demos for scalable imitation learning.",
    tags: ["NVIDIA", "imitation-learning", "bimanual", "dexterous", "data-collection"]
  },
  {
    title: "DexPBT: Scaling up Dexterous Manipulation for Hand-Arm Systems with Population Based Training",
    collection: "Dex Manipulation", file: null, cites: 40,
    arxiv: "https://arxiv.org/abs/2305.12127", project: null, venue: "RSS 2023",
    desc: "Scales dexterous hand-arm manipulation in sim via population-based training, solving regrasping, throwing, and reorientation.",
    tags: ["NVIDIA", "RL", "dexterous", "scaling", "manipulation"]
  },
  {
    title: "Learning Visuotactile Skills with Two Multifingered Hands",
    collection: "Dex Manipulation", file: null, cites: 131,
    arxiv: "https://arxiv.org/abs/2404.16823", project: null, venue: "arXiv 2024",
    desc: "Bimanual visuotactile teleoperation system and policies learning contact-rich skills with two multifingered hands.",
    tags: ["bimanual", "tactile", "dexterous", "imitation-learning", "manipulation"]
  },
  {
    title: "Dexterity from Touch: Self-Supervised Pre-Training of Tactile Representations with Robotic Play",
    collection: "Dex Manipulation", file: null, cites: 100,
    arxiv: "https://arxiv.org/abs/2303.12076", project: null, venue: "CoRL 2023",
    desc: "Self-supervised pre-training of tactile representations from robotic play (T-Dex) for downstream dexterous manipulation.",
    tags: ["NYU", "self-supervised", "tactile", "dexterous", "manipulation"]
  },
  {
    title: "See to Touch: Learning Tactile Dexterity through Visual Incentives",
    collection: "Dex Manipulation", file: null, cites: 57,
    arxiv: "https://arxiv.org/abs/2309.12300", project: null, venue: "ICRA 2024",
    desc: "Uses visual rewards to optimize tactile-based dexterous policies (TAVI), improving contact-rich manipulation on a real hand.",
    tags: ["NYU", "RL", "tactile", "dexterous", "manipulation"]
  },
  {
    title: "Global Planning for Contact-Rich Manipulation via Local Smoothing of Quasi-dynamic Contact Models",
    collection: "Dex Manipulation", file: null, cites: 171,
    arxiv: "https://arxiv.org/abs/2206.10787", project: null, venue: "T-RO 2022",
    desc: "RRT-style global planner for contact-rich manipulation using local smoothing of quasi-dynamic contact dynamics.",
    tags: ["MIT", "TAMP", "contact-rich", "manipulation"]
  },
  {
    title: "Learning Dexterous Manipulation from Exemplar Object Trajectories and Pre-Grasps",
    collection: "Dex Manipulation", file: null, cites: 61,
    arxiv: "https://arxiv.org/abs/2209.11221", project: null, venue: "ICRA 2023",
    desc: "Generates dexterous manipulation via pre-grasps and exemplar object trajectories (PGDM), cutting exploration burden for RL.",
    tags: ["RL", "dexterous", "manipulation"]
  },
  {
    title: "Sampling-based Exploration for Reinforcement Learning of Dexterous Manipulation",
    collection: "Dex Manipulation", file: null, cites: 46,
    arxiv: "https://arxiv.org/abs/2303.03486", project: null, venue: "RSS 2023",
    desc: "Sampling-based exploration that bootstraps RL for hard dexterous manipulation with sparse contacts and long horizons.",
    tags: ["RL", "dexterous", "manipulation"]
  },
  {
    title: "Dextrous Tactile In-Hand Manipulation Using a Modular Reinforcement Learning Architecture",
    collection: "Dex Manipulation", file: null, cites: 45,
    arxiv: "https://arxiv.org/abs/2303.04705", project: null, venue: "ICRA 2023",
    desc: "Modular RL architecture for tactile in-hand manipulation, decoupling control sub-problems for robust sim-to-real.",
    tags: ["RL", "tactile", "in-hand-reorientation", "dexterous"]
  },
  {
    title: "Enhancing Dexterity in Robotic Manipulation via Hierarchical Contact Exploration",
    collection: "Dex Manipulation", file: null, cites: 42,
    arxiv: "https://arxiv.org/abs/2307.00383", project: null, venue: "RA-L 2023",
    desc: "Hierarchical contact-mode exploration with trajectory optimization for multi-finger dexterous manipulation.",
    tags: ["RL", "contact-rich", "dexterous", "manipulation"]
  },
  {
    title: "Dexterous Manipulation from Images: Autonomous Real-World RL via Substep Guidance",
    collection: "Dex Manipulation", file: null, cites: 33,
    arxiv: "https://arxiv.org/abs/2212.09902", project: null, venue: "ICRA 2023",
    desc: "Autonomous real-world RL learning image-based dexterous manipulation via human-provided substep guidance and resets.",
    tags: ["Berkeley", "RL", "real-world", "dexterous", "manipulation"]
  },
  {
    title: "Solving Challenging Dexterous Manipulation Tasks With Trajectory Optimisation and Reinforcement Learning",
    collection: "Dex Manipulation", file: null, cites: 32,
    arxiv: "https://arxiv.org/abs/2009.05104", project: null, venue: "ICML 2021",
    desc: "Combines trajectory optimization with RL to solve challenging high-DoF dexterous manipulation tasks in simulation.",
    tags: ["RL", "dexterous", "manipulation"]
  },
  {
    title: "Dexterous Manipulation through Imitation Learning: A Survey",
    collection: "Survey",
    file: "SURVEY_2025_DexManip_ImitationLearning.pdf",
    arxiv: "https://arxiv.org/abs/2504.03515",
    project: null,
    venue: "IEEE Xplore 2025",
    tags: ["survey", "imitation-learning", "dexterous"]
  },
  {
    title: "Interactive Imitation Learning for Dexterous Robotic Manipulation: A Survey",
    collection: "Survey",
    file: "SURVEY_2025_KIT_InteractiveIL_Dexterous.pdf",
    arxiv: "https://arxiv.org/abs/2506.00098",
    project: null,
    venue: "KIT 2025",
    tags: ["survey", "imitation-learning", "dexterous", "interactive"]
  },

  // ===== AutoDex related works: autonomous data collection =====
  {
    title: "A Scalable Platform for Robot Learning and Physical Skill Data Collection",
    collection: "Related: autonomous",
    file: "related_works/autonomous/A_Scalable_Platform_for_Robot_Learning_and_Physical_Skill_Data_Collection.pdf",
    arxiv: null,
    project: null,
    venue: "IROS 2024 (TUM)",
    tags: ["TUM", "data-collection", "system", "autonomous"]
  },
  {
    title: "Augmentation Enables One-Shot Generalization in LfD for Contact-Rich Manipulation",
    collection: "Related: autonomous",
    file: "related_works/autonomous/Augmentation_OneShot_Li2023.pdf",
    arxiv: "https://arxiv.org/abs/2210.07015",
    project: "https://sites.google.com/view/rbosalfdec/home",
    venue: "2023",
    tags: ["imitation-learning", "one-shot", "contact-rich", "augmentation", "data-collection"]
  },
  {
    title: "AutoRT: Embodied Foundation Models for Large Scale Orchestration of Robotic Agents",
    image: "https://auto-rt.github.io/static/images/AutoRT_viz.gif",
    collection: "Related: autonomous",
    file: "related_works/autonomous/AutoRT_2024.pdf",
    arxiv: "https://arxiv.org/abs/2401.12963",
    project: "https://auto-rt.github.io/",
    venue: "2024",
    tags: ["DeepMind", "data-collection", "foundation-model", "autonomous", "VLA"]
  },
  {
    title: "Coarse-to-Fine Imitation Learning: Robot Manipulation from a Single Demonstration",
    collection: "Related: autonomous",
    file: "related_works/autonomous/CoarseToFine_Johns2021.pdf",
    arxiv: "https://arxiv.org/abs/2105.06411",
    project: "https://www.robot-learning.uk/coarse-to-fine-imitation-learning",
    venue: "ICRA 2021",
    tags: ["imitation-learning", "one-shot", "autonomous", "manipulation"]
  },
  {
    title: "Data Scaling Laws in Imitation Learning for Robotic Manipulation",
    image: "https://data-scaling-laws.github.io/media/images/title-1.jpg",
    collection: "Related: autonomous",
    file: "related_works/autonomous/DataScalingLaws_Lin2024.pdf",
    arxiv: "https://arxiv.org/abs/2410.18647",
    project: "https://data-scaling-laws.github.io/",
    venue: "2024",
    tags: ["imitation-learning", "scaling", "dataset", "data-collection"]
  },
  {
    title: "DexScale: Automating Data Scaling for Sim2Real Generalizable Robot Control",
    image: "https://edem-ai.github.io/dexscale.github.io/static/images/dexsim-flowchart.png",
    collection: "Related: autonomous",
    file: "related_works/autonomous/DexScale.pdf",
    arxiv: null,
    project: "https://edem-ai.github.io/dexscale.github.io/",
    venue: "ICML 2025",
    tags: ["sim-to-real", "scaling", "data-collection", "dexterous"]
  },
  {
    title: "The Ingredients of Real-World Robotic Reinforcement Learning",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUCbaot-sy9YPyd2Xe1c_-W2N-VMJ2U05hGei2nnOfazz5mK5dE0uEbPDe66u2B2o1oWCojlFPdsYJpeFZQEB90JgNRbp1vMTcgpvkMr6kl02n-py1YIyA1RG7GYKMdKDV8RvRzwtzXD0DI5b8J6IDaAS2w1L3bkF04Os5CSsrjYnOyFf-aBG7EMGCK0UcPlWD7MC0l-RkVGws0_0PI=w1280",
    collection: "Related: autonomous",
    file: "related_works/autonomous/Ingredients_RealWorldRL_Zhu2020.pdf",
    arxiv: "https://arxiv.org/abs/2004.12570",
    project: "https://sites.google.com/view/realworld-rl/",
    venue: "ICLR 2020",
    tags: ["RL", "real-world", "reset-free", "dexterous", "D'Claw"]
  },
  {
    title: "Learning Hand-Eye Coordination for Robotic Grasping with Large-Scale Data Collection",
    collection: "Related: autonomous",
    file: "related_works/autonomous/Learning Hand-Eye Coordination for Robotic Grasping with Large-Scale Data Collection.pdf",
    arxiv: "https://arxiv.org/abs/1603.02199",
    project: null,
    venue: "ISER 2016",
    tags: ["Google", "self-supervised", "grasping", "data-collection", "parallel-jaw"]
  },
  {
    title: "End-to-End Training of Deep Visuomotor Policies",
    collection: "Related: autonomous",
    file: "related_works/autonomous/Levine2016_E2E_Visuomotor.pdf",
    arxiv: "https://arxiv.org/abs/1504.00702",
    project: null,
    venue: "JMLR 2016",
    tags: ["RL", "imitation-learning", "visuomotor", "Berkeley"]
  },
  {
    title: "MT-Opt: Continuous Multi-Task Robotic RL at Scale",
    image: "https://karolhausman.github.io/mt-opt/img/arm-farm.gif",
    collection: "Related: autonomous",
    file: "related_works/autonomous/MT-Opt_Kalashnikov2021.pdf",
    arxiv: "https://arxiv.org/abs/2104.08212",
    project: "https://karolhausman.github.io/mt-opt/",
    venue: "2021",
    tags: ["Google", "RL", "self-supervised", "data-collection", "multi-task", "scaling"]
  },
  {
    title: "Reset-Free Reinforcement Learning via Multi-Task Learning (MTRF)",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUC_m8UaEQj0SlOlnvu1xq1cabgiO6_p3Fv4jH6EtnvD1W1t5MdiHe9e28Li4n5YN_r-Zc91H95u_3FjqIBjkWs2Wt5T6szDdLH_aA7lgpzb4BJs9xp99G1kv83U_Yn7Bewc-7UZ-Aed9w-jR97plF954ic8Q2HLzwIq7vCULatGz1J8B_IqzrNGkXetxGUVM_G9vS3YzSTE3wLaBkkaMXsDBZlvT2AEDieHAPXMgPw=w1280",
    collection: "Related: autonomous",
    file: "related_works/autonomous/MTRF_Gupta2021.pdf",
    arxiv: "https://arxiv.org/abs/2104.11203",
    project: "https://sites.google.com/view/mtrf",
    venue: "ICRA 2021",
    tags: ["RL", "reset-free", "multi-task", "dexterous", "D'Claw"]
  },
  {
    title: "OPTIMUS: Imitating Task and Motion Planning with Visuomotor Transformers",
    image: "https://mihdalal.github.io/optimus/resources/optimus/main.png",
    collection: "Related: autonomous",
    file: "related_works/autonomous/OPTIMUS_Dalal2023.pdf",
    arxiv: "https://arxiv.org/abs/2305.16309",
    project: "https://mihdalal.github.io/optimus/",
    venue: "CoRL 2023",
    tags: ["imitation-learning", "TAMP", "data-collection", "autonomous"]
  },
  {
    title: "Supersizing Self-Supervision: Learning to Grasp from 50K Tries and 700 Robot Hours",
    collection: "Related: autonomous",
    file: "related_works/autonomous/pinto.pdf",
    arxiv: "https://arxiv.org/abs/1509.06825",
    project: null,
    venue: "ICRA 2016",
    tags: ["CMU", "self-supervised", "grasping", "data-collection", "parallel-jaw"]
  },
  {
    title: "QT-Opt: Scalable Deep RL for Vision-Based Robotic Manipulation",
    collection: "Related: autonomous",
    file: "related_works/autonomous/QT-Opt.pdf",
    arxiv: "https://arxiv.org/abs/1806.10293",
    project: "https://sites.google.com/view/qtopt/home",
    venue: "CoRL 2018",
    tags: ["Google", "RL", "self-supervised", "grasping", "data-collection", "scaling"]
  },
  {
    title: "Real2Render2Real: Scaling Robot Data Without Dynamics Simulation or Robot Hardware",
    image: "https://real2render2real.com/data/r2r2r_fig_no_bg.png",
    collection: "Related: autonomous",
    file: "related_works/autonomous/Real2Render2Real_Yu2025.pdf",
    arxiv: "https://arxiv.org/abs/2505.09601",
    project: "https://real2render2real.com/",
    venue: "2025",
    tags: ["data-collection", "sim-to-real", "scaling", "autonomous", "parallel-jaw"]
  },
  {
    title: "RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation",
    image: "https://lh3.googleusercontent.com/NNgVjChgbgUVdjInUJKoYl34zgtafd8P0PbtqIYuccyzcoqg62EZWk2XDpSu7ntT82Adp-9P909yHQvriBiopMD8aOQCxG7eVQV-p4phDzh_Q1me=w1440-h810-n-nu",
    collection: "Related: autonomous",
    file: "related_works/autonomous/robocat.pdf",
    arxiv: "https://arxiv.org/abs/2306.11706",
    project: "https://deepmind.google/blog/robocat-a-self-improving-robotic-agent/",
    venue: "TMLR 2023",
    tags: ["DeepMind", "self-improving", "generalist", "data-collection"]
  },
  {
    title: "Sample Efficient Grasp Learning Using Equivariant Models",
    image: "https://zxp-s-works.github.io/equivariant_grasp_site/images/ASR.png",
    collection: "Related: autonomous",
    file: "related_works/autonomous/sample_efficient.pdf",
    arxiv: "https://arxiv.org/abs/2202.09468",
    project: "https://zxp-s-works.github.io/equivariant_grasp_site/",
    venue: "RSS 2022",
    tags: ["RL", "grasping", "equivariant", "sample-efficient"]
  },
  {
    title: "Self-Improving Robots: End-to-End Autonomous Visuomotor RL (MEDAL++)",
    collection: "Related: autonomous",
    file: "related_works/autonomous/SelfImproving_MEDALpp_Sharma2023.pdf",
    arxiv: "https://arxiv.org/abs/2303.01488",
    project: "https://architsharma97.github.io/self-improving-robots/",
    venue: "RSS 2023",
    tags: ["RL", "reset-free", "self-improving", "autonomous"]
  },
  {
    title: "Robot Learning on the Job: Human-in-the-Loop Autonomy During Deployment (Sirius)",
    image: "https://ut-austin-rpl.github.io/sirius/src/result_22.png",
    collection: "Related: autonomous",
    file: "related_works/autonomous/Sirius_Liu2022.pdf",
    arxiv: "https://arxiv.org/abs/2211.08416",
    project: "https://ut-austin-rpl.github.io/sirius/",
    venue: "RSS 2023",
    tags: ["UT-Austin", "imitation-learning", "human-in-the-loop", "deployment"]
  },
  {
    title: "So You Think You Can Scale Up Autonomous Robot Data Collection?",
    image: "https://autonomous-data-collection.github.io/static/images/expectations-reality.png",
    collection: "Related: autonomous",
    file: "related_works/autonomous/So You Think You Can Scale Up Autonomous Robot Data Collection?.pdf",
    arxiv: "https://arxiv.org/abs/2411.01813",
    project: "https://autonomous-data-collection.github.io/",
    venue: "CoRL 2024",
    tags: ["data-collection", "scaling", "autonomous", "analysis"]
  },
  {
    title: "Working Backwards: Learning to Place by Picking",
    collection: "Related: autonomous",
    file: "related_works/autonomous/working_backward.pdf",
    arxiv: "https://arxiv.org/abs/2312.02352",
    project: null,
    venue: "IROS 2024",
    tags: ["imitation-learning", "reset", "placing", "autonomous"]
  },

  // ===== AutoDex related works: dexterous =====
  {
    title: "Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos",
    image: "https://beingbeyond.github.io/Being-H0/assets/image/being-h0.webp",
    collection: "Related: dexterous",
    file: "related_works/dexterous/being_h0_2507.15597.pdf",
    arxiv: "https://arxiv.org/abs/2507.15597",
    project: "https://beingbeyond.github.io/Being-H0/",
    venue: "2025",
    tags: ["VLA", "human-video", "dexterous", "pretraining"]
  },
  {
    title: "Large Video Planner Enables Generalizable Robot Control",
    image: "https://boyuan.space/large-video-planner/static/images/thumbnail.jpg",
    collection: "Related: dexterous",
    file: "related_works/dexterous/large_video_planner_2512.15840.pdf",
    arxiv: "https://arxiv.org/abs/2512.15840",
    project: "https://scenerepresentations.org/publications/large-video-planner/",
    venue: "2025",
    tags: ["video-planning", "generalist", "manipulation"]
  },

  // ===== AutoDex related works: real =====
  {
    title: "RealDex: Towards Human-like Grasping for Robotic Dexterous Hand",
    image: "https://4dvlab.github.io/RealDex_page/static/images/teaser.png",
    collection: "Related: real",
    file: "related_works/real/realdex.pdf",
    arxiv: "https://arxiv.org/abs/2402.13853",
    project: "https://4dvlab.github.io/RealDex_page/",
    venue: "IJCAI 2024",
    tags: ["dataset", "dexterous", "grasping", "teleoperation", "mocap"]
  },

  // ===== AutoDex related works: data collection systems =====
  {
    title: "DexCap: Scalable Portable Mocap Data Collection for Dexterous Manipulation",
    image: "https://dex-cap.github.io/assets/HIL_method.png",
    collection: "Related: system",
    file: "related_works/system/DexCap_Wang2024.pdf",
    arxiv: "https://arxiv.org/abs/2403.07788",
    project: "https://dex-cap.github.io/",
    venue: "RSS 2024",
    tags: ["Stanford", "teleoperation", "mocap", "dexterous", "data-collection", "system"]
  },
  {
    title: "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset",
    image: "https://droid-dataset.github.io/figures/droid_setup.png",
    collection: "Related: system",
    file: "related_works/system/DROID_Khazatsky2024.pdf",
    arxiv: "https://arxiv.org/abs/2403.12945",
    project: "https://droid-dataset.github.io/",
    venue: "RSS 2024",
    tags: ["dataset", "teleoperation", "data-collection", "system"]
  },
  {
    title: "Mobile ALOHA: Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation",
    image: "https://mobile-aloha.github.io/static/images/preview.gif",
    collection: "Related: system",
    file: "related_works/system/MobileALOHA_Fu2024.pdf",
    arxiv: "https://arxiv.org/abs/2401.02117",
    project: "https://mobile-aloha.github.io/",
    venue: "CoRL 2024",
    tags: ["Stanford", "teleoperation", "bimanual", "imitation-learning", "system"]
  },
  {
    title: "RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot",
    image: "https://rh20t.github.io/static/images/teleop0.png",
    collection: "Related: system",
    file: "related_works/system/RH20T_Fang2023.pdf",
    arxiv: "https://arxiv.org/abs/2307.00595",
    project: "https://rh20t.github.io/",
    venue: "2023",
    tags: ["dataset", "teleoperation", "data-collection", "system"]
  },
  {
    title: "RoboTurk: A Crowdsourcing Platform for Robotic Skill Learning through Imitation",
    image: "https://roboturk.stanford.edu/assets/img/roboturk_2018.png",
    collection: "Related: system",
    file: "related_works/system/RoboTurk_Mandlekar2018.pdf",
    arxiv: "https://arxiv.org/abs/1811.02790",
    project: "https://roboturk.stanford.edu/",
    venue: "CoRL 2018",
    tags: ["Stanford", "teleoperation", "crowdsourcing", "data-collection", "system"]
  },

  // ===== AutoDex related works: misc =====
  {
    title: "MANUS: Markerless Grasp Capture using Articulated 3D Gaussians",
    image: "https://ivl.cs.brown.edu/assets/images/projects/manus/teaser.png",
    collection: "Related: misc",
    file: "related_works/manus.pdf",
    arxiv: "https://arxiv.org/abs/2312.02137",
    project: "https://ivl.cs.brown.edu/research/manus.html",
    venue: "CVPR 2024",
    tags: ["Brown", "mocap", "grasping", "gaussian-splatting", "capture"]
  },

  // ===== Landscape overview: bimanual & dexterous multi-task (arXiv-only, no local PDF) =====
  {
    title: "ALOHA Unleashed: A Simple Recipe for Robot Dexterity",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/aloha_unleashed.html",
    arxiv: "https://arxiv.org/abs/2410.13126",
    project: "https://aloha-unleashed.github.io/",
    venue: "CoRL 2024",
    tags: ["DeepMind", "imitation-learning", "diffusion", "bimanual", "dexterous", "scaling"]
  },
  {
    title: "DexterityGen: Foundation Controller for Unprecedented Dexterity",
    image: "https://zhaohengyin.github.io/dexteritygen/images/idea.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/dexteritygen.html",
    arxiv: "https://arxiv.org/abs/2502.04307",
    project: "https://zhaohengyin.github.io/dexteritygen/",
    venue: "RSS 2025",
    tags: ["Berkeley", "RL", "sim-to-real", "dexterous", "tool-use", "teleoperation"]
  },
  {
    title: "mimic-one: a Scalable Model Recipe for General Purpose Robot Dexterity",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/mimic_one.html",
    arxiv: "https://arxiv.org/abs/2506.11916",
    project: "https://mimicrobotics.github.io/mimic-one/",
    venue: "arXiv 2506.11916 (June 2025)",
    tags: ["diffusion", "imitation-learning", "dexterous", "teleoperation"]
  },
  {
    title: "Towards a Generalizable Bimanual Foundation Policy via Flow-based Video Prediction",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/bimanual_flow_video.html",
    arxiv: "https://arxiv.org/abs/2505.24156",
    project: null,
    venue: "arXiv preprint (2505.24156, May 2025)",
    tags: ["diffusion", "bimanual", "video-prediction", "imitation-learning"]
  },
  {
    title: "Bunny-VisionPro: Real-Time Bimanual Dexterous Teleoperation for Imitation Learning",
    image: "https://dingry.github.io/projects/static/images/bunny_image.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/bunny_visionpro.html",
    arxiv: "https://arxiv.org/abs/2407.03162",
    project: "https://dingry.github.io/projects/bunny_visionpro.html",
    venue: "arXiv (2407.03162, July 2024)",
    tags: ["UCSD", "teleoperation", "bimanual", "dexterous", "imitation-learning"]
  },
  {
    title: "ManipTrans: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning",
    image: "https://maniptrans.github.io/pipeline.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/maniptrans.html",
    arxiv: "https://arxiv.org/abs/2503.21860",
    project: "https://maniptrans.github.io/",
    venue: "CVPR 2025",
    tags: ["RL", "bimanual", "dexterous", "sim-to-real", "retargeting"]
  },
  {
    title: "DexMachina: Functional Retargeting for Bimanual Dexterous Manipulation",
    image: "https://project-dexmachina.github.io/dexmachina-teaser-website.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/dexmachina.html",
    arxiv: "https://arxiv.org/abs/2505.24853",
    project: "https://project-dexmachina.github.io/",
    venue: "ICML 2026 (arXiv 2505.24853, May 2025)",
    tags: ["Stanford", "NVIDIA", "RL", "bimanual", "dexterous", "retargeting"]
  },
  {
    title: "AsymDex: Asymmetry and Relative Coordinates for RL-based Bimanual Dexterity",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/asymdex.html",
    arxiv: "https://arxiv.org/abs/2411.13020",
    project: "https://sites.google.com/view/asymdex-2025/",
    venue: "WCBM @ RSS 2025 (Spotlight); arXiv 2411.13020 (Nov 2024)",
    tags: ["RL", "bimanual", "dexterous"]
  },
  {
    title: "Dynamic Handover: Throw and Catch with Bimanual Hands",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/dynamic_handover.html",
    arxiv: "https://arxiv.org/abs/2309.05655",
    project: "https://binghao-huang.github.io/dynamic_handover/",
    venue: "CoRL 2023",
    tags: ["UCSD", "RL", "bimanual", "dexterous", "sim-to-real"]
  },
  {
    title: "HumanoidGen: Data Generation for Bimanual Dexterous Manipulation via LLM Reasoning",
    image: "https://openhumanoidgen.github.io/static/images/database.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/humanoidgen.html",
    arxiv: "https://arxiv.org/abs/2507.00833",
    project: "https://openhumanoidgen.github.io",
    venue: "NeurIPS 2025",
    tags: ["data-collection", "bimanual", "dexterous", "LLM", "dataset"]
  },
  {
    title: "AnyBimanual: Transferring Unimanual Policy for General Bimanual Manipulation",
    image: "https://anybimanual.github.io/resources/method/pipeline.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/anybimanual.html",
    arxiv: "https://arxiv.org/abs/2412.06779",
    project: "https://anybimanual.github.io/",
    venue: "ICCV 2025",
    tags: ["bimanual", "imitation-learning", "manipulation"]
  },
  {
    title: "PerAct2: Benchmarking and Learning for Robotic Bimanual Manipulation Tasks",
    image: "https://bimanual.github.io/media/figures/system_architecture.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/peract2.html",
    arxiv: "https://arxiv.org/abs/2407.00278",
    project: "http://bimanual.github.io",
    venue: "arXiv 2407.00278 (cs.RO), 2024",
    tags: ["bimanual", "benchmark", "imitation-learning"]
  },
  {
    title: "VoxAct-B: Voxel-Based Acting and Stabilizing Policy for Bimanual Manipulation",
    image: "https://voxact-b.github.io/static/images/figure1_v08.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/voxact_b.html",
    arxiv: "https://arxiv.org/abs/2407.04152",
    project: "https://voxact-b.github.io",
    venue: "CoRL 2024",
    tags: ["USC", "bimanual", "imitation-learning", "VLA"]
  },
  {
    title: "AnyDexGrasp: General Dexterous Grasping for Different Hands with Human-level Learning Efficiency",
    image: "https://graspnet.net/anydexgrasp/assets/images/model.jpg",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/anydexgrasp.html",
    arxiv: "https://arxiv.org/abs/2502.16420",
    project: "https://graspnet.net/anydexgrasp/",
    venue: "ICLR 2025",
    tags: ["RL", "grasping", "dexterous", "real-world"]
  },
  {
    title: "DexGrasp Anything: Towards Universal Robotic Dexterous Grasping with Physics Awareness",
    image: "https://dexgraspanything.github.io/static/images/image1.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/dexgrasp_anything.html",
    arxiv: "https://arxiv.org/abs/2503.08257",
    project: "https://dexgraspanything.github.io/",
    venue: "CVPR 2025 (Highlight)",
    tags: ["diffusion", "grasping", "dexterous"]
  },
  {
    title: "RobustDexGrasp: Robust Dexterous Grasping of General Objects from Single-view Perception",
    collection: "Landscape: bimanual-dex",
    file: null,
    image: "https://zdchan.github.io/Robust_DexGrasp/objects.png",
    summary: "overview/robustdexgrasp.html",
    arxiv: "https://arxiv.org/abs/2504.05287",
    project: "https://zdchan.github.io/Robust_DexGrasp/",
    venue: "CoRL 2025 (Spotlight)",
    tags: ["ETH-Zurich", "RL", "grasping", "dexterous", "sim-to-real"]
  },
  {
    title: "DexGraspNet 2.0: Learning Generative Dexterous Grasping in Large-scale Synthetic Cluttered Scenes",
    collection: "Landscape: bimanual-dex",
    file: null,
    image: "https://raw.githubusercontent.com/PKU-EPIC/DexGraspNet2/main/figure/teaser.png",
    arxiv: "https://arxiv.org/abs/2410.23004",
    project: "https://github.com/PKU-EPIC/DexGraspNet2",
    venue: "CoRL 2024",
    tags: ["PKU", "diffusion", "grasping", "dexterous", "sim-to-real", "dataset", "scaling"]
  },
  {
    title: "BODex: Scalable and Efficient Robotic Dexterous Grasp Synthesis Using Bilevel Optimization",
    collection: "Landscape: bimanual-dex",
    file: null,
    image: "https://pku-epic.github.io/BODex/images/teaser.png",
    arxiv: "https://arxiv.org/abs/2412.16490",
    project: "https://pku-epic.github.io/BODex/",
    venue: "ICRA 2025",
    tags: ["PKU", "grasp-synthesis", "grasping", "dexterous", "sim-to-real", "dataset"]
  },
  {
    title: "DexVLG: Dexterous Vision-Language-Grasp Model at Scale",
    image: "https://jiaweihe.com/static/image/dexvlg.png",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/dexvlg.html",
    arxiv: "https://arxiv.org/abs/2507.02747",
    project: "https://jiaweihe.com/dexvlg",
    venue: "ICCV 2025 (Spotlight)",
    tags: ["VLA", "grasping", "dexterous", "diffusion", "dataset"]
  },
  {
    title: "EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/egodex.html",
    arxiv: "https://arxiv.org/abs/2505.11709",
    project: "https://github.com/apple/ml-egodex",
    venue: "ICLR 2026",
    tags: ["Apple", "dataset", "dexterous", "human-video", "imitation-learning"]
  },
  {
    title: "HUG: Human Universal Grasping",
    image: "https://grasping.io/static/images/teaser.jpg",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/hug.html",
    arxiv: "https://arxiv.org/abs/2606.17054",
    project: "https://grasping.io",
    venue: "arXiv 2026",
    tags: ["NYU", "grasping", "dexterous", "flow-matching", "human-video", "retargeting"]
  },
  {
    title: "ENPIRE: Agentic Robot Policy Self-Improvement in the Real World",
    image: "https://research.nvidia.com/labs/gear/enpire/robot_farm.min.jpg",
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/enpire.html",
    arxiv: null,
    project: "https://research.nvidia.com/labs/gear/enpire/",
    venue: "2026",
    tags: ["NVIDIA", "self-improving", "agentic", "RL", "bimanual", "dexterous", "real-world"]
  },
  {
    title: "SAM 3: Segment Anything with Concepts",
    image: "https://raw.githubusercontent.com/facebookresearch/sam3/main/assets/model_diagram.png",
    collection: "Perception",
    file: null,
    summary: "overview/sam3.html",
    arxiv: "https://arxiv.org/abs/2511.16719",
    project: "https://ai.meta.com/sam3",
    venue: "arXiv 2025 (Nov 2025; v2 Mar 2026)",
    tags: ["Meta", "segmentation", "foundation", "open-vocabulary", "video", "perception"]
  },

  // ===== Grasp Synthesis (Sammy Christen et al. — hand-object interaction, dexterous grasping) =====
  // PDFs are NOT in this repo (kept local only). Links: arXiv / project page.
  {
    title: "D-Grasp: Physically Plausible Dynamic Grasp Synthesis for Hand-Object Interactions",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://raw.githubusercontent.com/sammychristen/dgrasp/main/docs/image/fig_teaser.png",
    arxiv: "https://arxiv.org/abs/2112.03028",
    project: "https://eth-ait.github.io/d-grasp/",
    venue: "CVPR 2022",
    tags: ["ETH-Zurich", "RL", "grasp-synthesis", "hand-object", "grasping", "dexterous"]
  },
  {
    title: "GraspXL: Generating Grasping Motions for Diverse Objects at Scale",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://raw.githubusercontent.com/zdchan/graspxl/main/tease_more.jpg",
    arxiv: "https://arxiv.org/abs/2403.19649",
    project: "https://eth-ait.github.io/graspxl/",
    venue: "ECCV 2024",
    tags: ["ETH-Zurich", "RL", "grasp-synthesis", "grasping", "dexterous", "scaling"]
  },
  {
    title: "Learning Human-to-Robot Handovers from Point Clouds",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://handover-sim2real.github.io/static/images/Teaser_v4-1.png",
    arxiv: "https://arxiv.org/abs/2303.17592",
    project: "https://handover-sim2real.github.io/",
    venue: "CVPR 2023",
    tags: ["ETH-Zurich", "NVIDIA", "RL", "sim-to-real", "handover", "grasping"]
  },
  {
    title: "ArtiGrasp: Physically Plausible Synthesis of Bi-Manual Dexterous Grasping and Articulation",
    collection: "Grasp Synthesis",
    file: null,
    arxiv: "https://arxiv.org/abs/2309.03891",
    project: "https://eth-ait.github.io/artigrasp/",
    venue: "3DV 2024",
    tags: ["ETH-Zurich", "RL", "grasp-synthesis", "bimanual", "dexterous", "hand-object"]
  },
  {
    title: "Physically Plausible Full-Body Hand-Object Interaction Synthesis",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://eth-ait.github.io/phys-fullbody-grasp/static/images/teaser.png",
    arxiv: "https://arxiv.org/abs/2309.07907",
    project: "https://eth-ait.github.io/phys-fullbody-grasp/",
    venue: "3DV 2024",
    tags: ["ETH-Zurich", "RL", "grasp-synthesis", "hand-object", "manipulation"]
  },
  {
    title: "DiffH2O: Diffusion-Based Synthesis of Hand-Object Interactions from Textual Descriptions",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://files.ait.ethz.ch/projects/diffh2o/diffh2o_teaser.gif",
    arxiv: "https://arxiv.org/abs/2403.17827",
    project: "https://diffh2o.github.io/",
    venue: "SIGGRAPH Asia 2024",
    tags: ["ETH-Zurich", "diffusion", "grasp-synthesis", "hand-object", "dexterous"]
  },
  {
    title: "Omnigrasp: Grasping Diverse Objects with Simulated Humanoids",
    collection: "Grasp Synthesis",
    file: null,
    arxiv: "https://arxiv.org/abs/2407.11385",
    project: "https://www.zhengyiluo.com/Omnigrasp-Site/",
    venue: "NeurIPS 2024",
    tags: ["NVIDIA", "RL", "grasp-synthesis", "grasping", "humanoid", "scaling"]
  },
  {
    title: "SynH2R: Synthesizing Hand-Object Motions for Learning Human-to-Robot Handovers",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://eth-ait.github.io/synthetic-handovers/static/images/teaser.png",
    arxiv: "https://arxiv.org/abs/2311.05599",
    project: "https://eth-ait.github.io/synthetic-handovers/",
    venue: "ICRA 2024",
    tags: ["ETH-Zurich", "NVIDIA", "grasp-synthesis", "handover", "sim-to-real", "scaling"]
  },
  {
    title: "FunGrasp: Functional Grasping for Diverse Dexterous Hands",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://hly-123.github.io/FunGrasp/project%20page/Overview_Final.jpg",
    arxiv: "https://arxiv.org/abs/2411.16755",
    project: "https://hly-123.github.io/FunGrasp/",
    venue: "RA-L 2025",
    tags: ["ETH-Zurich", "RL", "sim-to-real", "grasping", "dexterous", "one-shot", "real-world"]
  },
  {
    title: "LatentHOI: On the Generalizable Hand Object Motion Generation with Latent Hand Diffusion",
    collection: "Grasp Synthesis",
    file: null,
    arxiv: null,
    project: "https://github.com/jojo23333/LatetHOI",
    venue: "CVPR 2025",
    tags: ["ETH-Zurich", "diffusion", "grasp-synthesis", "hand-object", "grasping"]
  },
  {
    title: "Demonstration-Guided Deep Reinforcement Learning of Control Policies for Dexterous Human-Robot Interaction",
    collection: "Grasp Synthesis",
    file: null,
    image: "https://ait.ethz.ch/assets/projects/DRL-handshake/teaser.png",
    arxiv: "https://arxiv.org/abs/1906.11695",
    project: "https://ait.ethz.ch/drl-handshake",
    venue: "ICRA 2019",
    tags: ["ETH-Zurich", "RL", "imitation-learning", "Shadow", "dexterous", "mocap"]
  },

  // ===== Dexterous grasping: traced from RobustDexGrasp / PKU-EPIC related-works chains =====
  // Link-only (no local PDF). `cites` = Semantic Scholar count, point-in-time ~2026-06 (runs
  // lower than Google Scholar). `desc` = one-line summary. No citation threshold applied.

  // --- Datasets / benchmarks ---
  {
    title: "DexYCB: A Benchmark for Capturing Hand Grasping of Objects",
    collection: "Grasp Synthesis", file: null, cites: 441,
    arxiv: "https://arxiv.org/abs/2104.04631", project: "https://dex-ycb.github.io/", venue: "CVPR 2021",
    desc: "NVIDIA benchmark: 582K RGB-D frames of 10 subjects grasping 20 YCB objects with full 3D hand+object pose.",
    tags: ["NVIDIA", "dataset", "grasping", "hand-object", "mocap"]
  },
  {
    title: "OakInk: A Large-scale Knowledge Repository for Understanding Hand-Object Interaction",
    image: "https://oakink.net/img/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 177,
    arxiv: "https://arxiv.org/abs/2203.15709", project: "https://oakink.net/", venue: "CVPR 2022",
    desc: "Real captures plus synthesized grasps with object-affordance knowledge for hand-object interaction.",
    tags: ["dataset", "grasping", "hand-object", "affordance"]
  },
  {
    title: "OakInk2: A Dataset of Bimanual Hands-Object Manipulation in Complex Task Completion",
    image: "https://oakink.net/img/v2/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 81,
    arxiv: "https://arxiv.org/abs/2403.19417", project: "https://oakink.net/v2/", venue: "CVPR 2024",
    desc: "Bimanual hand-object manipulation across affordance / primitive / task levels for complex daily tasks.",
    tags: ["dataset", "bimanual", "hand-object", "manipulation"]
  },
  {
    title: "GRAB: A Dataset of Whole-Body Human Grasping of Objects",
    image: "https://grab.is.tue.mpg.de/media/upload/thumb_2000_final1.png",
    collection: "Grasp Synthesis", file: null, cites: 542,
    arxiv: "https://arxiv.org/abs/2008.11200", project: "https://grab.is.tue.mpg.de/", venue: "ECCV 2020",
    desc: "Whole-body SMPL-X grasping sequences (10 subjects x 51 objects); standard hand-object grasp reference.",
    tags: ["dataset", "grasping", "hand-object", "humanoid", "mocap"]
  },
  {
    title: "AffordPose: A Large-scale Dataset of Hand-Object Interactions with Affordance-driven Hand Pose",
    collection: "Grasp Synthesis", file: null, cites: 99,
    arxiv: "https://arxiv.org/abs/2309.08942", project: "https://affordpose.github.io/", venue: "ICCV 2023",
    desc: "26.7K affordance-labeled hand-object interactions over 641 objects, 8 affordance types.",
    tags: ["dataset", "grasping", "hand-object", "affordance"]
  },
  {
    title: "Get a Grip: Multi-Finger Grasp Evaluation at Scale Enables Robust Sim-to-Real Transfer",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUC2EEs0B4lsVqAKy4yS5RuzlO3AEQe_nmDH2BcdqzKzHdGDL9lXbMdww0oVCD9-LD6UJMFS3zgylIPi_NO_5GHfr1eYU9uAgmTAh09Reuo3ezbshVT0wuQ55kVCb-LGuNGfztcUu_WgQ_r1LSEKqAbM_gG-E5bSmqLu8O4gxEt7KLy_-SRVh1rMCFcCOUj9ngSBkCH6TMmSVJyIId_moGPU5PEM2MPJTiiRYPN99rg=w1280",
    collection: "Grasp Synthesis", file: null, cites: 16,
    arxiv: "https://arxiv.org/abs/2410.23701", project: "https://sites.google.com/view/get-a-grip-dataset", venue: "CoRL 2024",
    desc: "Learns a discriminative grasp-evaluation model; releases 3.5M grasps on 4.3K objects with RGB/point clouds/NeRFs.",
    tags: ["dataset", "grasping", "dexterous", "sim-to-real"]
  },
  {
    title: "DexH2R: A Benchmark for Dynamic Dexterous Grasping in Human-to-Robot Handover",
    image: "https://dexh2r.github.io/static/images/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 7,
    arxiv: "https://arxiv.org/abs/2506.23152", project: "https://dexh2r.github.io/", venue: "ICCV 2025",
    desc: "First real human-to-robot dexterous handover dataset plus a DynamicGrasp baseline.",
    tags: ["dataset", "benchmark", "handover", "dexterous", "grasping"]
  },

  // --- Generative / optimization grasp synthesis ---
  {
    title: "DexGraspNet: A Large-Scale Robotic Dexterous Grasp Dataset for General Objects Based on Simulation",
    image: "https://pku-epic.github.io/DexGraspNet/images/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 238,
    arxiv: "https://arxiv.org/abs/2210.02697", project: "https://pku-epic.github.io/DexGraspNet/", venue: "ICRA 2023",
    desc: "1.32M sim-validated dexterous grasps over 5,355 objects via an accelerated differentiable force-closure estimator.",
    tags: ["PKU", "dataset", "grasp-synthesis", "grasping", "dexterous", "sim-to-real"]
  },
  {
    title: "GenDexGrasp: Generalizable Dexterous Grasping",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBaRpeBKlthBz8BFilSHlmpFRe7FOPmOdgdO9HLNr7K6bhqTFhq19q4-_YmVWDMU27TDsaDg4a8HJVbNNCDzqdtALCtOzJLLo9vfqyzfLt10qX35rcwKfvQPX9mUOcFKIHaVEtQiyxfNHHcPoeZg8tBsO_iVWgRpOvmhffltRQD3p7GYAbL4xXxX9_KoeM=w16383",
    collection: "Grasp Synthesis", file: null, cites: 118,
    arxiv: "https://arxiv.org/abs/2210.00722", project: "https://sites.google.com/view/gendexgrasp", venue: "ICRA 2023",
    desc: "Hand-agnostic grasping that transfers across robot hands via contact-map matching (MultiDex dataset).",
    tags: ["grasp-synthesis", "grasping", "dexterous", "retargeting"]
  },
  {
    title: "Hand-Object Contact Consistency Reasoning for Human Grasps Generation (GraspTTA)",
    image: "https://hwjiang1510.github.io/GraspTTA/sources/teaser-min.gif",
    collection: "Grasp Synthesis", file: null, cites: 247,
    arxiv: "https://arxiv.org/abs/2104.03304", project: "https://hwjiang1510.github.io/GraspTTA/", venue: "ICCV 2021",
    desc: "Generates grasps enforcing hand-object contact consistency, with test-time adaptation for unseen objects.",
    tags: ["grasp-synthesis", "hand-object", "grasping"]
  },
  {
    title: "Synthesizing Diverse and Physically Stable Grasps with Arbitrary Hand Structures using Differentiable Force Closure Estimator",
    collection: "Grasp Synthesis", file: null, cites: 166,
    arxiv: "https://arxiv.org/abs/2104.09194", project: null, venue: "RA-L 2021",
    desc: "Fast differentiable force-closure estimator synthesizing diverse, stable grasps for arbitrary hand structures, training-free.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Deep Differentiable Grasp Planner for High-DOF Grippers",
    collection: "Grasp Synthesis", file: null, cites: 104,
    arxiv: "https://arxiv.org/abs/2002.01530", project: null, venue: "RSS 2020",
    desc: "End-to-end differentiable grasp planner for high-DoF hands using a differentiable generalized Q1 metric.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Grasp'D: Differentiable Contact-rich Grasp Synthesis for Multi-fingered Hands",
    image: "https://graspd-eccv22.github.io/assets/teaser.gif",
    collection: "Grasp Synthesis", file: null, cites: 101,
    arxiv: "https://arxiv.org/abs/2208.12250", project: "https://graspd-eccv22.github.io/", venue: "ECCV 2022",
    desc: "Gradient-based grasp synthesis through a differentiable contact simulator, producing dense-contact multi-finger grasps.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Fast-Grasp'D: Dexterous Multi-finger Grasp Generation Through Differentiable Simulation",
    collection: "Grasp Synthesis", file: null, cites: 65,
    arxiv: "https://arxiv.org/abs/2306.08132", project: null, venue: "ICRA 2023",
    desc: "Faster differentiable-simulation grasp generator; used to synthesize the Grasp'D-1M dataset.",
    tags: ["grasp-synthesis", "grasping", "dexterous", "dataset"]
  },
  {
    title: "DDGC: Generative Deep Dexterous Grasping in Clutter",
    image: "https://irobotics.aalto.fi/wp-content/uploads/2020/06/unnamed.png",
    collection: "Grasp Synthesis", file: null, cites: 86,
    arxiv: "https://arxiv.org/abs/2103.04783", project: "https://irobotics.aalto.fi/ddgc/", venue: "RA-L 2021",
    desc: "Fast generative coarse-to-fine collision-free multi-finger grasp sampler in clutter from a single RGB-D image.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "DexDiffuser: Generating Dexterous Grasps with Diffusion Models",
    image: "https://yulihn.github.io/DexDiffuser_page/resources/og_image.png",
    collection: "Grasp Synthesis", file: null, cites: 82,
    arxiv: "https://arxiv.org/abs/2402.02989", project: "https://yulihn.github.io/DexDiffuser_page/", venue: "RA-L 2024",
    desc: "Diffusion sampler plus evaluator that generates, scores, and refines multi-finger grasps on partial point clouds.",
    tags: ["diffusion", "grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Grasp as You Say: Language-guided Dexterous Grasp Generation (DexGYS)",
    image: "https://isee-laboratory.github.io/DexGYS/images/task.png",
    collection: "Grasp Synthesis", file: null, cites: 67,
    arxiv: "https://arxiv.org/abs/2405.19291", project: "https://isee-laboratory.github.io/DexGYS/", venue: "NeurIPS 2024",
    desc: "Language-guided dexterous grasping with the DexGYSNet dataset and a diffusion-plus-transformer framework.",
    tags: ["diffusion", "grasp-synthesis", "grasping", "dexterous", "LLM", "dataset"]
  },
  {
    title: "Dexterous Grasp Transformer (DGTR)",
    image: "https://isee-laboratory.github.io/dgtr/images/Overview.png",
    collection: "Grasp Synthesis", file: null, cites: 29,
    arxiv: "https://arxiv.org/abs/2404.18135", project: "https://isee-laboratory.github.io/dgtr/", venue: "CVPR 2024",
    desc: "Set-prediction transformer generating diverse grasps from an object point cloud in one forward pass.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "UGG: Unified Generative Grasping",
    image: "https://jiaxin-lu.github.io/ugg/img/ugg.png",
    collection: "Grasp Synthesis", file: null, cites: 13,
    arxiv: "https://arxiv.org/abs/2311.16917", project: "https://jiaxin-lu.github.io/ugg/", venue: "ECCV 2024",
    desc: "All-transformer diffusion model jointly generating dexterous grasps and objects on DexGraspNet, with a discriminator.",
    tags: ["diffusion", "grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "SemGrasp: Semantic Grasp Generation via Language Aligned Discretization",
    image: "https://kailinli.github.io/SemGrasp/img/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 43,
    arxiv: "https://arxiv.org/abs/2404.03590", project: "https://kailinli.github.io/SemGrasp/", venue: "ECCV 2024",
    desc: "Aligns grasp space with language via discrete tokens and an MLLM to generate language-conditioned grasps (CapGrasp).",
    tags: ["grasp-synthesis", "grasping", "dexterous", "LLM", "dataset"]
  },
  {
    title: "Contact2Grasp: 3D Grasp Synthesis via Hand-Object Contact Constraint",
    collection: "Grasp Synthesis", file: null, cites: 38,
    arxiv: "https://arxiv.org/abs/2210.09245", project: null, venue: "IJCAI 2023",
    desc: "Two-stage synthesis: samples contact maps, then maps contact to pose with penetration-aware optimization.",
    tags: ["grasp-synthesis", "hand-object", "grasping"]
  },
  {
    title: "Multi-FinGAN: Generative Coarse-To-Fine Sampling of Multi-Finger Grasps",
    image: "https://raw.githubusercontent.com/aalto-intelligent-robotics/Multi-FinGAN/main/images/architecture.png",
    collection: "Grasp Synthesis", file: null, cites: 64,
    arxiv: "https://arxiv.org/abs/2012.09696", project: "https://github.com/aalto-intelligent-robotics/Multi-FinGAN", venue: "ICRA 2021",
    desc: "Fast generative coarse-to-fine multi-finger grasp generation from a single RGB-D image.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "UniGrasp: Learning a Unified Model to Grasp with Multifingered Robotic Hands",
    collection: "Grasp Synthesis", file: null, cites: 141,
    arxiv: "https://arxiv.org/abs/1910.10900", project: "https://github.com/stanford-iprl-lab/UniGrasp", venue: "RA-L 2020",
    desc: "Predicts force-closure contact points generalizing across 2/3/multi-finger hands, including unseen grippers.",
    tags: ["Stanford", "grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "GanHand: Predicting Human Grasp Affordances in Multi-Object Scenes",
    image: "https://enriccorona.github.io/ganhand/ganhand_teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 213,
    arxiv: null, project: "https://enriccorona.github.io/ganhand/", venue: "CVPR 2020",
    desc: "Predicts 51-DoF MANO grasps from a single RGB image; introduces the YCB-Affordance dataset.",
    tags: ["grasp-synthesis", "hand-object", "grasping", "dataset"]
  },
  {
    title: "Grasping Field: Learning Implicit Representations for Human Grasps",
    image: "https://github.com/korrawe/grasping_field_demo/raw/master/resources/sample_hands.png",
    collection: "Grasp Synthesis", file: null, cites: 297,
    arxiv: "https://arxiv.org/abs/2008.04451", project: "https://github.com/korrawe/grasping_field", venue: "3DV 2020",
    desc: "Implicit signed-distance-field representation plus generative MANO grasp synthesis from object point clouds.",
    tags: ["grasp-synthesis", "hand-object", "grasping"]
  },
  {
    title: "EfficientGrasp: A Unified Data-Efficient Learning to Grasp Method for Multi-Fingered Robot Hands",
    collection: "Grasp Synthesis", file: null, cites: 25,
    arxiv: "https://arxiv.org/abs/2206.15159", project: null, venue: "RA-L 2022",
    desc: "Gripper-model-independent multi-finger grasp synthesis using a gripper-workspace feature.",
    tags: ["grasp-synthesis", "grasping", "dexterous", "sample-efficient"]
  },
  {
    title: "DexGrasp-Diffusion: Diffusion-based Unified Functional Grasp Synthesis for Multi-Dexterous Robotic Hands",
    collection: "Grasp Synthesis", file: null, cites: 22,
    arxiv: "https://arxiv.org/abs/2407.09899", project: null, venue: "arXiv 2024",
    desc: "Diffusion generator for multiple hands plus a discriminator filtering physically/functionally valid grasps.",
    tags: ["diffusion", "grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Task-Oriented Dexterous Hand Pose Synthesis Using Differentiable Grasp Wrench Boundary Estimator (TaskDexGrasp)",
    image: "https://pku-epic.github.io/TaskDexGrasp/images/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 12,
    arxiv: "https://arxiv.org/abs/2309.13586", project: "https://pku-epic.github.io/TaskDexGrasp/", venue: "IROS 2024",
    desc: "Optimization-based task-oriented dexterous grasp synthesis via a differentiable grasp-wrench-boundary estimator.",
    tags: ["PKU", "grasp-synthesis", "grasping", "dexterous", "tool-use"]
  },
  {
    title: "FRoGGeR: Fast Robust Grasp Generation via the Min-Weight Metric",
    image: "https://alberthli.github.io/frogger/assets/img/representative_grasps.png",
    collection: "Grasp Synthesis", file: null, cites: 26,
    arxiv: "https://arxiv.org/abs/2302.13687", project: "https://alberthli.github.io/frogger/", venue: "IROS 2023",
    desc: "Sub-second collision-free robust dexterous grasp synthesis via a differentiable min-weight grasp metric.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Dexonomy: Synthesizing All Dexterous Grasp Types in a Grasp Taxonomy",
    image: "https://pku-epic.github.io/Dexonomy/images/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 27,
    arxiv: "https://arxiv.org/abs/2504.18829", project: "https://pku-epic.github.io/Dexonomy/", venue: "RSS 2025",
    desc: "Template-based synthesis of 9.5M grasps over 31 GRASP-taxonomy types with a type-conditional generator.",
    tags: ["PKU", "grasp-synthesis", "grasping", "dexterous", "dataset"]
  },
  {
    title: "AffordDexGrasp: Open-set Language-guided Dexterous Grasp with Generalizable-Instructive Affordance",
    image: "https://isee-laboratory.github.io/AffordDexGrasp/images/task.png",
    collection: "Grasp Synthesis", file: null, cites: 30,
    arxiv: "https://arxiv.org/abs/2503.07360", project: "https://isee-laboratory.github.io/AffordDexGrasp/", venue: "ICCV 2025",
    desc: "Affordance flow matching plus grasp flow matching for open-set language-guided dexterous grasping.",
    tags: ["flow-matching", "grasp-synthesis", "grasping", "dexterous", "affordance"]
  },
  {
    title: "G-DexGrasp: Generalizable Dexterous Grasping Synthesis via Part-Aware Prior Retrieval and Prior-Assisted Generation",
    collection: "Grasp Synthesis", file: null, cites: 8,
    arxiv: "https://arxiv.org/abs/2503.19457", project: null, venue: "CVPR 2025",
    desc: "Retrieves fine-grained contact-part/affordance priors to generalize grasp synthesis to unseen categories.",
    tags: ["grasp-synthesis", "grasping", "dexterous", "affordance"]
  },
  {
    title: "GraspQP: Differentiable Optimization of Force Closure for Diverse and Robust Dexterous Grasping",
    image: "https://graspqp.github.io/static/images/graspqp-title.jpg",
    collection: "Grasp Synthesis", file: null, cites: 9,
    arxiv: "https://arxiv.org/abs/2508.15002", project: "https://graspqp.github.io/", venue: "CoRL 2025",
    desc: "Differentiable force-closure energy via a QP, synthesizing diverse precision and power grasps (ETH Zurich).",
    tags: ["ETH-Zurich", "grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "Grasping a Handful: Sequential Multi-Object Dexterous Grasp Generation",
    collection: "Grasp Synthesis", file: null, cites: 6,
    arxiv: "https://arxiv.org/abs/2503.22370", project: null, venue: "RA-L 2025",
    desc: "SeqGrasp algorithm plus a diffusion generator for grasping multiple objects sequentially using partial DoF.",
    tags: ["diffusion", "grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "PartDexTOG: Generating Dexterous Task-Oriented Grasping via Language-driven Part Analysis",
    collection: "Grasp Synthesis", file: null, cites: 2,
    arxiv: "https://arxiv.org/abs/2505.12294", project: null, venue: "arXiv 2025",
    desc: "LLM generates category/part-level grasp descriptions; a part-conditional diffusion model synthesizes task-oriented grasps.",
    tags: ["diffusion", "grasp-synthesis", "grasping", "dexterous", "LLM"]
  },
  {
    title: "Lightning Grasp: High Performance Procedural Grasp Synthesis with Contact Fields",
    collection: "Grasp Synthesis", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2511.07418", project: null, venue: "arXiv 2025",
    desc: "Procedural grasp synthesis with a Contact Field data structure achieving orders-of-magnitude speedups.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },
  {
    title: "DexGANGrasp: Dexterous Generative Adversarial Grasping Synthesis for Task-Oriented Manipulation",
    collection: "Grasp Synthesis", file: null, cites: 13,
    arxiv: "https://arxiv.org/abs/2407.17348", project: "https://david-s-martinez.github.io/DexGANGrasp.io/", venue: "Humanoids 2024",
    desc: "cGAN generator plus evaluator for real-time single-view dexterous grasps, with MLLM affordance grounding.",
    tags: ["grasp-synthesis", "grasping", "dexterous"]
  },

  // --- RL / sim-to-real grasping policies & cross-embodiment ---
  {
    title: "UniDexGrasp: Universal Robotic Dexterous Grasping via Learning Diverse Proposal Generation and Goal-Conditioned Policy",
    image: "https://pku-epic.github.io/UniDexGrasp/images/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 214,
    arxiv: "https://arxiv.org/abs/2303.00938", project: "https://pku-epic.github.io/UniDexGrasp/", venue: "CVPR 2023",
    desc: "Two-stage universal grasping: a diverse grasp-proposal generator plus a goal-conditioned RL policy from point clouds.",
    tags: ["PKU", "RL", "grasping", "dexterous", "sim-to-real"]
  },
  {
    title: "UniDexGrasp++: Improving Dexterous Grasping Policy Learning via Geometry-aware Curriculum and Iterative Generalist-Specialist Learning",
    image: "https://pku-epic.github.io/UniDexGrasp++/images/teaser.jpg",
    collection: "Grasp Synthesis", file: null, cites: 169,
    arxiv: "https://arxiv.org/abs/2304.00464", project: "https://pku-epic.github.io/UniDexGrasp++/", venue: "ICCV 2023",
    desc: "Object-agnostic universal grasping via geometry-aware curriculum and iterative generalist-specialist learning.",
    tags: ["PKU", "RL", "grasping", "dexterous"]
  },
  {
    title: "DexPoint: Generalizable Point Cloud Reinforcement Learning for Sim-to-Real Dexterous Manipulation",
    collection: "Grasp Synthesis", file: null, cites: 132,
    arxiv: "https://arxiv.org/abs/2211.09423", project: "https://yzqin.github.io/dexpoint/", venue: "CoRL 2022",
    desc: "Point-cloud RL for sim-to-real dexterous grasping with imagined-hand point clouds and contact rewards (Allegro).",
    tags: ["UCSD", "RL", "sim-to-real", "grasping", "dexterous"]
  },
  {
    title: "Learning Robust Real-World Dexterous Grasping Policies via Implicit Shape Augmentation (ISAGrasp)",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUD4vIZtTaTICP_xgq208tpnRCzs_mlGGbr0WWALXBaSr30WXyyNh-UoeOLf_nQ-rkxJRD1Dcn1k-8PtivjPxdzhFrj7UpEPpD9cDnz1Zsr9a4u-XOJpaQcGU9DYPfsgbt-nhq-ZwmnX8TfdT3bcbfnmhD9GIaPBdm8ih20vAfxZ0phwPy_89SXgGzsMRLw=w16383",
    collection: "Grasp Synthesis", file: null, cites: 41,
    arxiv: "https://arxiv.org/abs/2210.13638", project: "https://sites.google.com/view/implicitaugmentation/home", venue: "CoRL 2022",
    desc: "Deforms human grasp demos via an implicit generative model into a large synthetic set, training a robust Allegro policy.",
    tags: ["imitation-learning", "grasping", "dexterous", "augmentation", "real-world"]
  },
  {
    title: "DexTransfer: Real World Multi-fingered Dexterous Grasping with Minimal Human Demonstrations",
    collection: "Grasp Synthesis", file: null, cites: 42,
    arxiv: "https://arxiv.org/abs/2209.14284", project: null, venue: "arXiv 2022",
    desc: "Learns a point-cloud Allegro grasping policy from a small mocap demo set augmented with domain randomization.",
    tags: ["imitation-learning", "grasping", "dexterous", "real-world"]
  },
  {
    title: "DextrAH-G: Pixels-to-Action Dexterous Arm-Hand Grasping with Geometric Fabrics",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDmxnpTk3rMiDDV7Hz7EbYZBTfHFFVphRGgv0QpdORT0iV2vXHvXDJa3iAN9h0sbLhd7lkegFtOGV8Azcuyj3vltna5a_i1B-0X3fVsO8ftm3-ugI8dnwg6g_aBJaqgmnGrYM_X25jLwkKuL8BPvQWdMqt2v4MM0kWQLf60Qe6ClQjHb_wZgCeDaHtG-N_ZVLGSfIqrPbMyvUm3BMFYnOwOzbwg3NogI6p-_Z2g=w1280",
    collection: "Grasp Synthesis", file: null, cites: 56,
    arxiv: "https://arxiv.org/abs/2407.02274", project: "https://sites.google.com/view/dextrah-g", venue: "CoRL 2024",
    desc: "Depth-based 23-DoF arm-hand grasping policy: RL + geometric fabrics + teacher-student distillation, 87% real success.",
    tags: ["NVIDIA", "RL", "sim-to-real", "grasping", "dexterous"]
  },
  {
    title: "DextrAH-RGB: Visuomotor Policies to Grasp Anything with Dexterous Hands",
    image: "https://dextrah-rgb.github.io/static/images/stage_1.png",
    collection: "Grasp Synthesis", file: null, cites: 54,
    arxiv: "https://arxiv.org/abs/2412.01791", project: "https://dextrah-rgb.github.io/", venue: "arXiv 2024",
    desc: "End-to-end RGB-to-action dexterous arm-hand grasping, distilled in sim with photorealistic rendering for sim-to-real.",
    tags: ["NVIDIA", "RL", "sim-to-real", "grasping", "dexterous"]
  },
  {
    title: "DexGraspVLA: A Vision-Language-Action Framework Towards General Dexterous Grasping",
    image: "https://dexgraspvla.github.io/assets/images/method.jpg",
    collection: "Grasp Synthesis", file: null, cites: 106,
    arxiv: "https://arxiv.org/abs/2502.20900", project: "https://dexgraspvla.github.io/", venue: "AAAI 2026",
    desc: "Hierarchical VLA: a pretrained VLM planner plus a diffusion controller, 90%+ in unseen cluttered scenes.",
    tags: ["VLA", "diffusion", "grasping", "dexterous"]
  },
  {
    title: "Dex1B: Learning with 1B Demonstrations for Dexterous Manipulation",
    image: "https://jianglongye.com/dex1b/static/images/method.png",
    collection: "Grasp Synthesis", file: null, cites: 29,
    arxiv: "https://arxiv.org/abs/2506.17198", project: "https://jianglongye.com/dex1b/", venue: "RSS 2025",
    desc: "Generative pipeline producing a 1-billion-demo dataset for grasping and articulation across Shadow/Inspire/Ability hands.",
    tags: ["UCSD", "grasp-synthesis", "grasping", "dexterous", "dataset", "scaling"]
  },
  {
    title: "UniGraspTransformer: Simplified Policy Distillation for Scalable Dexterous Robotic Grasping",
    collection: "Grasp Synthesis", file: null, cites: 20,
    arxiv: "https://arxiv.org/abs/2412.02699", project: null, venue: "CVPR 2025",
    desc: "Distills thousands of per-object RL grasp trajectories into a single transformer policy, beating UniDexGrasp++.",
    tags: ["RL", "grasping", "dexterous", "scaling"]
  },
  {
    title: "Efficient Residual Learning with Mixture-of-Experts for Universal Dexterous Grasping (ResDex)",
    collection: "Grasp Synthesis", file: null, cites: 16,
    arxiv: "https://arxiv.org/abs/2410.02475", project: null, venue: "ICLR 2025",
    desc: "Geometry-unaware base policies combined via a residual MoE hyper-policy; 88.8% on DexGraspNet in 12 GPU-hours.",
    tags: ["RL", "grasping", "dexterous"]
  },
  {
    title: "D(R,O) Grasp: A Unified Representation of Robot and Object Interaction for Cross-Embodiment Dexterous Grasping",
    image: "https://nus-lins-lab.github.io/drograspweb/static/image/pipeline.png",
    collection: "Grasp Synthesis", file: null, cites: 54,
    arxiv: "https://arxiv.org/abs/2410.01702", project: "https://nus-lins-lab.github.io/drograspweb/", venue: "ICRA 2025",
    desc: "Predicts kinematically valid grasps across hands/objects in under 1s; 87.5% sim, 89% real (LeapHand).",
    tags: ["grasping", "dexterous", "cross-embodiment"]
  },
  {
    title: "Cross-Embodiment Dexterous Grasping with Reinforcement Learning (CrossDex)",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUClYSc_bQaZ_D4VGzGCDk-eRyB3sar2KcSSho03hMlS1s11OONidedNna0EDwjb3RNK5hQM25-1xLnGVJOfmLhucY2ROFBsSnN-DL34uiugJPv8UKQ0dugXNPFCNS8aba7bJnE_iS-esX7XcN8Zxmsfh40CFD2-X8osNhtagozN7GpKMKxrRKpuKPKfAebHi1cZKgzGdzferQxXrIffh-qAflh6aeSJuZBGITom=w1280",
    collection: "Grasp Synthesis", file: null, cites: 30,
    arxiv: "https://arxiv.org/abs/2410.02479", project: "https://sites.google.com/view/crossdex", venue: "ICLR 2025",
    desc: "Eigengrasp-based universal action space; one vision policy reaches 80% on YCB across 4 hands, zero-shot to 2 unseen.",
    tags: ["RL", "grasping", "dexterous", "cross-embodiment"]
  },
  {
    title: "DemoGrasp: Universal Dexterous Grasping from a Single Demonstration",
    collection: "Grasp Synthesis", file: null, cites: 9,
    arxiv: "https://arxiv.org/abs/2509.22149", project: null, venue: "CoRL 2025",
    desc: "Edits one demo trajectory via single-step-MDP RL; 95% on DexGraspNet (Shadow), 84.6% across embodiments.",
    tags: ["RL", "grasping", "dexterous", "one-shot"]
  },
  {
    title: "T(R,O) Grasp: Efficient Graph Diffusion of Robot-Object Spatial Transformation for Cross-Embodiment Dexterous Grasping",
    collection: "Grasp Synthesis", file: null, cites: 4,
    arxiv: "https://arxiv.org/abs/2510.12724", project: null, venue: "arXiv 2025",
    desc: "Graph diffusion over robot-object transformations; 94.83% success at 0.21s inference for closed-loop grasping.",
    tags: ["diffusion", "grasping", "dexterous", "cross-embodiment"]
  },
  {
    title: "CEDex: Cross-Embodiment Dexterous Grasp Generation at Scale from Human-like Contact Representations",
    collection: "Grasp Synthesis", file: null, cites: 9,
    arxiv: "https://arxiv.org/abs/2509.24661", project: null, venue: "ICRA 2026",
    desc: "Aligns robot kinematics to generated human-like contact representations for scalable cross-embodiment grasp synthesis.",
    tags: ["grasp-synthesis", "grasping", "dexterous", "cross-embodiment"]
  },
  {
    title: "GeoMatch++: Morphology Conditioned Geometry Matching for Multi-Embodiment Grasping",
    collection: "Grasp Synthesis", file: null, cites: 3,
    arxiv: "https://arxiv.org/abs/2412.18998", project: null, venue: "CoRL 2024 Workshop",
    desc: "Morphology-conditioned geometry matching; +9.64% grasp success on out-of-domain end-effectors.",
    tags: ["grasping", "dexterous", "cross-embodiment"]
  },
  {
    title: "OmniDexGrasp: Generalizable Dexterous Grasping via Foundation Model and Force Feedback",
    image: "https://isee-laboratory.github.io/OmniDexGrasp/static/images/setting.png",
    collection: "Grasp Synthesis", file: null, cites: 5,
    arxiv: "https://arxiv.org/abs/2510.23119", project: "https://isee-laboratory.github.io/OmniDexGrasp/", venue: "arXiv 2025",
    desc: "Generates human grasp images via foundation models, transfers to robot actions, with force-aware execution.",
    tags: ["foundation-model", "grasping", "dexterous"]
  },
  {
    title: "From Power to Precision: Learning Fine-grained Dexterity for Multi-fingered Robotic Hands",
    image: "https://jianglongye.com/power-to-precision/static/images/method_ctrl.jpg",
    collection: "Grasp Synthesis", file: null, cites: 7,
    arxiv: "https://arxiv.org/abs/2511.13710", project: "https://jianglongye.com/power-to-precision/", venue: "arXiv 2025",
    desc: "Co-design of control and hand hardware for power and precision grasps; 82.5% zero-shot sim-to-real precision grasping.",
    tags: ["UCSD", "RL", "sim-to-real", "grasping", "dexterous"]
  },
  {
    title: "DexTouch: Learning to Seek and Manipulate Objects with Tactile Dexterity",
    collection: "Grasp Synthesis", file: null, cites: 15,
    arxiv: "https://arxiv.org/abs/2401.12496", project: null, venue: "RA-L 2024",
    desc: "Vision-free tactile-only system (UR5e + Allegro, 16 FSR sensors) that locates and grasps objects in the dark.",
    tags: ["RL", "grasping", "dexterous", "tactile"]
  },

  // --- Functional / affordance / human-prior grasping ---
  {
    title: "Dexterous Functional Grasping",
    collection: "Grasp Synthesis", file: null, cites: 64,
    arxiv: "https://arxiv.org/abs/2312.02975", project: "https://dexfunc.github.io/", venue: "CoRL 2023",
    desc: "Functional grasping in the wild using DINO-feature affordances plus an eigengrasp-action-space RL policy (CMU).",
    tags: ["CMU", "RL", "grasping", "dexterous", "tool-use", "real-world"]
  },
  {
    title: "Dexterous Functional Pre-Grasp Manipulation with Diffusion Policy (UniDexFPM)",
    image: "https://unidexfpm.github.io/media/figures/teaser.png",
    collection: "Grasp Synthesis", file: null, cites: 7,
    arxiv: "https://arxiv.org/abs/2403.12421", project: "https://unidexfpm.github.io/", venue: "ICRA 2025",
    desc: "Teacher-student MoE plus diffusion policy that reorients objects into functional goal poses; 72.6% across 1,400+ objects.",
    tags: ["diffusion", "grasping", "dexterous", "tool-use"]
  },
  {
    title: "Learning Dexterous Grasping with Object-Centric Visual Affordances (GRAFF)",
    image: "https://raw.githubusercontent.com/priyankamandikal/graff/master/images/demo.gif",
    collection: "Grasp Synthesis", file: null, cites: 169,
    arxiv: "https://arxiv.org/abs/2009.01439", project: "https://github.com/priyankamandikal/graff", venue: "ICRA 2021",
    desc: "Embeds an object-centric visual-affordance model inside deep RL so a 30-DoF hand grasps human-preferred regions.",
    tags: ["RL", "grasping", "dexterous", "affordance"]
  },
  {
    title: "DexVIP: Learning Dexterous Grasping with Human Hand Pose Priors from Video",
    image: "https://vision.cs.utexas.edu/projects/dexvip-dexterous-grasp-pose-prior/overview.png",
    collection: "Grasp Synthesis", file: null, cites: 136,
    arxiv: "https://arxiv.org/abs/2202.00164", project: "https://vision.cs.utexas.edu/projects/dexvip-dexterous-grasp-pose-prior/", venue: "CoRL 2021",
    desc: "Curates grasp frames from in-the-wild human videos as a hand-pose prior reward for deep-RL grasping, no teleop.",
    tags: ["UT-Austin", "RL", "grasping", "dexterous", "human-video"]
  },
  {
    title: "Learning Generalizable Dexterous Manipulation from Human Grasp Affordance (ILAD)",
    collection: "Grasp Synthesis", file: null, cites: 91,
    arxiv: "https://arxiv.org/abs/2204.02320", project: "https://kristery.github.io/ILAD/", venue: "CoRL 2022",
    desc: "Generates category-level demos from a human grasp-affordance model; imitation + geometric objective generalizes to novel objects.",
    tags: ["imitation-learning", "grasping", "dexterous", "affordance"]
  },
  {
    title: "Learning Continuous Grasping Function with a Dexterous Hand from Human Demonstrations (CGF)",
    image: "https://jianglongye.com/cgf/static/assets/interpolation.jpg",
    collection: "Grasp Synthesis", file: null, cites: 76,
    arxiv: "https://arxiv.org/abs/2207.05053", project: "https://jianglongye.com/cgf/", venue: "IROS 2023",
    desc: "CVAE-based implicit continuous grasping function over time from human-object trajectories; transfers to a real Allegro hand.",
    tags: ["UCSD", "imitation-learning", "grasping", "dexterous", "human-video"]
  },
  {
    title: "GraspGF: Learning Score-based Grasping Primitive for Human-assisting Dexterous Grasping",
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUARfn36MgZdCgYU51POFeC7VUYEzjbOmyETGf_-tq4o_nDjH7NOAndYuvPc4udJ3Tm1s7VSTq42pCdcQVVa_MygyNk9PjKvLHbWWIDnYhSZQx4zrBnObfOPh_1oXQJN6SWLrCT83J7agrFZu9yvF2SRo60eS470jgj1VGMZ_nnWFXQNP8xeCUtQw_VYg-UTVpGJ7Xesxdm05HrHf1a754jiJdJa3jQf63iinD9ZuQ4=w1280",
    collection: "Grasp Synthesis", file: null, cites: 36,
    arxiv: "https://arxiv.org/abs/2309.06038", project: "https://sites.google.com/view/graspgf", venue: "NeurIPS 2023",
    desc: "Combines a score-based grasping-gradient field ('how') with a history-conditional RL residual ('when') for human-assisting grasping.",
    tags: ["diffusion", "grasping", "dexterous", "handover"]
  },
  {
    title: "Toward Human-Like Grasp: Dexterous Grasping via Semantic Representation of Object-Hand",
    collection: "Grasp Synthesis", file: null, cites: 70,
    arxiv: null, project: null, venue: "ICCV 2021",
    desc: "Object-hand semantic representation segments functional areas to guide human-like functional dexterous grasps.",
    tags: ["grasp-synthesis", "hand-object", "grasping", "affordance"]
  },
  {
    title: "FunctionalGrasp: Learning Functional Grasp for Robots via Semantic Hand-Object Representation",
    collection: "Grasp Synthesis", file: null, cites: 28,
    arxiv: null, project: null, venue: "RA-L 2023",
    desc: "Learns functional grasps via a semantic hand-object representation transferring human functional grasp intent to robots.",
    tags: ["grasp-synthesis", "grasping", "dexterous", "affordance"]
  },
  {
    title: "GeoMatch: Geometry Matching for Multi-Embodiment Grasping",
    image: "https://geo-match.github.io/images/qual_results.png",
    collection: "Grasp Synthesis", file: null, cites: 25,
    arxiv: "https://arxiv.org/abs/2312.03864", project: "https://geo-match.github.io/", venue: "CoRL 2023",
    desc: "Cross-embodiment grasping via per-vertex geometry matching between hand and object.",
    tags: ["grasping", "dexterous", "cross-embodiment"]
  },
  {
    title: "Generalized Anthropomorphic Functional Grasping with Minimal Demonstrations",
    collection: "Grasp Synthesis", file: null, cites: 13,
    arxiv: "https://arxiv.org/abs/2303.17808", project: null, venue: "arXiv 2023",
    desc: "Synthesizes anthropomorphic functional grasps for novel objects from only a few demonstrations.",
    tags: ["grasp-synthesis", "grasping", "dexterous", "one-shot"]
  },
  {
    title: "Multi-Keypoint Affordance Representation for Functional Dexterous Grasping",
    collection: "Grasp Synthesis", file: null, cites: 3,
    arxiv: "https://arxiv.org/abs/2502.20018", project: null, venue: "RA-L 2025",
    desc: "Contact-guided multi-keypoint affordance constrains functional grasp posture from human-grasp images via large vision models.",
    tags: ["grasping", "dexterous", "affordance"]
  },

  // ===== Compliance / force / impedance control (compliant contact-rich manipulation) =====
  // Some are industrial (peg-in-hole/assembly) rather than dexterous-hand; flagged in tags.
  {
    title: "Adaptive Compliance Policy: Learning Approximate Compliance for Diffusion Guided Control",
    collection: "Compliance Control", file: null, cites: 67,
    arxiv: "https://arxiv.org/abs/2410.09309", project: null, venue: "ICRA 2025",
    desc: "Diffusion visuomotor policy predicting spatially/temporally varying compliance from human demos; >50% gain over fixed-compliance baselines.",
    tags: ["diffusion", "compliance", "contact-rich", "imitation-learning", "manipulation"]
  },
  {
    title: "Object-Level Impedance Control for Dexterous In-Hand Manipulation",
    collection: "Compliance Control", file: null, cites: 52,
    arxiv: null, project: null, venue: "RA-L 2020",
    desc: "Model-based compliant 6-DOF object-level impedance control on a torque-controlled multi-finger hand (DLR). No arXiv preprint exists.",
    tags: ["compliance", "impedance", "dexterous", "in-hand-reorientation", "manipulation"]
  },
  {
    title: "DexForce: Extracting Force-informed Actions from Kinesthetic Demonstrations for Dexterous Manipulation",
    collection: "Compliance Control", file: null, cites: 41,
    arxiv: "https://arxiv.org/abs/2501.10356", project: null, venue: "RA-L 2025",
    desc: "Per-fingertip 6-axis force/torque sensing turns kinesthetic demos into force-informed actions; 76% vs ~0% without force on a multi-finger hand.",
    tags: ["compliance", "force-control", "dexterous", "imitation-learning", "tactile"]
  },
  {
    title: "Learning Variable Compliance Control From a Few Demonstrations for Bimanual Robot with Haptic Feedback Teleoperation System",
    collection: "Compliance Control", file: null, cites: 31,
    arxiv: "https://arxiv.org/abs/2406.14990", project: null, venue: "IROS 2024",
    desc: "Learns variable compliance from a few haptic-teleoperation demos for bimanual contact-rich tasks.",
    tags: ["compliance", "contact-rich", "bimanual", "teleoperation", "imitation-learning"]
  },
  {
    title: "DA-VIL: Adaptive Dual-Arm Manipulation with Reinforcement Learning and Variable Impedance Control",
    collection: "Compliance Control", file: null, cites: 13,
    arxiv: "https://arxiv.org/abs/2410.19712", project: null, venue: "ICRA 2025",
    desc: "RL plus gradient-based gain optimization to modulate dual-arm impedance for stable manipulation of varied objects.",
    tags: ["RL", "impedance", "compliance", "bimanual", "manipulation"]
  },
  {
    title: "Admittance Visuomotor Policy Learning for General-Purpose Contact-Rich Manipulations",
    collection: "Compliance Control", file: null, cites: 10,
    arxiv: "https://arxiv.org/abs/2409.14440", project: null, venue: "IEEE T-IE 2025",
    desc: "Learns admittance-control visuomotor policies for general-purpose contact-rich manipulation.",
    tags: ["compliance", "admittance", "contact-rich", "imitation-learning", "manipulation"]
  },
  {
    title: "Tactile-Conditioned Diffusion Policy for Force-Aware Robotic Manipulation",
    collection: "Compliance Control", file: null, cites: 9,
    arxiv: "https://arxiv.org/abs/2510.13324", project: null, venue: "arXiv 2025",
    desc: "Tactile-conditioned diffusion policy applying appropriate grasp forces for fragile/deformable contact-rich manipulation.",
    tags: ["diffusion", "compliance", "force-control", "tactile", "manipulation"]
  },
  {
    title: "Diffusion-Based Impedance Learning for Contact-Rich Manipulation Tasks",
    collection: "Compliance Control", file: null, cites: 2,
    arxiv: "https://arxiv.org/abs/2509.19696", project: null, venue: "arXiv 2025",
    desc: "Diffusion model learning variable-impedance/stiffness profiles for contact-rich manipulation.",
    tags: ["diffusion", "impedance", "compliance", "contact-rich", "manipulation"]
  },
  {
    title: "Variable Compliance Control for Robotic Peg-in-Hole Assembly: A Deep Reinforcement Learning Approach",
    collection: "Compliance Control", file: null, cites: 189,
    arxiv: "https://arxiv.org/abs/2008.10224", project: null, venue: "Applied Sciences 2020",
    desc: "Deep RL learns variable compliance (stiffness) for peg-in-hole; a classic industrial contact-rich assembly compliance baseline.",
    tags: ["RL", "compliance", "contact-rich", "industrial", "manipulation"]
  },
  {
    title: "Learning Variable Impedance Control via Inverse Reinforcement Learning for Force-Related Tasks",
    collection: "Compliance Control", file: null, cites: 117,
    arxiv: "https://arxiv.org/abs/2102.06838", project: null, venue: "RA-L 2021",
    desc: "Inverse RL recovers a variable-impedance policy and reward from demos; peg-in-hole and cup-on-plate on a FANUC arm.",
    tags: ["impedance", "compliance", "contact-rich", "industrial", "imitation-learning"]
  },
  {
    title: "FORGE: Force-Guided Exploration for Robust Contact-Rich Manipulation under Uncertainty",
    collection: "Compliance Control", file: null, cites: 35,
    arxiv: "https://arxiv.org/abs/2408.04587", project: null, venue: "RA-L 2025",
    desc: "Force-threshold plus dynamics randomization for sim-to-real force-aware insertion/assembly conditioned on max allowable force.",
    tags: ["force-control", "compliance", "contact-rich", "industrial", "sim-to-real"]
  },
  {
    title: "Variable Impedance Skill Learning for Contact-Rich Manipulation",
    collection: "Compliance Control", file: null, cites: 31,
    arxiv: null, project: null, venue: "RA-L 2022",
    desc: "Skill-based RL with a variable-impedance Cartesian action space from suboptimal demos; peg-in-hole on Franka. No arXiv preprint exists.",
    tags: ["RL", "impedance", "compliance", "contact-rich", "industrial"]
  },
  {
    title: "SRL-VIC: A Variable Stiffness-Based Safe Reinforcement Learning for Contact-Rich Robotic Tasks",
    collection: "Compliance Control", file: null, cites: 27,
    arxiv: "https://arxiv.org/abs/2406.13744", project: null, venue: "RA-L 2024",
    desc: "Safe RL modulating stiffness via a safety critic plus recovery policy for compliant contact-rich tasks; sim-to-real.",
    tags: ["RL", "compliance", "impedance", "contact-rich", "sim-to-real"]
  },
  {
    title: "RMPs for Safe Impedance Control in Contact-Rich Manipulation",
    collection: "Compliance Control", file: null, cites: 17,
    arxiv: "https://arxiv.org/abs/2109.12103", project: null, venue: "ICRA 2022",
    desc: "Combines Riemannian Motion Policies with variable-impedance operational-space control for safer reusable contact-rich behavior (Brown).",
    tags: ["Brown", "impedance", "compliance", "contact-rich", "manipulation"]
  },
  {
    title: "Learning Compliant Stiffness by Impedance Control-Aware Task Segmentation and Multi-objective Bayesian Optimization with Priors",
    collection: "Compliance Control", file: null, cites: 8,
    arxiv: "https://arxiv.org/abs/2307.15345", project: null, venue: "IROS 2023",
    desc: "Learns compliant stiffness profiles via task-segmented multi-objective Bayesian optimization for contact-rich tasks.",
    tags: ["impedance", "compliance", "contact-rich", "industrial", "manipulation"]
  },

  // ===== Merged from the parallel snowball branch (remote-only papers) =====
  {
    title: "Holo-Dex: Teaching Dexterity with Immersive Mixed Reality",
    collection: "Dex Manipulation", file: null, cites: 102,
    arxiv: "https://arxiv.org/abs/2210.06463", project: null, venue: "ICRA 2023",
    desc: "Mixed-reality headset for immersive real-time teleoperation of a dexterous hand to collect demos and learn manipulation via nearest-neighbor imitation.",
    tags: ["dexterous", "manipulation", "teleoperation", "imitation-learning"]
  },
  {
    title: "DexArt: Benchmarking Generalizable Dexterous Manipulation with Articulated Objects",
    collection: "Dex Manipulation", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2305.05706", project: null, venue: "CVPR 2023",
    desc: "Benchmark and 3D point-cloud RL method for a multi-finger hand manipulating diverse articulated objects with generalization.",
    tags: ["dexterous", "manipulation", "RL", "benchmark", "articulation", "point-cloud"]
  },
  {
    title: "RoboPianist: Dexterous Piano Playing with Deep Reinforcement Learning",
    collection: "Dex Manipulation", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2304.04150", project: null, venue: "CoRL 2023",
    desc: "Benchmark where simulated anthropomorphic hands learn to play 150 piano pieces, stressing high-precision bimanual finger coordination.",
    tags: ["dexterous", "manipulation", "bimanual", "RL", "benchmark"]
  },
  {
    title: "Robot Synesthesia: In-Hand Manipulation with Visuotactile Sensing",
    collection: "Dex Manipulation", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2312.01853", project: null, venue: "ICRA 2024",
    desc: "Point-cloud visuotactile representation fusing vision and touch for RL-based in-hand object rotation with sim-to-real transfer.",
    tags: ["manipulation", "in-hand-reorientation", "tactile", "RL", "sim-to-real", "point-cloud"]
  },
  {
    title: "Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation",
    collection: "Compliance Control", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2503.02881", project: null, venue: "RSS 2025",
    desc: "Slow latent diffusion policy plus a fast tactile/force-reactive refiner for compliant contact-rich manipulation, with AR tactile-feedback teleop.",
    tags: ["manipulation", "tactile", "force-control", "compliance", "contact-rich", "diffusion"]
  },
  {
    title: "ForceMimic: Force-Centric Imitation Learning with Force-Motion Capture System for Contact-Rich Manipulation",
    collection: "Compliance Control", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2410.07554", project: null, venue: "ICRA 2025",
    desc: "Force-centric imitation with a handheld force-motion capture system, learning force-conditioned policies for tasks like vegetable peeling.",
    tags: ["manipulation", "tactile", "force-control", "contact-rich", "imitation-learning"]
  },
  {
    title: "ForceVLA: Enhancing VLA Models with a Force-aware MoE for Contact-rich Manipulation",
    collection: "Compliance Control", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2505.22159", project: null, venue: "arXiv 2025",
    desc: "Adds a force-aware mixture-of-experts module to a vision-language-action model so policies adapt to contact forces.",
    tags: ["manipulation", "force-control", "contact-rich", "VLA"]
  },
  {
    title: "MimicTouch: Leveraging Multi-modal Human Tactile Demonstrations for Contact-rich Manipulation",
    collection: "Compliance Control", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2310.16917", project: null, venue: "CoRL 2024",
    desc: "Learns contact-rich/compliant policies from multimodal human tactile (force) demonstrations, transferring touch-guided control to the robot.",
    tags: ["manipulation", "tactile", "force-control", "compliance", "contact-rich", "imitation-learning"]
  },
  {
    title: "Learning Force Control for Legged Manipulation",
    collection: "Compliance Control", file: null, cites: null,
    arxiv: "https://arxiv.org/abs/2405.01402", project: null, venue: "ICRA 2024",
    desc: "RL that directly learns end-effector force control (not just position) for contact-rich manipulation, shown on a legged manipulator.",
    tags: ["manipulation", "force-control", "contact-rich", "RL"]
  },
  {
    title: "Sim-to-Real Transfer of Robotic Control with Dynamics Randomization",
    collection: "Related: misc", file: null, cites: 1706,
    arxiv: "https://arxiv.org/abs/1710.06537", project: null, venue: "ICRA 2018",
    desc: "Trains policies over randomized dynamics in sim to transfer to real robots without real-world data; foundational sim-to-real reference.",
    tags: ["sim-to-real", "domain-randomization", "RL", "manipulation"]
  },
  {
    title: "Noise and the Reality Gap: The Use of Simulation in Evolutionary Robotics",
    collection: "Related: misc", file: null, cites: null,
    arxiv: null, project: null, venue: "ECAL 1995",
    desc: "Classic analysis of the simulation-reality gap and the role of noise in transferring evolved controllers to real robots.",
    tags: ["sim-to-real", "reality-gap", "evolutionary-robotics", "analysis"]
  }
];
