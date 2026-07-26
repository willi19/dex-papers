// Source-reviewed contribution notes for the main browser.
// Keep these separate from papers.js so the bibliographic database stays easy to edit.
window.PAPER_INSIGHTS = {
  "Twisting Lids Off with Two Hands": {
    problem: "나사산·마찰·양손 접촉이 얽힌 뚜껑 열기는 탐색도 어렵고 시뮬레이션도 느리거나 부정확하다.",
    idea: "나사 결합을 빠르게 근사하는 brake 기반 물리 모델을 만들고, 병 회전·뚜껑 비틀기·손 자세·접촉 위치를 단계적으로 보상하는 RL을 학습한다.",
    delta: "일반적인 양손 pose tracking이 아니라 과제에 필요한 fingertip–bottle 접촉 구조와 실패 상태 조기 종료를 명시해 실제 병뚜껑 비틀기를 학습 가능하게 했다.",
    basis: "PDF · Introduction, Related Work, Method/Reward"
  },
  "Visual Dexterity: In-hand Reorientation of Novel and Complex Object Shapes": {
    problem: "기존 in-hand reorientation은 단순 형상, 제한된 회전, 느린 동작, 고가 센서 또는 정확한 object pose에 의존했다.",
    idea: "시뮬레이션 state policy를 학습한 뒤 depth point cloud에서 직접 action을 내는 비전 policy로 distill해 다양한 형상의 물체를 계속 회전시킨다.",
    delta: "물체마다 일관된 pose·keypoint를 추정하는 단계를 우회하고 raw point cloud feedback으로 미지 형상까지 실시간 일반화한 점이 핵심이다.",
    basis: "PDF · Introduction, Related Work, System Overview"
  },
  "DeXtreme: Transfer of Agile In-hand Manipulation from Simulation to Reality": {
    problem: "고자유도 손의 agile reorientation은 sim-to-real 오차와 실시간 물체 자세 추정 때문에 고가 장비 없이는 재현하기 어려웠다.",
    idea: "강한 domain randomization과 recurrent RL policy, 여러 RGB 카메라를 이용한 markerless pose estimator를 저가 Allegro Hand에 결합한다.",
    delta: "Shadow Hand와 모션캡처에 의존한 선행 시스템보다 훨씬 저렴한 하드웨어·단순한 RGB sensing으로 임의 SO(3) 목표 회전을 구현하고 recipe를 공개했다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "Sequential Dexterity: Chaining Dexterous Policies for Long-Horizon Manipulation": {
    problem: "개별 dexterous skill이 성공해도 그 종단 상태가 다음 skill이 처리할 수 없는 상태이면 긴 작업의 성공률이 무너진다.",
    idea: "앞 방향으로 각 policy의 시작 분포를 만들고, 다음 policy의 성공 가능성을 transition feasibility function으로 학습해 앞 policy들을 뒤에서부터 fine-tune한다.",
    delta: "인접 skill을 단순 연결하거나 고정 시간에 전환하는 대신 장기 목표의 feasibility를 전체 policy chain 뒤쪽에서 앞쪽으로 전달한다.",
    basis: "PDF · Introduction, Related Work, Section 4"
  },
  "Bimanual Dexterity for Complex Tasks (Bidex)": {
    problem: "50 DoF가 넘는 양팔·다지 손을 정밀하게 teleoperate하는 기존 방식은 비싸거나, occlusion과 지연 때문에 일상 환경 데이터 수집에 부적합했다.",
    idea: "teacher arms로 팔을, EMF motion-capture gloves와 fingertip retargeting으로 손을 제어하는 저지연 휴대형 BiDex 시스템을 구성하고 BC 데이터를 수집한다.",
    delta: "외부 카메라 기반 손 추적 대신 occlusion에 강한 장갑과 joint-space arm tracking을 결합해 복잡한 양손 작업을 저비용으로 수집할 수 있게 했다.",
    basis: "PDF · Introduction, Related Work, System"
  },
  "Learning Dexterous In-Hand Manipulation": {
    problem: "시뮬레이션에서 학습한 손 policy는 실제 마찰·질량·actuator dynamics를 정확히 모르면 현실에서 쉽게 실패한다.",
    idea: "대규모 domain randomization, LSTM 기반 memory와 distributed RL을 결합해 policy가 실행 중 숨은 dynamics를 암묵적으로 추론하도록 한다.",
    delta: "정확한 system identification 대신 광범위한 dynamics 분포와 기억을 이용한 online adaptation으로 물체 재배치를 zero-shot sim-to-real했다.",
    basis: "PDF · Introduction, Related Work, System/Randomization"
  },
  "Solving Rubik's Cube with a Robot Hand": {
    problem: "루빅스 큐브는 물체 전체 자세뿐 아니라 내부 관절을 조작해야 하며 긴 subgoal sequence 동안 오차가 누적된다.",
    idea: "solver가 face-rotation subgoal을 주고 recurrent hand policy가 이를 실행하며, Automatic Domain Randomization이 학습 성능에 맞춰 난이도를 자동 확장한다.",
    delta: "고정 범위 domain randomization을 사람이 튜닝하는 대신 성공 경계에서 분포를 자동 조절하고, 장기 실행 중 나타나는 implicit adaptation을 분석했다.",
    basis: "PDF · Introduction, Related Work, ADR"
  },
  "Dexterous Manipulation with Deep RL: Efficient, General, and Low-Cost": {
    problem: "기존 다지 손 제어는 모델·고가 하드웨어·정교한 sensing에 의존했고, real-world model-free RL은 데이터 효율이 낮았다.",
    idea: "저가 Dynamixel 기반 손에서 valve rotation, box flipping, door opening을 직접 학습하고 demonstration-augmented policy gradient로 탐색을 가속한다.",
    delta: "시뮬레이터나 수작업 dynamics model 없이 실제 로봇에서 몇 시간 규모로 contact-rich finger gait를 학습할 수 있음을 보였다.",
    basis: "PDF · Introduction, Related Work, Algorithms"
  },
  "Dexterous Manipulation through Imitation Learning: A Survey": {
    problem: "dexterous imitation 연구는 demonstration source, embodiment gap, policy learning 방식이 흩어져 있어 방법 간 관계를 파악하기 어렵다.",
    idea: "데이터 획득·retargeting·representation·policy learning·평가를 하나의 imitation-learning pipeline으로 정리하고 방법별 가정과 한계를 비교한다.",
    delta: "일반 manipulation survey가 아니라 고자유도 손 특유의 embodiment mismatch와 contact-rich demonstration 문제를 중심 축으로 삼는다.",
    basis: "PDF · Introduction, Related Work, Taxonomy"
  },
  "Interactive Imitation Learning for Dexterous Robotic Manipulation: A Survey": {
    problem: "일회성 offline demonstration만으로는 dexterous policy의 distribution shift와 실패 상태를 충분히 다루기 어렵다.",
    idea: "교정, intervention, preference 등 실행 중 사람 피드백을 받는 interactive imitation learning을 feedback 형태와 학습 단계별로 분류한다.",
    delta: "정적 IL 방법 나열보다 사람이 언제 어떤 신호로 policy의 오류 분포를 보완하는지에 초점을 맞춘다.",
    basis: "PDF · Introduction, Related Work, Taxonomy"
  },
  "A Scalable Platform for Robot Learning and Physical Skill Data Collection": {
    problem: "로봇 데이터 수집은 한 대의 로봇·한 장소·순차 실험에 묶여 contact-rich skill과 morphology 변화까지 확장하기 어렵다.",
    idea: "여러 로봇과 학습 작업을 병렬·분산 운영하는 PD.RAISE 플랫폼으로 실제 interaction을 수집하고 policy 갱신을 반복한다.",
    delta: "특정 학습 알고리즘보다 heterogeneous hardware와 실험 lifecycle을 병렬화하는 시스템 계층을 contribution으로 둔다.",
    basis: "PDF · Introduction, Related Work, System"
  },
  "Augmentation Enables One-Shot Generalization in LfD for Contact-Rich Manipulation": {
    problem: "contact-rich mechanism 조작은 한 번의 시연에 나타난 물체 위치와 접촉 조건이 바뀌면 replay만으로 일반화되지 않는다.",
    idea: "한 시연에서 environmental constraints와 compliant controller를 얻고, 로봇이 시각·접촉 정보를 자율 수집해 demonstration을 보강한다.",
    delta: "추가 인간 시연이나 end-to-end RL 대신 분석적 controller template과 autonomous augmentation으로 one-shot generalization을 만든다.",
    basis: "PDF · Introduction, Related Work, Augmentation Method"
  },
  "AutoRT: Embodied Foundation Models for Large Scale Orchestration of Robotic Agents": {
    problem: "자율 데이터 수집은 새로운 공간에서 수행할 과제를 정하고 안전성·실행 가능성을 판단하는 orchestration 비용이 크다.",
    idea: "LLM이 장면에서 task를 제안하고 VLM과 safety rules가 실행 가능성을 거른 뒤, 기존 robot policy를 20대 이상 로봇에 배치한다.",
    delta: "새 low-level controller보다 foundation model을 fleet-level task proposal·grounding·안전 관리자로 사용해 open-ended 수집을 확장했다.",
    basis: "PDF · Introduction, Related Work, System"
  },
  "Coarse-to-Fine Imitation Learning: Robot Manipulation from a Single Demonstration": {
    problem: "한 번의 시연으로 새 물체를 다룰 때 시작 상태 변화는 크지만 접촉 이후 정밀 궤적은 그대로 보존해야 한다.",
    idea: "시연에서 bottleneck pose를 찾고, coarse visual servo가 그 자세까지 이동한 뒤 fine 단계에서 원래 접촉 궤적을 replay한다.",
    delta: "전체 동작을 black-box로 학습하거나 task-specific pose estimator를 요구하지 않고, 분석적 servo와 시연 replay의 역할을 분리했다.",
    basis: "PDF · Introduction, Related Work, Method"
  },
  "Data Scaling Laws in Imitation Learning for Robotic Manipulation": {
    problem: "IL 데이터 예산을 환경 수, 물체 수, 환경당 시연 수 중 어디에 써야 일반화가 좋아지는지 실증 기준이 부족했다.",
    idea: "세 축을 독립적으로 늘린 대규모 실제 rollout으로 scaling curve와 포화 지점을 측정하고 그 결과로 수집 전략을 제안한다.",
    delta: "모델 크기보다 데이터 다양성과 반복량의 marginal return을 15,000회 이상 실제 평가로 분리해 측정했다.",
    basis: "PDF · Introduction, Related Work, Scaling Study"
  },
  "DexScale: Automating Data Scaling for Sim2Real Generalizable Robot Control": {
    problem: "대규모 real demonstration은 비싸고, simulation data는 접촉 궤적과 시각적 현실성이 부족해 바로 배포하기 어렵다.",
    idea: "소수 skill seed에서 simulation task와 성공 궤적을 자동 생성·확장하고 이를 visuomotor policy 학습용 데이터로 변환한다.",
    delta: "사람이 teleoperate해 양을 늘리는 대신 skill simulation 자체를 data engine으로 만들어 다양성과 sim-to-real deployability를 함께 노린다.",
    basis: "PDF · Introduction, Related Work, Data Engine"
  },
  "The Ingredients of Real-World Robotic Reinforcement Learning": {
    problem: "실제 RL은 수동 reset, 외부 state estimation, 사람이 만든 reward 때문에 장시간 자율 개선이 어렵다.",
    idea: "onboard vision, learned reward, forward/backward task와 reset-free collection을 하나의 지속 학습 시스템으로 통합한다.",
    delta: "각 문제를 따로 푸는 대신 raw sensory input·자율 supervision·autonomous reset이라는 세 조건을 동시에 만족하는 전체 recipe를 검증했다.",
    basis: "PDF · Introduction, Related Work, System Requirements"
  },
  "Learning Hand-Eye Coordination for Robotic Grasping with Large-Scale Data Collection": {
    problem: "고정 grasp point를 open-loop로 실행하면 calibration 오차와 물체 이동에 대응할 수 없다.",
    idea: "대규모 self-supervised grasp trial에서 현재 이미지와 후보 motor command의 성공 확률을 학습해 실행 중 계속 action을 다시 선택한다.",
    delta: "수작업 feature·object proposal·camera calibration 없이 gripper까지 보이는 raw image로 continuous closed-loop servoing을 학습했다.",
    basis: "PDF · Introduction, Related Work, Method"
  },
  "End-to-End Training of Deep Visuomotor Policies": {
    problem: "vision representation과 motor control을 따로 학습하면 task-relevant feature가 정책 목적에 맞게 최적화되지 않는다.",
    idea: "trajectory-centric controller가 만든 supervision으로 guided policy search를 수행해 convolutional perception부터 torque/action까지 end-to-end로 학습한다.",
    delta: "수동 visual feature나 별도 pose estimator 없이 정책 손실이 perception을 직접 형성하면서도 실제 데이터 효율을 유지했다.",
    basis: "PDF · Introduction, Related Work, Guided Policy Search"
  },
  "MT-Opt: Continuous Multi-Task Robotic RL at Scale": {
    problem: "실제 로봇에서 task마다 별도 RL 데이터를 모으면 비용이 선형으로 늘고 sparse reward labeling도 병목이 된다.",
    idea: "여러 task의 데이터를 goal relabeling·task impersonation으로 공유하고, multi-task success detector와 off-policy RL을 지속 수집 loop에 넣는다.",
    delta: "단순 joint training보다 다른 task의 trial을 현재 task 데이터로 재해석해 long-tail task가 전체 fleet 경험을 이용하도록 했다.",
    basis: "PDF · Introduction, Related Work, Data Sharing"
  },
  "Reset-Free Reinforcement Learning via Multi-Task Learning (MTRF)": {
    problem: "한 방향 task가 실패하면 사람이 초기 상태로 되돌려야 해서 real-world RL의 자율성이 깨진다.",
    idea: "forward task와 상태를 되돌리는 여러 auxiliary task를 함께 학습하고 현재 상태에 맞는 task를 선택해 replay buffer를 계속 채운다.",
    delta: "별도 hand-coded reset controller 대신 실패 상태 자체를 다른 task의 연습 기회로 바꾸는 multi-task RL 관점을 제시했다.",
    basis: "PDF · Introduction, Related Work, MTRF"
  },
  "OPTIMUS: Imitating Task and Motion Planning with Visuomotor Transformers": {
    problem: "TAMP는 정확한 상태와 긴 planning 시간이 필요하고, 인간 teleoperation은 다양한 장기 task 데이터를 만들기 비싸다.",
    idea: "cost-sensitive TAMP로 대량 궤적을 만들고 pruning·smoothing한 뒤 고주파 closed-loop visuomotor Transformer가 이를 모방한다.",
    delta: "planner를 online controller로 쓰는 대신 scene/task-specific symbol 없이 실행 가능한 reactive policy로 offline distill한다.",
    basis: "PDF · Introduction, Related Work, OPTIMUS"
  },
  "Supersizing Self-Supervision: Learning to Grasp from 50K Tries and 700 Robot Hours": {
    problem: "수백 개 grasp sample과 수동 label로는 새로운 물체·clutter에 일반화하는 deep model을 학습하기 어렵다.",
    idea: "로봇 성공 신호로 50K grasp를 self-supervise하고, 학습된 모델이 hard negative를 더 모으는 multi-stage collection을 수행한다.",
    delta: "당시 선행 연구보다 약 40배 큰 실제 trial dataset과 18-way orientation classifier로 scale 자체의 효과를 검증했다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "QT-Opt: Scalable Deep RL for Vision-Based Robotic Manipulation": {
    problem: "continuous action의 Q-learning은 action maximization이 어렵고, 대규모 과거 grasp data와 새 on-policy data를 함께 쓰기 까다롭다.",
    idea: "CEM으로 critic의 action argmax를 근사하는 QT-Opt와 비동기 distributed collection/training으로 대규모 off-policy grasp RL을 학습한다.",
    delta: "정적 grasp pose 예측이나 visual servo가 아니라 raw vision에서 pre-grasp 재조정까지 포함한 closed-loop 행동을 일반 목적 RL로 얻는다.",
    basis: "PDF · Introduction, Related Work, QT-Opt"
  },
  "Real2Render2Real: Scaling Robot Data Without Dynamics Simulation or Robot Hardware": {
    problem: "teleoperation은 로봇 시간이 필요하고 Real2Sim2Real은 정확한 physics와 장면 구축 비용 때문에 scale이 제한된다.",
    idea: "스마트폰 object scan과 한 human video에서 궤적을 복원한 뒤, 시작·종료 자세를 바꾼 물리적으로 정합한 trajectory와 rendering을 합성한다.",
    delta: "dynamics simulation이나 추가 robot rollout 없이 observation–action pair를 늘리면서 실제 영상의 appearance와 motion intent를 보존한다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation": {
    problem: "기존 manipulation policy는 특정 task·robot에 묶이고 새로운 skill마다 많은 demonstration과 재학습이 필요하다.",
    idea: "여러 embodiment·task를 token sequence로 학습한 Transformer를 소수 demo로 adaptation하고, 새 agent가 만든 데이터를 원 데이터에 합쳐 다시 학습한다.",
    delta: "multi-task policy를 넘어 서로 다른 실제 로봇을 한 모델로 제어하고 self-generated data가 후속 generalist의 성능을 높이는 순환을 보였다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "Sample Efficient Grasp Learning Using Equivariant Models": {
    problem: "일반 CNN은 회전된 장면과 grasp가 함께 회전한다는 구조를 데이터로 다시 배워야 해 실제 trial이 많이 든다.",
    idea: "image-to-grasp 함수를 SO(2)/SE(2)-equivariant network로 구성해 회전 대칭을 architecture에 직접 넣는다.",
    delta: "augmentation에만 기대지 않고 grasp 함수의 기하학적 대칭을 보장해 약 600회, 1.5시간의 실제 grasp로 학습했다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "Self-Improving Robots: End-to-End Autonomous Visuomotor RL (MEDAL++)": {
    problem: "reset-free RL도 별도 state estimator, 고정 encoder, 수작업 reward가 필요하면 실제 장시간 자율 학습으로 이어지지 않는다.",
    idea: "소수 demonstration에서 online reward를 추론하고 goal·initial distribution을 오가는 forward/backward policy를 raw image에서 함께 학습한다.",
    delta: "기존 MEDAL류의 reset 학습을 end-to-end visual setting으로 확장해 task-specific perception pretraining과 수동 reset을 동시에 제거했다.",
    basis: "PDF · Introduction, Related Work, MEDAL++"
  },
  "Robot Learning on the Job: Human-in-the-Loop Autonomy During Deployment (Sirius)": {
    problem: "배포 중 policy 오류를 사람이 대신 처리해도, 성공 편향과 intervention 분포 때문에 그 데이터를 단순 BC·offline RL로 재학습하기 어렵다.",
    idea: "사람이 필요한 순간만 개입하는 deployment loop와 intervention·robot segment의 의미를 반영한 weighted imitation objective를 사용한다.",
    delta: "human takeover를 안전장치로만 쓰지 않고 실제 사용 중 생긴 corrective data로 policy를 계속 개선하는 학습 신호로 만든다.",
    basis: "PDF · Introduction, Related Work, Learning from Deployment"
  },
  "So You Think You Can Scale Up Autonomous Robot Data Collection?": {
    problem: "autonomous data가 인간 시연을 싸게 대체한다는 주장에는 환경 설계·reset·성공 판정·edge case 처리 비용이 빠져 있다.",
    idea: "여러 실제 task에서 autonomy 수준과 사람 노력의 전체 비용을 계측하고 autonomous IL data의 양·질·포화 효과를 비교한다.",
    delta: "새 알고리즘보다 숨은 engineering cost와 단순 human demonstration 대비 열세를 공개한 negative-result/measurement study다.",
    basis: "PDF · Introduction, Related Work, Empirical Study"
  },
  "Working Backwards: Learning to Place by Picking": {
    problem: "정확한 placing demonstration은 수집하기 어렵지만, 목표 배치된 물체를 집는 동작은 grasp planner로 자율 생성하기 쉽다.",
    idea: "목표 상태에서 물체를 pick한 trajectory를 시간 반전해 placing demonstration으로 만들고 tactile sensing과 compliant control로 접촉을 처리한다.",
    delta: "사람 시연이나 privileged reset 대신 pick/place의 시간 대칭과 환경 contact constraint를 supervision으로 이용한다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos": {
    problem: "VLA는 로봇 demonstration의 규모·다양성 부족 때문에 복잡한 손 동작을 배우기 어렵고 human video는 embodiment와 좌표계가 다르다.",
    idea: "human hand를 foundation manipulator로 보고, 3D physical-space alignment와 part-level motion tokenization을 포함한 Physical Instruction Tuning을 수행한다.",
    delta: "human video를 representation pretraining에만 쓰지 않고 language–vision–motion action supervision으로 정렬해 dexterous VLA의 직접 pretraining에 사용한다.",
    basis: "PDF · Introduction, Related Work, Physical Instruction Tuning"
  },
  "Large Video Planner Enables Generalizable Robot Control": {
    problem: "action-token foundation policy는 embodiment별 action space에 묶이고 긴 접촉 변화와 미래 상태를 명시적으로 계획하기 어렵다.",
    idea: "현재 이미지와 언어에서 목표 수행 영상을 생성하는 large video model을 pixel-space planner로 쓰고, 생성된 motion을 robot action으로 추출한다.",
    delta: "video를 보조 representation이 아니라 주 planning modality로 삼아 같은 planner를 parallel gripper부터 dexterous hand까지 공유한다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "RealDex: Towards Human-like Grasping for Robotic Dexterous Hand": {
    problem: "synthetic grasp dataset은 실제 사람의 자연스러운 functional grasp와 장면 맥락을 충분히 담지 못한다.",
    idea: "실환경 human-like grasp capture dataset을 만들고 point cloud conditioned motion generator와 MLLM 기반 plausibility/semantics를 결합한다.",
    delta: "정적 안정 grasp만 생성하는 대신 실제 사람의 approach motion과 semantic naturalness를 데이터와 생성 평가에 함께 넣는다.",
    basis: "PDF · Introduction, Related Work, Dataset/Generation"
  },
  "DexCap: Scalable Portable Mocap Data Collection for Dexterous Manipulation": {
    problem: "robot teleoperation은 비싸고 vision-only hand capture는 occlusion 때문에 정밀한 손가락·접촉 데이터를 안정적으로 얻기 어렵다.",
    idea: "휴대형 mocap glove와 3D point cloud로 human demonstration을 모으고, retargeting 후 human-in-the-loop correction을 추가하는 DexIL을 학습한다.",
    delta: "로봇 없이 어디서나 데이터를 모으되 단순 motion retargeting의 embodiment gap을 rollout correction으로 보완하는 수집-학습 전체 pipeline이다.",
    basis: "PDF · Introduction, Related Work, DexCap/DexIL"
  },
  "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset": {
    problem: "기존 robot dataset은 한 연구실과 제한된 scene에 집중되어 실제 환경 변화에 대한 policy generalization을 측정하기 어렵다.",
    idea: "표준화된 저비용 hardware·software stack을 18개 기관에 배포해 52개 건물, 564개 장면, 86개 task의 데이터를 수집한다.",
    delta: "한 fleet의 반복량보다 기관·건물·operator가 다른 in-the-wild diversity를 dataset의 핵심 축으로 만들고 재현 가능한 수집 stack도 공개했다.",
    basis: "PDF · Introduction, Related Work, Data Collection"
  },
  "Mobile ALOHA: Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation": {
    problem: "양손 mobile manipulation은 base·두 팔을 동시에 조작해야 해 demonstration 수집 장비가 비싸고 학습 데이터도 부족하다.",
    idea: "저비용 whole-body teleoperation hardware를 만들고, 적은 mobile demonstration을 많은 static ALOHA 데이터와 co-train한다.",
    delta: "skill primitive나 별도 state estimator 없이 end-to-end BC를 유지하면서 static bimanual data가 mobile task의 데이터 효율을 높이게 했다.",
    basis: "PDF · Introduction, Related Work, Hardware/Co-training"
  },
  "RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot": {
    problem: "기존 dataset은 sensor modality, robot embodiment, operator와 task 다양성이 제한돼 cross-task·one-shot 연구에 부족했다.",
    idea: "다수 robot과 operator에서 RGB-D, joint state, wrist force-torque와 일부 fingertip tactile을 시간 정렬해 약 20TB로 수집한다.",
    delta: "영상·action만 제공하는 dataset보다 calibration과 multimodal force/tactile 정보를 함께 제공해 skill transfer와 contact 연구 범위를 넓혔다.",
    basis: "PDF · Introduction, Related Work, Dataset"
  },
  "RoboTurk: A Crowdsourcing Platform for Robotic Skill Learning through Imitation": {
    problem: "전문가가 로봇 옆에서 demonstration을 모으는 방식은 인력·장소 때문에 대규모 IL 데이터로 확장되지 않는다.",
    idea: "원격 사용자가 웹에 접속해 스마트폰 motion controller로 로봇을 조작하는 cloud crowdsourcing platform을 구축한다.",
    delta: "고가 VR이나 현장 작업자 대신 commodity phone과 네트워크 지연 보정으로 여러 사람이 병렬 수집하게 하고 실제 crowd dataset을 제시했다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "MANUS: Markerless Grasp Capture using Articulated 3D Gaussians": {
    problem: "MANO 같은 고정 hand template은 개인별 손 형상과 접촉면을 부정확하게 표현해 markerless grasp contact 추정이 흔들린다.",
    idea: "articulated 3D Gaussian hand representation인 MANUS-Hand를 학습하고 multi-view 영상에서 hand-object grasp와 접촉을 복원한다.",
    delta: "skeleton·parametric mesh 대신 template-free neural field로 형상과 appearance를 함께 모델링하고, 50대 이상 카메라의 360도 grasp dataset도 제공한다.",
    basis: "PDF · Introduction, Related Work, Contributions"
  },
  "ALOHA Unleashed: A Simple Recipe for Robot Dexterity": {
    problem: "고정밀 양손 작업에서 단순 BC는 multimodal action과 접촉 오차를 평균내기 쉽고, 데이터 부족도 성능을 제한한다.",
    idea: "ALOHA 2 여러 대에서 대규모 teleoperation 데이터를 모으고 Transformer encoder-decoder와 diffusion action head로 긴 action chunk를 예측한다.",
    delta: "RL이나 task-specific hierarchy보다 데이터 규모와 expressive policy라는 단순 recipe만으로 매듭·자가 수리 같은 긴 작업까지 밀어붙였다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "DexterityGen: Foundation Controller for Unprecedented Dexterity": {
    problem: "사람이나 상위 policy의 거친 command를 고자유도 손에 그대로 보내면 불안정하고 물체를 쉽게 떨어뜨린다.",
    idea: "RL로 다양한 저수준 손 동작을 대량 생성한 뒤 generative controller가 coarse command를 안전한 fine-grained action으로 변환하게 한다.",
    delta: "task policy 하나를 학습하는 대신 RL skill prior를 재사용 가능한 control layer로 distill해 teleoperation과 다른 policy 아래에 공통으로 끼운다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "mimic-one: a Scalable Model Recipe for General Purpose Robot Dexterity": {
    problem: "실제 dexterous hand의 fine-motor policy는 hardware·teleoperation·data curation·model 설계가 따로 놀면 쉽게 확장되지 않는다.",
    idea: "soft-skin tendon hand, glove/Vision Pro teleoperation, 체계적 variation과 recovery 시연, long-chunk diffusion policy를 하나의 recipe로 묶는다.",
    delta: "새 알고리즘 하나보다 self-correction을 의도적으로 포함한 수집 규칙과 hand-policy co-design이 OOD 복구 행동을 만든다는 점을 보인다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "Towards a Generalizable Bimanual Foundation Policy via Flow-based Video Prediction": {
    problem: "language에서 미래 영상을 바로 생성하면 양손의 움직임이 모호하고 물리적으로 일관되지 않으며 paired bimanual data도 부족하다.",
    idea: "text-to-flow가 motion field를 먼저 만들고 flow-to-video가 이를 따라 미래 영상을 생성한 뒤 diffusion policy가 joint action을 추출한다.",
    delta: "single-stage video prediction 사이에 optical flow를 명시적 motion bottleneck으로 넣어 언어 의미와 양손 움직임을 먼저 정렬한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "Bunny-VisionPro: Real-Time Bimanual Dexterous Teleoperation for Imitation Learning": {
    problem: "vision-based bimanual teleoperation은 손 occlusion, retargeting 계산량, 충돌 위험과 촉각 부재 때문에 정교한 시연 수집이 어렵다.",
    idea: "Vision Pro hand tracking, 빠른 loop-joint retargeting, arm collision/singularity avoidance와 저가 진동 haptic glove를 실시간 loop로 결합한다.",
    delta: "단순 pose mirroring을 넘어 tactile feedback과 안전 제약을 low-latency system에 통합하고 수집 데이터가 여러 IL policy에 유효함을 검증했다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "ManipTrans: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning": {
    problem: "human trajectory를 로봇이 그대로 따라도 embodiment와 접촉 dynamics 차이 때문에 물체 상태가 어긋난다.",
    idea: "여러 task가 공유하는 general motion imitator를 먼저 학습하고, task별 residual policy가 접촉·물체 dynamics 오차만 수정한다.",
    delta: "각 task를 처음부터 RL로 재학습하지 않고 kinematic imitation과 physical correction을 분리해 여러 hand morphology로 빠르게 전이한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "DexMachina: Functional Retargeting for Bimanual Dexterous Manipulation": {
    problem: "human joint pose imitation은 로봇 형태가 다르면 기능을 보존하지 못하고, 긴 articulated-object trajectory는 RL 탐색이 너무 어렵다.",
    idea: "손 자세보다 object-state trajectory를 목표로 삼고, virtual object controller가 초기에 물체를 움직이다가 학습 중 힘을 줄여 policy에 책임을 넘긴다.",
    delta: "embodiment matching이 아닌 object function을 retargeting 기준으로 바꾸고 외부 controller의 decaying handoff로 어려운 접촉 탐색을 curriculum화했다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "AsymDex: Asymmetry and Relative Coordinates for RL-based Bimanual Dexterity": {
    problem: "두 손의 모든 관절을 대칭적으로 제어하면 action·observation 차원이 크고 두 손 협응을 학습하기 어렵다.",
    idea: "한 손은 물체를 배치하는 facilitating hand, 다른 손은 조작하는 dominant hand로 제한하고 상태·action을 물체 부착 상대 좌표로 표현한다.",
    delta: "reward shaping보다 인간 handedness에서 얻은 역할 비대칭과 좌표 선택으로 탐색 공간 자체를 구조적으로 절반가량 줄인다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "Dynamic Handover: Throw and Catch with Bimanual Hands": {
    problem: "공중 throw-and-catch는 quasi-static handover와 달리 두 손의 타이밍, 비행 궤적 예측, sim-to-real 오차를 동시에 해결해야 한다.",
    idea: "thrower와 catcher를 multi-agent RL로 공동 학습하고, 실시간 object trajectory predictor가 catcher의 선제 이동을 안내한다.",
    delta: "정적인 전달 pose를 계획하는 대신 비행 중인 물체의 미래를 예측하는 폐루프 협응으로 dexterous handover를 동적 영역으로 확장했다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "HumanoidGen: Data Generation for Bimanual Dexterous Manipulation via LLM Reasoning": {
    problem: "양팔·다지 손의 장기 demonstration을 simulation에서 만들려면 task decomposition, spatial constraint와 collision을 사람이 일일이 설계해야 한다.",
    idea: "공간 annotation과 atomic operation을 LLM이 관계 constraint로 조합하고, 긴 작업은 MCTS형 Segment-Truncate-Combine-Resume로 보완한다.",
    delta: "LLM을 언어 명령 encoder가 아니라 simulation scene·motion-plan·demonstration을 자동 생성하는 data engine의 reasoning module로 사용한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "AnyBimanual: Transferring Unimanual Policy for General Bimanual Manipulation": {
    problem: "양손 policy를 처음부터 학습하려면 paired bimanual data가 많이 필요하지만 많은 조작 지식은 기존 single-arm policy에 있다.",
    idea: "skill manager가 pretrained unimanual skill을 두 팔 명령으로 조합하고 visual aligner가 각 팔에 관련된 voxel 영역을 분리한다.",
    delta: "특정 backbone을 새로 학습하지 않고 임의의 single-arm policy를 적은 bimanual demonstration으로 plug-and-play 전환한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "PerAct2: Benchmarking and Learning for Robotic Bimanual Manipulation Tasks": {
    problem: "양손 manipulation은 coordination 유형을 체계적으로 평가할 benchmark와 두 팔 정보를 함께 처리할 표준 baseline이 부족했다.",
    idea: "RLBench에 다양한 결합 형태의 양손 task를 추가하고, 하나의 PerceiverIO latent를 두 팔이 나누면서 self-attention으로 협응하게 한다.",
    delta: "두 single-arm policy를 병렬 실행하는 대신 shared 3D voxel-language representation 안에서 두 arm action을 동시에 예측한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "VoxAct-B: Voxel-Based Acting and Stabilizing Policy for Bimanual Manipulation": {
    problem: "전체 scene voxel은 해상도가 낮고, 비대칭 양손 작업에서 두 팔에 같은 역할을 주면 데이터 효율이 떨어진다.",
    idea: "VLM이 대상 물체 주변 voxel을 crop해 해상도를 높이고 acting policy와 stabilizing policy를 역할별로 분리한다.",
    delta: "compute를 늘리지 않는 language-guided spatial zoom과 명시적 역할 분해로 PerAct 계열을 fine-grained bimanual task에 맞춘다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "AnyDexGrasp: General Dexterous Grasping for Different Hands with Human-level Learning Efficiency": {
    problem: "손 morphology가 바뀔 때마다 수백만 grasp와 policy를 다시 학습하는 방식은 실제 로봇에 적용하기 어렵다.",
    idea: "scene geometry를 hand-agnostic contact-centric grasp representation으로 바꾸는 universal model과 소규모 trial로 배우는 hand-specific selector를 분리한다.",
    delta: "공통 기하학 지식은 재사용하고 embodiment별 학습은 얕은 의사결정 단계에만 남겨 서로 다른 손을 수백 번 수준의 실제 시도로 적응시킨다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "DexGrasp Anything: Towards Universal Robotic Dexterous Grasping with Physics Awareness": {
    problem: "generative grasp model은 데이터 분포를 잘 따라도 sampling 결과에 penetration이나 불안정 접촉이 남는다.",
    idea: "diffusion training과 sampling 모두에 surface attraction, object penetration, self-penetration 물리 항을 넣고 semantic description도 조건으로 사용한다.",
    delta: "생성 후 별도 optimizer로 고치는 대신 denoising 과정 자체를 physics-guided posterior refinement로 만들어 feasibility를 계속 강제한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "RobustDexGrasp: Robust Dexterous Grasping of General Objects from Single-view Perception": {
    problem: "single-view point cloud는 가려짐과 pose noise가 커서 정적 grasp pose를 실행하면 외란에 적응하지 못한다.",
    idea: "finger joint에서 object surface까지의 dynamic distance vector로 hand-centric shape를 표현하고 privileged teacher를 single-view student로 distill한다.",
    delta: "완전한 object reconstruction보다 손과 가까운 interaction geometry를 계속 갱신하며, imitation에서 RL로 넘어가는 curriculum으로 동적 복구를 학습한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "DexVLG: Dexterous Vision-Language-Grasp Model at Scale": {
    problem: "language가 지정한 기능적 부위에 dexterous grasp를 생성하려면 대규모 part-caption과 물리적으로 안정한 pose가 모두 필요하다.",
    idea: "VLM과 flow-matching pose head를 결합하고, part caption이 붙은 대규모 DexGraspNet 3.0을 differentiable force-closure 최적화로 구축한다.",
    delta: "object-level grasp generation을 part-level language grounding으로 확장하고 dataset synthesis와 generative model을 공동 설계한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video": {
    problem: "robot teleoperation 데이터는 규모가 작고 기존 human video는 정확한 3D hand action annotation이 없어 imitation에 직접 쓰기 어렵다.",
    idea: "Vision Pro의 calibrated cameras와 on-device tracking으로 egocentric video와 양손·상체 3D pose를 동시에 대규모 수집한다.",
    delta: "사후 monocular pose estimation 대신 촬영 시점의 metric skeletal action을 제공하고 trajectory prediction·inverse dynamics benchmark까지 정의한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "HUG: Human Universal Grasping": {
    problem: "robot/simulation grasp data는 embodiment별로 다시 만들어야 하고 실제 사람 수준의 다양성과 장면 맥락을 얻기 어렵다.",
    idea: "egocentric RGB-D human grasp를 대규모 수집해 click-conditioned flow model이 MANO grasp를 만들고 이를 여러 robot hand로 retarget한다.",
    delta: "robot embodiment를 training target에서 분리해 하나의 human grasp prior를 손마다 재학습하지 않고 zero-shot 변환한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "ENPIRE: Agentic Robot Policy Self-Improvement in the Real World": {
    problem: "자동 policy improvement는 보통 simulator와 고정 평가에 갇혀 실제 로봇의 reset·배포·검증·실패 분석을 사람이 맡아야 한다.",
    idea: "coding agent가 문헌 조사, 코드 수정, 학습, fleet rollout, 자동 reset과 verification, log 분석을 닫힌 loop로 반복하게 한다.",
    delta: "agent가 reward만 설계하는 수준을 넘어 real-hardware experiment와 테스트 자체를 운영하며 policy engineering 전 과정을 자동화한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "SAM 3: Segment Anything with Concepts": {
    problem: "기존 promptable segmentation은 점·box로 특정 instance를 지정할 수 있지만 자연어 concept의 모든 instance를 영상 전체에서 찾는 능력은 제한적이다.",
    idea: "text·image exemplar를 받는 Promptable Concept Segmentation과 shared backbone의 image detector·memory video tracker를 통합한다.",
    delta: "recognition과 localization을 presence head로 분리하면서 classic visual prompt와 open-vocabulary concept prompt를 한 모델에서 지원한다.",
    basis: "상세 summary · 논문 및 project source"
  },
  "DexGraspNet 2.0: Learning Generative Dexterous Grasping in Large-scale Synthetic Cluttered Scenes": {
    problem: "cluttered scene의 dexterous grasp는 장면 단위 학습 데이터가 부족하고 실제 depth에 occlusion·noise가 크다.",
    idea: "대규모 synthetic clutter benchmark를 만들고 local geometry conditioned diffusion으로 grasp를 생성한 뒤 test-time depth restoration을 적용한다.",
    delta: "고립된 단일 물체 grasp dataset을 실제 clutter 구성으로 확장하고, 전체 장면보다 grasp 주변 local geometry에 집중해 zero-shot sim-to-real을 노린다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "BODex: Scalable and Efficient Robotic Dexterous Grasp Synthesis Using Bilevel Optimization": {
    problem: "gradient 기반 grasp 합성은 느리고 quality energy 가정이 강하며 method·dataset을 공정하게 비교할 benchmark도 부족하다.",
    idea: "lower-level force QP와 upper-level pose gradient descent를 묶은 bilevel optimization을 GPU에서 수천 grasp 병렬 실행한다.",
    delta: "단일 differentiable energy를 직접 최소화하는 방식보다 접촉 force feasibility와 pose search를 두 수준으로 분리하고 표준 MuJoCo benchmark까지 제공한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "D-Grasp: Physically Plausible Dynamic Grasp Synthesis for Hand-Object Interactions": {
    problem: "정적 final grasp pose만으로는 손이 접근하고 물체를 잡아 목표 6D pose로 옮기는 전체 동작의 물리성을 보장할 수 없다.",
    idea: "physics RL을 low-level grasping과 high-level motion synthesis로 계층화해 reference grasp에서 approach–grasp–transport sequence를 만든다.",
    delta: "grasp synthesis를 한 프레임 pose 생성이 아닌 object motion까지 포함한 dynamic control 문제로 정의하고 불완전한 reference도 물리적으로 보정한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "GraspXL: Generating Grasping Motions for Diverse Objects at Scale": {
    problem: "선행 motion synthesis는 한 종류 objective에 집중하고 비싼 3D hand-object data 때문에 unseen object 규모 확장이 어렵다.",
    idea: "graspable area, approach heading, wrist rotation, hand position을 조합 가능한 objective로 만든 policy를 소수 물체에서 physics 기반 학습한다.",
    delta: "object별 interaction dataset 없이 여러 목표와 hand morphology를 한 policy에서 통합해 대규모 unseen mesh로 직접 확장한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "Learning Human-to-Robot Handovers from Point Clouds": {
    problem: "실제 사람과의 handover policy는 다양한 human motion을 안전하게 수집·시뮬레이션하기 어렵다.",
    idea: "motion/grasp planning과 RL을 쓰는 privileged teacher를 human-in-the-loop simulation에서 학습하고 point-cloud student에 self-supervised distillation한다.",
    delta: "정적 handover pose 대신 움직이는 사람을 관측하는 vision control policy를 teacher–student 구조로 sim-to-real한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "ArtiGrasp: Physically Plausible Synthesis of Bi-Manual Dexterous Grasping and Articulation": {
    problem: "양손 articulated object 조작은 global wrist motion, 정밀 finger control, 물체 이동과 관절 변화를 동시에 만족해야 한다.",
    idea: "하나의 hand-pose reference로 grasping과 articulation을 통합하고 stationary single-hand에서 moving-object multi-agent로 난도를 높이는 RL curriculum을 사용한다.",
    delta: "grasp와 articulation을 별도 단계로 합치는 대신 한 physics policy와 연속 curriculum에서 joint하게 생성한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "Physically Plausible Full-Body Hand-Object Interaction Synthesis": {
    problem: "기존 HOI 생성은 손이나 짧은 상호작용 구간만 모델링해 전신 접근부터 grasp·운반까지 물리적으로 일관된 sequence가 부족하다.",
    idea: "body와 hand motion skill prior를 따로 학습하고 high-level RL이 두 latent space를 task reward와 adversarial style reward로 제어한다.",
    delta: "전신과 손을 하나의 거대한 action space에서 직접 학습하지 않고 재사용 가능한 part-specific prior 위에서 물체 interaction만 조정한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "DiffH2O: Diffusion-Based Synthesis of Hand-Object Interactions from Textual Descriptions": {
    problem: "text-conditioned HOI는 의미에 맞으면서 접촉이 자연스러워야 하지만 데이터가 작아 unseen object 일반화가 어렵다.",
    idea: "grasp stage와 text-driven manipulation stage를 별도 diffusion으로 나누고 hand-object pose를 밀접하게 묶는 compact representation을 사용한다.",
    delta: "전체 sequence를 한 번에 생성하는 대신 접촉 형성과 이후 의미적 조작의 분포를 분리해 적은 데이터에서 한손·양손 interaction을 모두 다룬다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "Omnigrasp: Grasping Diverse Objects with Simulated Humanoids": {
    problem: "simulated humanoid grasp 연구는 disembodied hand, 수직 lift, 짧은 trajectory에 머물러 전신 운반으로 확장되지 못했다.",
    idea: "human motion representation을 motor prior로 사용해 humanoid가 다양한 물체를 잡고 임의 3D trajectory를 따라 운반하는 controller를 학습한다.",
    delta: "paired full-body/object trajectory dataset 없이 단순한 reward와 object representation으로 1,200개 이상 물체의 grasp-and-carry를 scale한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "SynH2R: Synthesizing Hand-Object Motions for Learning Human-to-Robot Handovers": {
    problem: "handover simulator가 의존하는 human mocap은 비싸고 새로운 물체·grasp motion으로 확장하기 어렵다.",
    idea: "handover에 적합한 human-like hand-object motion을 합성해 robot policy의 training과 testing human을 자동 생성한다.",
    delta: "실제 human motion library를 재생하는 대신 synthetic human generator로 물체 종류를 크게 늘리고 real-data 기반 policy와 경쟁한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "FunGrasp: Functional Grasping for Diverse Dexterous Hands": {
    problem: "일반 power grasp는 가위를 쓰거나 건네는 것처럼 task에 따라 잡아야 할 부위와 자세가 달라지는 functional grasp를 표현하지 못한다.",
    idea: "한 장의 human functional-grasp RGB-D에서 pose를 추정해 여러 robot hand로 retarget하고, 그 goal을 따라가는 RL controller를 simulation에서 학습한다.",
    delta: "대규모 task-specific robot grasp dataset 대신 single human example을 semantic goal로 삼아 unseen object와 다른 hand morphology로 전이한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  },
  "LatentHOI: On the Generalizable Hand Object Motion Generation with Latent Hand Diffusion": {
    problem: "HOI motion generator는 학습에 본 물체에는 맞지만 unseen geometry에서 시간 흐름과 정밀 grasp를 함께 일반화하기 어렵다.",
    idea: "high-level temporal motion과 fine-grained spatial grasp를 분리하고 latent diffusion을 GraspVAE와 결합한다.",
    delta: "raw pose sequence 전체를 한 diffusion에서 모델링하지 않고 grasp latent의 regularization으로 spatial dependency와 데이터 활용도를 높인다.",
    basis: "CVPR Open Access abstract · 본문 비교 검토 전"
  },
  "Demonstration-Guided Deep Reinforcement Learning of Control Policies for Dexterous Human-Robot Interaction": {
    problem: "handshake·clap처럼 상대와 접촉하는 동작은 성공뿐 아니라 사람이 보기에 자연스러운 timing과 trajectory도 필요하다.",
    idea: "여러 상호작용에 공통인 parameterized multi-objective reward를 만들고 human-human mocap에서 reward parameter를 추정해 deep RL을 안내한다.",
    delta: "demonstration action을 직접 모방하지 않고 시연에서 자연스러움의 reward를 추출해 동일 구조로 서로 다른 social interaction을 학습한다.",
    basis: "arXiv abstract · 본문 비교 검토 전"
  }
};
