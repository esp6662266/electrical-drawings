# 3번 예열기

PREHEATER-03 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

3번 예열기 자료에는 합금 래들 예열기, 압연 10톤 래들 온도조절기, 트래베(LADLE) 예열기, 3공장 점보 몰드 예열기와 공장 LNG 배관이 함께 있습니다. 관리번호 3은 사용자 지정이며 모든 자료가 같은 실물에 연결된다는 뜻은 아닙니다. 버너·공기/가스 공급·화염 검출·온도 제어·래들 이동/크레인 회로를 구간별로 나눴습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 40개, 압축 내부 자료 0개, 고유 해시 40개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## I/O·접점·단자

Excel Panel 시트의 P000~P00F 및 P040~P049 표기를 셀 근거와 함께 정리했습니다. 좌측은 Power ON·화염감지·예열 ON/OFF·PID 신호·부저 정지, 우측은 점화 TR·GAS/AIR SOL·표시/경보 계통입니다. NOT USE와 비어 있는 기능은 실제 사용 I/O로 채우지 않았습니다. Mast-K1 시트의 P/M/T/C 셀은 보존하지만 도형/접속이 재현되지 않아 실행 가능한 래더로 복원하지 않았습니다. HWP의 GH1000 단자와 NOVA500의 단자를 서로 대응시키지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## 제어 구조

문서상 온도 제어 출력, 점화 트랜스, 가스/공기 밸브와 화염 검출이 예열 제어의 핵심입니다. EMP핫버너용 PDF는 Siemens LFL1 계열 부품 자료이며 장착품 확인 자료가 아닙니다. 온도조절기 일반 설명서의 PID·프로그램 기능을 현장 PLC의 시퀀스로 간주하지 않습니다. 순서·퍼지·점화시간·알람 극성·현재 프로그램은 별도 확인 전입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## 전기 전달 경로

Panel 셀은 P040 점화 TR, P041 GAS상+Air#1/#2, P042 GAS 하부 SOL, P043 BUZZER, P044 예열 ON 등의 연결 명칭을 제공합니다. 같은 시트의 RY2/RY3/RY4와 110/111/112 표기도 별개 배선 근거로 보존합니다. P&ID는 가스/공기 배관 경로, 크레인 사진은 이송 전기 자료이며 온도조절기 신호선으로 합치지 않았습니다. 문서의 서로 다른 전원/제어기 정격은 현재 반 명판과 대조해야 합니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## 알람·복구

온도 높음·낮음·점화 불량·화염 감지·BUZZER 정지가 Panel 표에 있습니다. 2015 문제점 시트의 버너 캡 이탈·탭 손상·점화 불량은 과거 원문 기록으로 분리했습니다. 현재 고장으로 재등록하거나 반복 재점화를 복구 절차로 작성하지 않았습니다. 퍼지·연료 차단·화염 보호의 현재 기능은 검증하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## 증상별 점검

1. 점화 불가/소화
화염 검출·점화 TR·가스/공기 SOL·온도 허가의 원본 위치를 구분
근거: 합금로 레들 전기도면.xls · 원본 추출 열람본

2. 온도 표시/제어 불일치
현재 제어기 명판·센서 형식·출력 종류와 NOVA/GH1000 자료 차이 대조
근거: 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본

3. 버너 헤드/캡 손상 검토
문제점 시트의 2015 기록과 현재 관찰·수리 이력을 분리
근거: 합금로 레들 전기도면.xls · 원본 추출 열람본

4. 래들 이송/크레인 문제
예열 회로와 크레인 전기도면·실물의 경계를 확인
근거: 트래베(LADLE)-예열기.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 40개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 24행·조작 참조 2행
- 핵심 PDF 페이지 미리보기 57개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 4개·확인 대장 6개

