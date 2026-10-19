import Section from "./Section.jsx";
import PageHeader from "./PageHeader.jsx";
import Empty from "./Empty.jsx";
import LangTag from "./LangTag.jsx";
import { repos, messages, labels } from "../data.js";

export default function Github() {
  return (
    <Section id="github">
      <PageHeader title="GitHub" countLabel={labels.repoCount} count={repos.length} />
      {repos.length === 0 && <Empty title={messages.reposEmpty} hint={messages.reposEmptyHint} />}
      <div className="repos">
        {repos.map((repo) => (
          <a
            key={repo.url}
            className="panel repo"
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            data-stagger
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
