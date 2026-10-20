# 4번 50톤로 (합금)

ALLOY50-04 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

4번은 합금 50톤로 폴더 기준으로 등록했습니다. 준공 사용 설명서의 표제는 50TON OPEN MELTING FURNACE, 2025년12월이며 본문에는 오픈 반사로·도어·송풍/오일·파일럿/메인 버너·온도 제어가 있습니다. 별도로 2026 UBC/합금 이송 및 OP 개조도가 있습니다. 압축파일 안의 PLC .xgwx와 터치 .xpd 원본을 보존했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 30개, 압축 내부 자료 29개, 고유 해시 57개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## I/O·접점·단자

UBC/합금 라인에서는 전원·비상/풀코드·모드 선택·C/V·OP 단자/릴레이를 문서 계통별로 구분합니다. ZIP 내부 ‘세진메탈 50용해로 전기도면 .pdf’는 실제 내부 표제에 25TON 반사로, 2024.07이 보이므로 그 P주소를 50톤로의 확정 I/O로 배정하지 않았습니다. 2026 OP 개조와 2025 PLC 파일의 관계도 별도 확인 대상입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## 제어 구조

50톤 설명서는 송풍·오일 공급·파일럿 화염 검출·메인 버너 및 온도 제어의 관계를 서술합니다. 자동/고정/수동·터치 설정과 OP 조작부가 나타나지만 내부 래더·타이머·실제 안전 허가 로직은 이번 정적 추출로 복원되지 않았습니다. XG5000 원본이 있다는 사실과 래더 해석 완료는 다릅니다. UBC/합금 모드 전환·OP·풀코드 회로는 반사로 버너 제어와 별도 계통으로 추적합니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## 전기 전달 경로

라인 2026-02-24판은 UBC 전원·FEEDER·EMERGENCY STOP·MODE SELECTION과 ALLOY 전원·진동구동·C/V·OP1/2 회로를 분리합니다. 440VAC 주회로와 220VAC 제어선, JB/OP 경계, 풀코드 정상·이상 릴레이가 도면에 있습니다. 준공 버너 자료의 UV C7027/BC1000, M7284 등의 부품 설명은 실제 연결과 옵션을 대조해야 합니다. 집진기 300마력 회로를 50톤 버너 동력 회로로 합치지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## 알람·복구

UV 검출·착화 불량·송풍/오일/에어 계통, 라인 비상정지·풀코드 이상을 구분했습니다. 설명서의 압력·점화/재시작·공연비/수동 설정은 과거 문서 내용이며 현행 승인 설정이나 실행 지시가 아닙니다. 기동/정지·연료 차단·재기동 기능의 현장 검증은 수행하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## 증상별 점검

1. 버너 착화/온도 제어 이상
설명서의 파일럿/UV·메인·송풍/오일·온도 경로를 분리 대조
근거: 세진메탈50톤 사용 설명서20260206.pdf · PDF 1쪽

2. UBC/합금 C/V 운전 불가
모드 선택·풀코드·OP/JB 경계와 최초 이상 표기를 구분
근거: 50TONS OF ALLOY-UBC_260224.pdf · PDF 1쪽

3. OP 개조 후 조작 불일치
2026-02-02/11/24판 및 외함도와 현재 반번호 비교
근거: SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf · PDF 1쪽

4. 도어·장입·집진 부대설비 문제
버너/도어/집진기를 분리하고 현재 실물 대조
근거: 50톤 반사로(개조)도면.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 30개와 압축 내부 29개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 5행·조작 참조 2행
- 핵심 PDF 페이지 미리보기 189개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 4개·확인 대장 6개

