# Summary writing — review notes

`overview/paper.html?id=<slug>` 요약을 쓸 때 반복해서 저지르는 실수와 놓치는 정보의 체크리스트.
2026-09-02, `twisting-lids` 요약 초안을 사람이 직접 읽은 노트와 대조하면서 시작함.
새 요약을 쓸 때마다 여기에 사례를 추가할 것.

---

## 1. 반복되는 redundancy 패턴

### 1.1 "핵심 아이디어"를 섹션마다 다시 설명함
`twisting-lids` 초안에서 contact reward가 `tldr` / `problem` / `pipeline` / `methodDetails` /
`novelty` / `evidence`에 걸쳐 **9번** 등장했다. two-point representation은 5번,
"큰 네트워크가 transfer 안 된다"는 3번.

- 각 섹션은 **역할이 다르다**. 같은 사실을 각도만 바꿔 반복하면 섹션 구분이 무의미해진다.
  - `tldr` — 무엇을 했는지 한 번
  - `pipeline` — 어떻게 작동하는지 (메커니즘)
  - `methodDetails` — 왜 그게 통하는지 (분석)
  - `novelty` — 무엇이 새로운지 (주장)
  - `evidence` — 그게 사실이라는 근거 (숫자)
- 규칙: **한 아이디어는 최대 3번** — 한 문장 요약(tldr), 메커니즘(pipeline), 근거(evidence).
  분석할 거리가 따로 있을 때만 methodDetails를 추가한다.

### 1.2 `problem`에서 이미 해법을 말해버림
"기존 reward가 실패한다, 왜냐면 어떤 손가락이 어느 표면에 붙어야 하는지 말해주지 않으니까"는
문제 서술이 아니라 해법의 예고편이다. `problem`은 **논문을 안 읽은 상태에서 느낄 난점**만
써야 하고, 해법 어휘를 미리 쓰면 뒤 섹션이 전부 김이 샌다.

### 1.3 `output`이 `pipeline`을 미리 요약함
초안의 `output` 첫 항목이 observation/action space를 나열했는데, 이건 `pipeline`의
"Observation and action" 항목과 완전 중복. `output`은 **이 시스템이 남기는 산출물**
(정책 하나, 데이터셋, 라이브러리…)만.

---

## 2. 반복해서 놓치는 정보

### 2.1 평가 지표를 정의 없이 사용함 ★ 가장 큰 실수
초안은 표에 `AD°`, `TTF (s)`를 그대로 썼는데 둘 다 정의를 안 했다. 더 나쁜 건
**지표 설계 자체가 논문의 읽을거리**였다는 점을 놓친 것:

- success rate가 없다. AD(총 회전각)와 TTF(놓칠 때까지의 시간)는 **서로 trade-off**다.
- 병을 꽉 쥐고 안 돌리는 정책은 TTF 30.00 s / AD ≈ 0 → 숫자만 보면 훌륭해 보인다.
  실제로 No-Asym / Large baseline이 정확히 이 모양이다.
- 즉 **지표 쌍을 같이 읽는 법**을 설명해야 표가 의미를 갖는다.

> 일반 규칙: 표에 등장하는 모든 축약어는 본문에서 한 번 정의한다.
> 그리고 "이 지표로 무엇을 숨길 수 있는가"를 항상 한 줄 쓴다.

### 2.2 "지루한" 메커니즘의 비중을 과소평가함
Reset / early termination을 초안에서는 initialization과 한 덩어리로 묶어 pipeline 한 줄에
묻어버렸다. 그런데 논문은 명시적으로 *"To circumvent the high dimensionality of our
exploration problem, we introduce two early termination criteria"*라고 쓴다.

- contact reward(어디로 갈지)와 reset(어디를 버릴지)은 **같은 문제를 양쪽에서 푸는 한 쌍**이다.
- 한쪽만 조명하면 논문의 논지 자체를 틀리게 전달한다.
- 교훈: 논문이 "~하기 위해 도입했다"고 목적을 명시한 장치는 전부 일급으로 취급할 것.
  화려하지 않다고 pipeline 각주로 밀지 말 것.

### 2.3 수식을 옮기기만 하고 형태를 분석하지 않음
contact reward의 핵심은 `d(A, x) = min_i ‖A_i − x‖₂`의 **min**이다.

