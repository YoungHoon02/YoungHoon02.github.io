import Section from './Section.jsx'
import PageHeader from './PageHeader.jsx'
import LangTag from './LangTag.jsx'
import { games, labels } from '../data.js'

const headerImage = (appId) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
const storeUrl = (appId) => `https://store.steampowered.com/app/${appId}/`

const thumbs = Object.fromEntries(
  Object.entries(
    import.meta.glob('/img/*.{webp,png,jpg,jpeg,gif}', { query: '?url', import: 'default', eager: true })
  ).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url])
)

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
const projectCount = games.reduce((n, g) => n + g.projects.length, 0)

export default function Games() {
  return (
    <Section id="game">
      <PageHeader title="Game" countLabel={labels.gameCount} count={`${games.length} / ${projectCount}`} />
      <div className="games">
        {games.map((g) => (
          <article key={g.appId} className="game cut" data-stagger>
            <a href={storeUrl(g.appId)} target="_blank" rel="noreferrer">
              <img className="game-header" src={headerImage(g.appId)} alt={g.title} loading="lazy" />
            </a>
            <div className="game-body">
              <h3 className="display">
                {g.title}
                <a href={storeUrl(g.appId)} target="_blank" rel="noreferrer">{labels.steamStore}</a>
              </h3>
              <ul className="projects">
                {g.projects.map((p) => {
                  const thumb = thumbs[slug(p.name)]
                  return (
                    <li key={p.url}>
                      <a href={p.url} target="_blank" rel="noreferrer" className="project">
                        {thumb && <img className="project-thumb" src={thumb} alt="" loading="lazy" />}
                        <strong>{p.name}</strong>
                        <div className="tags">
                          {p.languages.map((l) => <LangTag key={l} name={l} />)}
                        </div>
                        <p>{p.description}</p>
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
