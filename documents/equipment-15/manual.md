# 15번 엑스레이 (XRT)

XRT-15 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

15번은 X-ray 선별라인의 XRT/XSS 자료입니다. 폴더의 XSS-1(10~40mm)과 XSS-2(40~120mm), A1180143의 _040/_080 전기·제어 문서를 우선 구분했습니다. A1170422/XSS100·HI-SCAN150MPI·ECS/SEW/피더·UPS/인버터·예비품은 별도 계통입니다. 같은 파일이 14번에 있어도 해당 호기의 현재 설정으로 합치지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 55개, 압축 내부 자료 0개, 고유 해시 50개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## I/O·접점·단자

최종 명칭 Schaltplan은 비상정지·구동/벨트·X-ray 스캐너 전원·제어 연결·단자/기기 교차참조를 제공합니다. STXSS 제어 설명은 LOCAL/REMOTE·수동 모드·고장 화면 등을 설명합니다. EPLAN 기기/단자·쪽 교차참조를 PLC 메모리나 안전 I/O 주소로 임의 변환하지 않았습니다. 현재 PLC/PC 프로그램·검출/분사 설정·HMI 태그 원본은 미확정입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## 제어 구조

제어 관계는 벨트/진동피더 구동·선별 제어·X-ray 검출·공기 분사/배출·상하류 연동과 비상 정지로 구분합니다. _040/_080 호기와 A117 참고판을 섞지 않았습니다. 사용자/정비 접근·교정·선별 알고리즘·방사선 발생 제어·보호 인터록의 설정/작동을 변경하거나 시험하지 않았습니다. 문서의 운전/고장 후 재시작 설명은 현재 현장 절차의 검증 결과가 아닙니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## 전기 전달 경로

전원/제어반·모터 인버터·진동피더·스캐너/제너레이터·UPS 경계를 나눴습니다. 2021 현황 HWP는 XRT1/2 벨트 ATV320U30N4B 등과 ECS별 기기를 기록하며 ARV/ATV 표기 차이도 원문대로 보존합니다. 2020 UPS 문서는 440V/40kVA·유지시간 대안을 적은 시방 요구 자료이며 설치·성능 시험 확인값이 아닙니다. 검출기 일반 전원 사양과 전체선별기 인입 전원을 혼동하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## 알람·복구

제어반 고장 표시·EMERGENCY STOP·벨트 구동·전원 상실·UPS·인버터 및 X-ray/검출기 상태를 구분했습니다. HI-SCAN 문서의 보관/환경·자격·전원 주의는 해당 모델 원문 참고이며 현장 적합성이나 방사선 안전 기능의 검증/승인 완료를 뜻하지 않습니다. 실제 측정·교정·차폐/인터록·배출/선별 성능 시험은 미수행입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## 증상별 점검

1. 제어반/선별기 기동·고장
호기·A118 식별 후 전원·비상/운전모드·표시와 구동 구간 분리
근거: A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf · PDF 1쪽

2. 벨트/피더/인버터 이상
기기별 원본·2021 현황과 실제 모델/코드·호기 대조
근거: 20210216 6060 엑스레이설비 인버터 현황.hwp · 원본 추출 열람본

3. 스캐너·제너레이터 참고 검토
A117/A118·HI-SCAN 모델/옵션을 구분하고 전문 정비 근거 수집
근거: 201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp · 원본 추출 열람본

4. UPS·정전·판넬 개조 문제
시방 요구와 실제 UPS/배선·수정 도면·검증 기록 구분
근거: 20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp · 원본 추출 열람본

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 55개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 3행·조작 참조 3행
- 핵심 PDF 페이지 미리보기 401개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 4개·확인 대장 7개

