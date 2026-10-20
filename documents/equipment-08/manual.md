# 8번 85톤로 (압연)

ROLLING85-08 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

8번은 압연85톤로입니다. 본체·내화물·버너/배관·소방 자료가 중심이며 2016 자료와 2024 수리도 등 시점을 구분했습니다. 7번 압연30톤과 별개 설비로 등록했고 온도·버너 정격/설정을 공유한다고 가정하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 27개, 압축 내부 자료 0개, 고유 해시 26개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## I/O·접점·단자

가스버너 P&ID의 기기·계장/밸브 표기를 원본 참조로 다루며 실제 PLC 메모리 주소로 변환하지 않았습니다. 현재 CPU·I/O 배치·안전 입출력·HMI 태그·전기도면 전체는 확인 대장에 미확보 범위를 표시합니다. CAD/TIF 원본과 대응 PDF를 연결했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## 제어 구조

설비 설명은 연소 공기·가스 공급·버너·배기/축열 관련 원본의 구성 범위입니다. RSH-400GO 명칭 자료와 현재 장착 버너, 축열 전환·퍼지·화염 검출·연료 차단의 실제 로직은 별도 확인이 필요합니다. 기계/배관도만으로 PLC 시퀀스·타이머를 만들지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## 전기 전달 경로

주요 경로는 가스버너 P&ID의 공급/조절/버너 계통과 본체·내화물 조립 구간입니다. 동력 전원→차단기→접촉기/인버터→모터의 상세 전체는 이 자료만으로 확정하지 않습니다. 소방 CO2 경로와 연소 제어를 혼합하지 않고, 같은 형상 도면도 파일 해시와 버전을 남겼습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## 알람·복구

연소 공기/가스·화염·배기/전환·내화물 손상은 원본을 찾기 위한 점검 범주입니다. 실제 알람 발생·한계값·전환 시간·복구/재점화 순서는 미확보입니다. 수리도는 내화물 작업의 문서 근거이며 이번 현장 작업 이력이 아닙니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## 증상별 점검

1. 버너/가열 이상
가스 P&ID·RSH 자료와 현재 계통 식별부터 확인
근거: 압연85톤 가스버너P&ID.pdf · PDF 1쪽

2. 내화물/본체 수리 검토
Model1/2·2016/2024 수리도별 차이와 현재 실물 대조
근거: 세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf · PDF 1쪽

3. 전기/PLC 점검 준비
현행 반·CPU·전기도면 확보 후 동력/제어/안전 구분
근거: 압연(85ton)도면.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 27개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 0행·조작 참조 1행
- 핵심 PDF 페이지 미리보기 6개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 3개·확인 대장 6개

미확정·추가 확인
- 현재 전기·PLC: 기계/배관 자료 중심, 전체 전기/프로그램 미확정 / CPU·전기도면·래더·안전/알람 정의
- 내화물 개정: 2016 자료와 2024 수리도 및 Model1/2 / 실제 최근 수리 범위·제작도
- 버너/축열 적용: RSH-400GO 및 가스 P&ID와 실물 대응 / 장착 모델·밸브/전환 계통 확인
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf#page=1) / [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf#page=1) / [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf#page=1) / [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1) / [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1) / [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|


## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 가스/버너 계통 참조 | P&ID상 계장; 현행 조작반/HMI 태그 아님 | 압연85톤 가스버너P&ID.pdf · PDF 1쪽 | /documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 버너/가열 이상 | 가스 P&ID·RSH 자료와 현재 계통 식별부터 확인 | 압연85톤 가스버너P&ID.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf#page=1 |
| 내화물/본체 수리 검토 | Model1/2·2016/2024 수리도별 차이와 현재 실물 대조 | 세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf#page=1 |
| 전기/PLC 점검 준비 | 현행 반·CPU·전기도면 확보 후 동력/제어/안전 구분 | 압연(85ton)도면.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 현재 전기·PLC | 미확정·원문 차이 보존 | 기계/배관 자료 중심, 전체 전기/프로그램 미확정 | CPU·전기도면·래더·안전/알람 정의 |
| 내화물 개정 | 미확정·원문 차이 보존 | 2016 자료와 2024 수리도 및 Model1/2 | 실제 최근 수리 범위·제작도 |
| 버너/축열 적용 | 미확정·원문 차이 보존 | RSH-400GO 및 가스 P&ID와 실물 대응 | 장착 모델·밸브/전환 계통 확인 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [85톤-조립도 Model (1).pdf](/documents/source-store/cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325.pdf) / 85톤로(압연)/85톤-조립도 Model (1).pdf / 233575bytes / SHA-256 cc9033079470bf332132fd51fa28463e2514f28ab1b65a8904b1129a9350c325
- [85톤-조립도 Model (2).pdf](/documents/source-store/6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05.pdf) / 85톤로(압연)/85톤-조립도 Model (2).pdf / 228880bytes / SHA-256 6bba82a3a4528d7ef7c31e8aff990a4faea99f706e1367b6cff8bbc9aa625a05
- [85톤UBC-내화벽돌007-2016.10.17.pdf](/documents/source-store/47db5dab17943e01fa4ec32ad81670db9e0e3d24a6ccc4d8527a9a6b1c784ae2.pdf) / 85톤로(압연)/85톤UBC-내화벽돌007-2016.10.17.pdf / 707862bytes / SHA-256 47db5dab17943e01fa4ec32ad81670db9e0e3d24a6ccc4d8527a9a6b1c784ae2
- [85톤로.tif](/documents/source-store/df3f4177b13ec5a94bb0b32d7cea69debb8aa31c37e6e96f9d9b87cf6cd59820.tif) / 85톤로(압연)/85톤로.tif / 287312bytes / SHA-256 df3f4177b13ec5a94bb0b32d7cea69debb8aa31c37e6e96f9d9b87cf6cd59820
- [5. 85톤 용해로.pdf](/documents/source-store/cd6b6e4f48ff6c29f64ea3e601d6d6098bf01f7f4cf4c4c639abc5ce9cfa3030.pdf) / 기존 도면/5. 85톤 용해로.pdf / 757637bytes / SHA-256 cd6b6e4f48ff6c29f64ea3e601d6d6098bf01f7f4cf4c4c639abc5ce9cfa3030
- [7. 85톤 용해로 내화벽돌.pdf](/documents/source-store/9bacb9c09929516aac404b709dd957643b6c3689776b29fd27360dc2cfd054fe.pdf) / 기존 도면/7. 85톤 용해로 내화벽돌.pdf / 1171676bytes / SHA-256 9bacb9c09929516aac404b709dd957643b6c3689776b29fd27360dc2cfd054fe
- [85톤로.tif](/documents/source-store/1f06e8e9469a04b0f298008764cb85e0397e8f95b0adfeb76049dc828fd0da1f.tif) / 기존 도면/과거 백업본/85톤로.tif / 173312bytes / SHA-256 1f06e8e9469a04b0f298008764cb85e0397e8f95b0adfeb76049dc828fd0da1f
- [RSH-400GO(압연85톤).dwg](/documents/source-store/921c6a0087fe9be11f82eac2d7a7e901eaf74a681a354fcedb35b5a7883ec952.dwg) / 배관·버너 도면/1. 1차 도면/RSH-400GO(압연85톤).dwg / 422608bytes / SHA-256 921c6a0087fe9be11f82eac2d7a7e901eaf74a681a354fcedb35b5a7883ec952
- [RSH-400GO(압연85톤).dwg](/documents/source-store/36ac2fe8550a7373bb2d4632ec9f157f7b00f4f773672f74bdd6d0cb87388a7f.dwg) / 배관·버너 도면/2. 2차 도면/RSH-400GO(압연85톤).dwg / 422645bytes / SHA-256 36ac2fe8550a7373bb2d4632ec9f157f7b00f4f773672f74bdd6d0cb87388a7f
- [7. 85톤 압연로.dwg](/documents/source-store/36c5e683b52b22e2817592a0be66293c892b0039c412070a59c16d1bd79d9d3b.dwg) / 배관·버너 도면/LNG 배관/7. 85톤 압연로.dwg / 416609bytes / SHA-256 36c5e683b52b22e2817592a0be66293c892b0039c412070a59c16d1bd79d9d3b
- [RSH-400GO(축열400만)-압연.dwg](/documents/source-store/9ac72f58f841e6bcf4021db6bff1ad786c4d503d68c1b612774a4aa2b869c493.dwg) / 배관·버너 도면/기존 버너도면/RSH-400GO(축열400만)-압연.dwg / 363392bytes / SHA-256 9ac72f58f841e6bcf4021db6bff1ad786c4d503d68c1b612774a4aa2b869c493
- [3. RSH-400GO(압연85톤).dwg](/documents/source-store/36ac2fe8550a7373bb2d4632ec9f157f7b00f4f773672f74bdd6d0cb87388a7f.dwg) / 배관·버너 도면/정제유 변경배관/3. RSH-400GO(압연85톤).dwg / 422645bytes / SHA-256 36ac2fe8550a7373bb2d4632ec9f157f7b00f4f773672f74bdd6d0cb87388a7f
- [85톤로.tif](/documents/source-store/2869e611cef4a0c22cfc7b1851d973b8efb0117a22e5a70ab7ccccc80695d3b0.tif) / 생산부공용 추가도면/85톤로 참고자료(적용확인필요)/85톤로.tif / 57636bytes / SHA-256 2869e611cef4a0c22cfc7b1851d973b8efb0117a22e5a70ab7ccccc80695d3b0
- [세진메탈_85톤-내화벽돌.pdf](/documents/source-store/87b8dae5701e0e4559bd2152fba8232ebe80a428de41281d0484091af2d50fe0.pdf) / 생산부공용 추가도면/85톤로 참고자료(적용확인필요)/세진메탈_85톤-내화벽돌.pdf / 1083777bytes / SHA-256 87b8dae5701e0e4559bd2152fba8232ebe80a428de41281d0484091af2d50fe0
- [RSH-400GO(압연85톤).dwg](/documents/source-store/5e88f3351db32edfb549587bd7e58285e0cf0712c9ed0d8a03b56540d6cc2d66.dwg) / 생산부공용 추가도면/버너 및 설비도면/RSH-400GO(압연85톤).dwg / 293728bytes / SHA-256 5e88f3351db32edfb549587bd7e58285e0cf0712c9ed0d8a03b56540d6cc2d66
- [RSH-400GO(압연85톤).pdf](/documents/source-store/5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3.pdf) / 생산부공용 추가도면/버너 및 설비도면/RSH-400GO(압연85톤).pdf / 280534bytes / SHA-256 5cf01e9fb35341a08a3d3d74f30d42e80428be37af9d5bb8e978c3e6d165edd3
- [세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf](/documents/source-store/7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6.pdf) / 생산부공용 추가도면/버너 및 설비도면/세진메탈 UBC 85톤 내화물 수리 도면 2024.06.17 - ALF.pdf / 1408951bytes / SHA-256 7b310a0e479f6d213e5f6085aada567484eb350b97b32cf7eb23bec24f80f7b6
- [스케줄 및 도면.tif](/documents/source-store/6006bf0fcd00ce9b377c024cdac4ea235a5827ced6c53aad4c04eeef09bf502b.tif) / 생산부공용 추가도면/버너 및 설비도면/스케줄 및 도면.tif / 383360bytes / SHA-256 6006bf0fcd00ce9b377c024cdac4ea235a5827ced6c53aad4c04eeef09bf502b
- [압연85톤 가스버너P&ID.pdf](/documents/source-store/9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c.pdf) / 생산부공용 추가도면/버너 및 설비도면/압연85톤 가스버너P&ID.pdf / 569617bytes / SHA-256 9d4839f2a4e99d62d1a0d13c94283029bb0303cca0542bd60ceae94a5aaa131c
- [2.85 TON.pdf](/documents/source-store/62f85571231055401ad0894b0ea92705c0cb52c3c4f30f0032484b9040d8cb57.pdf) / 소방 도면·계산서/2.85 TON.pdf / 56644bytes / SHA-256 62f85571231055401ad0894b0ea92705c0cb52c3c4f30f0032484b9040d8cb57
- [CO2 - 85ton.pdf](/documents/source-store/b176e42655bdd95bc11770e4ac616ba0f465e22ed0fea62280a9eb562f3832c4.pdf) / 소방 도면·계산서/CO2 - 85ton.pdf / 98868bytes / SHA-256 b176e42655bdd95bc11770e4ac616ba0f465e22ed0fea62280a9eb562f3832c4
- [2379-021.dwg](/documents/source-store/1c7c2b5431ad8d080448f4dc5c500ec85ffe07929f23d7db2e2c722fcb94bb99.dwg) / 압연 85ton furnace/2379-021.dwg / 521124bytes / SHA-256 1c7c2b5431ad8d080448f4dc5c500ec85ffe07929f23d7db2e2c722fcb94bb99
- [2379-022.dwg](/documents/source-store/440d4bdff5cc696d3cfade9139a6c0b9029435cd8b1f031fc1b8f0303d7fdf93.dwg) / 압연 85ton furnace/2379-022.dwg / 413016bytes / SHA-256 440d4bdff5cc696d3cfade9139a6c0b9029435cd8b1f031fc1b8f0303d7fdf93
- [2379-026.dwg](/documents/source-store/600404339aca3151788f2a9803b1c2999fd1a849ed380dfead6cb776c11e1251.dwg) / 압연 85ton furnace/2379-026.dwg / 1083276bytes / SHA-256 600404339aca3151788f2a9803b1c2999fd1a849ed380dfead6cb776c11e1251
- [2379-027.dwg](/documents/source-store/5be591b3c61b2bd80edc7a6bcaf6d9f76c9e3847ae2bcdaaf9e22cbd803c92d4.dwg) / 압연 85ton furnace/2379-027.dwg / 972928bytes / SHA-256 5be591b3c61b2bd80edc7a6bcaf6d9f76c9e3847ae2bcdaaf9e22cbd803c92d4
- [2379-028.dwg](/documents/source-store/feb5477d3e0ce65cc91f0ea095550c1628891e524abb3077d5d63bba6d7aa94a.dwg) / 압연 85ton furnace/2379-028.dwg / 406934bytes / SHA-256 feb5477d3e0ce65cc91f0ea095550c1628891e524abb3077d5d63bba6d7aa94a
- [압연(85ton)도면.pdf](/documents/source-store/801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125.pdf) / 압연 85ton furnace/압연(85ton)도면.pdf / 535597bytes / SHA-256 801d6417519160afea5c5bd8ba728583e06301564138ffa2b67c342838425125
