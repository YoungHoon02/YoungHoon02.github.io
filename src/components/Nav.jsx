import { goHome } from '../useHashRoute.js'

const links = [
  ['', 'Home'],
  ['github', 'GitHub'],
  ['game', 'Game'],
]

export default function Nav({ route }) {
  return (
    <nav className="nav">
      <a href="/" onClick={goHome} className="nav-logo">Crafting Pills</a>
      <ul>
        {links.map(([id, label]) => (
          <li key={label}>
            <a
              href={id ? `#/${id}` : '/'}
              onClick={id ? undefined : goHome}
              className={route === id ? 'active' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
