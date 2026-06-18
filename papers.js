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
    collection: "Dex Manipulation",
    file: "2023_Stanford_SequentialDexterity.pdf",
    arxiv: "https://arxiv.org/abs/2309.00987",
    project: "https://sequential-dexterity.github.io",
    venue: "CoRL 2023",
    tags: ["Stanford", "RL", "tool-use", "long-horizon", "Allegro", "manipulation"]
  },
  {
    title: "Bimanual Dexterity for Complex Tasks (Bidex)",
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
    collection: "Related: autonomous",
    file: "related_works/autonomous/DataScalingLaws_Lin2024.pdf",
    arxiv: "https://arxiv.org/abs/2410.18647",
    project: "https://data-scaling-laws.github.io/",
    venue: "2024",
    tags: ["imitation-learning", "scaling", "dataset", "data-collection"]
  },
  {
    title: "DexScale: Automating Data Scaling for Sim2Real Generalizable Robot Control",
    collection: "Related: autonomous",
    file: "related_works/autonomous/DexScale.pdf",
    arxiv: null,
    project: "https://edem-ai.github.io/dexscale.github.io/",
    venue: "ICML 2025",
    tags: ["sim-to-real", "scaling", "data-collection", "dexterous"]
  },
  {
    title: "The Ingredients of Real-World Robotic Reinforcement Learning",
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
    collection: "Related: autonomous",
    file: "related_works/autonomous/MT-Opt_Kalashnikov2021.pdf",
    arxiv: "https://arxiv.org/abs/2104.08212",
    project: "https://karolhausman.github.io/mt-opt/",
    venue: "2021",
    tags: ["Google", "RL", "self-supervised", "data-collection", "multi-task", "scaling"]
  },
  {
    title: "Reset-Free Reinforcement Learning via Multi-Task Learning (MTRF)",
    collection: "Related: autonomous",
    file: "related_works/autonomous/MTRF_Gupta2021.pdf",
    arxiv: "https://arxiv.org/abs/2104.11203",
    project: "https://sites.google.com/view/mtrf",
    venue: "ICRA 2021",
    tags: ["RL", "reset-free", "multi-task", "dexterous", "D'Claw"]
  },
  {
    title: "OPTIMUS: Imitating Task and Motion Planning with Visuomotor Transformers",
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
    collection: "Related: autonomous",
    file: "related_works/autonomous/Real2Render2Real_Yu2025.pdf",
    arxiv: "https://arxiv.org/abs/2505.09601",
    project: "https://real2render2real.com/",
    venue: "2025",
    tags: ["data-collection", "sim-to-real", "scaling", "autonomous", "parallel-jaw"]
  },
  {
    title: "RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation",
    collection: "Related: autonomous",
    file: "related_works/autonomous/robocat.pdf",
    arxiv: "https://arxiv.org/abs/2306.11706",
    project: "https://deepmind.google/blog/robocat-a-self-improving-robotic-agent/",
    venue: "TMLR 2023",
    tags: ["DeepMind", "self-improving", "generalist", "data-collection"]
  },
  {
    title: "Sample Efficient Grasp Learning Using Equivariant Models",
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
    collection: "Related: autonomous",
    file: "related_works/autonomous/Sirius_Liu2022.pdf",
    arxiv: "https://arxiv.org/abs/2211.08416",
    project: "https://ut-austin-rpl.github.io/sirius/",
    venue: "RSS 2023",
    tags: ["UT-Austin", "imitation-learning", "human-in-the-loop", "deployment"]
  },
  {
    title: "So You Think You Can Scale Up Autonomous Robot Data Collection?",
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
    collection: "Related: dexterous",
    file: "related_works/dexterous/being_h0_2507.15597.pdf",
    arxiv: "https://arxiv.org/abs/2507.15597",
    project: "https://beingbeyond.github.io/Being-H0/",
    venue: "2025",
    tags: ["VLA", "human-video", "dexterous", "pretraining"]
  },
  {
    title: "Large Video Planner Enables Generalizable Robot Control",
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
    collection: "Related: system",
    file: "related_works/system/DexCap_Wang2024.pdf",
    arxiv: "https://arxiv.org/abs/2403.07788",
    project: "https://dex-cap.github.io/",
    venue: "RSS 2024",
    tags: ["Stanford", "teleoperation", "mocap", "dexterous", "data-collection", "system"]
  },
  {
    title: "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset",
    collection: "Related: system",
    file: "related_works/system/DROID_Khazatsky2024.pdf",
    arxiv: "https://arxiv.org/abs/2403.12945",
    project: "https://droid-dataset.github.io/",
    venue: "RSS 2024",
    tags: ["dataset", "teleoperation", "data-collection", "system"]
  },
  {
    title: "Mobile ALOHA: Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation",
    collection: "Related: system",
    file: "related_works/system/MobileALOHA_Fu2024.pdf",
    arxiv: "https://arxiv.org/abs/2401.02117",
    project: "https://mobile-aloha.github.io/",
    venue: "CoRL 2024",
    tags: ["Stanford", "teleoperation", "bimanual", "imitation-learning", "system"]
  },
  {
    title: "RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot",
    collection: "Related: system",
    file: "related_works/system/RH20T_Fang2023.pdf",
    arxiv: "https://arxiv.org/abs/2307.00595",
    project: "https://rh20t.github.io/",
    venue: "2023",
    tags: ["dataset", "teleoperation", "data-collection", "system"]
  },
  {
    title: "RoboTurk: A Crowdsourcing Platform for Robotic Skill Learning through Imitation",
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
    summary: "overview/robustdexgrasp.html",
    arxiv: "https://arxiv.org/abs/2504.05287",
    project: "https://zdchan.github.io/Robust_DexGrasp/",
    venue: "CoRL 2025 (Spotlight)",
    tags: ["RL", "grasping", "dexterous", "sim-to-real"]
  },
  {
    title: "DexVLG: Dexterous Vision-Language-Grasp Model at Scale",
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
    collection: "Landscape: bimanual-dex",
    file: null,
    summary: "overview/hug.html",
    arxiv: "https://arxiv.org/abs/2606.17054",
    project: "https://grasping.io",
    venue: "arXiv 2026",
    tags: ["NYU", "grasping", "dexterous", "flow-matching", "human-video", "retargeting"]
  }
];