미확정·추가 확인
- A117/A118·XSS100/120: 다른 프로젝트/모델의 매뉴얼과 번역본 혼재 / 호기·명판·컨트롤러/검출기·문서 적용판 확인
- 인버터 현황/오기: 2021 파일의 ATV/ARV 및 모델/용량 표기 / 현장 모델·현재 파라미터/코드 대조
- UPS 시방 대안: 15/30분 유지시간 등 시방 요구 / 실제 설치/회로·시험/유지보수 기록
- 방사선/보호 기능: 문서만 검토; 발생기/차폐·인터록·교정 미검증 / 현행 전문 점검/검사·승인/교정 근거
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1) / [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf#page=1) / [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=1) / [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=1) / [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/equipment-15/library.html?source=S5eb0bde0223cfa02) / [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/equipment-15/library.html?source=S4e2208d03826acb3) / [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/equipment-15/library.html?source=Sfea7d668afb00226) / [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1) / [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| A1180143 _040 · PLC주소 아님 | 기능·회로 참조 | Emergency stop control | 기계/전체 회로 비상정지 구간 | 원본 표기; 현재 할당·실물 미확정 | A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf · PDF 3쪽 | /documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=3 |
| A1180143 _040 · PLC주소 아님 | 기능·회로 참조 | Power supply X-Ray | 스캐너 전원 구간 | 원본 표기; 현재 할당·실물 미확정 | A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf · PDF 29쪽 | /documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=29 |
| A1180143 _040 · PLC주소 아님 | 기능·회로 참조 | X-Ray scanner | 검출기/제어 연결 구간 | 원본 표기; 현재 할당·실물 미확정 | A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf · PDF 3쪽 | /documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=3 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| XSS1 STXSS120 | LOCAL/REMOTE·수동/자동·고장/비상 화면의 문서 근거 | 14.10_STXSS 120_A1180143_040_EN.pdf · PDF 18쪽 | /documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf#page=18 |
| XSS2 STXSS120 | _080 호기용 설명서, 1호기와 구분 | 14.10_STXSS 120_A1180143_080_EN.pdf · PDF 18쪽 | /documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf#page=18 |
| 판넬 수정 자료 | 배선 개정과 현장 적용은 미확정 | 세진메탈 X-RT PANEL 수정작업 (1).pdf · PDF 1쪽 | /documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf#page=1 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 제어반/선별기 기동·고장 | 호기·A118 식별 후 전원·비상/운전모드·표시와 구동 구간 분리 | A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf#page=1 |
| 벨트/피더/인버터 이상 | 기기별 원본·2021 현황과 실제 모델/코드·호기 대조 | 20210216 6060 엑스레이설비 인버터 현황.hwp · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-15/library.html?source=S4e2208d03826acb3 |
| 스캐너·제너레이터 참고 검토 | A117/A118·HI-SCAN 모델/옵션을 구분하고 전문 정비 근거 수집 | 201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-15/library.html?source=Sfea7d668afb00226 |
| UPS·정전·판넬 개조 문제 | 시방 요구와 실제 UPS/배선·수정 도면·검증 기록 구분 | 20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-15/library.html?source=S5eb0bde0223cfa02 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| A117/A118·XSS100/120 | 미확정·원문 차이 보존 | 다른 프로젝트/모델의 매뉴얼과 번역본 혼재 | 호기·명판·컨트롤러/검출기·문서 적용판 확인 |
| 인버터 현황/오기 | 미확정·원문 차이 보존 | 2021 파일의 ATV/ARV 및 모델/용량 표기 | 현장 모델·현재 파라미터/코드 대조 |
| UPS 시방 대안 | 미확정·원문 차이 보존 | 15/30분 유지시간 등 시방 요구 | 실제 설치/회로·시험/유지보수 기록 |
| 방사선/보호 기능 | 미확정·원문 차이 보존 | 문서만 검토; 발생기/차폐·인터록·교정 미검증 | 현행 전문 점검/검사·승인/교정 근거 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [세진메탈 X-RT PANEL 수정작업 (1).pdf](/documents/source-store/42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd.pdf) / XRT 판넬 수정도면/세진메탈 X-RT PANEL 수정작업 (1).pdf / 130272bytes / SHA-256 42f9f3e0f99b027a978e3be1322bab987b5fe48c10cd626c69e43d43113d04cd
- [세진메탈 X-RT PANEL 수정작업.pdf](/documents/source-store/5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f.pdf) / XRT 판넬 수정도면/세진메탈 X-RT PANEL 수정작업.pdf / 34838bytes / SHA-256 5334356d7bc0752ac61314e7cc10673540aaacebaaa521c6d68a142caf0eef3f
- [xss 선별 시설 제어 유닛 전기 도면.pdf](/documents/source-store/66370c3c4d9b709aa6c8a0e8b2b09ddae8df59495efc16bdce7d8e19ba2e20f0.pdf) / 기존 전기도면/xss 선별 시설 제어 유닛 전기 도면.pdf / 2365515bytes / SHA-256 66370c3c4d9b709aa6c8a0e8b2b09ddae8df59495efc16bdce7d8e19ba2e20f0
- [xss 전기도면.pdf](/documents/source-store/ae3bda691b357adfb5dcec1f16f40a865474ba2dd9635cc97ba145c803455972.pdf) / 기존 전기도면/xss 전기도면.pdf / 2365334bytes / SHA-256 ae3bda691b357adfb5dcec1f16f40a865474ba2dd9635cc97ba145c803455972
- [비철금속 선별기 전기도면.pdf](/documents/source-store/7bfd9f149bce1e51c780f795c90171fb4e999c7ac9683852e0e776ba76960f47.pdf) / 기존 전기도면/비철금속 선별기 전기도면.pdf / 1230677bytes / SHA-256 7bfd9f149bce1e51c780f795c90171fb4e999c7ac9683852e0e776ba76960f47
- [비철금속 선별기 전기도면2.pdf](/documents/source-store/8fd8fec2ebe60be2012e179dff725560b3f4abfe069b9d746958ae717bfcf5b3.pdf) / 기존 전기도면/비철금속 선별기 전기도면2.pdf / 1438554bytes / SHA-256 8fd8fec2ebe60be2012e179dff725560b3f4abfe069b9d746958ae717bfcf5b3
- [비철금속 선별기 제어 유닛 전기 도면.pdf](/documents/source-store/beea8a732f5d2cc80dff11e96b10f7e8b6e8d5e5dc577af2860d87c2608d7f5c.pdf) / 기존 전기도면/비철금속 선별기 제어 유닛 전기 도면.pdf / 1230634bytes / SHA-256 beea8a732f5d2cc80dff11e96b10f7e8b6e8d5e5dc577af2860d87c2608d7f5c
- [13.3_Drehstrommotor SEW_DR.71-315_08-2016_DE.pdf](/documents/source-store/137722d4ecd92c88acb073c53feeef5ab65944cdab5cda9de1e9667faa8c3db3.pdf) / 매뉴얼/XSS 1호기/13.3_Drehstrommotor SEW_DR.71-315_08-2016_DE.pdf / 29535481bytes / SHA-256 137722d4ecd92c88acb073c53feeef5ab65944cdab5cda9de1e9667faa8c3db3
- [14.10_STXSS 120_A1180143_040_DE.pdf](/documents/source-store/22e221c853473482f3b9e685eed357d94abd0a1c8d3d91ade2d7e8bc6b0ac0a0.pdf) / 매뉴얼/XSS 1호기/14.10_STXSS 120_A1180143_040_DE.pdf / 3846434bytes / SHA-256 22e221c853473482f3b9e685eed357d94abd0a1c8d3d91ade2d7e8bc6b0ac0a0
- [14.10_STXSS 120_A1180143_040_EN.pdf](/documents/source-store/7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579.pdf) / 매뉴얼/XSS 1호기/14.10_STXSS 120_A1180143_040_EN.pdf / 5140773bytes / SHA-256 7cc8101af939456ce16e4f05ccac9a04e4752a4afafe04fc5614075af2c13579
- [14.3_3-phase motor_DR.71-315_08-2016_EN.pdf](/documents/source-store/5627af8b53eed2c8881148cd68ea2a229f21e166fa36a38ae7f8815ed92a31f9.pdf) / 매뉴얼/XSS 1호기/14.3_3-phase motor_DR.71-315_08-2016_EN.pdf / 29828761bytes / SHA-256 5627af8b53eed2c8881148cd68ea2a229f21e166fa36a38ae7f8815ed92a31f9
- [14.4_Gearbox SEW_05-2015_EN.pdf](/documents/source-store/5d46d5241196af237e793e68e0d6657de3110bbdc526ef267b85d554368ee2c9.pdf) / 매뉴얼/XSS 1호기/14.4_Gearbox SEW_05-2015_EN.pdf / 21525077bytes / SHA-256 5d46d5241196af237e793e68e0d6657de3110bbdc526ef267b85d554368ee2c9
- [14.4_Getriebe SEW_05-2015_DE.pdf](/documents/source-store/3724923aa4e0054aefb95f5f0b1b8150b36e6015d37e0020e16e2f04efa32946.pdf) / 매뉴얼/XSS 1호기/14.4_Getriebe SEW_05-2015_DE.pdf / 11255576bytes / SHA-256 3724923aa4e0054aefb95f5f0b1b8150b36e6015d37e0020e16e2f04efa32946
- [14.5_Schwingförderrinne ZOR_A1180143_010_FUF_18 70450_DE.pdf](/documents/source-store/5267d123261fff542f4f3190bde68ccd1a70c42d9f79097d2b594ba5e365d131.pdf) / 매뉴얼/XSS 1호기/14.5_Schwingförderrinne ZOR_A1180143_010_FUF_18 70450_DE.pdf / 1990594bytes / SHA-256 5267d123261fff542f4f3190bde68ccd1a70c42d9f79097d2b594ba5e365d131
- [14.5_Vibrating Feeder ZOR_A1180143_010_FUF_18 70450_EN.pdf](/documents/source-store/3f69c82b90d1ae3b98559747a371772ecbf391999b86c166494c8164fd4b694f.pdf) / 매뉴얼/XSS 1호기/14.5_Vibrating Feeder ZOR_A1180143_010_FUF_18 70450_EN.pdf / 2395506bytes / SHA-256 3f69c82b90d1ae3b98559747a371772ecbf391999b86c166494c8164fd4b694f
- [14.6_HI-SCAN 150 MPI_DE.pdf](/documents/source-store/bf68f6c8d7b6a4ec259e3617947cc2cd476f58af0ca2390ed8b7d96fad30b61a.pdf) / 매뉴얼/XSS 1호기/14.6_HI-SCAN 150 MPI_DE.pdf / 937160bytes / SHA-256 bf68f6c8d7b6a4ec259e3617947cc2cd476f58af0ca2390ed8b7d96fad30b61a
- [14.6_HI-SCAN 150 MPI_EN.pdf](/documents/source-store/6d639aa3106ad52afe7945d0f01f9ef2acee36a3eefd36191e6f00e061adf9ad.pdf) / 매뉴얼/XSS 1호기/14.6_HI-SCAN 150 MPI_EN.pdf / 929310bytes / SHA-256 6d639aa3106ad52afe7945d0f01f9ef2acee36a3eefd36191e6f00e061adf9ad
- [A1180143_010+020+030+040_DE.pdf](/documents/source-store/d4107a6ed410a9acebf686b52c87fd2d93d9de85d644ce6af6a81ac2083ef7e6.pdf) / 매뉴얼/XSS 1호기/A1180143_010+020+030+040_DE.pdf / 7065128bytes / SHA-256 d4107a6ed410a9acebf686b52c87fd2d93d9de85d644ce6af6a81ac2083ef7e6
- [A1180143_010+020+030+040_EN.pdf](/documents/source-store/60468378850f0c3dea095cf5985252c8310dd6d87918761529a76e99d4af80f7.pdf) / 매뉴얼/XSS 1호기/A1180143_010+020+030+040_EN.pdf / 6312240bytes / SHA-256 60468378850f0c3dea095cf5985252c8310dd6d87918761529a76e99d4af80f7
- [14.10_STXSS 120_A1180143_080_DE.pdf](/documents/source-store/5f2e4e36cd77bf88bcfa93e54f935f44fb98edb38ad3c72dfda40c501e9445a0.pdf) / 매뉴얼/XSS 2호기/14.10_STXSS 120_A1180143_080_DE.pdf / 3846437bytes / SHA-256 5f2e4e36cd77bf88bcfa93e54f935f44fb98edb38ad3c72dfda40c501e9445a0
- [14.10_STXSS 120_A1180143_080_EN.pdf](/documents/source-store/7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f.pdf) / 매뉴얼/XSS 2호기/14.10_STXSS 120_A1180143_080_EN.pdf / 5140770bytes / SHA-256 7f22064dc352d55637403249232568e04c401245341858b4915b77fd13a9014f
- [14.5_Schwingförderrinne ZOR_A1180143_050_FUF_18 70451_DE.pdf](/documents/source-store/2156c7dbfe9cc19c484f1e62b4cd0631f273e04dbf3729698b802c390dbc5238.pdf) / 매뉴얼/XSS 2호기/14.5_Schwingförderrinne ZOR_A1180143_050_FUF_18 70451_DE.pdf / 1990596bytes / SHA-256 2156c7dbfe9cc19c484f1e62b4cd0631f273e04dbf3729698b802c390dbc5238
- [14.5_Vibrating Feeder ZOR_A1180143_050_FUF_18 70451_EN.pdf](/documents/source-store/e8ba0356ccdae31c30b34a2f4bd3af048000a462f28c66fcfb29962fd94b8b54.pdf) / 매뉴얼/XSS 2호기/14.5_Vibrating Feeder ZOR_A1180143_050_FUF_18 70451_EN.pdf / 2395512bytes / SHA-256 e8ba0356ccdae31c30b34a2f4bd3af048000a462f28c66fcfb29962fd94b8b54
- [A1180143_050+060+070+080_DE.pdf](/documents/source-store/73a953e52260abf47caf5d3d1071dad6505ba0ce26f2937d3d97d5259c95ee64.pdf) / 매뉴얼/XSS 2호기/A1180143_050+060+070+080_DE.pdf / 7101261bytes / SHA-256 73a953e52260abf47caf5d3d1071dad6505ba0ce26f2937d3d97d5259c95ee64
- [A1180143_050+060+070+080_EN.pdf](/documents/source-store/a4a1e3e6a28b28a8a11c707f547ec9dfae3a133c9680c067d649958623193444.pdf) / 매뉴얼/XSS 2호기/A1180143_050+060+070+080_EN.pdf / 6348818bytes / SHA-256 a4a1e3e6a28b28a8a11c707f547ec9dfae3a133c9680c067d649958623193444
- [14.11_Control Unit STXSS 100_A1170422_040_EN.pdf](/documents/source-store/7f8655c93b54b5e248bfcb51eddf10f146621d1b969d75ec2c4c56d3be1a925c.pdf) / 생산부공용 추가도면/A1170422 참고자료(적용확인필요)/14.11_Control Unit STXSS 100_A1170422_040_EN.pdf / 5176988bytes / SHA-256 7f8655c93b54b5e248bfcb51eddf10f146621d1b969d75ec2c4c56d3be1a925c
- [14.6_HI SCAN 150 MPI_A1170422_020_EN.pdf](/documents/source-store/bbcfa0afee4b15baaeca77e0aaec869e72b15a8150e46971ca58f7b42ba2e6e3.pdf) / 생산부공용 추가도면/A1170422 참고자료(적용확인필요)/14.6_HI SCAN 150 MPI_A1170422_020_EN.pdf / 932599bytes / SHA-256 bbcfa0afee4b15baaeca77e0aaec869e72b15a8150e46971ca58f7b42ba2e6e3
- [14.6_HI SCAN 150 MPI_A1170422_020_번역본.pdf](/documents/source-store/cffe5e5c4e73696e7712c2e8a31cacf370adf554f678cd17458d98500ccbc8af.pdf) / 생산부공용 추가도면/A1170422 참고자료(적용확인필요)/14.6_HI SCAN 150 MPI_A1170422_020_번역본.pdf / 1358477bytes / SHA-256 cffe5e5c4e73696e7712c2e8a31cacf370adf554f678cd17458d98500ccbc8af
- [XRT A1170422_010+020+030+040_EN.pdf](/documents/source-store/caac7e89fb8f8258c99b890f1389418f8d9dd45019efdf78dfbb12364b6982e7.pdf) / 생산부공용 추가도면/A1170422 참고자료(적용확인필요)/XRT A1170422_010+020+030+040_EN.pdf / 6705849bytes / SHA-256 caac7e89fb8f8258c99b890f1389418f8d9dd45019efdf78dfbb12364b6982e7
- [측면도_x-ray선별기 라인 18.03.28.pdf](/documents/source-store/c86ebe184c3ffa0636650a8026a0a8c88e6ef62516f09762c3d9690e0f13d9d9.pdf) / 생산부공용 추가도면/배치 및 라인도면/측면도_x-ray선별기 라인 18.03.28.pdf / 328499bytes / SHA-256 c86ebe184c3ffa0636650a8026a0a8c88e6ef62516f09762c3d9690e0f13d9d9
- [측면도_x-ray선별기 라인 18.04.04.pdf](/documents/source-store/8f2996d45bdbf9e8a7f8734e7f44fe4b3c688b94ae6c5ea8e5b36a2a6e40fe87.pdf) / 생산부공용 추가도면/배치 및 라인도면/측면도_x-ray선별기 라인 18.04.04.pdf / 247570bytes / SHA-256 8f2996d45bdbf9e8a7f8734e7f44fe4b3c688b94ae6c5ea8e5b36a2a6e40fe87
- [5.#3ECS&#2XRT DUST HOOD.dwg](/documents/source-store/25fbee86f747d647a4936c6baddd1b06d2a5a980e8fa4eac9044557c47fb069b.dwg) / 생산부공용 추가도면/선별라인 부대설비 도면/5.#3ECS&#2XRT DUST HOOD.dwg / 1367595bytes / SHA-256 25fbee86f747d647a4936c6baddd1b06d2a5a980e8fa4eac9044557c47fb069b
- [6.#2ECS&#1XRT DUST HOOD.dwg](/documents/source-store/08ce7f79bc3c8734f70be54ad5f4f7d85aeb40c07c9304b8963da3bfd22a1020.dwg) / 생산부공용 추가도면/선별라인 부대설비 도면/6.#2ECS&#1XRT DUST HOOD.dwg / 1360330bytes / SHA-256 08ce7f79bc3c8734f70be54ad5f4f7d85aeb40c07c9304b8963da3bfd22a1020
- [20201007 판넬 간선도면(2020 엑스레이설비P-2-A).xls](/documents/source-store/125c0aaa592b57e23198f8f4ddc9220033552a64905fedb573d4f81c4136171c.xls) / 생산부공용 추가도면/전기 간선도면(다른 버전)/20201007 판넬 간선도면(2020 엑스레이설비P-2-A).xls / 80510976bytes / SHA-256 125c0aaa592b57e23198f8f4ddc9220033552a64905fedb573d4f81c4136171c
- [20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp](/documents/source-store/5eb0bde0223cfa02b26d6e532603e3ef72ea490a0d0049cd570317ce6d7aa046.hwp) / 예비품·설정 참고자료/20201008 뉴피에스 오현택이사 미팅 결과 엑스레이설비 UPS 시방서.hwp / 16384bytes / SHA-256 5eb0bde0223cfa02b26d6e532603e3ef72ea490a0d0049cd570317ce6d7aa046
- [20210216 6060 엑스레이설비 인버터 현황.hwp](/documents/source-store/4e2208d03826acb30108c1ab52fc141497fe4860ab7dd2f71ea23b59508682b5.hwp) / 예비품·설정 참고자료/20210216 6060 엑스레이설비 인버터 현황.hwp / 17408bytes / SHA-256 4e2208d03826acb30108c1ab52fc141497fe4860ab7dd2f71ea23b59508682b5
- [8. ECS XSS 예비품 (사진보충자료) 23.12.23.xlsx](/documents/source-store/f5d10eecadb1dfa5e681f9f412425b064401e0221d3ed2a8dc88e2c9aca45a9f.xlsx) / 예비품·설정 참고자료/8. ECS XSS 예비품 (사진보충자료) 23.12.23.xlsx / 4361223bytes / SHA-256 f5d10eecadb1dfa5e681f9f412425b064401e0221d3ed2a8dc88e2c9aca45a9f
- [STENERT Parts list(XRT 예비품) - SEJIN.pdf](/documents/source-store/7546f2f2872a8664a236b167a1986f49c3aca752320c8bce41b52df3e7cfba4c.pdf) / 예비품·설정 참고자료/STENERT Parts list(XRT 예비품) - SEJIN.pdf / 437698bytes / SHA-256 7546f2f2872a8664a236b167a1986f49c3aca752320c8bce41b52df3e7cfba4c
- [XSS 100.pdf](/documents/source-store/92ee0e39d308effa8fdffb705fabbd42fe5a791a54fbede3353f76384f366e33.pdf) / 장비 카탈로그/XSS 100.pdf / 496033bytes / SHA-256 92ee0e39d308effa8fdffb705fabbd42fe5a791a54fbede3353f76384f366e33
- [XSS 120.pdf](/documents/source-store/9b0de81052247b83ac6459b7c849675a22e39dc671ffadf42536e3d958f24305.pdf) / 장비 카탈로그/XSS 120.pdf / 462626bytes / SHA-256 9b0de81052247b83ac6459b7c849675a22e39dc671ffadf42536e3d958f24305
- [201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp](/documents/source-store/fea7d668afb002268762374ffef02cc010ff8f564d683bb15ae16ba54a2ee8d2.hwp) / 제너레이터 자료/201014 X-RAY GENERGATOR 예비품 관리방법 및 주의사항.hwp / 60416bytes / SHA-256 fea7d668afb002268762374ffef02cc010ff8f564d683bb15ae16ba54a2ee8d2
- [A1180143_14.6_HI-SCAN 150 MPI_EN.pdf](/documents/source-store/1fbd573feec50c8eff425830eb14cb0986c8388acb35bc7be1041c820bf1da45.pdf) / 제너레이터 자료/A1180143_14.6_HI-SCAN 150 MPI_EN.pdf / 115062bytes / SHA-256 1fbd573feec50c8eff425830eb14cb0986c8388acb35bc7be1041c820bf1da45
- [Layout XSS 120 440 - V07 3207 00 01 1-00.DWG](/documents/source-store/d7ccfaaba2f8c1f754efb5d5b8d9faa74e4bec31e71aefc1f1f724946062fcd0.dwg) / 최종 도면/XSS-1 (엑스레이선별기 1번, 10-40mm)/기계도면/Layout XSS 120 440 - V07 3207 00 01 1-00.DWG / 1342817bytes / SHA-256 d7ccfaaba2f8c1f754efb5d5b8d9faa74e4bec31e71aefc1f1f724946062fcd0
- [Layout XSS 120 440 - V07 3207 00 01 1-00.PDF](/documents/source-store/de593888c48f4f2ab700189329ddc977800320926014696d52d382fff35b5223.pdf) / 최종 도면/XSS-1 (엑스레이선별기 1번, 10-40mm)/기계도면/Layout XSS 120 440 - V07 3207 00 01 1-00.PDF / 247086bytes / SHA-256 de593888c48f4f2ab700189329ddc977800320926014696d52d382fff35b5223
- [A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf](/documents/source-store/baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414.pdf) / 최종 도면/XSS-1 (엑스레이선별기 1번, 10-40mm)/전기도면/A1180143_040_01_S18_0143_040_01_D+GB_Schaltplan.pdf / 2333470bytes / SHA-256 baf849f4ccccb261b51f9b71881f9bc802a17714683f3695f82ec05ada7f7414
- [Pos. 10 and 50 in A1180143 - ZOR 115 220 8P60H.PDF](/documents/source-store/95e769e0f630c0b27db6861a11bda4cf08191237cb229926cc54b7cb07cedfa5.pdf) / 최종 도면/XSS-1 (엑스레이선별기 1번, 10-40mm)/진동피더/Pos. 10 and 50 in A1180143 - ZOR 115 220 8P60H.PDF / 368903bytes / SHA-256 95e769e0f630c0b27db6861a11bda4cf08191237cb229926cc54b7cb07cedfa5
- [ZOR 115 220 S - V07 3207 01 00 3-01.DWG](/documents/source-store/a14c77e615ae76e1887c66534a115724e4d89d31675a850988dd1051a3444b92.dwg) / 최종 도면/XSS-1 (엑스레이선별기 1번, 10-40mm)/진동피더/ZOR 115 220 S - V07 3207 01 00 3-01.DWG / 304821bytes / SHA-256 a14c77e615ae76e1887c66534a115724e4d89d31675a850988dd1051a3444b92
- [ZOR 115 220 S - V07 3207 01 00 3-01.PDF](/documents/source-store/54745688e5f43758d63d7a5a27afac58e9b6c1a4e7398b3bb16d479bf8e9feae.pdf) / 최종 도면/XSS-1 (엑스레이선별기 1번, 10-40mm)/진동피더/ZOR 115 220 S - V07 3207 01 00 3-01.PDF / 94491bytes / SHA-256 54745688e5f43758d63d7a5a27afac58e9b6c1a4e7398b3bb16d479bf8e9feae
- [Layout XSS 120 440 - V07 3207 00 01 1-00.DWG](/documents/source-store/d7ccfaaba2f8c1f754efb5d5b8d9faa74e4bec31e71aefc1f1f724946062fcd0.dwg) / 최종 도면/XSS-2 (엑스레이선별기 2번, 40-120mm)/기계도면/Layout XSS 120 440 - V07 3207 00 01 1-00.DWG / 1342817bytes / SHA-256 d7ccfaaba2f8c1f754efb5d5b8d9faa74e4bec31e71aefc1f1f724946062fcd0
- [Layout XSS 120 440 - V07 3207 00 01 1-00.PDF](/documents/source-store/de593888c48f4f2ab700189329ddc977800320926014696d52d382fff35b5223.pdf) / 최종 도면/XSS-2 (엑스레이선별기 2번, 40-120mm)/기계도면/Layout XSS 120 440 - V07 3207 00 01 1-00.PDF / 247086bytes / SHA-256 de593888c48f4f2ab700189329ddc977800320926014696d52d382fff35b5223
- [A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf](/documents/source-store/c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71.pdf) / 최종 도면/XSS-2 (엑스레이선별기 2번, 40-120mm)/전기도면/A1180143_080_01_S18_0143_080_01_D+GB_Schaltplan.pdf / 2333632bytes / SHA-256 c9e554327720d04d5c905adb261c76befc5de538b0b485063aaad81b4e1c3f71
- [Pos. 10 and 50 in A1180143 - ZOR 115 220 8P60H.PDF](/documents/source-store/95e769e0f630c0b27db6861a11bda4cf08191237cb229926cc54b7cb07cedfa5.pdf) / 최종 도면/XSS-2 (엑스레이선별기 2번, 40-120mm)/진동피더/Pos. 10 and 50 in A1180143 - ZOR 115 220 8P60H.PDF / 368903bytes / SHA-256 95e769e0f630c0b27db6861a11bda4cf08191237cb229926cc54b7cb07cedfa5
- [ZOR 115 220 S - V07 3207 01 00 3-01.DWG](/documents/source-store/a14c77e615ae76e1887c66534a115724e4d89d31675a850988dd1051a3444b92.dwg) / 최종 도면/XSS-2 (엑스레이선별기 2번, 40-120mm)/진동피더/ZOR 115 220 S - V07 3207 01 00 3-01.DWG / 304821bytes / SHA-256 a14c77e615ae76e1887c66534a115724e4d89d31675a850988dd1051a3444b92
- [ZOR 115 220 S - V07 3207 01 00 3-01.PDF](/documents/source-store/54745688e5f43758d63d7a5a27afac58e9b6c1a4e7398b3bb16d479bf8e9feae.pdf) / 최종 도면/XSS-2 (엑스레이선별기 2번, 40-120mm)/진동피더/ZOR 115 220 S - V07 3207 01 00 3-01.PDF / 94491bytes / SHA-256 54745688e5f43758d63d7a5a27afac58e9b6c1a4e7398b3bb16d479bf8e9feae
- [20201007 판넬 간선도면(2020 엑스레이설비P-2-A).xls](/documents/source-store/8778c4bb878f121cc6dbcf269b90e90b3acbc041f101fcb46a54391e9a748a81.xls) / 판넬 간선도면/20201007 판넬 간선도면(2020 엑스레이설비P-2-A).xls / 80505344bytes / SHA-256 8778c4bb878f121cc6dbcf269b90e90b3acbc041f101fcb46a54391e9a748a81
