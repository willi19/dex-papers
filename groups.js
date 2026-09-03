// Research-area taxonomy, shared by index.html and overview.html.
//
// This is the live grouping in the browser. It is COMPUTED FROM TAGS, not read
// from papers.js `collection` (that field survives only in the search haystack).
// Extracted from index.html so the library and the card overview cannot drift.
const GROUP_ORDER = [
  "RL & Control",
  "Imitation & Demonstration Learning",
  "Foundation / Generalist Policies",
  "Agentic & Code-as-Policy",
  "Grasping & Motion Generation",
  "Data / Teleoperation / Task Generation",
  "Benchmarks / Perception / Infrastructure"
];
const GROUP_DESCRIPTIONS = {
  "RL & Control": "reward-driven exploration, curriculum, control",
  "Imitation & Demonstration Learning": "BC, DAgger, diffusion/flow policies, retargeting",
  "Foundation / Generalist Policies": "VLA, pretrained behavior models, cross-task controllers",
  "Agentic & Code-as-Policy": "LLM/VLM agents that write, run and repair robot programs; self-improvement loops",
  "Grasping & Motion Generation": "grasp synthesis, grasp policies, physically plausible motion",
  "Data / Teleoperation / Task Generation": "datasets, teleoperation, augmentation, autonomous collection",
  "Benchmarks / Perception / Infrastructure": "evaluation, sensing, planning, surveys, systems"
};
const GROUP_LABELS = {
  "RL & Control": "RL",
  "Imitation & Demonstration Learning": "IL",
  "Foundation / Generalist Policies": "Foundation",
  "Agentic & Code-as-Policy": "Agentic",
  "Grasping & Motion Generation": "Grasp/Motion",
  "Data / Teleoperation / Task Generation": "Data/Teleop",
  "Benchmarks / Perception / Infrastructure": "Benchmark/Infra"
};
const GROUP_OVERRIDES = {
  "Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning": "Benchmarks / Perception / Infrastructure",
  "PerAct2: Benchmarking and Learning for Robotic Bimanual Manipulation Tasks": "Benchmarks / Perception / Infrastructure",
  "DexH2R: A Benchmark for Dynamic Dexterous Grasping in Human-to-Robot Handover": "Benchmarks / Perception / Infrastructure",
  "DexterityGen: Foundation Controller for Unprecedented Dexterity": "Foundation / Generalist Policies",
  "mimic-one: a Scalable Model Recipe for General Purpose Robot Dexterity": "Foundation / Generalist Policies",
  "RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation": "Foundation / Generalist Policies",
  "ManipTrans: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning": "RL & Control",
  "DexMachina: Functional Retargeting for Bimanual Dexterous Manipulation": "RL & Control",
  "AsymDex: Asymmetry and Relative Coordinates for RL-based Bimanual Dexterity": "RL & Control",
  "ENPIRE: Agentic Robot Policy Self-Improvement in the Real World": "Agentic & Code-as-Policy"
};
function researchGroupOf(p) {
  if (GROUP_OVERRIDES[p.title]) return GROUP_OVERRIDES[p.title];
  const tags = p.tags || [];
  const lowerTitle = p.title.toLowerCase();
  const has = (...values) => values.some(v => tags.includes(v));
  const hasPart = value => tags.some(t => t.toLowerCase().includes(value));

  if (has("agentic", "code-as-policy"))
    return "Agentic & Code-as-Policy";
  if (has("survey", "benchmark", "analysis", "perception", "segmentation", "TAMP"))
    return "Benchmarks / Perception / Infrastructure";
  if (has("dataset", "teleoperation", "crowdsourcing", "mocap", "capture") ||
      (has("data-collection") && !has("RL")))
    return "Data / Teleoperation / Task Generation";
  if (hasPart("grasp") || lowerTitle.includes("grasp"))
    return "Grasping & Motion Generation";
  if (has("VLA", "foundation", "foundation-model", "generalist", "pretraining") ||
      /foundation (model|policy|controller)|generalist|large behavior model/.test(lowerTitle))
    return "Foundation / Generalist Policies";
  if (has("RL"))
    return "RL & Control";
  if (has("imitation-learning", "diffusion", "flow-matching", "one-shot", "human-video"))
    return "Imitation & Demonstration Learning";
  return "Benchmarks / Perception / Infrastructure";
}

// Flat tags grouped into categories. index.html builds its drill-down filter from
// this; overview.html uses the Lab / Org list to pick out the lab badge.
const TAXONOMY = {
  "Lab / Org": ["Apple","Berkeley","Brown","CMU","DeepMind","Google","MIT","Meta","NVIDIA","NYU","OpenAI","PKU","Stanford","Tsinghua","TUM","UCSD","USC","UT-Austin","ETH-Zurich","AgiBot","Physical-Intelligence"],
  "Task": ["grasping","grasp-synthesis","functional-grasp","in-hand-reorientation","tool-use","placing","handover","bottle-cap","valve","door","deformable-object","articulated-object","articulation"],
  "Embodiment": ["bimanual","whole-body","humanoid","cross-embodiment"],
  "Interaction": ["long-horizon","contact-rich","contact","non-prehensile","dynamic","coordination","tactile","haptic","affordance"],
  "Learning": ["RL","imitation-learning","self-supervised","reset-free","reset","VLA","diffusion","equivariant","flow-matching","one-shot","multi-task","multi-agent","sample-efficient","data-efficient","fine-tuning","transformer","energy-based","compositional","representation-learning","hierarchical","evolutionary-robotics","failure-reasoning","skill-library","state-only"],
  "Control / Planning": ["TAMP","compliance","impedance","admittance","force-control","model-based","world-model","MPC","optimization","planning","differentiable-simulation"],
  "Data / Interface": ["teleoperation","shared-autonomy","kinesthetic-teaching","human-in-the-loop","interactive","retargeting","human-to-robot","force-feedback","data-collection","data-generation","crowdsourcing","augmentation","data-augmentation","mocap","capture","human-video","human-motion"],
  "Transfer / Scale": ["sim-to-real","self-improving","pretraining","agentic","generalist","foundation","foundation-model","scaling","autonomous","deployment","generalization","open-source","domain-randomization","reality-gap","robustness"],
  "Perception": ["perception","segmentation","open-vocabulary","gaussian-splatting","video","vision","RGB-D","point-cloud","video-prediction","video-generation","video-planning","visuomotor","pose-estimation","implicit-representation","language-grounding","geometry","part-aware","object-centric","VLM","LLM"],
  "Hardware": ["Allegro","Shadow","LEAP","Inspire","D'Claw","parallel-jaw","hardware","tendon-driven","micro-vibration"],
  "Benchmark": ["LIBERO","RoboTwin"],
  "Paper Type": ["survey","system","benchmark","analysis","dataset","industrial"]
};

window.GROUP_ORDER = GROUP_ORDER;
window.GROUP_DESCRIPTIONS = GROUP_DESCRIPTIONS;
window.GROUP_LABELS = GROUP_LABELS;
window.GROUP_OVERRIDES = GROUP_OVERRIDES;
window.researchGroupOf = researchGroupOf;
window.TAXONOMY = TAXONOMY;
