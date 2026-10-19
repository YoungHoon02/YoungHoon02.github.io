export default function Empty({ title, hint }) {
  return (
    <div className="empty hatch cut" data-stagger>
      <div>
        <strong>{title}</strong>
        {hint && <p>{hint}</p>}
      </div>
    </div>
  )
}
