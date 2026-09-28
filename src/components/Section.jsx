export default function Section({ id, back = false, children }) {
  return (
    <section id={id} className="section">
      {back && <a href="#/" className="back">← Home</a>}
      {children}
    </section>
  )
}
