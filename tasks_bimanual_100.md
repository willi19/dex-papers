# 100 Bimanual Dexterous Manipulation Tasks

Real + sim, two-arm multi-fingered setup. **Coverage: 78/100 tasks have ≥1 robot-manipulation paper** that performs them; **22 are research gaps** (no paper found). Paper matches found via arXiv/web search; ⚠️ = gap, ≈ notes mean an approximate (not exact-task) match. Verify links before citing.

**Gaps (22):** #5, #21, #22, #23, #24, #25, #26, #30, #35, #46, #49, #59, #66, #68, #70, #77, #87, #89, #90, #92, #95, #96

## A. Caps / Twist
**1. 페트병 뚜껑 열기** (unscrew a plastic bottle cap)
  - [DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation](https://arxiv.org/abs/2403.07788) (2024) — Multi-finger hand trained from mocap unscrews a bottle cap (uncapping); reports ~30% success with human-mocap-only data.
  - [EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video](https://arxiv.org/abs/2505.11709) (2025) — Dexterous policies learned from egocentric video include unscrewing a bottle cap among demonstrated behaviors.

**2. 유리병·잼 뚜껑 열기** (open a glass jar lid)
  - [Twisting Lids Off with Two Hands](https://arxiv.org/abs/2403.02338) (2024) — Two multi-fingered hands coordinate to grasp a jar-like container with one hand and twist the lid off about its axis with the other (sim-to-real RL).
  - [Embodied AI with Two Arms: Zero-shot Learning, Safety and Modularity](https://arxiv.org/abs/2404.03570) (2024) — Bimanual robot stabilizes a screw-cap container and unscrews the lid; 58.3% of containers opened zero-shot.

**3. 약통 child-proof 뚜껑 열기** (open a child-proof medicine bottle)
  - [Planning for Multi-stage Forceful Manipulation](https://arxiv.org/abs/2101.02679) (2021) — Explicitly opens a push-and-twist child-proof bottle via planned forceful push-twist actions (grasp-twist, finger-twist, palm-twist, tool-twist).
  - [Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning](https://arxiv.org/abs/2206.08686) (2022) — Bi-DexHands includes an environment where two hands cooperate to hold a bottle and open its cap without dropping the cap.

**4. 치약 뚜껑 열고 닫기** (open and close a toothpaste cap)
  - [ManipTrans: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning](https://arxiv.org/abs/2503.21860) (2025) — Demonstrates 'opening the toothpaste': left hand holds the tube while the right hand's thumb and index finger pop open the small cap (DexManipNet).

**5. 보온병 마개 돌려 열기** (twist open a thermos stopper)
  - ⚠️ _research gap — no paper found_

**6. 밸브·수도꼭지 돌리기** (turn a valve or faucet)
  - [Benchmarking Reinforcement Learning Methods for Dexterous Robotic Manipulation with a Three-Fingered Gripper](https://arxiv.org/abs/2408.14747) (2024) — Three-fingered 9-DoF gripper rotates a sensorized target valve precisely 180 degrees via image-based RL.
  - [Rapid Motor Adaptation for Robotic Manipulator Arms](https://arxiv.org/abs/2312.04670) (2023) — Includes a Faucet Turning task where the agent pushes the handle with one finger to rotate it.

**7. 문 손잡이 돌려 열기** (turn a door handle to open)
  - [DoorBot: Closed-Loop Task Planning and Manipulation for Door Opening in the Wild with Haptic Feedback](https://arxiv.org/abs/2504.09358) (2025) — Haptic-aware closed-loop manipulation opens unseen doors with lever handles and doorknobs; success rate up to ~90%.
  - [A Versatile Door Opening System with Mobile Manipulator through Adaptive Position-Force Control and Reinforcement Learning](https://arxiv.org/abs/2307.04422) (2023) — Mobile manipulator turns handles and opens doors via adaptive position-force control and RL.

**8. 열쇠로 자물쇠 열기** (unlock a lock with a key)
  - [ExoStart: Efficient learning for dexterous manipulation with sensorized exoskeleton demonstrations](https://arxiv.org/abs/2506.11775) (2025) — Dexterous hand inserts and turns a key in a lock (Key Lock task) with >50% success, learned from exoskeleton demos + RL.

## B. Tool use
**9. 드라이버로 나사 조이기/풀기** (tighten or loosen a screw with a screwdriver)
  - [Haptics of Screwing and Unscrewing for its Application in Smart Factories for Disassembly](https://arxiv.org/abs/1801.10386) (2018) — Robotic screwdriving/unscrewing study modeling axial force and torque to avoid cam-out while driving screws with a screwdriver.

**10. 망치로 못 박기** (hammer a nail)
  - [SimToolReal: An Object-Centric Policy for Zero-Shot Dexterous Tool Manipulation](https://arxiv.org/abs/2602.16863) (2026) — Dexterous hand grasps a hammer by its handle, rotates it in-hand into striking pose, and hammers a nail (zero-shot sim-to-real).
  - [Tool-as-Interface: Learning Robot Policies from Observing Human Tool Use](https://arxiv.org/abs/2504.04612) (2025) — Imitation-learning framework validated on nail hammering (among other tool tasks) from human tool-use observation.

**11. 가위로 종이 자르기** (cut paper with scissors)
  - [ScissorBot: Learning Generalizable Scissor Skill for Paper Cutting via Simulation, Imitation, and Sim2Real](https://arxiv.org/abs/2409.13966) (2024) — Learning-based robotic system that cuts patterned paper with real scissors (sim-to-real).

**12. 펜 뚜껑 열고 글씨 쓰기** (uncap a pen and write)
  - [Scaling Cross-Embodied Learning: One Policy for Manipulation, Navigation, Locomotion and Aviation (CrossFormer)](https://arxiv.org/abs/2408.11812) (2024) — Cross-embodiment policy demonstrated uncapping a Sharpie pen on a bimanual robot.
  - [VLBiMan: Vision-Language Anchored One-Shot Demonstration Enables Generalizable Bimanual Robotic Manipulation](https://arxiv.org/abs/2509.21723) (2025) — Bimanual pen/cap assembly and uncapping tasks via one-shot demonstrations.

**13. 집게로 물건 집기** (pick objects with tongs)
  - [Mana: Dexterous Manipulation of Articulated Tools](https://arxiv.org/abs/2606.13677) (2026) — Multi-fingered dexterous manipulation of articulated tools including picking up small objects with tongs.

**14. 국자로 액체 떠 옮기기** (ladle liquid between containers)
  - [SCOOP'D: Learning Mixed-Liquid-Solid Scooping via Sim2Real Generative Policy](https://arxiv.org/abs/2510.11566) (2025) — Diffusion policy scoops liquids/granular media with a ladle-like tool, transferring scoops between containers.

**15. 뒤집개로 음식 뒤집기** (flip food with a spatula)
  - [Tool-as-Interface: Learning Robot Policies from Human Tool Usage through Imitation Learning](https://arxiv.org/abs/2504.04612) (2025) — Includes a pan/spatula flipping task (eggs, burger buns, meat patties) learned from human play.
  - [Robot Learning as an Empirical Science: Best Practices for Policy Evaluation](https://arxiv.org/abs/2409.09491) (2024) — Dual-arm 'Flip and Serve Pancake' task with each arm holding a spatula to flip and plate a pancake.

**16. 렌치로 너트 조이기** (tighten a nut with a wrench)
  - [Hybrid Control for Robotic Nut Tightening Task](https://arxiv.org/abs/2511.21366) (2025) — Hierarchical force/position control for autonomous robotic nut tightening (wrench/socket tool use).
  - [Robust Planning for Multi-stage Forceful Manipulation](https://arxiv.org/abs/2208.00319) (2022) — Forceful manipulation planning including twisting a nut on a bolt with a grasped spanner/tool.

**17. 칼로 빵·과일 자르기** (cut bread or fruit with a knife)
  - [SliceIt! A Dual Simulator Framework for Learning Robot Food Slicing](https://arxiv.org/abs/2404.02569) (2024) — Real-to-sim-to-real framework for safely learning robot knife slicing of food items.
  - [Learning an Adaptive Cutting Policy for Multi-Material Objects](https://arxiv.org/abs/2306.11288) (2023) — RSS paper learning a knife cutting policy that adapts to multi-material objects (e.g., fruit/bread).

## C. Paper / Deformable
**18. 책 페이지 한 장씩 넘기기** (flip book pages one by one)
  - [Flipbot: Learning Continuous Paper Flipping via Coarse-to-Fine Exteroceptive-Proprioceptive Exploration](https://arxiv.org/abs/2304.02253) (2023) — Singulates and flips paper-like deformable objects one at a time (page-flipping style task).
  - [Learning thin deformable object manipulation with a multi-sensory integrated soft hand](https://arxiv.org/abs/2411.13952) (2024) — Soft underactuated hand singulates and turns thin sheets/pages using tactile sensing.

**19. 휴지 한 장 뽑기** (pull a single tissue from a box)
  - [PP-Tac: Paper Picking Using Tactile Feedback in Dexterous Robotic Hands](https://arxiv.org/abs/2504.16649) (2025) — Dexterous hand picks up single thin paper-like sheets via tactile feedback; closest to pulling a tissue.

**20. 종이 반으로 접기** (fold paper in half)
  - [Learning Neural Force Manifolds for Sim2Real Robotic Symmetrical Paper Folding](https://arxiv.org/abs/2301.01968) (2023) — Robot folds sheets of paper in half using a learned force manifold from physics simulation.

**21. 봉투 열어 편지 꺼내기** (open an envelope and take out a letter)
  - ⚠️ _research gap — no paper found_

**22. 종이 구겨 버리기** (crumple paper and toss it)
  - ⚠️ _research gap — no paper found_

**23. 스티커 떼어 붙이기** (peel a sticker and stick it)
  - ⚠️ _research gap — no paper found_

**24. 신문 펼치기** (unfold a newspaper)
  - ⚠️ _research gap — no paper found_

## D. Packaging
**25. 박스 뚜껑 열기** (open box flaps)
  - ⚠️ _research gap — no paper found_

**26. 테이프로 박스 봉하기** (tape a box shut)
  - ⚠️ _research gap — no paper found_

**27. 지퍼백 열고 닫기** (open and close a ziplock bag)
  - Functional Contour-following via Haptic Perception and Reinforcement Learning (2018) _(no arXiv id)_ — Robot closes a deformable ziplock bag's zipper via tactile (BioTac) haptic feedback and contextual-bandit RL; directly performs ziplock closing (T-Haptics 2018, no arXiv ID).

**28. 비닐봉지 묶기** (tie a plastic bag)
  - Iterative Interactive Modeling for Knotting Plastic Bags (2022) _(no arXiv id)_ — Dual-arm robot adjusts a randomly-dropped plastic bag to a standing pose then runs learned primitives to tie/knot it (CoRL 2022; PMLR gao23a, no arXiv ID found).
  - [DexKnot: Generalizable Visuomotor Policy Learning for Dexterous Bag-Knotting Manipulation](https://arxiv.org/abs/2603.07136) (2026) — Learns a dexterous visuomotor policy that ties/knots plastic bags.

**29. 과자 봉지 뜯기** (tear open a snack bag)
  - [A gripper for flap separation and opening of sealed bags](https://arxiv.org/abs/2603.10890) (2026) — Custom gripper separates and grasps the flaps of sealed flat pouches and opens the seal; closest real match (opening sealed bags, not literal tearing of a snack bag).

**30. 선물 포장 풀기** (unwrap a gift)
  - ⚠️ _research gap — no paper found_

**31. 뽁뽁이로 물건 싸기** (wrap an item in bubble wrap)
  - [Learning-based Cooperative Robotic Paper Wrapping: A Unified Control Policy with Residual Force Control](https://arxiv.org/abs/2511.03181) (2025) — Bimanual cooperative robot wraps objects in paper/wrapping material via learned residual-force control; closest match to wrapping an item.

## E. Kitchen / Food
**32. 컵에 물 따르기** (pour water into a cup)
  - Accurate Pouring with an Autonomous Robot Using an RGB-D Camera (2018) _(no arXiv id)_ — PR2 robot pours water into a cup to a target level using RGB-D liquid-level feedback; 250+ real pours.
  - Robot gaining accurate pouring skills through self-supervised learning and generalization (2021) _(no arXiv id)_ — Self-supervised GRU policy pours precise water amounts into a cup on a real manipulator.

**33. 계란 깨서 그릇에 담기** (crack an egg into a bowl)
  - [DexMan: Learning Bimanual Dexterous Manipulation from Human and Generated Videos](https://arxiv.org/abs/2510.08475) (2025) — Bimanual dexterous humanoid skills learned from videos; task suite includes egg cracking into a bowl.
  - [DexMimicGen: Automated Data Generation for Bimanual Dexterous Manipulation via Imitation Learning](https://arxiv.org/abs/2410.24185) (2024) — Automated bimanual dexterous data generation; includes delicate egg/bowl-style placement tasks.

**34. 바나나 껍질 까기** (peel a banana)
  - [Goal-conditioned dual-action imitation learning for dexterous dual-arm robot manipulation](https://arxiv.org/abs/2203.09749) (2022) — Dual-arm robot peels a real banana end-to-end via goal-conditioned dual-action imitation learning.

**35. 오렌지 껍질 까기** (peel an orange)
  - ⚠️ _research gap — no paper found_

**36. 빵에 잼 바르기** (spread jam on bread)
  - [Mash, Spread, Slice! Learning to Manipulate Object States via Visual Spatial Progress](https://arxiv.org/abs/2509.24129) (2025) — Franka robot performs spreading of coatable substances on a surface (e.g. spread on bread/donut) using visual spatial-progress rewards.

**37. 토스터에 빵 넣고 꺼내기** (put and remove toast from a toaster)
  - [A Careful Examination of Large Behavior Models for Multitask Dexterous Manipulation](https://arxiv.org/abs/2507.05331) (2025) — TRI bimanual LBM evaluation suite includes toaster bread-loading / make-toast tasks; uncertain whether removal is explicitly performed.

**38. 채소 다듬기** (trim vegetables)
  - [Vegetable Peeling: A Case Study in Constrained Dexterous Manipulation](https://arxiv.org/abs/2407.07884) (2024) — Allegro hand reorients a vegetable while a second arm peels/processes it; constrained dexterous food prep (closest to trimming/processing vegetables).

**39. 국수 면 집어 그릇에 담기** (pick up noodles into a bowl)
  - [Learning Bimanual Scooping Policies for Food Acquisition](https://arxiv.org/abs/2211.14652) (2022) — Franka robot acquires noodles (twirling/grouping with a fork) and scoops food into/off a plate; real-world noodle acquisition.

**40. 후추통 흔들어 뿌리기** (shake a pepper shaker)
  - [DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation](https://arxiv.org/abs/2505.21864) (2025) — Dexterous hand grasps seasoning and sprinkles it over food (sprinkling salt task); closest match to shaking/sprinkling seasoning.

**41. 와인 코르크 따기** (uncork a wine bottle)
  - Method for Bottle Opening with a Dual-Arm Robot (2024) _(no arXiv id)_ — Dual-arm TIAGo++ grips bottle and cap and unscrews/opens it using force control plus a deep-RL gripper-rotation policy (Biomimetics/MDPI; closest published robot-uncorking-type task).

## F. Assembly / Insertion
**42. 너트·볼트 체결** (thread a nut onto a bolt)
  - [FORGE: Force-Guided Exploration for Robust Contact-Rich Manipulation under Uncertainty](https://arxiv.org/abs/2408.04587) (2024) — Sim-to-real force-aware RL whose multistage planetary-gear assembly explicitly includes a nut-threading (thread nut onto bolt) sub-task.
  - [Hybrid Control for Robotic Nut Tightening Task](https://arxiv.org/abs/2511.21366) (2025) — Autonomous nut-tightening system threading a nut onto a fixed bolt via a motion-primitive planner with force/position control switching.

**43. 플러그 콘센트에 꽂기** (plug into an electrical outlet)
  - Robot, Feed Thyself: Plugging In to Unmodified Electrical Outlets (2010) _(no arXiv id)_ — Robot locates and inserts a plug into an unmodified wall outlet using electric-field sensing to align prongs with the socket holes.

**44. USB 꽂기** (insert a USB connector)
  - [Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning](https://arxiv.org/abs/2410.21845) (2024) — HIL-SERL: vision-based RL grasps a free USB connector and inserts it into the slot with near-perfect success.
  - [Deep Reinforcement Learning for Industrial Insertion Tasks with Visual Inputs and Natural Rewards](https://arxiv.org/abs/1906.05841) (2019) — Learns connector/USB-style industrial insertion from visual inputs with self-supervised rewards.

**45. 레고 블록 조립** (assemble Lego blocks)
  - [A Lightweight and Transferable Design for Robust LEGO Manipulation](https://arxiv.org/abs/2309.02354) (2023) — Robot end-of-arm tool that robustly picks, places, and assembles (stacks/inserts) LEGO bricks onto target studs.
  - [Eye-in-Finger: Smart Fingers for Delicate Assembly and Disassembly of LEGO](https://arxiv.org/abs/2503.06848) (2025) — Tool-tip vision-in-finger enabling sub-millimeter robotic LEGO assembly and disassembly.

**46. 펜 분해·조립(심 넣기)** (assemble a pen by inserting the refill)
  - ⚠️ _research gap — no paper found_

**47. 배터리 넣기** (insert batteries)
  - [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://arxiv.org/abs/2304.13705) (2023) — ACT/ALOHA includes a battery-slot task: one gripper places and pushes a battery into a remote-control slot against a spring while the other holds the remote.
  - [You Only Demonstrate Once: Category-Level Manipulation from Single Visual Demonstration](https://arxiv.org/abs/2201.12716) (2022) — Battery-insertion among its category-level contact-rich tasks: pick a battery and insert it into a spring-loaded receptacle.

**48. 퍼즐 조각 맞추기** (fit a jigsaw puzzle piece)
  - [Jigsaw-based Benchmarking for Learning Robotic Manipulation](https://arxiv.org/abs/2306.04932) (2023) — Benchmark where a robot picks and inserts/fits jigsaw puzzle pieces into place as a manipulation task.

**49. 파이프·관 연결** (connect pipe fittings)
  - ⚠️ _research gap — no paper found_

## G. Rope / Cable
**50. 신발끈 묶기** (tie a shoelace)
  - [ALOHA Unleashed: A Simple Recipe for Robot Dexterity](https://arxiv.org/abs/2410.13126) (2024) — First end-to-end bimanual diffusion policy that autonomously ties shoelaces (and hangs shirts) on ALOHA 2.

**51. 리본 묶기** (tie a ribbon bow)
  - [ALOHA Unleashed: A Simple Recipe for Robot Dexterity](https://arxiv.org/abs/2410.13126) (2024) — Bimanual ALOHA learns to straighten shoelaces and tie them into a bow via diffusion-policy imitation learning.

**52. 케이블 감아 정리** (coil and organize a cable)
  - [Self-Supervised Learning of Dynamic Planar Manipulation of Free-End Cables](https://arxiv.org/abs/2405.09581) (2024) — Robot dynamically manipulates and arranges free-end cables into goal configurations (coiling/organizing) via self-supervised learning.
  - [Autonomously Untangling Long Cables](https://arxiv.org/abs/2207.07813) (2022) — Bilateral robot manages and organizes cables up to 3m, including bringing them to a neat untangled arrangement.

**53. 이어폰 줄 풀기** (untangle an earphone cord)
  - [Untangling Dense Knots by Learning Task-Relevant Keypoints](https://arxiv.org/abs/2011.04999) (2020) — Bilateral robot untangles dense knots in cables/cords using learned task-relevant keypoints (HULK).
  - [Autonomously Untangling Long Cables](https://arxiv.org/abs/2207.07813) (2022) — Robot autonomously untangles knotted long cables with sliding-and-grasping primitives (SGTM).

**54. 매듭 짓기** (tie a knot in a rope)
  - [TieBot: Learning to Knot a Tie from Visual Demonstration through a Real-to-Sim-to-Real Approach](https://arxiv.org/abs/2407.03245) (2024) — Dual-arm robot ties a knot in a tie (deformable) from visual demo; 50% real-world success.
  - [Bimanual rope manipulation skill synthesis through context dependent correction policy learning from human demonstration](https://arxiv.org/abs/2209.13850) (2022) — Humanoid bimanual robot makes knots over a bar with rope via learned correction policy.

**55. 전선 커넥터 연결** (connect a wire connector)
  - [Learning on the Job: Self-Rewarding Offline-to-Online Finetuning for Industrial Insertion of Novel Connectors from Vision](https://arxiv.org/abs/2210.15206) (2022) — Robot inserts/mates electrical connectors (50 connector types) via self-rewarding offline-to-online RL from vision.
  - [Deep Reinforcement Learning for Industrial Insertion Tasks with Visual Inputs and Natural Rewards](https://arxiv.org/abs/1906.05841) (2019) — Robot performs electric connector plug insertion (mating connector to socket) via deep RL with visual inputs.

## H. Clothing
**56. 수건 개기** (fold a towel)
  - Teaching a single-arm robot to fold towels (synthetic-data keypoints) (2024) _(no arXiv id)_ — Single-arm robot folds towels using CNNs trained on synthetic data; Science Robotics (adm8151). arXiv id not confirmed.
  - [FabricFlowNet: Bimanual Cloth Manipulation with a Flow-based Policy](https://arxiv.org/abs/2111.05623) (2021) — Bimanual robot folds cloth/towels into target configurations using a flow-based policy.

**57. 티셔츠 개기** (fold a T-shirt)
  - [SpeedFolding: Learning Efficient Bimanual Folding of Garments](https://arxiv.org/abs/2208.10552) (2022) — Bimanual robot folds crumpled garments (incl. T-shirts) to folded state, 93% success.
  - [UniFolding: Towards Sample-efficient, Scalable, and Generalizable Robotic Garment Folding](https://arxiv.org/abs/2311.01267) (2023) — Robot unfolds and folds T-shirts/garments via sample-efficient human-in-the-loop learning.

**58. 옷걸이에 옷 걸기** (hang a shirt on a hanger)
  - [ALOHA Unleashed: A Simple Recipe for Robot Dexterity](https://arxiv.org/abs/2410.13126) (2024) — Bimanual robot picks a hanger, inserts both sides into shirt collar, and hangs the shirt on a rack.
  - [RoboHanger: Learning Generalizable Robotic Hanger Insertion for Diverse Garments](https://arxiv.org/abs/2412.01083) (2024) — Robot inserts a hanger into diverse garments (hanging a shirt on a hanger) with a generalizable learned policy.

**59. 단추 채우기** (button a shirt)
  - ⚠️ _research gap — no paper found_

**60. 지퍼 올리기/내리기** (zip and unzip a zipper)
  - [Contact-Rich Manipulation of a Flexible Object based on Deep Predictive Learning using Vision and Tactility](https://arxiv.org/abs/2112.06442) (2021) — Robot performs contact-rich unzipping of a fabric bag's zipper via deep predictive learning with vision and tactile.

**61. 양말 짝 맞춰 개기** (pair and fold socks)
  - [SpeedFolding: Learning Efficient Bimanual Folding of Garments](https://arxiv.org/abs/2208.10552) (2022) — Bimanual system folds crumpled garments (incl. socks-class flat items) into folded configurations.
  - [UniFolding: Towards Sample-efficient, Scalable, and Generalizable Robotic Garment Folding](https://arxiv.org/abs/2311.01267) (2023) — Dual-arm garment unfolding and folding pipeline for deformable clothing.

**62. 빨래 널기** (hang laundry on a drying rack)
  - [RoboHanger: Learning Generalizable Robotic Hanger Insertion for Diverse Garments](https://arxiv.org/abs/2412.01083) (2024) — Bimanual policy inserts a hanger into garments (the core skill for hanging laundry on a rack).
  - [GraphGarment: Learning Garment Dynamics for Bimanual Cloth Manipulation Tasks](https://arxiv.org/abs/2503.05817) (2025) — Learns garment dynamics and applies them to bimanual manipulation tasks including hanging.

## I. Bimanual hold+act
**63. 한 손 잡고+다른 손 뚜껑 열기** (hold an object and open its cap)
  - [VTAO-BiManip: Masked Visual-Tactile-Action Pre-training with Object Understanding for Bimanual Dexterous Manipulation](https://arxiv.org/abs/2501.03606) (2025) — Bimanual dexterous bottle-cap unscrewing: one hand holds the bottle, the other unscrews the cap (sim + real).
  - Method for Bottle Opening with a Dual-Arm Robot (2024) _(no arXiv id)_ — Dual-arm TIAGo++ grips bottle with one gripper, cap with the other, unscrews via position+force control (MDPI Biomimetics, no arXiv).

**64. 그릇 잡고+젓기** (hold a bowl and stir)
  - [Robot Cooking with Stir-fry: Bimanual Non-prehensile Manipulation of Semi-fluid Objects](https://arxiv.org/abs/2205.05960) (2022) — Bimanual leader-follower system: one arm holds/handles the pan/contents while the other stirs.

**65. 종이 잡고+자르기** (hold paper and cut with scissors)
  - [ScissorBot: Learning Generalizable Scissor Skill for Paper Cutting via Simulation, Imitation, and Sim2Real](https://arxiv.org/abs/2409.13966) (2024) — Dual-arm cooperation: one arm holds/rotates the paper, the other manipulates scissors to cut.

**66. 못 잡고+망치질** (hold a nail and hammer it)
  - ⚠️ _research gap — no paper found_

**67. 큰 상자 두 손으로 들어 옮기기** (lift a large box with two hands)
  - [PerAct2: Benchmarking and Learning for Robotic Bimanual Manipulation Tasks](https://arxiv.org/abs/2407.00278) (2024) — Bimanual benchmark with coordinated two-arm lifting/box-pushing tasks requiring simultaneous arm coordination.

**68. 쟁반 두 손으로 옮기기** (carry a tray with two hands)
  - ⚠️ _research gap — no paper found_

**69. 병 잡고+따르기** (hold a bottle and pour)
  - [You Only Teach Once: Learn One-Shot Bimanual Robotic Manipulation from Video Demonstrations](https://arxiv.org/abs/2501.14208) (2025) — Bimanual tasks include pouring water (one arm holds, the other pours) learned one-shot from video.
  - [DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation](https://arxiv.org/abs/2403.07788) (2024) — Bimanual dexterous-hand robot executes pouring among its evaluated manipulation tasks.

**70. 빵 잡고+버터 바르기** (hold bread and spread butter)
  - ⚠️ _research gap — no paper found_

## J. Handover / Throw-catch
**71. 한 손→다른 손 물건 넘기기** (hand over an object between two hands)
  - [Dynamic Handover: Throw and Catch with Bimanual Hands](https://arxiv.org/abs/2309.05655) (2023) — Two Allegro hands on XArms throw and catch objects between hands via multi-agent RL with sim-to-real; covers passing an object from one hand to the other.
  - [DyDexHandover: Human-like Bimanual Dynamic Dexterous Handover using RGB-only Perception](https://arxiv.org/abs/2509.17350) (2025) — Bimanual dynamic handover where one dexterous hand transfers an object to the other using RGB-only perception.

**72. 던져서 받기** (throw and catch an object)
  - [Catch It! Learning to Catch in Flight with Mobile Dexterous Hands](https://arxiv.org/abs/2409.10319) (2024) — Mobile manipulator with 12-DoF dexterous hand learns to throw and catch objects in flight via two-stage RL.
  - [DexCatch: Learning to Catch Arbitrary Objects with Dexterous Hands](https://arxiv.org/abs/2310.08809) (2023) — End-to-end model-free RL framework (LTC) for throwing-then-catching arbitrary objects with dexterous hands.

**73. 두 손으로 공 굴리기** (roll a ball between two hands)
  - [Dynamic Handover: Throw and Catch with Bimanual Hands](https://arxiv.org/abs/2309.05655) (2023) — Two facing dexterous hands pass objects back and forth; closest match to rolling/passing a ball between two hands (bimanual coordination).

**74. 무거운 물건 양손 재배치** (reposition a heavy object with both hands)
  - [A Certified-Complete Bimanual Manipulation Planner](https://arxiv.org/abs/1705.02573) (2017) — Plans bimanual pick-and-place for large/heavy objects that can only be moved when grasped with both hands, repositioning from initial to goal placement.
  - [Bimanual Grasp Synthesis for Dexterous Robot Hands](https://arxiv.org/abs/2411.15903) (2024) — Bimanual grasping for handling heavy objects, with two-hand strategies outperforming single-hand for repositioning.

## K. In-hand / Regrasp
**75. 손 안에서 큐브 돌리기** (in-hand cube reorientation)
  - [Learning Dexterous In-Hand Manipulation](https://arxiv.org/abs/1808.00177) (2018) — OpenAI Shadow Hand reorients a cube to arbitrary target orientations via RL trained in sim with domain randomization, transferred to real hardware.
  - [DROP: Dexterous Reorientation via Online Planning](https://arxiv.org/abs/2409.14562) (2024) — Online sampling-based predictive control for contact-rich in-hand cube reorientation with vision-based pose estimation.

**76. 펜 손가락으로 돌리기** (pen spinning in the fingers)
  - [Lessons from Learning to Spin "Pens"](https://arxiv.org/abs/2407.18902) (2024) — First learning-based approach to spin pen-like objects in the fingers, achieving multiple revolutions with smooth finger gaiting.
  - [Soft Robotic Dynamic In-Hand Pen Spinning](https://arxiv.org/abs/2411.12734) (2024) — SWIFT system learns dynamic pen spinning with a soft robotic hand from real-world data; generalizes to brush and screwdriver.

**77. 동전 손가락 사이 이동** (finger-walk a coin across fingers)
  - ⚠️ _research gap — no paper found_

**78. 공 손바닥에서 굴리기** (roll a ball in the palm)
  - [Getting the Ball Rolling: Learning a Dexterous Policy for a Biomimetic Tendon-Driven Hand with Rolling Contact Joints](https://arxiv.org/abs/2308.02453) (2023) — RL policy rolls/rotates a sphere in the Faive Hand with zero-shot sim-to-real transfer (in-palm ball rolling).
  - [Sampling-Based Model Predictive Control for Dexterous Manipulation on a Biomimetic Tendon-Driven Hand](https://arxiv.org/abs/2411.06183) (2024) — Demonstrates ball rolling, flipping, and catching in sim and on a physical biomimetic hand.

**79. 쥐었다 다시 잡기** (regrasp an object in hand)
  - [Geometric In-Hand Regrasp Planning: Alternating Optimization of Finger Gaits and In-Grasp Manipulation](https://arxiv.org/abs/1804.04292) (2018) — Planner that moves from an initial grasp to a desired grasp using finger gaiting plus in-grasp manipulation (in-hand regrasping).
  - [Robotic in-hand manipulation with relaxed optimization](https://arxiv.org/abs/2406.04950) (2024) — Path planner executing both re-grasping and finger-gaiting actions to change the grasp in hand.

**80. 손 안에서 도구 방향 바꾸기** (reorient a tool in hand)
  - [In-Hand Manipulation of Articulated Tools with Dexterous Robot Hands with Sim-to-Real Transfer](https://arxiv.org/abs/2509.23075) (2025) — Dexterous in-hand manipulation/reorientation of articulated tools with tactile-force feedback and sim-to-real transfer.
  - [Object-Centric Dexterous Manipulation from Human Motion Data](https://arxiv.org/abs/2411.04005) (2024) — Learns object-centric dexterous in-hand reorientation including tool-like objects from human motion data.

## L. Precision / Small
**81. 바늘에 실 꿰기** (thread a needle)
  - [Precise Robotic Needle-Threading with Tactile Perception and Reinforcement Learning](https://arxiv.org/abs/2311.02396) (2023) — T-NT: vision-based tactile sensors locate the thread tail-end, then tactile-guided RL inserts the thread into the needle eyelet.

**82. 동전 저금통에 넣기** (insert a coin into a slot)
  - [DEXOP: A Device for Robotic Transfer of Dexterous Human Manipulation](https://arxiv.org/abs/2509.04441) (2025) — Hand-exoskeleton perioperation system; demonstrated tasks include picking up a coin from a table and retrieving an M2 screw (coin handling, not slot-insertion specifically).

**83. 작은 나사 손으로 돌리기** (turn a tiny screw by hand)
  - [Dexterous In-Hand Manipulation of Slender Cylindrical Objects through Deep Reinforcement Learning with Tactile Sensing](https://arxiv.org/abs/2304.05141) (2023) — Three-fingered tactile hand rotates/repositions a thin cylindrical object (stick) in-hand via finger contacts; nearest analog to finger-turning a small screw/cylinder. Not a literal screw-in-thread task.

**84. 핀셋으로 부품 집기** (pick a small part with tweezers)
  - [Hierarchical Reinforcement Learning for Articulated Tool Manipulation with Multifingered Hand](https://arxiv.org/abs/2507.06822) (2025) — Multifingered hand actuates a tweezer-like articulated tool to grasp/pick small objects of varying size (70.8% success).

**85. 콩·알갱이 하나씩 옮기기** (move beans or grains one by one)
  - [In-Hand Singulation and Scooping Manipulation with a 5 DOF Tactile Gripper](https://arxiv.org/abs/2408.00610) (2024) — Tactile (GelSight) gripper singulates individual objects buried in granular media by touch (84% success); closest match to picking grains one at a time.

**86. 카드 한 장 뽑기** (pick a single card from a deck)
  - [In-Hand Singulation and Scooping Manipulation with a 5 DOF Tactile Gripper](https://arxiv.org/abs/2408.00610) (2024) — Same gripper scoops/picks a single thin card (credit card) from a stack in confined space (100% success on card scooping).
  - [Learning thin deformable object manipulation with a multi-sensory integrated soft hand](https://arxiv.org/abs/2411.13952) (2024) — Soft underactuated hand singles out and picks thin deformable objects (pages/cards) using multi-sensory feedback.

## M. Press / Squeeze
**87. 치약 짜기** (squeeze toothpaste onto a brush)
  - ⚠️ _research gap — no paper found_

**88. 스프레이 펌프 누르기** (press a spray pump)
  - [In-Hand Manipulation of Articulated Tools with Dexterous Robot Hands with Sim-to-Real Transfer](https://arxiv.org/abs/2509.23075) (2025) — Dexterous hand grasps and actuates articulated tools (scissors, pliers, staplers, surgical instruments) by pressing/squeezing the trigger; same problem class as pressing a spray pump.
  - [DexTOG: Learning Task-Oriented Dexterous Grasp with Language](https://arxiv.org/abs/2504.04573) (2025) — Shadow-hand task-oriented grasps explicitly include 'spray bottle pressing' and 'spray bottle triggering' (finger positioned to press button/pull trigger).

**89. 리모컨 버튼 누르기** (press remote-control buttons)
  - ⚠️ _research gap — no paper found_

**90. 비누 펌프 누르기** (press a soap pump dispenser)
  - ⚠️ _research gap — no paper found_

**91. 키보드 타이핑** (type on a keyboard)
  - [Deep Reinforcement Learning for Tactile Robotics: Learning to Type on a Braille Keyboard](https://arxiv.org/abs/2008.02646) (2020) — RL agent learns to press/type characters on a (braille) keyboard, demonstrated in sim and on a real tactile robot.
  - [RoboPianist: Dexterous Piano Playing with Deep Reinforcement Learning](https://arxiv.org/abs/2304.04150) (2023) — Two anthropomorphic hands press sequences of keys on a keyboard (piano) via RL; closest dexterous key-pressing match.

## N. Devices
**92. 노트북 열기/닫기** (open and close a laptop)
  - ⚠️ _research gap — no paper found_

**93. 서랍 열고 물건 넣기** (open a drawer and place an item inside)
  - [Bi-ACT: Bilateral Control-Based Imitation Learning via Action Chunking with Transformer](https://arxiv.org/abs/2401.17698) (2024) — Includes a 'Put-in-Drawer' task: robot opens a drawer and places an object inside via bilateral-control imitation learning.

**94. 안경 케이스 열고 꺼내기** (open a case and take out glasses)
  - [DexMan: Learning Bimanual Dexterous Manipulation from Human and Generated Videos](https://arxiv.org/abs/2510.08475) (2025) — Bimanual dexterous skills from videos (OakInk-v2 / TACO objects) include opening a case/container and removing a contained object such as glasses.

**95. 우산 펴고 접기** (open and close an umbrella)
  - ⚠️ _research gap — no paper found_

**96. 렌즈 캡 끼우고 빼기** (put on and take off a lens cap)
  - ⚠️ _research gap — no paper found_

## O. Stack / Sort
**97. 컵 쌓기** (stack cups)
  - [RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation](https://arxiv.org/abs/2306.11706) (2023) — Generalist agent whose real-robot task suite includes stacking cups (and stacking objects/blocks).
  - You Only Teach Once: Learn One-Shot Bimanual Robotic Manipulation from Video Demonstrations (2025) _(no arXiv id)_ — YOTO bimanual one-shot tasks include stacking cups; arxiv id not confirmed.

**98. 블록 탑 쌓기** (stack blocks into a tower)
  - [Mastering Stacking of Diverse Shapes with Large-Scale Iterative Reinforcement Learning on Real Robots](https://arxiv.org/abs/2312.11374) (2023) — DeepMind RGB-Stacking: real robot arm stacks objects/blocks via large-scale RL.
  - [RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation](https://arxiv.org/abs/2306.11706) (2023) — Performs block-stacking benchmark (stacking objects into a tower) among many tasks.

**99. 색깔별 분류하기** (sort objects by color)
  - [A Deep Learning-Based Autonomous Robot Manipulator for Sorting Application](https://arxiv.org/abs/2009.03565) (2020) — Robot manipulator detects object color and sorts objects by color via deep learning vision + grasping.

**100. 책 책장에 꽂기** (shelve a book)
  - Multi-Stage Book Perception and Bimanual Manipulation for Rearranging Book Shelves (2023) _(no arXiv id)_ — Bimanual system perceives books and places/inserts a book onto a shelf (Springer chapter; no arxiv id found).