미확정·추가 확인
- 50톤 파일 내부 25TON 표제: 전기도면 ZIP PDF 내부 25TON/2024.07 표제 / 작성업체의 실제 적용/공용설계 근거 확인
- OP 개정판: 2026-02-02/11/24와 원본 PLC 2025-11-12 / 현장 반영 개정과 프로그램 비교
- PLC/HMI 원본 해석: XGWX·XPD 파일 보존, 전체 래더/HMI 의미 해석 미완 / 전용 편집기의 정적 내보내기·프로그램/태그 대조
- PLC/HMI 원본 및 현재 적용: 50톤 반사로_20251112.xgwx / S2b34e68f9888dc87 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf#page=1) / [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1) / [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1) / [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1) / [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf#page=1) / [세진메탈50톤 사용 설명서20260206.hwp](/documents/equipment-04/library.html?source=Sec4696f6e5620ee8) / [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| 2026-02-24 UBC/ALLOY 라인 | 접점·릴레이 | -UMS1 / -UOL1 | UBC C/V 전자접촉기/보호 분기 | 원본 표기; 현재 할당·실물 미확정 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 4쪽 | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=4 |
| 2026-02-24 UBC/ALLOY 라인 | 접점·릴레이 | -UEM1 / -R0 | UBC 비상정지/비상 릴레이 | 원본 표기; 현재 할당·실물 미확정 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 5쪽 | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=5 |
| 2026-02-24 UBC/ALLOY 라인 | 접점·릴레이 | FLS01~FLS06 | UBC 풀코드 입력 표기 | 원본 표기; 현재 할당·실물 미확정 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 5쪽 | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=5 |
| 2026-02-24 UBC/ALLOY 라인 | 접점·릴레이 | -FE1 / -FE2 | 풀코드 정상/이상 릴레이 | 원본 표기; 현재 할당·실물 미확정 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 6쪽 | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=6 |
| 2026-02-24 UBC/ALLOY 라인 | 접점·릴레이 | -R3 / -R4 | UBC/ALLOY 모드 선택 관련 릴레이 | 원본 표기; 현재 할당·실물 미확정 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 7쪽 | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=7 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 50톤 설명서 | 자동/고정/수동·온도·버너/도어 조작 근거 | 세진메탈50톤 사용 설명서20260206.pdf · PDF 1쪽 | /documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1 |
| OP/JB 라인 조작 | UBC/합금 모드 및 현장 OP 개조 계통 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 2쪽 | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=2 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 버너 착화/온도 제어 이상 | 설명서의 파일럿/UV·메인·송풍/오일·온도 경로를 분리 대조 | 세진메탈50톤 사용 설명서20260206.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf#page=1 |
| UBC/합금 C/V 운전 불가 | 모드 선택·풀코드·OP/JB 경계와 최초 이상 표기를 구분 | 50TONS OF ALLOY-UBC_260224.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf#page=1 |
| OP 개조 후 조작 불일치 | 2026-02-02/11/24판 및 외함도와 현재 반번호 비교 | SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf#page=1 |
| 도어·장입·집진 부대설비 문제 | 버너/도어/집진기를 분리하고 현재 실물 대조 | 50톤 반사로(개조)도면.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 50톤 파일 내부 25TON 표제 | 미확정·원문 차이 보존 | 전기도면 ZIP PDF 내부 25TON/2024.07 표제 | 작성업체의 실제 적용/공용설계 근거 확인 |
| OP 개정판 | 미확정·원문 차이 보존 | 2026-02-02/11/24와 원본 PLC 2025-11-12 | 현장 반영 개정과 프로그램 비교 |
| PLC/HMI 원본 해석 | 미확정·원문 차이 보존 | XGWX·XPD 파일 보존, 전체 래더/HMI 의미 해석 미완 | 전용 편집기의 정적 내보내기·프로그램/태그 대조 |
| PLC/HMI 원본 및 현재 적용 | 원본 파일 확보·해석/현재 적용 미확정 | 50톤 반사로_20251112.xgwx / S2b34e68f9888dc87 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [02_PreprocessingLINE_CABa_260223.pdf](/documents/source-store/229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37.pdf) / 50톤로/02_PreprocessingLINE_CABa_260223.pdf / 13303524bytes / SHA-256 229851c22c6030b85cb6b4db7fed0684321e89ee0185d0a582f0ddac52aa9c37
- [50TON 용해로 자료.zip](/documents/source-store/8ec6b32f4be0de7d7ee13d790be29ca346ceed07d3eb90ab456e3aef68f9822e.zip) / 50톤로/50TON 용해로 자료.zip / 3882373bytes / SHA-256 8ec6b32f4be0de7d7ee13d790be29ca346ceed07d3eb90ab456e3aef68f9822e
- [50TONS OF ALLOY-UBC_260202.pdf](/documents/source-store/d6fafa6ad6ce3c84d4ef2e2253d17115741a80d6eb7b929f16d603bc32e0cc09.pdf) / 50톤로/50TONS OF ALLOY-UBC_260202.pdf / 2956712bytes / SHA-256 d6fafa6ad6ce3c84d4ef2e2253d17115741a80d6eb7b929f16d603bc32e0cc09
- [50TONS OF ALLOY-UBC_260211.pdf](/documents/source-store/d3b28bc8c1c7051929d1cb67200e305ff59c1e61d1245382325aa0d3fe6669b3.pdf) / 50톤로/50TONS OF ALLOY-UBC_260211.pdf / 2954805bytes / SHA-256 d3b28bc8c1c7051929d1cb67200e305ff59c1e61d1245382325aa0d3fe6669b3
- [50TONS OF ALLOY-UBC_260224.pdf](/documents/source-store/e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b.pdf) / 50톤로/50TONS OF ALLOY-UBC_260224.pdf / 3066161bytes / SHA-256 e882b7bd6ff8bbb02e3573de632a7f5d9be505a825a2de64d93ef3142d7e912b
- [SejinMetal_합금50톤로 OP 추가_패널외함 1차.pdf](/documents/source-store/84167201d176e4b6f31c171da092b0c7bfceb7b2431e12cfe8f88055996d7d0f.pdf) / 50톤로/SejinMetal_합금50톤로 OP 추가_패널외함 1차.pdf / 1158710bytes / SHA-256 84167201d176e4b6f31c171da092b0c7bfceb7b2431e12cfe8f88055996d7d0f
- [SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf](/documents/source-store/31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0.pdf) / 50톤로/SejinMetal_합금50톤로 OP 추가_패널외함 1차_260224.pdf / 1315103bytes / SHA-256 31ea317bd68c9dbd9c49412f3f88602e11c50870aae359ce706398bec46085a0
- [YO-2026-01-29_세진메탈_합금 50TON OP 시스템 개조.pdf](/documents/source-store/5764f1dff35ca8c2e5a7e90e3e8da72b30ce0b313ac7637c8a2754b1fdb57ced.pdf) / 50톤로/YO-2026-01-29_세진메탈_합금 50TON OP 시스템 개조.pdf / 162089bytes / SHA-256 5764f1dff35ca8c2e5a7e90e3e8da72b30ce0b313ac7637c8a2754b1fdb57ced
- [세진-50톤버너부.dwg](/documents/source-store/5a1fcae5d9645b4f69cca966e70e30bb1febcd2d13a6363b182abeb872e31d92.dwg) / 생산부공용 추가도면/버너 및 설비도면/세진-50톤버너부.dwg / 2598623bytes / SHA-256 5a1fcae5d9645b4f69cca966e70e30bb1febcd2d13a6363b182abeb872e31d92
- [50톤 장입대외.zip](/documents/source-store/6ee678a458bf940cb8503d2b24dcb94ddb168f29cfd1d44b3042949e4ef0a831.zip) / 장입대·받침대 도면/50톤 장입대외.zip / 205579bytes / SHA-256 6ee678a458bf940cb8503d2b24dcb94ddb168f29cfd1d44b3042949e4ef0a831
- [세진메탈 50톤 받침대.pdf](/documents/source-store/b7908feee60e271a2c6db19ff77e3c0978ab56277610931acf22cbbdde1d93dc.pdf) / 장입대·받침대 도면/세진메탈 50톤 받침대.pdf / 93465bytes / SHA-256 b7908feee60e271a2c6db19ff77e3c0978ab56277610931acf22cbbdde1d93dc
- [세진메탈50톤 장입대.pdf](/documents/source-store/0baca4d39a7ad2e588eae7a7dfd8fc7b21dcc58e626a79e33ff1ae94d26d1db6.pdf) / 장입대·받침대 도면/세진메탈50톤 장입대.pdf / 86895bytes / SHA-256 0baca4d39a7ad2e588eae7a7dfd8fc7b21dcc58e626a79e33ff1ae94d26d1db6
- [(주)세진메탈-50톤 반사로 개조-전기실-송풍기실 2025.05.27 - ALF-.pdf](/documents/source-store/ff3a937f2b839e81284946cfcbf23b224431402773409635e476354cab6ad8c3.pdf) / 전기실·송풍기실 도면/(주)세진메탈-50톤 반사로 개조-전기실-송풍기실 2025.05.27 - ALF-.pdf / 99293bytes / SHA-256 ff3a937f2b839e81284946cfcbf23b224431402773409635e476354cab6ad8c3
- [(주)세진메탈-50톤 반사로 개조-전기실-송풍기실 평면 설치도 2025.05.27 - ALF-.pdf](/documents/source-store/50ff07176ef743eb6f64435821cadb8c59c429a85b30203d177d79f8d90dddcb.pdf) / 전기실·송풍기실 도면/(주)세진메탈-50톤 반사로 개조-전기실-송풍기실 평면 설치도 2025.05.27 - ALF-.pdf / 75400bytes / SHA-256 50ff07176ef743eb6f64435821cadb8c59c429a85b30203d177d79f8d90dddcb
- [(주)세진메탈-50톤 반사로 개조-전기실-송풍기실-발판-다이 도면 2025.05.28 - ALF.pdf](/documents/source-store/85ec0a9b4df22faf12d5e42cbb94f0b8ad22f95c84435ccd7ed88336bf498f66.pdf) / 전기실·송풍기실 도면/(주)세진메탈-50톤 반사로 개조-전기실-송풍기실-발판-다이 도면 2025.05.28 - ALF.pdf / 132709bytes / SHA-256 85ec0a9b4df22faf12d5e42cbb94f0b8ad22f95c84435ccd7ed88336bf498f66
- [세진메탈 50톤 메뉴얼.zip](/documents/source-store/5c2c9f4af39f68184c49f5de66e43460fae24892aea8af6f0f2fee5a62f78514.zip) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip / 120515955bytes / SHA-256 5c2c9f4af39f68184c49f5de66e43460fae24892aea8af6f0f2fee5a62f78514
- [세진메탈300마력 2차 집진기-1.dwg](/documents/source-store/d47af9d1f3e0d31a577c3497f27087f810fe5b2720f3c1e8c9d95db004633263.dwg) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 2차 집진기-1.dwg / 269391bytes / SHA-256 d47af9d1f3e0d31a577c3497f27087f810fe5b2720f3c1e8c9d95db004633263
- [세진메탈300마력 집진기 수정도면-1.pdf](/documents/source-store/fb09da432a3d96edd324ff7aac270078f85468d9533275fe71a7c36f1b749ad7.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-1.pdf / 44612bytes / SHA-256 fb09da432a3d96edd324ff7aac270078f85468d9533275fe71a7c36f1b749ad7
- [세진메탈300마력 집진기 수정도면-10.pdf](/documents/source-store/f33db815c7240f31fc3922870e5f3b6dc78436adefc7946a2e93735d5e363316.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-10.pdf / 32432bytes / SHA-256 f33db815c7240f31fc3922870e5f3b6dc78436adefc7946a2e93735d5e363316
- [세진메탈300마력 집진기 수정도면-11.pdf](/documents/source-store/17684f406018b359aaeb1f9d3d99794ce076fe4e7d6aaf960a2b2be3ced99ddc.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-11.pdf / 45909bytes / SHA-256 17684f406018b359aaeb1f9d3d99794ce076fe4e7d6aaf960a2b2be3ced99ddc
- [세진메탈300마력 집진기 수정도면-12.pdf](/documents/source-store/019062506c273db8a05c8d62b6ba77f7ffdc14412c0d9760ff4c8785bfca0138.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-12.pdf / 45891bytes / SHA-256 019062506c273db8a05c8d62b6ba77f7ffdc14412c0d9760ff4c8785bfca0138
- [세진메탈300마력 집진기 수정도면-13.pdf](/documents/source-store/f0ec01fbf7d8c03d212113abda33a7810c3a64cd726470b81a25df1523e61716.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-13.pdf / 44428bytes / SHA-256 f0ec01fbf7d8c03d212113abda33a7810c3a64cd726470b81a25df1523e61716
- [세진메탈300마력 집진기 수정도면-2.pdf](/documents/source-store/c8b5126dafebac6b1dbd82ca9aae07036fb73a3fb0acb6c988d19aad06054df0.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-2.pdf / 47349bytes / SHA-256 c8b5126dafebac6b1dbd82ca9aae07036fb73a3fb0acb6c988d19aad06054df0
- [세진메탈300마력 집진기 수정도면-3.pdf](/documents/source-store/24d9c2c021100da61659921dabdc112eb844bf83f63e16669937fd073664a597.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-3.pdf / 51347bytes / SHA-256 24d9c2c021100da61659921dabdc112eb844bf83f63e16669937fd073664a597
- [세진메탈300마력 집진기 수정도면-4.pdf](/documents/source-store/4becd563bd5ec1867d4c75662412a1dc394ca0bbdbf4f89cd4dbe74fdc2fd7e3.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-4.pdf / 53429bytes / SHA-256 4becd563bd5ec1867d4c75662412a1dc394ca0bbdbf4f89cd4dbe74fdc2fd7e3
- [세진메탈300마력 집진기 수정도면-5.pdf](/documents/source-store/648ac1bab2a4d3836a4c0b7d8b87fda6ea102ff32db4cb872bc7a232bc532c79.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-5.pdf / 37823bytes / SHA-256 648ac1bab2a4d3836a4c0b7d8b87fda6ea102ff32db4cb872bc7a232bc532c79
- [세진메탈300마력 집진기 수정도면-6.pdf](/documents/source-store/9d46aaf913be91296133f0ba56c5c65c0e265052ed1a8ae1adf5e1b069945c4d.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-6.pdf / 49261bytes / SHA-256 9d46aaf913be91296133f0ba56c5c65c0e265052ed1a8ae1adf5e1b069945c4d
- [세진메탈300마력 집진기 수정도면-7.pdf](/documents/source-store/c6bf1ce7c6eebe78e8a7e5926c191cf1aba2558e13b45b9b2de9dd3b045040e0.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-7.pdf / 40195bytes / SHA-256 c6bf1ce7c6eebe78e8a7e5926c191cf1aba2558e13b45b9b2de9dd3b045040e0
- [세진메탈300마력 집진기 수정도면-8.pdf](/documents/source-store/c09e2db97d8439645a07a0fb4d051b187f5a42a943b6f6d06ae2ade7b77aecfe.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-8.pdf / 48978bytes / SHA-256 c09e2db97d8439645a07a0fb4d051b187f5a42a943b6f6d06ae2ade7b77aecfe
- [세진메탈300마력 집진기 수정도면-9.pdf](/documents/source-store/b10ea86aed8785a87060c47b1d2e6c626a1cb7c0d10d4a1d40e71ca93bc7ee03.pdf) / 합금 50T 집진기 판넬 전기도면 (300마력 집진기 수정도면)/세진메탈300마력 집진기 수정도면-9.pdf / 47523bytes / SHA-256 b10ea86aed8785a87060c47b1d2e6c626a1cb7c0d10d4a1d40e71ca93bc7ee03
- [50TON 용해로_20251112.xgwx](/documents/source-store/2b34e68f9888dc87d879077e4a9a1b037665cc1c68c3c00e158fbeccc4243a8c.xgwx) / 50톤로/50TON 용해로 자료.zip!/PLC/50TON 용해로_20251112.xgwx / 19440bytes / SHA-256 2b34e68f9888dc87d879077e4a9a1b037665cc1c68c3c00e158fbeccc4243a8c
- [50TON 용해로.xpd](/documents/source-store/3d67d6b2ca579981779a5713327d2327d348ac8d135df2a0cb5eea2e0bdcdb7c.xpd) / 50톤로/50TON 용해로 자료.zip!/TOUCH/50TON 용해로.xpd / 3137359bytes / SHA-256 3d67d6b2ca579981779a5713327d2327d348ac8d135df2a0cb5eea2e0bdcdb7c
- [세진메탈 50TON 용해로 전기도면.dwg](/documents/source-store/1356951d35cf139a9e28a87d837e1c27033538dc2f74f4bb879c62261b53c1b7.dwg) / 50톤로/50TON 용해로 자료.zip!/전기도면/세진메탈 50TON 용해로 전기도면.dwg / 3833682bytes / SHA-256 1356951d35cf139a9e28a87d837e1c27033538dc2f74f4bb879c62261b53c1b7
- [세진메탈50톤 장입 받침대20250904.pdf](/documents/source-store/9902c6a97a8b80c59806eb68c37218ba3ce8bd72c3d55fbd17a0802345d759f6.pdf) / 장입대·받침대 도면/50톤 장입대외.zip!/세진메탈50톤 장입 받침대20250904.pdf / 76308bytes / SHA-256 9902c6a97a8b80c59806eb68c37218ba3ce8bd72c3d55fbd17a0802345d759f6
- [세진메탈50톤 장입대 조립20250904.pdf](/documents/source-store/f3c3c8ca31b081a25f00667182d008a5598958529abdf15450916862e0fefcf0.pdf) / 장입대·받침대 도면/50톤 장입대외.zip!/세진메탈50톤 장입대 조립20250904.pdf / 48412bytes / SHA-256 f3c3c8ca31b081a25f00667182d008a5598958529abdf15450916862e0fefcf0
- [세진메탈버너 50톤 장입대20250904.pdf](/documents/source-store/3dd01bac76509c5b0a77ec0a72ed67c190941aa5d0e3261430f43ea652d5a76e.pdf) / 장입대·받침대 도면/50톤 장입대외.zip!/세진메탈버너 50톤 장입대20250904.pdf / 80333bytes / SHA-256 3dd01bac76509c5b0a77ec0a72ed67c190941aa5d0e3261430f43ea652d5a76e
- [50톤 반사로(개조)도면.pdf](/documents/source-store/aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/50톤 반사로(개조)도면.pdf / 4254380bytes / SHA-256 aa3202920add0c2f0d1b9ac6dbd3fff596c92515dec078c3daaa0ef701dc1001
- [50톤 반사로_20251112.xgwx](/documents/source-store/2b34e68f9888dc87d879077e4a9a1b037665cc1c68c3c00e158fbeccc4243a8c.xgwx) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/50톤 반사로_20251112.xgwx / 19440bytes / SHA-256 2b34e68f9888dc87d879077e4a9a1b037665cc1c68c3c00e158fbeccc4243a8c
- [50톤 반사로_r1.osts](/documents/source-store/ffea504fe0524e3f555c1fcd6fc483c1c88fbc8b683ebc17665b31e99c3d6438.osts) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/50톤 반사로_r1.osts / 174bytes / SHA-256 ffea504fe0524e3f555c1fcd6fc483c1c88fbc8b683ebc17665b31e99c3d6438
- [50톤 반사로_r1.xpd](/documents/source-store/3d67d6b2ca579981779a5713327d2327d348ac8d135df2a0cb5eea2e0bdcdb7c.xpd) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/50톤 반사로_r1.xpd / 3137359bytes / SHA-256 3d67d6b2ca579981779a5713327d2327d348ac8d135df2a0cb5eea2e0bdcdb7c
- [A2-5-3. [분전반] 산업용 차단기.pdf](/documents/source-store/bd0e323e16c9b09fbe0968c7c1a6af0e6a5a8e039a2a31528685707cc600ba9d.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/A2-5-3. [분전반] 산업용 차단기.pdf / 6442084bytes / SHA-256 bd0e323e16c9b09fbe0968c7c1a6af0e6a5a8e039a2a31528685707cc600ba9d
- [C7027 BC1000.pdf](/documents/source-store/feeabb4be1d3a8e35eedf587365b54b51aca37ad72c4611bed92aab100a115c7.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/C7027 BC1000.pdf / 1159685bytes / SHA-256 feeabb4be1d3a8e35eedf587365b54b51aca37ad72c4611bed92aab100a115c7
- [DMPi MANUAL_KR_EN.pdf](/documents/source-store/f23c951a0433178326a1100442fd996e0deeeeb6149ad583216000ed716eade4.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/DMPi MANUAL_KR_EN.pdf / 2423435bytes / SHA-256 f23c951a0433178326a1100442fd996e0deeeeb6149ad583216000ed716eade4
- [M7284.pdf](/documents/source-store/2993ea5eb82b0345b0e081051fcfe75e2dc8a52f5a11bfac37004606559d4bf2.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/M7284.pdf / 683233bytes / SHA-256 2993ea5eb82b0345b0e081051fcfe75e2dc8a52f5a11bfac37004606559d4bf2
- [VX_manual.pdf](/documents/source-store/24f80417dc373fe1e48c640e70c9ed5125e53b9169187852e4ecf61c8911eb61.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/VX_manual.pdf / 5057024bytes / SHA-256 24f80417dc373fe1e48c640e70c9ed5125e53b9169187852e4ecf61c8911eb61
- [VX_user_kr.pdf](/documents/source-store/6e110ad0275970988d5f8b37491826a237251d92c2ff2d8fc09452bdaa6c4bbf.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/VX_user_kr.pdf / 17051834bytes / SHA-256 6e110ad0275970988d5f8b37491826a237251d92c2ff2d8fc09452bdaa6c4bbf
- [VX시리즈.pdf](/documents/source-store/7a99b83571b47da3daa1dfcceca18ee456756b1d56c2373a5770826acaeedc8c.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/VX시리즈.pdf / 3434312bytes / SHA-256 7a99b83571b47da3daa1dfcceca18ee456756b1d56c2373a5770826acaeedc8c
- [XBC-H_XBM-S_Manual_V2.7_202607_KR.pdf](/documents/source-store/d1fbe520ef2d223af5fc84e7150adf4f521cc7dbb6e7ac8313bcac656cc6b1d6.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/XBC-H_XBM-S_Manual_V2.7_202607_KR.pdf / 10469043bytes / SHA-256 d1fbe520ef2d223af5fc84e7150adf4f521cc7dbb6e7ac8313bcac656cc6b1d6
- [XGT Panel HW Manual_iXP2_kor_V1.9.pdf](/documents/source-store/256fdb93425593e002abd86790533c49a2973b8d14d46071d7fd29a677a3cabf.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/XGT Panel HW Manual_iXP2_kor_V1.9.pdf / 5540299bytes / SHA-256 256fdb93425593e002abd86790533c49a2973b8d14d46071d7fd29a677a3cabf
- [[DMPi]_KO_C15021-06-202504.pdf](/documents/source-store/eaec76257fe7527d29bd46e96e7e33c8cdc2a59a532f4593c5b69851e3e04e49.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/[DMPi]_KO_C15021-06-202504.pdf / 3738825bytes / SHA-256 eaec76257fe7527d29bd46e96e7e33c8cdc2a59a532f4593c5b69851e3e04e49
- [[Metasol_MCCB]_KO_C01031-34-202501.pdf](/documents/source-store/9191efd235985d289640df1b8f6173de436600c8bfe01d5e2415d0d9b402e05a.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/[Metasol_MCCB]_KO_C01031-34-202501.pdf / 46453915bytes / SHA-256 9191efd235985d289640df1b8f6173de436600c8bfe01d5e2415d0d9b402e05a
- [[Metasol_MS]_KO_C04001-36-202605.pdf](/documents/source-store/bfb579380f329d42947fc5b2f711303df978af30904d334c087e9cb2ea95deb2.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/[Metasol_MS]_KO_C04001-36-202605.pdf / 32807097bytes / SHA-256 bfb579380f329d42947fc5b2f711303df978af30904d334c087e9cb2ea95deb2
- [[RCBO]_RKJ-b_Leaflet_KO_C015W1-02-202504.pdf](/documents/source-store/40171b9b2e755da7544eaf79f7027b301b0240dcdd450a926c470ab687644822.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/[RCBO]_RKJ-b_Leaflet_KO_C015W1-02-202504.pdf / 858636bytes / SHA-256 40171b9b2e755da7544eaf79f7027b301b0240dcdd450a926c470ab687644822
- [[XGB-2] 설치가이드_XB(E)C-DN(R)3264H_A_Installation Guide_V4.5.pdf](/documents/source-store/d4a830ff763259dba4e9248bdfef5c9a48c7f18f0ebc0750f3dd67e21bec333e.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/[XGB-2] 설치가이드_XB(E)C-DN(R)3264H_A_Installation Guide_V4.5.pdf / 1010671bytes / SHA-256 d4a830ff763259dba4e9248bdfef5c9a48c7f18f0ebc0750f3dd67e21bec333e
- [[XGB-34] 설치가이드_XB(E)C-DN(R)3264H_RENEWAL_10310001847_V1.1.pdf](/documents/source-store/6129cc886d2bd0052e88d337507d447b827acc0d2a2c95544adcdc6a4d24eceb.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/[XGB-34] 설치가이드_XB(E)C-DN(R)3264H_RENEWAL_10310001847_V1.1.pdf / 1410196bytes / SHA-256 6129cc886d2bd0052e88d337507d447b827acc0d2a2c95544adcdc6a4d24eceb
- [potentionmeter SHA-RI.pdf](/documents/source-store/85c5dc954ce6e2fb719f4626a3c89cc8789897a9a44e3f0705309bc87842b2ec.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/potentionmeter SHA-RI.pdf / 640422bytes / SHA-256 85c5dc954ce6e2fb719f4626a3c89cc8789897a9a44e3f0705309bc87842b2ec
- [세진메탈 50용해로 전기도면 .pdf](/documents/source-store/dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/세진메탈 50용해로 전기도면 .pdf / 1679043bytes / SHA-256 dc1ee8d94177fe3eb3af5ece36f3ecd9183f2d455fdf2e2b2bbe096ce741ddc2
- [세진메탈50톤 사용 설명서20260206.hwp](/documents/source-store/ec4696f6e5620ee8af100c3ff10d395f8a481f86d520dd88a97ab60f8467d7d9.hwp) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/세진메탈50톤 사용 설명서20260206.hwp / 87040bytes / SHA-256 ec4696f6e5620ee8af100c3ff10d395f8a481f86d520dd88a97ab60f8467d7d9
- [세진메탈50톤 사용 설명서20260206.pdf](/documents/source-store/f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097.pdf) / 준공 매뉴얼/세진메탈 50톤 메뉴얼.zip!/세진메탈50톤 사용 설명서20260206.pdf / 191269bytes / SHA-256 f05859dab2011723b548bcd7d9fb428a14b9160b1d7a509548d865ed20542097
