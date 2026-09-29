import Section from './Section.jsx'
import LangTag from './LangTag.jsx'
import { games } from '../data.js'

const headerImage = (appId) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`

const thumbs = Object.fromEntries(
  Object.entries(
    import.meta.glob('/img/*.{webp,png,jpg,jpeg,gif}', { query: '?url', import: 'default', eager: true })
  ).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url])
)

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export default function Games() {
  return (
    <Section id="game" back>
      <div className="games">
        {games.map((g) => (
          <article key={g.appId} className="game">
            <img className="game-header" src={headerImage(g.appId)} alt={g.title} loading="lazy" />
            <div className="game-body">
              <h3>{g.title}</h3>
              <ul className="projects">
                {g.projects.map((p) => {
                  const thumb = thumbs[slug(p.name)]
                  return (
                    <li key={p.url}>
                      <a href={p.url} target="_blank" rel="noreferrer" className="project">
                        {thumb && <img className="project-thumb" src={thumb} alt="" loading="lazy" />}
                        <strong>{p.name}</strong>
                        <p>{p.description}</p>
                        <div className="tags">
                          {p.languages.map((l) => <LangTag key={l} name={l} />)}
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
