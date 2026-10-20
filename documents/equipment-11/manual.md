# 11번 칩장 (합금)

CHIP-11 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

11번 칩장(합금)은 칩의 유분·수분을 건조하고 철 성분을 분리하는 로타리 킬른 공정 자료입니다. 공정 설명 2종은 투입/호퍼·킬른/스크루·자력선별·배기/재연소·미분 집진/로타리밸브를 설명합니다. 1·2차 설비 자료와 소방 자료를 분리했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 28개, 압축 내부 자료 0개, 고유 해시 26개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## I/O·접점·단자

제공 자료에서 현행 PLC 메모리 할당표를 확정하지 않았습니다. 공정·버너·온도/속도 조작·팬/압력·인버터·기기명을 자료의 참조로 정리합니다. DOC 표는 본문 조각표로 추출했고 PPT는 텍스트 레코드이므로 도형·선·슬라이드 원형 배치를 재현하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## 제어 구조

공정 설명은 승온→원료 공급→건조/스크루 이송→철 분리/배출·집진 관계와 단계별 운전 조건을 서술합니다. 이를 실제 인터록·시퀀스·정지 후 냉각 로직으로 확정하지 않았습니다. 고온 상태의 정지/배풍 관련 원문은 현장 승인 절차와 대조할 항목으로 남기며 자동으로 실행할 지시가 아닙니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## 전기 전달 경로

급기/배기 팬, 가스 인입/정압, 압축공기·압력 검출, 킬른 구동·공급/건조 스크루·자력선별·집진의 구간을 분리합니다. 팬/퓨즈/인버터·구동모터 점검 항목은 DOC 원문에 있으며 실제 전원/접촉기·PLC 주소를 새로 부여하지 않았습니다. 기계 CAD와 버너/소방 배관을 전기 회로와 혼합하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## 알람·복구

가스/연소공기 공급 중단, 배기·압축공기, 가스 압력, 화염 미검출과 킬른 회전정지를 문서상 이상 범주로 정리했습니다. 문서에 있는 압력 단위 표기의 혼재와 설정값·재시작 문구는 현행 값으로 교정/적용하지 않았습니다. 실제 알람 코드·수동/자동 복구·안전 정지 시험은 미수행입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## 증상별 점검

1. 가스/연소공기·배기 이상
급기/배기 팬·필터·밸브·압력 검출의 문서 구간 분리
근거: 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본

2. 킬른/스크루 회전 정지
차단기·퓨즈·인버터·모터와 기계 끼임을 별도 후보로 기록
근거: 4. Chip건조기 공정 설명서.doc · 원본 추출 열람본

3. 건조/배출/선별 불량
공급·건조·배출·마그네트·집진 단계를 구분
근거: 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 28개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 6행·조작 참조 1행
- 핵심 PDF 페이지 미리보기 100개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 3개·확인 대장 6개

