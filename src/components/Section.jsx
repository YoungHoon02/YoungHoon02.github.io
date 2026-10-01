export default function Section({ id, children }) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  )
}
