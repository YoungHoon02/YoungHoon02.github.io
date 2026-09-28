import Section from "./Section.jsx";
import LangTag from "./LangTag.jsx";
import { repos } from "../data.js";

export default function Github() {
  return (
    <Section id="github" back>
      {repos.length === 0 && <p className="muted">Nothing Uploaded Yet.</p>}
      <div className="repos">
        {repos.map((repo) => (
          <a
            key={repo.url}
            className="panel repo"
            href={repo.url}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="tags">
              {repo.languages?.map((l) => (
                <LangTag key={l} name={l} />
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
