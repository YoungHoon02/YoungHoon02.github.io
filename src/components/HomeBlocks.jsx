import { FaGithub, FaGamepad, FaPen, FaArrowRight } from "react-icons/fa";
import { repos, games, homeDescriptions, messages } from "../data.js";
import { notes } from "../notes.js";

const projectCount = games.reduce((n, g) => n + g.projects.length, 0);

const blocks = [
  {
    href: "#/game",
    icon: FaGamepad,
    title: "Game",
    meta: `게임 ${games.length}개, 프로젝트 ${projectCount}개`,
    description: homeDescriptions.game,
  },
  {
    href: "#/github",
    icon: FaGithub,
    title: "GitHub",
    meta: `저장소 ${repos.length}개`,
    description: repos.length ? homeDescriptions.github : messages.reposEmpty,
  },
  {
    href: "#/notes",
    icon: FaPen,
    title: "Notes",
    meta: `글 ${notes.length}개`,
    description: notes.length ? homeDescriptions.notes : messages.notesEmpty,
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
