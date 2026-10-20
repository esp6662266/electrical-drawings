# 9번 신설레들리프트 (합금)

LADLELIFT-09 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

9번은 신설 래들 리프트(합금) 폴더입니다. 전기 PDF 18쪽과 서면심사 PDF 131쪽을 보존했습니다. 파일명에는 1.5톤 래들 리프트가 있으나 내부 CONTROL PANEL 명판에는 4톤이 표시됩니다. 실제 정격은 선택하지 않고 확인 대장에 남겼습니다. 기존6번 리프트와 자동 통합하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 2개, 압축 내부 자료 0개, 고유 해시 2개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## I/O·접점·단자

전기장치 배치와 FLOW에는 상한·감속·하한·0.3m 정지 리미트, LANDING/SLIDE/CAGE 도어 열림/닫힘·회전대·압력스위치·광센서·판넬 도어 리미트·비상정지 등이 있습니다. 기능 이름은 원문 참조이며 현행 PLC 주소/안전 입출력 할당·극성은 미확정입니다. 전기 PDF의 #1/#2 조작박스 구분도 보존합니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## 제어 구조

FLOW SHEET는 MAIN MCCB·비상정지·CAGE/LANDING DOOR CLOSE·PRESSURE SWITCH·THR·상하한 리미트 등의 운전준비 관계와 상승/하강/정지를 제시합니다. 이를 실행 가능한 PLC 래더나 검증된 안전 회로로 복원하지 않았습니다. 문서의 경보 지연·문 속도·조명/접지 기준 문구는 원문에만 보존하며 현재 규정 준수 또는 현장 성능 확인값으로 채택하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## 전기 전달 경로

전기 PDF의 입력은 AC3상440V60Hz, 제어/조작은 AC220/110V와 DC24V 표기입니다. 유압 상승 펌프7.5kW, 1층 LANDING DOOR0.37kW가 배치도에 있으며 유압 SOL과 문 구동·조작/센서 분기를 구분합니다. 실제 정격·기기 모델·접지·결선·절연/측정은 미확정입니다. 접지 도면에 적힌 수치를 현행 설계 승인값으로 판단하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## 알람·복구

유압펌프 이상·문 닫힘/광센서·비상정지·리미트·압력·모터 보호·판넬 도어 항목을 분리했습니다. 도어락·끼임방지·유압 유지/하강·과부하·종단정지와 재기동의 실제 시험은 수행하지 않았습니다. 심사 서류 제출/승인·완성검사·현재 정기검사의 상태는 별도 확인 사항입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## 증상별 점검

1. 상승/하강 불가
FLOW의 운전준비·문/리미트/압력/THR 관계와 동력 구간 구분
근거: (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 1쪽

2. 도어·광센서 관련 정지
해당 층/운반구 도어 및 닫힘저지 센서 구분
근거: (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 1쪽

3. 유압·종단정지·경보 문제
실제 이상 위치·표시와 펌프/밸브/리미트 근거 수집
근거: (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 2개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 13행·조작 참조 2행
- 핵심 PDF 페이지 미리보기 21개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 3개·확인 대장 6개

미확정·추가 확인
- 정격 용량 상충: 파일명 1.5톤 vs 내부 명판 4톤 / 제작/승인도·실제 명판·검사 자료 대조
- #1/#2·기존 리프트: 18쪽 전기 묶음의 복수 조작박스와 기존6번 리프트 / 실제 호기·개조 범위·반번호 확인
- 검사/안전 기능 상태: 서면심사 파일 보유만 확인; 현장 시험 미수행 / 최종 승인·검사·현장 기능 검증 기록
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1) / [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 운반구 상부 비상정지 S/W | 운반구 상부 비상정지 S/W | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 승강로 0.3m 정지 LIMIT S/W | 승강로 0.3m 정지 LIMIT S/W | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 상한 LIMIT S/W | 상한 LIMIT S/W | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 감속 LIMIT S/W | 감속 LIMIT S/W | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 하한 LIMIT S/W | 하한 LIMIT S/W | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | LANDING DOOR CLOSE/OPEN STOP LIMIT | LANDING DOOR CLOSE/OPEN STOP LIMIT | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | B1 SLIDES DOOR CLOSE/OPEN STOP LIMIT | B1 SLIDES DOOR CLOSE/OPEN STOP LIMIT | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | CAGE DOOR CLOSE/OPEN STOP LIMIT | CAGE DOOR CLOSE/OPEN STOP LIMIT | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 회전대 CLOSE/OPEN STOP LIMIT | 회전대 CLOSE/OPEN STOP LIMIT | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | 압력스위치 | 압력스위치 | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | PHOTO SENSOR 문닫힘 저지 | PHOTO SENSOR 문닫힘 저지 | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | PANEL DOOR LIMIT S/W | PANEL DOOR LIMIT S/W | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |
| 신설 리프트 배치도 · PLC주소 아님 | 기능·기기 참조 | LIFT VALVE #1/#2 | LIFT VALVE #1/#2 | 원본 표기; 현재 할당·실물 미확정 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 2쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=2 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 층별·운반구 조작박스 | #1/#2 상승·하강·도어·수동/자동·비상정지 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 5쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=5 |
| CONTROL PANEL | 주전원·조작전원·유압펌프 이상·경광/사이렌 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 7쪽 | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=7 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 상승/하강 불가 | FLOW의 운전준비·문/리미트/압력/THR 관계와 동력 구간 구분 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1 |
| 도어·광센서 관련 정지 | 해당 층/운반구 도어 및 닫힘저지 센서 구분 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1 |
| 유압·종단정지·경보 문제 | 실제 이상 위치·표시와 펌프/밸브/리미트 근거 수집 | (주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 정격 용량 상충 | 미확정·원문 차이 보존 | 파일명 1.5톤 vs 내부 명판 4톤 | 제작/승인도·실제 명판·검사 자료 대조 |
| #1/#2·기존 리프트 | 미확정·원문 차이 보존 | 18쪽 전기 묶음의 복수 조작박스와 기존6번 리프트 | 실제 호기·개조 범위·반번호 확인 |
| 검사/안전 기능 상태 | 미확정·원문 차이 보존 | 서면심사 파일 보유만 확인; 현장 시험 미수행 | 최종 승인·검사·현장 기능 검증 기록 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf](/documents/source-store/f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec.pdf) / 2026년 신설 도면·심사자료/(주)세진메탈-산업용 리프트(1.5톤 래들 리프트)-전기판넬(CONTROL PANEL) 2026.08 접지계통도_합치기.pdf / 2661723bytes / SHA-256 f0bdf26070d5ba8402ef47989fc38b8af01adc6cdc290bb7eb5953f68a19b1ec
- [산업용리프트 서면심사-(주)세진메탈 (1).pdf](/documents/source-store/b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702.pdf) / 2026년 신설 도면·심사자료/산업용리프트 서면심사-(주)세진메탈 (1).pdf / 24433695bytes / SHA-256 b104d2a972c3b28f8dcfedf4f854af3cda192d85e5de5765c692eb3027ecc702
