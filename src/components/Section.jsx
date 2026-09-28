import { goHome } from '../useHashRoute.js'

export default function Section({ id, back = false, children }) {
  return (
    <section id={id} className="section">
      {back && <a href="/" onClick={goHome} className="back">← Home</a>}
      {children}
    </section>
  )
}