미확정·추가 확인
- 예열 대상별 적용 범위: 합금 래들·압연10톤·트래베·점보몰드·LNG 배관 혼재 / 호기·반번호·버너별 적용 도면 확인
- 제어기 모델: 파일명 NOVA 관련 자료와 HWP 삽입 GH1000 단자도 차이 / 장착 명판·옵션·센서/출력 배선 확인
- 과거 표·사진: 2011 재고표·2015 문제점·과거 사진 / 현재 재고·설정·실물과 별도 대조
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf#page=1) / [압연 10톤 래들 온도 컨트롤러.hwp](/documents/equipment-03/library.html?source=Sb19655f85f20a94a) / [합금로 레들 전기도면.xls](/documents/equipment-03/library.html?source=S17227300ef0e9bd1) / [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf#page=1) / [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1) / [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P000 | Power ON | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 3 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-3 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P040 | 점화 Tr | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 3 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-3 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P001 | 화염감지기 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 4 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-4 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P041 | GAS상+Air#1/#2 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 4 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-4 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P002 | 예열기 ON | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 5 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-5 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P042 | GAS 하부 SOL | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 5 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-5 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P003 | 예열기 OFF | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 6 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-6 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P043 | BUZZER ON | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 6 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-6 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P004 | PID 출력 OUT | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 7 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-7 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P044 | 레들예열기 ON | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 7 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-7 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P005 | PID 출력 #1 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 8 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-8 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P045 | 온도 높음 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 8 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-8 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P006 | PID 출력 #2 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 9 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-9 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P046 | 온도 낮음 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 9 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-9 |
| 합금 레들 Excel Panel | Panel 좌측 입력 참조 | P007 | BUZZER 정지 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 10 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-10 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P047 | 점화 불량 | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 10 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-10 |
| 합금 레들 Excel Panel | Panel 우측 출력 참조 | P049 | BUZZER 정지 ON | 원본 표기; 현재 할당·실물 미확정 | 합금로 레들 전기도면.xls · 원본 추출 열람본 / Panel 원본 행 12 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1#sheet-0-row-12 |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 1/2 | 전원 단자 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 6/7/8 | PV 입력 옵션 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 9/10/11 | 이벤트 접점 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 12~17 | 제어 출력 옵션 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 18/19 | 보조 출력 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 20~22 | 통신 옵션 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| HWP GH1000 삽입도 · NOVA와 모델 구분 | 제어기 단자 참조 | 23~25 | RSW 옵션 | 원본 표기; 현재 할당·실물 미확정 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| Panel 조작·표시 | 예열 ON/OFF, PID 신호, 온도·점화 경보 | 합금로 레들 전기도면.xls · 원본 추출 열람본 | /documents/equipment-03/library.html?source=S17227300ef0e9bd1 |
| 온도조절기 참고 | NOVA 일반 설명과 GH1000 삽입 단자도 구분 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 점화 불가/소화 | 화염 검출·점화 TR·가스/공기 SOL·온도 허가의 원본 위치를 구분 | 합금로 레들 전기도면.xls · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-03/library.html?source=S17227300ef0e9bd1 |
| 온도 표시/제어 불일치 | 현재 제어기 명판·센서 형식·출력 종류와 NOVA/GH1000 자료 차이 대조 | 압연 10톤 래들 온도 컨트롤러.hwp · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-03/library.html?source=Sb19655f85f20a94a |
| 버너 헤드/캡 손상 검토 | 문제점 시트의 2015 기록과 현재 관찰·수리 이력을 분리 | 합금로 레들 전기도면.xls · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-03/library.html?source=S17227300ef0e9bd1 |
| 래들 이송/크레인 문제 | 예열 회로와 크레인 전기도면·실물의 경계를 확인 | 트래베(LADLE)-예열기.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 예열 대상별 적용 범위 | 미확정·원문 차이 보존 | 합금 래들·압연10톤·트래베·점보몰드·LNG 배관 혼재 | 호기·반번호·버너별 적용 도면 확인 |
| 제어기 모델 | 미확정·원문 차이 보존 | 파일명 NOVA 관련 자료와 HWP 삽입 GH1000 단자도 차이 | 장착 명판·옵션·센서/출력 배선 확인 |
| 과거 표·사진 | 미확정·원문 차이 보존 | 2011 재고표·2015 문제점·과거 사진 | 현재 재고·설정·실물과 별도 대조 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122)-Mode2l.pdf](/documents/source-store/5ac8d7915898d5c7c1b050d14ce5e3a65d36c4ebfff2fd1bb66a0a2f290d09ba.pdf) / 3. LNG 신설(래들예열기 추가)/(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122)-Mode2l.pdf / 1037637bytes / SHA-256 5ac8d7915898d5c7c1b050d14ce5e3a65d36c4ebfff2fd1bb66a0a2f290d09ba
- [(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122)-Model.pdf](/documents/source-store/bd53e0aff491a48b9f958018fd569f8acd314295b32a063da6b5dbee7ff59a9c.pdf) / 3. LNG 신설(래들예열기 추가)/(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122)-Model.pdf / 1037634bytes / SHA-256 bd53e0aff491a48b9f958018fd569f8acd314295b32a063da6b5dbee7ff59a9c
- [(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122)-Model3.pdf](/documents/source-store/60bc8557c02000aaa2a5b74093ff03d42ecbc66dd53a12116d2fb7c53c7e8d1e.pdf) / 3. LNG 신설(래들예열기 추가)/(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122)-Model3.pdf / 628830bytes / SHA-256 60bc8557c02000aaa2a5b74093ff03d42ecbc66dd53a12116d2fb7c53c7e8d1e
- [(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122).dwg](/documents/source-store/93cbdc5949466481a05d0a44bc457551a7b53826a2df2106b292d77b15cceece.dwg) / 3. LNG 신설(래들예열기 추가)/(주)세진메탈1공장(울산울주원봉로15)_준공도면(20221122).dwg / 5520909bytes / SHA-256 93cbdc5949466481a05d0a44bc457551a7b53826a2df2106b292d77b15cceece
- [20161017_110834.jpg](/documents/source-store/2317cb7aade4651fc28cfd26f8caefdfd83cf86e57128dd0699113da2ba50b12.jpg) / 레들예열기/20161017_110834.jpg / 3063357bytes / SHA-256 2317cb7aade4651fc28cfd26f8caefdfd83cf86e57128dd0699113da2ba50b12
- [20161017_110857.jpg](/documents/source-store/92fc6ea58365fbcfb8a0f2f82ca4e3c4b98679c5a70d582e13e8c34eb374a51b.jpg) / 레들예열기/20161017_110857.jpg / 3072494bytes / SHA-256 92fc6ea58365fbcfb8a0f2f82ca4e3c4b98679c5a70d582e13e8c34eb374a51b
- [20161017_110949.jpg](/documents/source-store/eca91fe6217600a7bf21f0eadc9758a1fa3ac6c73082719cf220c1c05caa2758.jpg) / 레들예열기/20161017_110949.jpg / 2347794bytes / SHA-256 eca91fe6217600a7bf21f0eadc9758a1fa3ac6c73082719cf220c1c05caa2758
- [20161017_110959.jpg](/documents/source-store/8c8ee228250e9abbad60e32514668562dba8c9eade6b7fd849cc80424df256a6.jpg) / 레들예열기/20161017_110959.jpg / 2422206bytes / SHA-256 8c8ee228250e9abbad60e32514668562dba8c9eade6b7fd849cc80424df256a6
- [20161017_111115.jpg](/documents/source-store/8425a83f9608c656f8be086ee9b296be8a2134b965e88802e4b997f24965b5d2.jpg) / 레들예열기/20161017_111115.jpg / 2690719bytes / SHA-256 8425a83f9608c656f8be086ee9b296be8a2134b965e88802e4b997f24965b5d2
- [20161017_111412.jpg](/documents/source-store/d0e61c20b35229109c75e13a31ddc8e81f0068511d933e0a57e94a6d67d835fa.jpg) / 레들예열기/20161017_111412.jpg / 2325445bytes / SHA-256 d0e61c20b35229109c75e13a31ddc8e81f0068511d933e0a57e94a6d67d835fa
- [20161017_111454.jpg](/documents/source-store/47f61fb4f1ceb9063447eecdc053f094c7e37b7ba4970d42dd80539a4556f692.jpg) / 레들예열기/20161017_111454.jpg / 2831325bytes / SHA-256 47f61fb4f1ceb9063447eecdc053f094c7e37b7ba4970d42dd80539a4556f692
- [20161017_111811.jpg](/documents/source-store/ee3d83b71519e44d199339ac7c7c165baa9608fef5a704fca869b36fc848dc54.jpg) / 레들예열기/20161017_111811.jpg / 2363746bytes / SHA-256 ee3d83b71519e44d199339ac7c7c165baa9608fef5a704fca869b36fc848dc54
- [20161017_111822.jpg](/documents/source-store/6647f4905b5445eb3e0badd6835fb12cec84af8bc219ac596a6970e377c4ae25.jpg) / 레들예열기/20161017_111822.jpg / 2673864bytes / SHA-256 6647f4905b5445eb3e0badd6835fb12cec84af8bc219ac596a6970e377c4ae25
- [20161017_111829.jpg](/documents/source-store/526e58cb5c1ae31c2e428e92dc239f25e7407fd0dbafe9a8078c628e262b6f15.jpg) / 레들예열기/20161017_111829.jpg / 3010389bytes / SHA-256 526e58cb5c1ae31c2e428e92dc239f25e7407fd0dbafe9a8078c628e262b6f15
- [20161017_111948.jpg](/documents/source-store/8790924fab8050cb8a7771784b169afe413d8db0adb105f5ec65cf24d476bece.jpg) / 레들예열기/20161017_111948.jpg / 2804015bytes / SHA-256 8790924fab8050cb8a7771784b169afe413d8db0adb105f5ec65cf24d476bece
- [20161017_111958.jpg](/documents/source-store/9c058103c4b91579035783fb5ea988173dfb3aee95d7d8a66577058447560d28.jpg) / 레들예열기/20161017_111958.jpg / 3316689bytes / SHA-256 9c058103c4b91579035783fb5ea988173dfb3aee95d7d8a66577058447560d28
- [20161017_112010.jpg](/documents/source-store/aa27c70aae82d2dd30a1bd88e159fb57e09b5e78281777d7d0e417014bdf0c2e.jpg) / 레들예열기/20161017_112010.jpg / 2770968bytes / SHA-256 aa27c70aae82d2dd30a1bd88e159fb57e09b5e78281777d7d0e417014bdf0c2e
- [20161017_112022.jpg](/documents/source-store/fda32d5f81386f8a6ca29ca3e0177a2d222b2f16a20c6cf7473d102c4a96926a.jpg) / 레들예열기/20161017_112022.jpg / 2473162bytes / SHA-256 fda32d5f81386f8a6ca29ca3e0177a2d222b2f16a20c6cf7473d102c4a96926a
- [20161017_112036.jpg](/documents/source-store/e760da5735479efe1c61f2083a1357e290377d5be50892b864939ed667e7bbd5.jpg) / 레들예열기/20161017_112036.jpg / 2831011bytes / SHA-256 e760da5735479efe1c61f2083a1357e290377d5be50892b864939ed667e7bbd5
- [20161017_112159.jpg](/documents/source-store/6a991d29d82c5a33b549cc974fa2c8492b2721b38fb3de153e3724378893b991.jpg) / 레들예열기/20161017_112159.jpg / 2628050bytes / SHA-256 6a991d29d82c5a33b549cc974fa2c8492b2721b38fb3de153e3724378893b991
- [20181019_091926.jpg](/documents/source-store/6c961720c87574d2cdd2384a8a09c11a01e46c71dfca9ac0e8e49d9a00dbc7d6.jpg) / 레들예열기/20181019_091926.jpg / 6407287bytes / SHA-256 6c961720c87574d2cdd2384a8a09c11a01e46c71dfca9ac0e8e49d9a00dbc7d6
- [Cain 크레인.jpg](/documents/source-store/9c66f8060a8d9b2bcbad311abb98cde22226629df1066b10c1c2c67c73b1d87c.jpg) / 레들예열기/Cain 크레인.jpg / 3279690bytes / SHA-256 9c66f8060a8d9b2bcbad311abb98cde22226629df1066b10c1c2c67c73b1d87c
- [EMP핫버너용.pdf](/documents/source-store/c7dfddc605144379c246ae67ca426bf773705eaf408271b9b0e8abea06a23908.pdf) / 레들예열기/EMP핫버너용.pdf / 287816bytes / SHA-256 c7dfddc605144379c246ae67ca426bf773705eaf408271b9b0e8abea06a23908
- [NOVA 파라메다..jpg](/documents/source-store/b561ef1e9ccbf91b175b0b6c8a043069d9a6af8b64e8e9a3f10c3b88e7b8ea36.jpg) / 레들예열기/NOVA 파라메다..jpg / 3225149bytes / SHA-256 b561ef1e9ccbf91b175b0b6c8a043069d9a6af8b64e8e9a3f10c3b88e7b8ea36
- [SR-30 참조.jpg](/documents/source-store/3ff8653e9f60af6d7d29484ac357eec77a6ee15ea5c17d0a15f62f2063420b24.jpg) / 레들예열기/SR-30 참조.jpg / 7417598bytes / SHA-256 3ff8653e9f60af6d7d29484ac357eec77a6ee15ea5c17d0a15f62f2063420b24
- [상하크레인 전기도면-1.jpg](/documents/source-store/0d0185cb538ca3e9fb4ec7f432b245e6bd07630bf42b5e63a3b38029484d58fc.jpg) / 레들예열기/상하크레인 전기도면-1.jpg / 2901116bytes / SHA-256 0d0185cb538ca3e9fb4ec7f432b245e6bd07630bf42b5e63a3b38029484d58fc
- [NOVA500 ST Manual(Kor).pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf) / 레들예열기/압연 10톤 래들 온도 컨트롤러/NOVA500 ST Manual(Kor).pdf / 3620580bytes / SHA-256 6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d
- [NOVA500(catalogue)_kor+.pdf](/documents/source-store/6d1036afb7d238574e4c294c102b4f6d980d097b960788625fa7a739d9369dd5.pdf) / 레들예열기/압연 10톤 래들 온도 컨트롤러/NOVA500(catalogue)_kor+.pdf / 1195048bytes / SHA-256 6d1036afb7d238574e4c294c102b4f6d980d097b960788625fa7a739d9369dd5
- [압연 10톤 래들 온도 컨트롤러.hwp](/documents/source-store/b19655f85f20a94aeb62fbdbbfd4438f137374016529f12cb482859eb3a1335f.hwp) / 레들예열기/압연 10톤 래들 온도 컨트롤러/압연 10톤 래들 온도 컨트롤러.hwp / 1858048bytes / SHA-256 b19655f85f20a94aeb62fbdbbfd4438f137374016529f12cb482859eb3a1335f
- [크레인 전기도면-02.jpg](/documents/source-store/27a3016ff9fcb04ae7872444d36b276ee9a93441c155665cf0b089be6908a776.jpg) / 레들예열기/크레인 전기도면-02.jpg / 2685813bytes / SHA-256 27a3016ff9fcb04ae7872444d36b276ee9a93441c155665cf0b089be6908a776
- [합금로 레들 전기도면.xls](/documents/source-store/17227300ef0e9bd1203f653ead951a11c07ad6ff55bc4351e998c21ab19e4758.xls) / 레들예열기/합금로 레들 전기도면.xls / 12211712bytes / SHA-256 17227300ef0e9bd1203f653ead951a11c07ad6ff55bc4351e998c21ab19e4758
- [Dryout.pdf](/documents/source-store/89d81b4af84b1ad3bce4d3fba4292dd7705a1c3727ea62350a662c1a755caac2.pdf) / 생산부공용 추가도면/래들 예열/Dryout.pdf / 42865bytes / SHA-256 89d81b4af84b1ad3bce4d3fba4292dd7705a1c3727ea62350a662c1a755caac2
- [레들예열기.dwg](/documents/source-store/9d1e77acc07d7d14ad20927b7ed66d4c8e29ab18e07f3d5f3e375a65a375a392.dwg) / 생산부공용 추가도면/래들 예열/레들예열기.dwg / 78624bytes / SHA-256 9d1e77acc07d7d14ad20927b7ed66d4c8e29ab18e07f3d5f3e375a65a375a392
- [세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf](/documents/source-store/32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f.pdf) / 생산부공용 추가도면/버너 도면/세진메탈 3공장 점보 몰드 예열기 버너 계통도20210420.pdf / 735457bytes / SHA-256 32eacb18fd41d153384f313a0d89c8c01a252a631fa37c894b1324c59e61110f
- [트래베-예열기TOP BURNER.dwg](/documents/source-store/5eeaae0b1d356831d0b5ddb17011b15b195682999667618191cdf1bf51a4b0fb.dwg) / 생산부공용 추가도면/버너 도면/트래베-예열기TOP BURNER.dwg / 2657922bytes / SHA-256 5eeaae0b1d356831d0b5ddb17011b15b195682999667618191cdf1bf51a4b0fb
- [트래베(LADLE)-예열기.pdf](/documents/source-store/fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1.pdf) / 예열기/기계도면/트래베(LADLE)-예열기.pdf / 328139bytes / SHA-256 fca68f6fcf326f4778f7d67f880dd4570b5e95b402fb94607e4911c3671062a1
- [트래베(LADLE)1.5톤-예열기-견적도.dwg](/documents/source-store/c81fc34f54d668728674bd1e856cb003e2017fdf6a19366c8f92aa967d99b6bc.dwg) / 예열기/기계도면/트래베(LADLE)1.5톤-예열기-견적도.dwg / 2863060bytes / SHA-256 c81fc34f54d668728674bd1e856cb003e2017fdf6a19366c8f92aa967d99b6bc
- [예열기-판넬10.dwg](/documents/source-store/254cdf1242fd6aeab2123fbbfbe38f76fd40d6aab65da3b32ea706b1d01258b2.dwg) / 예열기/전기도면/예열기-판넬10.dwg / 227327bytes / SHA-256 254cdf1242fd6aeab2123fbbfbe38f76fd40d6aab65da3b32ea706b1d01258b2
- [예열기-버너연소장치24만 P&ID.pdf](/documents/source-store/0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0.pdf) / 예열기/흐름도/예열기-버너연소장치24만 P&ID.pdf / 92825bytes / SHA-256 0f28e92c279c03b77c2788f2f10584300e43f6d0639bc8b3efbd369650f2efa0
- [트래베1.5톤-예열기-버너연소장치24만 P&ID.dwg](/documents/source-store/1762599fb1280a7a13c02c939873cd3ac53318332fd611966ecc97e126786ff2.dwg) / 예열기/흐름도/트래베1.5톤-예열기-버너연소장치24만 P&ID.dwg / 133699bytes / SHA-256 1762599fb1280a7a13c02c939873cd3ac53318332fd611966ecc97e126786ff2
