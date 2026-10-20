# 7번 30톤로 (압연)

ROLLING30-07 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

7번은 압연30톤로입니다. 압연 전용 명칭 버너/배관 자료와 합금·압연 공용 기계도, 적용 확인이 필요한 열교환/내화/소방 자료로 나눴습니다. 같은 30톤이라는 이유로 5번 합금 2호기의 전기도면·프로그램·정격을 대입하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 31개, 압축 내부 자료 0개, 고유 해시 31개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## I/O·접점·단자

이번 폴더에서는 압연30톤 현행 PLC 할당표를 확정할 수 없습니다. 버너 계통도와 기계/부품 기호는 해당 원본의 전기·계장 참조로 남깁니다. CAD 파일은 원형 보존했고 대응 PDF를 우선 열람할 수 있게 했습니다. 공용도에 있는 태그와 전용 제어기의 관계는 현장/최신 도면 대조 전입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## 제어 구조

자료의 범위는 용해로 본체·버너 연소/송풍·열교환·도어/장입 및 관련 배관입니다. 완전한 전기도면·PLC/HMI 원본·버너관리 로직은 확보 여부를 별도 표시했습니다. 열교환기 설명의 운전 조건이나 다른 30톤의 제어를 이 설비의 시퀀스로 재구성하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## 전기 전달 경로

압연30톤로 PDF와 송풍기 외형, RECUPERATOR 조립/열교환 경로를 분리 연결했습니다. 가스/오일/공기/배기 경로의 적용과 현재 배관·밸브·인터록은 확인 전입니다. 장입대·문짝·내화물은 기계 계통, CO2는 소방 참고로 다룹니다. 원본에 없는 PLC 출력·단자 번호는 새로 부여하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## 알람·복구

연소·송풍·온도·열교환/배기·문짝/장입 기계 구간을 점검 범주로 정리했습니다. 현행 알람 코드·임계값·복구/재점화 조건은 제공 자료만으로 확정하지 않았습니다. 소방 자료를 현재 보호설비 동작 검증으로 표시하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## 증상별 점검

1. 가열/온도 이상
압연 전용 버너·송풍·열교환 자료 적용을 먼저 대조
근거: 압연30톤로.pdf · PDF 1쪽

2. 열교환기/배기 문제
공용/참고 조립도와 현장 유로·장착 모델 구분
근거: (주)세진메탈-30톤 용해로-열교환기.pdf · PDF 1쪽

3. 문짝·장입·내화물 점검
공용/다른 버전 기계도를 현재 호기와 대조
근거: 세진 30톤 PDF (합금,압연 공용).pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 31개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 0행·조작 참조 1행
- 핵심 PDF 페이지 미리보기 24개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 3개·확인 대장 6개

