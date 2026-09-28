import Section from './Section.jsx'
import LangTag from './LangTag.jsx'
import { games } from '../data.js'

const headerImage = (appId) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`

export default function Games() {
  return (
    <Section id="game" back>
      <div className="games">
        {games.map((g) => (
          <article key={g.appId} className="game">
            <a href={`https://store.steampowered.com/app/${g.appId}/`} target="_blank" rel="noreferrer">
              <img className="game-header" src={headerImage(g.appId)} alt={g.title} loading="lazy" />
            </a>
            <div className="game-body">
              <h3>{g.title}</h3>
              <ul className="projects">
                {g.projects.map((p) => (
                  <li key={p.url}>
                    <a href={p.url} target="_blank" rel="noreferrer" className="project">
                      <strong>{p.name}</strong>
                      <p>{p.description}</p>
                      <div className="tags">
                        {p.languages.map((l) => <LangTag key={l} name={l} />)}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
