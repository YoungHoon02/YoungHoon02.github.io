import { FaGithub, FaGamepad, FaPen } from "react-icons/fa";
import { repos, games, homeDescriptions, messages, labels } from "../data.js";
import { notes } from "../notes.js";

const projects = games.flatMap((g) => g.projects.map((p) => ({ ...p, game: g.title })));

const blocks = [
  {
    href: "#/game",
    icon: FaGamepad,
    title: "Game",
    meta: labels.gameMeta(games.length, projects.length),
    count: projects.length,
    description: homeDescriptions.game,
  },
  {
    href: "#/github",
    icon: FaGithub,
    title: "GitHub",
    meta: labels.repoMeta(repos.length),
    count: repos.length,
    description: repos.length ? homeDescriptions.github : messages.reposEmpty,
  },
  {
    href: "#/notes",
    icon: FaPen,
    title: "Notes",
    meta: labels.noteMeta(notes.length),
    count: notes.length,
    description: notes.length ? homeDescriptions.notes : messages.notesEmpty,
  },
];

export function Destinations() {
  return (
    <div className="dest">
      {blocks.map(({ href, icon: Icon, title, meta, count, description }) => (
        <a key={title} href={href} className="plate hv cut-s" data-stagger>
          <span className="lab">
            <Icon aria-hidden />
            {meta}
          </span>
          <strong className="plate-title">{title}</strong>
          <span className="plate-count">{count}</span>
          <p>{description}</p>
        </a>
      ))}
    </div>
  );
}

// data.js에는 오래된 프로젝트부터 적으므로 최근 활동은 역순으로 보여 준다
export function Recent() {
  if (!projects.length) return null;
  return (
    <div className="recent">
      <span className="lab">{labels.recent}</span>
      <ul>
        {[...projects].reverse().map((p) => (
          <li key={p.url} data-stagger>
            <a href={p.url} target="_blank" rel="noreferrer" className="hv cut-s">
              <strong>{p.name}</strong>
              <span>{p.game}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
