# review/

같은 논문 리뷰의 **버전 스냅샷**과, 그 리뷰들을 다시 읽고 정리한 **리뷰에 대한 리뷰**를 모아둔 곳.

브라우저로 보려면 [review/index.html](index.html) 을 열면 된다. v1/v2는 `review/paper.html`이
`overview/paper.html`과 같은 렌더러로 그려 준다.

사이트가 실제로 읽는 파일은 여전히 루트의 `paper_summaries.js`다. 여기 `*.v*.js`는 **사본**이고
라이브러리 페이지는 이 파일들을 로드하지 않는다. 내용을 고치려면 `paper_summaries.js`를 고칠 것.

## Twisting Lids Off with Two Hands (CoRL 2024)

| 버전 | 날짜 | 원본 위치 | 커밋 | 보기 |
|---|---|---|---|---|
| v0 | 2026-07-27 | `paper_insights.js` (삭제됨) | `b3fe343` 추가 → `beb87bb` 삭제 | [twisting-lids.v0.html](twisting-lids.v0.html) |
| v1 | 2026-09-02 07:14 | `paper_summaries.js` | `0d1eef4` | [paper.html?id=twisting-lids-v1](paper.html?id=twisting-lids-v1) |
| v2 | 2026-09-02 09:48 | `paper_summaries.js` | `9e8fc12` | [paper.html?id=twisting-lids-v2](paper.html?id=twisting-lids-v2) |
| v3 | 2026-09-03 | `paper_summaries.js` | `9e9a5c3` | [paper.html?id=twisting-lids-v3](paper.html?id=twisting-lids-v3) |
| v4 | 2026-09-03 | `paper_summaries.js` | `a5602ab` | [paper.html?id=twisting-lids-v4](paper.html?id=twisting-lids-v4) |
| v5 | 2026-09-03 | `paper_summaries.js` | `7d81ba5` | [paper.html?id=twisting-lids-v5](paper.html?id=twisting-lids-v5) |
| v6 (현행) | 2026-09-04 | `paper_summaries.js` | (this session) | [paper.html?id=twisting-lids-v6](paper.html?id=twisting-lids-v6) |

- **v0**: 한국어 4필드(`problem`/`idea`/`delta`/`basis`) 노트. `overview/` 바깥에 있던 최초 버전.
- **v1**: 첫 report-style 요약. `overview/paper.html?id=twisting-lids`로 렌더링됨.
- **v2**: 사람이 직접 읽은 노트와 대조해 개정.
- **v3**: `stop-slop` 스킬을 적용해 문장만 다시 씀.
- **v4**: `paper-reading` 스킬로 PDF와 프로젝트 페이지부터 다시 읽음. 본문 그림 3장, 설계 결정 표 추가.
- **v5**: 같은 독해를 구조만 다시 씀. 반복하던 필드 3개를 삭제.
- **v6**: field sparsity 를 적용한 현행본. 채운 필드 안의 재현용 디테일까지 버려서 v5 의 65%.

v1 → v2 차이:

- AD / TTF / Vel 지표를 정의하고 trade-off를 설명 (잡고 멈추기만 하는 정책이 TTF 30.00 / AD ≈ 0 을
  받는 것이 No-Asym·Large의 signature), 비교 표에 Vel 추가
- reset / early-termination 규칙을 contact reward와 동급의 메커니즘으로 승격
- contact reward를 공식 재진술이 아니라 "왜 표면을 샘플 점으로 이산화하고 min을 취하는가"로 분석
- 빠져 있던 시스템 plumbing 추가: single-marker extrinsics, ZeroMQ 10 Hz, canonical initial finger pose
- 논문의 "dynamic dexterity" 프레이밍을 그대로 받지 않고 의문 제기
- 반복 제거: contact reward 9회 → 5회, two-point 5회 → 2회

원본 diff: `git diff 0d1eef4 9e8fc12 -- paper_summaries.js`

v2 → v3 차이 (내용 아닌 문장):

- 숫자 99개가 v2와 하나도 다르지 않다 (기계로 대조함). PDF가 이 머신에 없어서 원문 재확인은 못 했고, 그래서 사실을 더하지 않았다.
- em dash 42개 → 0개, `-ly` 부사 37개 → 2개
- 수동태와 무생물 주어를 사람 주어로 교체
- 검사: `node scripts/slop-check.mjs twisting-lids`

v4 → v5 차이 (내용 아닌 구조):

- 숫자 multiset이 v4와 완전히 같다 (기계로 대조함). 새로 만든 숫자도, 없앤 숫자도 없다.
- exploration 서사가 v4에서는 `coreInsight` / `problem` / `designDecisions` / `evidence` /
  `whatMatters` / `novelty` / `takeaway` 일곱 군데에 나뉘어 있었다. v5는 `coreInsight` 한 문단에
  문제 → 두 메커니즘 → ablation을 인과로 이어 붙이고, 나머지는 뒤에서 참조만 한다.
- `designDecisions` 표를 없애고 각 결정을 `evidence`의 인과 문단으로 흡수했다
  ("배포 정책이 시뮬레이터 상태를 못 읽으니 critic에만 준다 → 없애면 30.00 s 잡고 18.67°").
- `whatMatters`와 `novelty` 삭제. 둘 다 앞에서 한 말의 재진술이었다.
- 새로 넣은 것: Figure 5의 세 reward 정성 비교(gait constraint baseline), 그리고 논문의 "first"
  주장을 이 요약이 검증하지 않았다는 명시.
- 렌더러(`overview/paper.html`, `review/paper.html`)가 모든 섹션을 optional로 다루도록 고쳤다.
  그 전에는 필드를 빼면 페이지가 깨져서, "논문에 없으면 비운다"가 실행 불가능했다.

## 리뷰에 대한 리뷰

[SUMMARY_REVIEW_NOTES.md](SUMMARY_REVIEW_NOTES.md): 위 v1 → v2 개정에서 드러난 redundancy 패턴과
반복되는 blind spot을, 새 요약을 쓸 때 쓰는 체크리스트로 정리한 것. 새 사례가 나오면 여기에 추가한다.
