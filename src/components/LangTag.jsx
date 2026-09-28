const colors = {
  'C#': '#178600',
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'C++': '#f34b7d',
  Java: '#b07219',
  Lua: '#6b6bff',
  HTML: '#e34c26',
  CSS: '#663399',
  'Steam Workshop': '#66c0f4',
}

export default function LangTag({ name }) {
  const color = colors[name] ?? '#9a9ca3'
  return (
    <span className="lang-tag" style={{ '--c': color }}>
      {name}
    </span>
  )
}
