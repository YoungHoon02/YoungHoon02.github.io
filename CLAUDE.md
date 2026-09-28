# 사이트 수정 지침

YoungHoon02.github.io 포트폴리오를 수정할 때 현재 양식을 유지하기 위한 규칙입니다.

## 구조

- React 19 + Vite, 라우터 라이브러리 없이 해시 라우팅(`src/useHashRoute.js`) 사용
  - `#/` 홈, `#/github`, `#/game` — GitHub Pages 새로고침 404를 피하기 위해 해시 방식 유지
  - 새 하위 페이지 추가 시 `App.jsx`의 `pages`, `Nav.jsx`의 `links`, 필요하면 `HomeBlocks.jsx`의 `blocks`에 함께 등록
- 콘텐츠는 모두 `src/data.js`에서 관리. 컴포넌트에 텍스트/링크를 하드코딩하지 않음
- 배포: `main` push → `.github/workflows/deploy.yml`이 빌드 후 Pages 배포

## 페이지 구성

- **홈**: 상단 프로필 카드(섹션 제목 없음) + 하단 좌우 2개 블럭(GitHub, Game)
  - 블럭: 아이콘 → 제목 → 한 줄 설명 → 오른쪽 아래 화살표 아이콘만 (텍스트 링크 X)
  - 프로필 연락처는 텍스트 없이 아이콘 버튼(`react-icons/fa`) + 호버 툴팁(`data-tip`)
  - Discord는 링크 대신 클릭 시 아이디 복사
- **하위 페이지**: 상단 `← Home` 링크만, `# 제목` 형태의 섹션 헤더는 쓰지 않음
- **GitHub**: API 자동 수집 금지. `data.js`의 `repos`에 직접 등록한 저장소만 노출
- **Game**: 게임별 카드 = Steam 헤더 이미지(클릭 시 상점) + 제목 + 프로젝트 목록
  - 헤더 이미지: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/{appId}/header.jpg`
  - 이미지는 저장소에 넣지 않고 Steam CDN에서 직접 로드

## 태그 규칙

- 태그는 **사용 언어**(C#, Python 등)만 붙임. 장르·분류용 태그는 쓰지 않음
- 예외: Steam 워크샵에 올린 모드는 `Steam Workshop` 태그 하나만
- 위치: 항목 순서는 이름 → 설명 → 태그. 태그는 항목 왼쪽 아래
- 태그는 `LangTag` 컴포넌트로 렌더링. 새 언어는 `LangTag.jsx`의 `colors`에 GitHub linguist 색상으로 추가

## 디자인

- 컨셉: 게임 UI 패널(Steam 라이브러리 참고). "둥근 카드 + 그림자 + 호버 시 떠오름" 같은 SaaS 카드 스타일은 쓰지 않음
- 다크 그레이 톤. 색상은 `src/index.css`의 `:root` 변수(`--bg`, `--panel`, `--panel-hover`, `--line`, `--text`, `--muted`, `--accent`)만 사용
- 포인트 색은 흰색에 가까운 연분홍(`--accent: #f6d6de`) 하나. 호버·현재 메뉴·포커스 표시에만 사용
- 패널: 불투명 배경 + 1px 테두리 + 4px 모서리(`--radius`), 그림자·그라데이션·이동 애니메이션 없음
- 호버: 배경 한 단계 밝게 + 왼쪽 테두리를 `--accent`로 (홈 타일, 저장소, 프로젝트 행 공통)
- 홈 타일: 상단 작은 아이콘+개수(`data.js`에서 자동 계산), 하단 큰 제목, 오른쪽 아래 화살표
- 프로필은 박스 없이 배경 위에 두고 아래 구분선만
- Game: 게임별 세로 패널 그리드(이미지 위, 프로젝트 아래). 프로젝트 수가 늘어도 빈 공간이 생기지 않도록 가로 행 레이아웃은 쓰지 않음. 헤더 이미지는 원본 비율 유지, 프로젝트는 개별 박스 없이 구분선으로 나눔
- 폰트
  - 본문: Pretendard
  - 헤더 로고(Crafting Pills), 프로필 역할 줄: IBM Plex Sans KR
  - 모노스페이스(코딩) 폰트는 쓰지 않음 — "AI가 만든 느낌"이 난다는 피드백
- 헤더 로고 텍스트는 `Crafting Pills`
- 모바일(600px 이하): 프로필 세로 정렬, 홈 블럭 1열

## 코드 스타일

- 주석은 꼭 필요한 경우만. 설명은 이 문서에 추가
- 사용자에게 보이는 문구는 한국어