미확정·추가 확인
- 1·2차 설비 적용: 여러 CHIP 도면·1F/2F 및 동일명 자료 / 현장 라인·단계·반번호·개정 확인
- 운전조건·단위: DOC의 과거 온도/주파수/압력·시간 및 단위 혼재 / 현행 승인 조건·계기/프로그램 대조
- PLC/HMI 원본: 현행 할당·래더·인버터/온도 설정 정의 미확정 / 현재 CPU·원본·태그·보호 로직 확보
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf#page=1) / [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf#page=1) / [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf#page=1) / [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf#page=1) / [3. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S3388e72eed2a6e33) / [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf#page=1) / [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf#page=1) / [4. Chip건조기 공정 설명서.doc](/documents/equipment-11/library.html?source=S759ef0ad097f1bba) / [온도 및 속도 조절 매뉴얼.ppt](/documents/equipment-11/library.html?source=S7aa619327fc82772) / [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| Chip 공정 DOC · PLC주소 아님 | 공정 기기 참조 | Combustion Air Fan | 급기/연소 공기 팬 | 원본 표기; 현재 할당·실물 미확정 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |
| Chip 공정 DOC · PLC주소 아님 | 공정 기기 참조 | Exhaust Gas Fan | 배기 팬 | 원본 표기; 현재 할당·실물 미확정 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |
| Chip 공정 DOC · PLC주소 아님 | 공정 기기 참조 | Air Pressure Low Switch | 연소 공기 압력 검출 | 원본 표기; 현재 할당·실물 미확정 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |
| Chip 공정 DOC · PLC주소 아님 | 공정 기기 참조 | Compressed Air Pressure Switch | 압축공기 압력 검출 | 원본 표기; 현재 할당·실물 미확정 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |
| Chip 공정 DOC · PLC주소 아님 | 공정 기기 참조 | Rotary Drum / Kiln | 킬른 구동 | 원본 표기; 현재 할당·실물 미확정 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |
| Chip 공정 DOC · PLC주소 아님 | 공정 기기 참조 | C/V MAGNET | 철 분리 구간 | 원본 표기; 현재 할당·실물 미확정 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 온도·속도 조절 | PPT 텍스트 레코드 참조; 원형 슬라이드 배치 미재현 | 온도 및 속도 조절 매뉴얼.ppt · 원본 추출 열람본 | /documents/equipment-11/library.html?source=S7aa619327fc82772 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 가스/연소공기·배기 이상 | 급기/배기 팬·필터·밸브·압력 검출의 문서 구간 분리 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |
| 킬른/스크루 회전 정지 | 차단기·퓨즈·인버터·모터와 기계 끼임을 별도 후보로 기록 | 4. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-11/library.html?source=S759ef0ad097f1bba |
| 건조/배출/선별 불량 | 공급·건조·배출·마그네트·집진 단계를 구분 | 3. Chip건조기 공정 설명서.doc · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-11/library.html?source=S3388e72eed2a6e33 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 1·2차 설비 적용 | 미확정·원문 차이 보존 | 여러 CHIP 도면·1F/2F 및 동일명 자료 | 현장 라인·단계·반번호·개정 확인 |
| 운전조건·단위 | 미확정·원문 차이 보존 | DOC의 과거 온도/주파수/압력·시간 및 단위 혼재 | 현행 승인 조건·계기/프로그램 대조 |
| PLC/HMI 원본 | 미확정·원문 차이 보존 | 현행 할당·래더·인버터/온도 설정 정의 미확정 | 현재 CPU·원본·태그·보호 로직 확보 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [칩건조로 도면(1-3).pdf](/documents/source-store/b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde.pdf) / 04_칩/칩건조로 도면(1-3).pdf / 3045650bytes / SHA-256 b3661fc9853498d9b9ca0b0f1b0fd7337e8860fc2d80f50125fec65a603cefde
- [칩건조로 도면(2-3).pdf](/documents/source-store/be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3.pdf) / 04_칩/칩건조로 도면(2-3).pdf / 95784bytes / SHA-256 be0407946f7a4ce8362fd3a72f553aff3b0219f4f1cec1bc5c4d6a6cb040ffe3
- [칩건조로 도면(3-3).pdf](/documents/source-store/3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0.pdf) / 04_칩/칩건조로 도면(3-3).pdf / 1052945bytes / SHA-256 3f1f970ac888ad557389f5b748a9079134d4a1d6e39af7f195c05e82910a8df0
- [칩건조로 설비 LIST.pdf](/documents/source-store/e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092.pdf) / 04_칩/칩건조로 설비 LIST.pdf / 712144bytes / SHA-256 e3c7038b9ba431fca1dd9e76d5c8da98713a806ebdee98aa2da5da2388155092
- [img-Z14085458-192168020202-0000006914-1612140854.tif](/documents/source-store/9a811552c735f2adec3a34da95bbface1ccf397f3828f939cf82defda04a7613.tif) / 04_칩/칩설비/1차 ㄱ 컨베어/img-Z14085458-192168020202-0000006914-1612140854.tif / 159700bytes / SHA-256 9a811552c735f2adec3a34da95bbface1ccf397f3828f939cf82defda04a7613
- [3. Chip건조기 공정 설명서.doc](/documents/source-store/3388e72eed2a6e336f926308e9823f8c98b41bae20e7b382771bed58b6d8cf78.doc) / 공정 설명서/3. Chip건조기 공정 설명서.doc / 347648bytes / SHA-256 3388e72eed2a6e336f926308e9823f8c98b41bae20e7b382771bed58b6d8cf78
- [CHIP건조로(1차).dwg](/documents/source-store/caea5b2e42ee45423c1191668f9ea7877dfe25e71f0e48a9afcb025b5fd82ffd.dwg) / 배관·버너 도면/1. 1차 도면/CHIP건조로(1차).dwg / 456107bytes / SHA-256 caea5b2e42ee45423c1191668f9ea7877dfe25e71f0e48a9afcb025b5fd82ffd
- [CHIP건조로(2차).dwg](/documents/source-store/e5c74cd3df17cc46c26fefc574e968fc04405b119b785b29748d3dd43110e073.dwg) / 배관·버너 도면/1. 1차 도면/CHIP건조로(2차).dwg / 515735bytes / SHA-256 e5c74cd3df17cc46c26fefc574e968fc04405b119b785b29748d3dd43110e073
- [CHIP 건조로(1차).dwg](/documents/source-store/6fe4c0a8caef9a12f1af883b8bb74062682665353cc182f86c6b1244fc2a01d4.dwg) / 배관·버너 도면/2. 2차 도면/CHIP 건조로(1차).dwg / 457006bytes / SHA-256 6fe4c0a8caef9a12f1af883b8bb74062682665353cc182f86c6b1244fc2a01d4
- [CHIP건조로(2차).dwg](/documents/source-store/509d308224767bacfe0af78df8afb9869269617e1fe3753d35ace3f6a4231889.dwg) / 배관·버너 도면/2. 2차 도면/CHIP건조로(2차).dwg / 710563bytes / SHA-256 509d308224767bacfe0af78df8afb9869269617e1fe3753d35ace3f6a4231889
- [DH-LNOG-20FS(1차 CHIP).dwg](/documents/source-store/682a24b3d398c79c6b66451a59d493bc4248a37f78b47a303230b2b1f48f8ed2.dwg) / 배관·버너 도면/기존 버너도면/DH-LNOG-20FS(1차 CHIP).dwg / 312128bytes / SHA-256 682a24b3d398c79c6b66451a59d493bc4248a37f78b47a303230b2b1f48f8ed2
- [DH-LNOG-20FS(2차 CHIP).dwg](/documents/source-store/dfbea28ca751c622aeb0af9b1c4885bb7e0748ed9522784d29f49a0f993d1766.dwg) / 배관·버너 도면/기존 버너도면/DH-LNOG-20FS(2차 CHIP).dwg / 352736bytes / SHA-256 dfbea28ca751c622aeb0af9b1c4885bb7e0748ed9522784d29f49a0f993d1766
- [10. CHIP건조로(2차).dwg](/documents/source-store/509d308224767bacfe0af78df8afb9869269617e1fe3753d35ace3f6a4231889.dwg) / 배관·버너 도면/정제유 변경배관/10. CHIP건조로(2차).dwg / 710563bytes / SHA-256 509d308224767bacfe0af78df8afb9869269617e1fe3753d35ace3f6a4231889
- [9. CHIP 건조로(1차).dwg](/documents/source-store/6fe4c0a8caef9a12f1af883b8bb74062682665353cc182f86c6b1244fc2a01d4.dwg) / 배관·버너 도면/정제유 변경배관/9. CHIP 건조로(1차).dwg / 457006bytes / SHA-256 6fe4c0a8caef9a12f1af883b8bb74062682665353cc182f86c6b1244fc2a01d4
- [CHIP_FOUNDATION.dwg](/documents/source-store/c5526fce51e1221f27d50f885dd7293bd40102cabff5cb8e4c82b0f0abe88e4a.dwg) / 생산부공용 추가도면/기초도면/CHIP_FOUNDATION.dwg / 356362bytes / SHA-256 c5526fce51e1221f27d50f885dd7293bd40102cabff5cb8e4c82b0f0abe88e4a
- [sj-f000a(al_chip기초도_최종).dwg](/documents/source-store/a68bf7cb82766c045c55443592c7a3a99ea482e420c0b266133f229d6d6bee64.dwg) / 생산부공용 추가도면/기초도면/sj-f000a(al_chip기초도_최종).dwg / 679553bytes / SHA-256 a68bf7cb82766c045c55443592c7a3a99ea482e420c0b266133f229d6d6bee64
- [CHIP건조로(1차).dwg](/documents/source-store/3363b64ed9fa4932a20369b1a227bb17f71974df690673b0ee7af200e72320fa.dwg) / 생산부공용 추가도면/버너 및 설비도면/CHIP건조로(1차).dwg / 322880bytes / SHA-256 3363b64ed9fa4932a20369b1a227bb17f71974df690673b0ee7af200e72320fa
- [CHIP건조로(1차).pdf](/documents/source-store/4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7.pdf) / 생산부공용 추가도면/버너 및 설비도면/CHIP건조로(1차).pdf / 942017bytes / SHA-256 4451917387aadea672d14e3d8a4ea7bfffb8e7506e521a36114173afaac20de7
- [CHIP건조로(2차).dwg](/documents/source-store/a2bcc6c2cd8a5ed40f1d74e18403eeb84e480ebfde8f82d5816c6dcc2cd71fc2.dwg) / 생산부공용 추가도면/버너 및 설비도면/CHIP건조로(2차).dwg / 383264bytes / SHA-256 a2bcc6c2cd8a5ed40f1d74e18403eeb84e480ebfde8f82d5816c6dcc2cd71fc2
- [CHIP건조로(2차).pdf](/documents/source-store/1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a.pdf) / 생산부공용 추가도면/버너 및 설비도면/CHIP건조로(2차).pdf / 273334bytes / SHA-256 1482d602506444b3936e72b30ed2408557acce23f8e0dbc019264a319a7a4d6a
- [4. Chip건조기 공정 설명서.doc](/documents/source-store/759ef0ad097f1bba0f48e4c0cc8919421d60f09cfa9181a1b03d703e3da11005.doc) / 생산부공용 추가도면/운전 및 정비 참고자료/4. Chip건조기 공정 설명서.doc / 346624bytes / SHA-256 759ef0ad097f1bba0f48e4c0cc8919421d60f09cfa9181a1b03d703e3da11005
- [온도 및 속도 조절 매뉴얼.ppt](/documents/source-store/7aa619327fc82772f21ad2c95e86ae7a8a059ab01993cd6e1703986aaa0f7420.ppt) / 생산부공용 추가도면/운전 및 정비 참고자료/온도 및 속도 조절 매뉴얼.ppt / 1640960bytes / SHA-256 7aa619327fc82772f21ad2c95e86ae7a8a059ab01993cd6e1703986aaa0f7420
- [세진메탈-완료보고서 공문(AL.CHIP).pdf](/documents/source-store/76990513dca960a6903571d63d926ef16738ad3d469d353fc395df0b2456f484.pdf) / 준공 보고서/세진메탈-완료보고서 공문(AL.CHIP).pdf / 170423bytes / SHA-256 76990513dca960a6903571d63d926ef16738ad3d469d353fc395df0b2456f484
- [STACK-4(합금칩 재연소로).pdf](/documents/source-store/8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7.pdf) / 집진 도면/STACK-4(합금칩 재연소로).pdf / 5031489bytes / SHA-256 8046d8106135654500c8f548d185adeec2494b8e0a1563356fc83233a4fac1d7
- [6.건조기 1F.pdf](/documents/source-store/0b4fc7940ae91ece931e56dbba85fed5bc64c9504a09132733ecb626f29044f9.pdf) / 참고자료(적용확인필요)/건조기 소방 도면·계산서/6.건조기 1F.pdf / 56713bytes / SHA-256 0b4fc7940ae91ece931e56dbba85fed5bc64c9504a09132733ecb626f29044f9
- [7.건조기 2F.pdf](/documents/source-store/6ab5bfc75ab1244c747051372fbe09379efdc14acd3c41d5859b2391cea203dc.pdf) / 참고자료(적용확인필요)/건조기 소방 도면·계산서/7.건조기 2F.pdf / 56780bytes / SHA-256 6ab5bfc75ab1244c747051372fbe09379efdc14acd3c41d5859b2391cea203dc
- [CO2 - 건조기 1F.pdf](/documents/source-store/402f558b3b26406614f65d60ec183ec0c409018f1b7e27dd35f7164f8a2c014a.pdf) / 참고자료(적용확인필요)/건조기 소방 도면·계산서/CO2 - 건조기 1F.pdf / 85527bytes / SHA-256 402f558b3b26406614f65d60ec183ec0c409018f1b7e27dd35f7164f8a2c014a
- [CO2 - 건조기 2F.pdf](/documents/source-store/e75a8bb55dff3c7570aad8f25d573e3b37396fddc02c8e79a8e26c0218573f87.pdf) / 참고자료(적용확인필요)/건조기 소방 도면·계산서/CO2 - 건조기 2F.pdf / 95269bytes / SHA-256 e75a8bb55dff3c7570aad8f25d573e3b37396fddc02c8e79a8e26c0218573f87
