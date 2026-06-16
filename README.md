# Dexterous Manipulation 논문 모음

contact-rich / multi-finger 손 작업 (병뚜껑, 재배치, 도구 사용 등). 대형 랩·기업 위주.

## 핵심 논문

| PDF | 랩/기업 | 방법론 | 하드웨어 | 대표 task | venue |
|---|---|---|---|---|---|
| `2024_Berkeley_TwistingLidsOffTwoHands.pdf` | UC Berkeley | sim-to-real RL | 양손 Allegro ×2 | 병뚜껑 열기 | CoRL 2025 |
| `2023_MIT_VisualDexterity_SciRobotics.pdf` | MIT | sim RL + sim-to-real | 다지 손 + depth cam | in-hand reorientation | Science Robotics 2023 |
| `2023_NVIDIA_DeXtreme.pdf` | NVIDIA | Isaac Gym RL | Allegro | 큐브 재배치 | ICRA 2023 |
| `2023_Stanford_SequentialDexterity.pdf` | Stanford | policy chaining RL | Allegro | 도구 사용 + 장기작업 | CoRL 2023 |
| `2024_CMU_Bidex.pdf` | CMU | teleoperation 시스템 | LEAP Hand | 양손 데이터 수집 | CoRL 2024 |
| `2020_OpenAI_LearningDexterousInHand.pdf` | OpenAI | domain randomization | Shadow Hand | in-hand 재배치 | IJRR 2020 |
| `2019_OpenAI_RubiksCube.pdf` | OpenAI | ADR | Shadow Hand | 루빅스 큐브 | arXiv 2019 |
| `2019_Berkeley_DexterousManipDeepRL.pdf` | UC Berkeley | real-world RL | Dclaw + Allegro | 밸브/박스/문 | ICRA 2019 |

## Survey

| PDF | 비고 |
|---|---|
| `SURVEY_2025_DexManip_ImitationLearning.pdf` | IL 관점 종합 (arXiv 2504.03515) |
| `SURVEY_2025_KIT_InteractiveIL_Dexterous.pdf` | KIT, **하드웨어 DoF 표 정확** (arXiv 2506.00098) |
| (다운로드 안 됨) | Frontiers 2024 in-hand survey — https://doi.org/10.3389/frobt.2024.1455431 |

## Mac으로 옮기기

- **scp**: `scp -r mingi@<이-PC-IP>:~/dex_papers ~/Downloads/`
- **Zotero/Mendeley**: `references.bib` import → 같은 폴더 PDF 자동 연결
- 또는 폴더째 클라우드(Dropbox/Drive)에 올려 동기화

## 주의
- arXiv:2605.13925 survey는 task/하드웨어 세부가 부정확 → 인용 금지. 하드웨어 사양은 KIT survey 표 기준.
