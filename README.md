# 전기도면

2026-10-21: **v1.3.1 · 15개 설비 GitHub·Netlify 공개 게시 완료**. [Netlify 작업실](https://sejin-electrical-drawings.netlify.app/all-in-one/) · [설비별 매뉴얼/자료실](https://sejin-electrical-drawings.netlify.app/documents/batch-index.html). 사용자의 공개 게시 요청을 반영했습니다. 접근정보 원본 2개 및 민감 화면은 로컬 보존하며 공개본에서 제외합니다. 합계 861개 출처 경로/730개 원본 해시에는 공개 제외 자료도 포함됩니다. 공개 범위는 [정책](publication-policy.json), 게시 검토 이력은 [게시 상태](PUBLICATION_STATUS.md)를 확인하세요. Netlify 게시 커밋은 `a7743d9`이며 후속 도구·기록 커밋과 구분합니다. 아래 2026-10-20 승인 대기 설명은 이전 기록입니다.

대용량 파일은 **Git LFS**입니다. 체크아웃 후 `node scripts/hydrate-lfs.mjs`를 실행하고 테스트/빌드하세요. Git LFS 기본 다운로드를 쓰려면 `git lfs pull --exclude=""`로 저장소의 자동 수신 제외 설정을 재정의할 수 있습니다. `.lfsconfig`는 초기 체크아웃에서 자동 수신을 건너뛰고, Netlify는 UI 환경변수 `GIT_LFS_SKIP_SMUDGE=1`을 사용합니다. `scripts/hydrate-lfs.mjs`가 빌드 전에 전체 LFS 파일을 병렬 수신하고 SHA-256을 검증합니다. 로컬 메모·수리기록은 브라우저에 저장되며 자동 공유되지 않습니다.

2026-10-20: **3~15번을 추가한 로컬 검토본 v1.3.0**입니다. [설비별 작성 목록](documents/batch-index.html) · [집계 JSON](documents/batch-summary.json). 원본759개·압축 내부102개를 861개 출처 경로로 보존했고 730개 고유 해시로 대조했습니다. Windows 캐시/로그7개는 기술자료 목록에서 제외했습니다. 기존1·2번 정의와 원본·개인 기록을 유지합니다. 각 설비의 7개 매뉴얼 항목·전기/PLC 확인 범위·점검/불일치·원본 자료실을 연결했습니다. 핵심 전기·제어·운전 자료 중심 검토이며 대량 제조사 카탈로그의 모든 페이지 상세 판독·전체 PLC 의미 해석·현장 시험을 완료한 것은 아닙니다. 공개 상태는 아래와 별도로 [게시 상태](PUBLICATION_STATUS.md)를 따릅니다.

2026-10-20: **2번 적산기 로컬 검토본 v1.2.0**을 추가했습니다. [작성 매뉴얼](documents/totalizer-02/manual.html) · [사용 설명서 열람본](documents/totalizer-02/user-manual-reader.html) · [시운전 요령 열람본](documents/totalizer-02/commissioning-reader.html). 원본 3개(PDF 20쪽·HWP 2개), 주소/단자 참조 196행, 설명 그림 12개, 점검 12항목과 확인 대장 15항목을 정리했습니다. PDF는 PLC 프로그램이 아닌 I/O·결선·단자 자료입니다. P주소와 X주소, 업체/시점·상충 표기를 분리했고 기존 SALT-01 정의·원본은 유지했습니다. HWP는 본문·그림 추출본으로 원본 페이지 배치를 재현하지 않았습니다. 공개 게시 상태는 [PUBLICATION_STATUS.md](PUBLICATION_STATUS.md)를 참조하세요.

2026-10-20: **1번 솔트 투입기 로컬 검토본 v1.1.0**을 준비했습니다. [작성 매뉴얼](documents/salt-feeder-01/manual.html) · [작성 원문](documents/salt-feeder-01/manual.md) · [게시 상태](PUBLICATION_STATUS.md). 원본9개·12페이지, 접점/단자참조23행·조작부19행·점검11항목을 정리했습니다. 원창 도면의 대외비 표시가 있어 공개 GitHub/Netlify 게시 승인은 대기 중입니다. 아래 빈 프로젝트 설명은 최초 v1.0.0 기준입니다.

GME 작업실의 화면·설비 탭·기록 도구를 바탕으로 만든 독립 빈 프로젝트입니다. 초기 설비, PLC, 도면, 검토항목, 수리 기록은 모두 0건입니다.

- GitHub: https://github.com/esp6662266/electrical-drawings
- 작업실: `/all-in-one/` (루트에서도 자동 이동)
- 출처: [GME](https://github.com/esp6662266/gme-plc-manual) `dec94651a1ac5c535a5d94fed9a326e988318414`

## 시작하기

사이트의 **설비 등록·프로젝트 백업**에서 ID와 설비명을 등록합니다. 등록한 설비를 선택하면 같은 화면에서 매뉴얼·진단·수리·수리 기록·I/O·HMI·제어 명세·래더·호출·신호 구조·도면·시험·확인 대장을 정리할 수 있습니다. **선택 설비의 자료 편집**에서 JSON 양식에 내용을 입력합니다. [입력 항목](templates/README.md)을 참고하세요.

설비·기록은 현재 브라우저/호스트의 로컬 저장입니다. **프로젝트 전체 JSON**에는 설비 정의와 기록이 함께 포함됩니다. 기존 **모든 설비 통합 백업·복원**은 메모·수리 기록만 포함하므로 다른 기기에서는 먼저 해당 설비 정의를 등록해야 합니다. 참조 PDF·이미지 파일 자체와 작성 중인 초안은 JSON 백업에 포함하지 않습니다. 파일 원본은 별도로 보관하세요.

공유 게시 자료는 `data/project.js`에서 관리합니다. 사이트에서 **공유용 project.js 다운로드** 후 이 파일을 교체하고 GitHub에 커밋하면 Netlify에서 재배포합니다. 이 파일에는 설비·자료 정의만 포함하며 개인 메모·수리 기록을 포함하지 않습니다. 도면 등은 프로젝트 내 자료 폴더에 넣고 참조 경로를 등록합니다. 공개 저장소에 올리기 전 공개 가능한 자료인지 확인하세요.

## 복사 범위

GME의 원본 HTML 구조와 CSS, 설비 탭 구성을 유지했습니다. 메모 검증, 충돌 처리, 수리 기록 보조 도구, 통합 백업·복원 코드를 복사해 독립 프로젝트 이름으로 분리했습니다. GME에 고정된 설비별 렌더러는 범용 빈 양식 렌더러로 교체했습니다. 원본 화면/렌더러 참조본은 `reference/`에 있으며 게시 대상에서 제외합니다.

GME의 원본 도면·PLC·설비 데이터·과거 게시/검증 기록·시뮬레이터·인증 세션·자료실 데이터는 포함하지 않습니다. 기존 GitHub 저장소와 Netlify 프로젝트는 변경하지 않았습니다. 로그인 자료실 서버는 빈 프로젝트에 활성화하지 않았으며 이 버전은 브라우저 저장형 작업실입니다. 실제 PLC 통신·운전·설정 변경·시뮬레이터 실행 기능은 없습니다.

## 개발·배포

Node.js 22 이상. 추가 패키지 설치 없이 `node --test tests/*.test.mjs`, `node scripts/build.mjs`, `node scripts/serve.mjs`를 실행합니다. 미리보기는 http://127.0.0.1:8786 입니다. Netlify에서 이 저장소의 `main`을 연결하고 `netlify.toml`을 사용합니다. 빌드마다 테스트 후 `dist`만 게시합니다. `reference/`·테스트·이전 GME 원본은 게시하지 않습니다.