- 연속적인 표면 거리항이었다면 표면 전체에 걸친 매끈한 basin 하나가 생긴다.
- 표면에서 K개 점을 sampling하고 min을 취하면 fingertip마다 **최근접점 basin**이 생기고,
  fingertip↔표면 대응이 이산화된다. gradient가 "유효한 모든 자세의 평균"이 아니라
  특정 configuration으로 끌린다.
- 논문은 이 분석을 안 한다(강도와 성능의 상관만 보고). 그러면 **분석은 내가 해야 한다.**
- 교훈: 수식을 옮겼으면 "왜 이 형태인가 / 다른 형태였다면 뭐가 달랐나"를 한 줄 붙인다.

### 2.4 시스템 엔지니어링 디테일을 통째로 버림
초안에 없었던 것들:
- ArUco 태그 **하나**로 extrinsics 계산. 같은 태그를 시뮬레이션 씬에 넣어서 corner 좌표를
  camera frame / world frame 양쪽에서 짝지어 얻고 바로 푼다 — checkerboard 촬영 불필요.
- ZeroMQ로 hand / camera / workstation 통신, 10 Hz 루프 유지.
- 실제 trial의 canonical 손가락 관절값 테이블, 사람이 손 위에 물체를 얹어주는 초기화.

이런 건 "핵심 기여"가 아니라서 잘리기 쉬운데, **재현하려는 사람에게는 가장 값어치 있는 부분**이고
읽는 재미도 여기 있다. 최소한 pipeline에 "Systems plumbing" 항목 하나는 남길 것.

### 2.5 논문의 프레이밍을 그대로 받아씀
논문이 "dynamic dexterity"라고 하면 초안도 dynamic이라고 썼다. 실제로는 quasi-static
regrasping이고, 논문 자신이 진짜 dynamic의 예로 드는 건 throw-and-catch다.
어려운 건 속도가 아니라 **매 contact transition마다 물체가 무지지 상태**라는 점.

- 교훈: 논문의 형용사(dynamic, general, scalable, zero-shot)는 전부 한 번씩 의심한다.
  받아쓸지 다시 정의할지 결정하고, 다시 정의했으면 그 이유를 쓴다.

---

## 3. 다음 요약 쓸 때 체크리스트

**초고 후 redundancy 점검**
- [ ] 핵심 아이디어 키워드를 grep해서 등장 횟수를 센다. 4번 이상이면 자른다.
- [ ] `problem`에 해법 어휘가 들어갔는가?
- [ ] `output`이 `pipeline`을 요약하고 있지 않은가?
- [ ] `limitations` 항목 중 다른 항목의 재진술인 것은 합친다.

**정보 누락 점검**
- [ ] 표/본문의 모든 지표를 정의했는가? 지표 쌍의 trade-off를 설명했는가?
- [ ] 논문이 "~를 위해 도입했다"고 명시한 장치를 전부 다뤘는가?
- [ ] 옮긴 수식마다 형태에 대한 해석이 붙어 있는가?
- [ ] 하드웨어 / 통신 / 캘리브레이션 / 초기화 절차 중 재현에 필요한 것이 남아 있는가?
- [ ] 논문의 자기 규정(형용사)을 검증했는가?
- [ ] 실패 사례 / 저자가 놀랐다고 쓴 부분 / 부록에만 있는 실험을 확인했는가?

**비판의 질**
- [ ] `limitations`가 일반론("더 많은 물체가 필요하다")이 아니라 이 논문 고유의 것인가?
- [ ] seed 선택, 분산, 평가 프로토콜의 편향을 확인했는가?
  (예: 10개 seed 중 3개 선택, 946.33 ± 383.81)
- [ ] "이 방법이 고치지 않는 것"을 명시했는가? 고친 것만 쓰면 리뷰가 아니라 홍보다.

---

## 4. 사례 기록

| 날짜 | 논문 | 주요 누락 | 주요 중복 |
|---|---|---|---|
| 2026-09-02 | Twisting Lids Off with Two Hands | 지표 정의(AD/TTF trade-off), reset의 위상, min의 의미, ArUco/ZeroMQ, "dynamic" 검증 | contact reward ×9, two-point ×5, large-network ×3 |
