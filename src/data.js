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

export const repos = [];

export const homeDescriptions = {
  game: "게임 모드와 플레이 도구",
  github: "개인 프로젝트와 오픈소스",
  notes: "개발 기록과 메모",
};

export const messages = {
  notesEmpty: "아직 작성한 글이 없습니다.",
  noteNotFound:
    "글을 찾을 수 없습니다. Notes 목록에서 다른 글을 확인해 주세요.",
  reposEmpty: "아직 등록한 저장소가 없습니다.",
  discordCopyHint: "클릭하여 복사",
  discordCopied: "Discord 아이디를 복사했습니다.",
  discordCopyFailed: "복사하지 못했습니다. 아래 아이디를 직접 복사해 주세요.",
};

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
        description: "턴별 전투 기록을 게임 화면에서 확인하는 모드",
        url: gh("astral-party-battle-log"),
        languages: ["C#"],
      },
      {
        name: "Anim Speed Tweak",
        description: "애니메이션 재생 속도를 개선하는 모드",
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
        description: "엑조틱 파밍을 자동화하는 매크로",
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
