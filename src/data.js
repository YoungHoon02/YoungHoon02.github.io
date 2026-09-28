export const GITHUB_USER = "YoungHoon02";

const STEAM_ID = "76561198130461833";

export const profile = {
  name: "Pills",
  role: "Undergraduate Student",
  intro: "게임을 사랑하는 개발자입니다. AI를 통하여 개발하는 것을 즐깁니다.",
  email: "sivert2729@gmail.com",
  discord: "Sivert2729",
  steam: `https://steamcommunity.com/profiles/${STEAM_ID}/`,
};

export const repos = [
  // { name: 'repo-name', description: '설명', url: 'https://github.com/...', languages: ['C#'] },
];

const gh = (name) => `https://github.com/${GITHUB_USER}/${name}`;
const workshop = (id) =>
  `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`;

export const games = [
  {
    title: "Astral Party",
    appId: 2622000,
    projects: [
      {
        name: "Battle Log",
        description:
          "전투를 턴별 텍스트 로그로 남기는 BepInEx 플러그인 (인게임 오버레이 포함)",
        url: gh("astral-party-battle-log"),
        languages: ["C#"],
      },
      {
        name: "Anim Speed Tweak",
        description: "BepInEx·Harmony 기반 애니메이션 재생 개선 모드",
        url: gh("astral-party-speedup-release"),
        languages: ["C#"],
      },
    ],
  },
  {
    title: "Tom Clancy's The Division 2",
    appId: 2221490,
    projects: [
      {
        name: "Exotic Macro",
        description: "픽셀 색상 인식 기반 엑조틱 파밍 자동화 매크로",
        url: gh("TheDivision2-Exotic-Macro"),
        languages: ["Python"],
      },
    ],
  },
  {
    title: "Hearts of Iron IV",
    appId: 394360,
    projects: [
      {
        name: "Metro Genesis KR Localisation",
        description: "Metro Genesis 모드 한국어 번역",
        url: workshop(3652122716),
        languages: ["Steam Workshop"],
      },
      {
        name: "Modifier Icons",
        description: "모디파이어 아이콘 추가 모드",
        url: workshop(3798144245),
        languages: ["Steam Workshop"],
      },
    ],
  },
];