미확정·추가 확인
- 압연 전용 PLC/I/O: 합금30톤과 설비 구분; 전용 현행 할당 미확보 / 압연 반번호·CPU·프로그램·최신 전기도면
- 공용·적용확인필요 자료: 경로에 적용확인필요로 분류된 자료 다수 / 전용/공용 적용 범위 승인 근거
- 기계 버전: 문짝 다른 버전·여러 열교환기/과거도 / 현재 실물·개조일·제작도 대조
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1) / [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1) / [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf#page=1) / [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf#page=1) / [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|


## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 전용 운전/알람 | 현행 조작반/HMI 정의 미확보; 공용 기계도와 구분 | 압연30톤로.pdf · PDF 1쪽 | /documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 가열/온도 이상 | 압연 전용 버너·송풍·열교환 자료 적용을 먼저 대조 | 압연30톤로.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf#page=1 |
| 열교환기/배기 문제 | 공용/참고 조립도와 현장 유로·장착 모델 구분 | (주)세진메탈-30톤 용해로-열교환기.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf#page=1 |
| 문짝·장입·내화물 점검 | 공용/다른 버전 기계도를 현재 호기와 대조 | 세진 30톤 PDF (합금,압연 공용).pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 압연 전용 PLC/I/O | 미확정·원문 차이 보존 | 합금30톤과 설비 구분; 전용 현행 할당 미확보 | 압연 반번호·CPU·프로그램·최신 전기도면 |
| 공용·적용확인필요 자료 | 미확정·원문 차이 보존 | 경로에 적용확인필요로 분류된 자료 다수 | 전용/공용 적용 범위 승인 근거 |
| 기계 버전 | 미확정·원문 차이 보존 | 문짝 다른 버전·여러 열교환기/과거도 | 현재 실물·개조일·제작도 대조 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/(주)세진메탈-30톤 용해로-열교환기.pdf / 1295486bytes / SHA-256 50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b
- [30Ton로.tif](/documents/source-store/c103df770c3f0b1b610611e3cb6f65c30bc68b18e06e9346fe5f2daf03c5cad2.tif) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/30Ton로.tif / 68674bytes / SHA-256 c103df770c3f0b1b610611e3cb6f65c30bc68b18e06e9346fe5f2daf03c5cad2
- [30톤 버너.tif](/documents/source-store/17b07354511737270d1c6e2942677804ba1a46052592c1d9e33f3a00ffa7e956.tif) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/30톤 버너.tif / 1623056bytes / SHA-256 17b07354511737270d1c6e2942677804ba1a46052592c1d9e33f3a00ffa7e956
- [30톤-문 Model (1) (다른버전-b9189266).pdf](/documents/source-store/b9189266129f9d04ee919a07dfe91e6d4e27c0381e9f73616c46dffe61b60425.pdf) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/30톤-문 Model (1) (다른버전-b9189266).pdf / 100978bytes / SHA-256 b9189266129f9d04ee919a07dfe91e6d4e27c0381e9f73616c46dffe61b60425
- [30톤-문 Model (1).pdf](/documents/source-store/5d5636331d64b0ce220a566f9bbbbd3dc957a33a94554dbe1d7f9ab1606b12d0.pdf) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/30톤-문 Model (1).pdf / 140778bytes / SHA-256 5d5636331d64b0ce220a566f9bbbbd3dc957a33a94554dbe1d7f9ab1606b12d0
- [30톤로 내화물 도면.tif](/documents/source-store/e188d8e87277f2cd9930f5d52ef158a5a5873f65db709de04ac928450f7bc388.tif) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/30톤로 내화물 도면.tif / 178336bytes / SHA-256 e188d8e87277f2cd9930f5d52ef158a5a5873f65db709de04ac928450f7bc388
- [세진메탈 1공장 30톤 용해로 열교환기 사용 설명서.hwp](/documents/source-store/cb335d8681bf2cde4828d7fdc303f70a1e1ce6dda2f8721e6478415f26615fd7.hwp) / 생산부공용 추가도면/30톤로 참고자료(압연 적용확인필요)/세진메탈 1공장 30톤 용해로 열교환기 사용 설명서.hwp / 30586368bytes / SHA-256 cb335d8681bf2cde4828d7fdc303f70a1e1ce6dda2f8721e6478415f26615fd7
- [세진30톤로 송풍기 도면.pdf](/documents/source-store/1750e04d9c14bace9a73c5d8d7274c06d867e841f688cbf85c967c3d990de438.pdf) / 생산부공용 추가도면/버너 및 설비도면/세진30톤로 송풍기 도면.pdf / 60225bytes / SHA-256 1750e04d9c14bace9a73c5d8d7274c06d867e841f688cbf85c967c3d990de438
- [압연30톤로.dwg](/documents/source-store/2c5e01baa5cd59ba835c4b37b6e1d91942104f34eb4e7ad99d31d6d047e599fe.dwg) / 생산부공용 추가도면/버너 및 설비도면/압연30톤로.dwg / 376608bytes / SHA-256 2c5e01baa5cd59ba835c4b37b6e1d91942104f34eb4e7ad99d31d6d047e599fe
- [압연30톤로.pdf](/documents/source-store/77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba.pdf) / 생산부공용 추가도면/버너 및 설비도면/압연30톤로.pdf / 527180bytes / SHA-256 77304d53ec3656582f8be6bfa5eb3c0f9c9c2b156922ee068c28926d379f45ba
- [1.30 TON #1.pdf](/documents/source-store/93a88b462492dcea8a3ce03fdada550e9689b83ce4d758632b5868fe844991dd.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/1.30 TON #1.pdf / 56824bytes / SHA-256 93a88b462492dcea8a3ce03fdada550e9689b83ce4d758632b5868fe844991dd
- [3.30 TON #2 외 1실.pdf](/documents/source-store/1823078dcb9bc1576bb4d012be22c73c8de9fa279f3ac4dde5986027fb51613a.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/3.30 TON #2 외 1실.pdf / 57220bytes / SHA-256 1823078dcb9bc1576bb4d012be22c73c8de9fa279f3ac4dde5986027fb51613a
- [4.30 TON #3.pdf](/documents/source-store/6e4400a4c5b882bfe7b602fe9043ab2fb759b351dd7b44465207f14ed3a1ea06.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/4.30 TON #3.pdf / 56825bytes / SHA-256 6e4400a4c5b882bfe7b602fe9043ab2fb759b351dd7b44465207f14ed3a1ea06
- [압연30톤로.dwg](/documents/source-store/8a27967072c0cdb9d788333b69e7fbb62565966c424b2fdb43094eff98313d27.dwg) / 압연30톤 배관·버너 도면/1. 1차 도면/압연30톤로.dwg / 508601bytes / SHA-256 8a27967072c0cdb9d788333b69e7fbb62565966c424b2fdb43094eff98313d27
- [압연30톤로.dwg](/documents/source-store/428e404243dcebc83c03a50ab2bb278d47b145b52528cede3537f698d17de24f.dwg) / 압연30톤 배관·버너 도면/2. 2차 도면/압연30톤로.dwg / 508730bytes / SHA-256 428e404243dcebc83c03a50ab2bb278d47b145b52528cede3537f698d17de24f
- [6. 30톤 압연로.dwg](/documents/source-store/9aa557196f863fd3fa090336dbca1339e5b128127ee9c1efdc234da1a1b7696b.dwg) / 압연30톤 배관·버너 도면/LNG 배관/6. 30톤 압연로.dwg / 459905bytes / SHA-256 9aa557196f863fd3fa090336dbca1339e5b128127ee9c1efdc234da1a1b7696b
- [IBB-2000(압연30톤로).dwg](/documents/source-store/191bacf16c0fdb73af4bd422f14eb27172c1ad996b90a730957e956d06cf2a18.dwg) / 압연30톤 배관·버너 도면/기존 버너도면/IBB-2000(압연30톤로).dwg / 329472bytes / SHA-256 191bacf16c0fdb73af4bd422f14eb27172c1ad996b90a730957e956d06cf2a18
- [4. 압연30톤로.dwg](/documents/source-store/7c412549e0cc55f0620d0b620912ca12c156d696f83de7180a976825a5d64cea.dwg) / 압연30톤 배관·버너 도면/정제유 변경배관/4. 압연30톤로.dwg / 508738bytes / SHA-256 7c412549e0cc55f0620d0b620912ca12c156d696f83de7180a976825a5d64cea
- [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf) / 참고자료(적용확인필요)/30톤로 열교환기(ALF)/1. 30톤 용해로_열교환기(RECUPERATOR).pdf / 527953bytes / SHA-256 205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93
- [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf) / 참고자료(적용확인필요)/30톤로 열교환기(ALF)/2. 30톤 용해로_열교환기 Assey.pdf / 1179033bytes / SHA-256 144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd
- [30톤 용해로 열교환기 조립도.bak](/documents/source-store/1fcbbae4a8f09cd2c27295fd0855fee7e497dfe41db4700a2384b55f91970536.bak) / 참고자료(적용확인필요)/30톤로 열교환기(ALF)/30톤 용해로 열교환기 조립도.bak / 1461142bytes / SHA-256 1fcbbae4a8f09cd2c27295fd0855fee7e497dfe41db4700a2384b55f91970536
- [30톤 용해로 열교환기 조립도.dwg](/documents/source-store/7e4f81f1941142482f5334ce8ed0e6a1dc94b7be0b5fcc3c1785ee295b343aa4.dwg) / 참고자료(적용확인필요)/30톤로 열교환기(ALF)/30톤 용해로 열교환기 조립도.dwg / 755980bytes / SHA-256 7e4f81f1941142482f5334ce8ed0e6a1dc94b7be0b5fcc3c1785ee295b343aa4
- [열교환기(RECUPERATOR).dwg](/documents/source-store/8cd92c62853479d6c530add3b8e8ef5a43970ce56548768042124cccfbc52b29.dwg) / 참고자료(적용확인필요)/30톤로 열교환기(ALF)/열교환기(RECUPERATOR).dwg / 706799bytes / SHA-256 8cd92c62853479d6c530add3b8e8ef5a43970ce56548768042124cccfbc52b29
- [(주)세진메탈-60톤-30톤-40톤유지로-트래베1.5톤.pdf](/documents/source-store/cf73bc2f22e1e87c0478b5172016f31c20fdbbd412ea429f66c6b2541a23bd2f.pdf) / 참고자료(적용확인필요)/기존 30톤로 도면/(주)세진메탈-60톤-30톤-40톤유지로-트래베1.5톤.pdf / 2212543bytes / SHA-256 cf73bc2f22e1e87c0478b5172016f31c20fdbbd412ea429f66c6b2541a23bd2f
- [1. 30톤 용해로-Model.pdf](/documents/source-store/2caf2ad63cd17875e42e54344a3c77151e1430a4129932de2b6bfa8b92a1f0c7.pdf) / 참고자료(적용확인필요)/기존 30톤로 도면/1. 30톤 용해로-Model.pdf / 630523bytes / SHA-256 2caf2ad63cd17875e42e54344a3c77151e1430a4129932de2b6bfa8b92a1f0c7
- [1. 30톤 용해로.dwg](/documents/source-store/210370875db3b90ac73fb57ecda62558feb06a2380dd63e0c1d4bbdd86e4940a.dwg) / 참고자료(적용확인필요)/기존 30톤로 도면/1. 30톤 용해로.dwg / 3826467bytes / SHA-256 210370875db3b90ac73fb57ecda62558feb06a2380dd63e0c1d4bbdd86e4940a
- [ALF-30TON.dwg](/documents/source-store/5f3210ad75124a2ef36ecd3bbf61c8f573e2d6da72f0ff31fee13d2486671768.dwg) / 참고자료(적용확인필요)/기존 30톤로 도면/ALF-30TON.dwg / 1752350bytes / SHA-256 5f3210ad75124a2ef36ecd3bbf61c8f573e2d6da72f0ff31fee13d2486671768
- [세진메탈_30톤 용해로_연소용  BLOWER 90M550mmAq25HP0612.pdf](/documents/source-store/5ed8c88feb23e6bc5eef0e16fdfbb09fc867bfe767536faa2a4a8b925c8740c2.pdf) / 참고자료(적용확인필요)/송풍기 도면/세진메탈_30톤 용해로_연소용  BLOWER 90M550mmAq25HP0612.pdf / 484547bytes / SHA-256 5ed8c88feb23e6bc5eef0e16fdfbb09fc867bfe767536faa2a4a8b925c8740c2
- [30톤 장입대.pdf](/documents/source-store/d27c826336520e209887c5c337c124ebf66646b3107170cea5529372cd20f400.pdf) / 참고자료(적용확인필요)/장입대 도면/30톤 장입대.pdf / 60114bytes / SHA-256 d27c826336520e209887c5c337c124ebf66646b3107170cea5529372cd20f400
- [SPRAY GUN LAY-OUT(압연30톤.합금(1,2호기)).dwg](/documents/source-store/e8b2d846b98ae15732d1222cba1888b80204d64c46bf6dc6a292921ac33d0a00.dwg) / 합금·압연 공용도면/SPRAY GUN LAY-OUT(압연30톤.합금(1,2호기)).dwg / 91232bytes / SHA-256 e8b2d846b98ae15732d1222cba1888b80204d64c46bf6dc6a292921ac33d0a00
- [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf) / 합금·압연 공용도면/세진 30톤 PDF (합금,압연 공용).pdf / 1852693bytes / SHA-256 fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048
