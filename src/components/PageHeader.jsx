import { goHome } from '../useHashRoute.js'

export default function PageHeader({ title, countLabel, count }) {
  return (
    <>
      <a href="/" onClick={goHome} className="back">← Home</a>
      <header className="page-header" data-stagger>
        <h1 className="display">{title}</h1>
        <div className="count">
          <span className="lab">{countLabel}</span>
          <b>{count}</b>
        </div>
      </header>
    </>
  )
}
