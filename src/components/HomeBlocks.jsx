import { FaGithub, FaGamepad, FaPen, FaArrowRight } from "react-icons/fa";
import { repos, games } from "../data.js";
import { notes } from "../notes.js";

const projectCount = games.reduce((n, g) => n + g.projects.length, 0);

const blocks = [
  {
    href: "#/github",
    icon: FaGithub,
    title: "GitHub",
    meta: `저장소 ${repos.length}개`,
    description: "개인 프로젝트와 오픈소스",
  },
  {
    href: "#/game",
    icon: FaGamepad,
    title: "Game",
    meta: `게임 ${games.length}개, 프로젝트 ${projectCount}개`,
    description: "게임 모드 개발 저장소 및 스팀 창작마당",
  },
  {
    href: "#/notes",
    icon: FaPen,
    title: "Notes",
    meta: `글 ${notes.length}개`,
    description: "잡동사니",
  },
];

export default function HomeBlocks() {
  return (
    <div className="tiles">
      {blocks.map(({ href, icon: Icon, title, meta, description }) => (
        <a key={title} href={href} className="tile">
          <span className="tile-meta">
            <Icon aria-hidden />
            {meta}
          </span>
          <strong className="tile-title">{title}</strong>
          <p>{description}</p>
          <FaArrowRight className="tile-arrow" aria-hidden />
        </a>
      ))}
    </div>
  );
}
