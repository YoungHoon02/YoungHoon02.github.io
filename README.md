# YoungHoon02.github.io

React + Vite 기반 포트폴리오 사이트입니다.

## 개발

```bash
npm install
npm run dev
```

## 콘텐츠 수정

- 프로필, GitHub 저장소, 게임 정보는 모두 `src/data.js`에서 수정합니다.
- 디자인·태그 규칙 등 양식 가이드는 [CLAUDE.md](CLAUDE.md)를 참고하세요.

## 배포

`main` 브랜치에 push하면 GitHub Actions가 빌드 후 GitHub Pages에 배포합니다.
최초 1회 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다.
