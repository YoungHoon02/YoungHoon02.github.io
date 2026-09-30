import Section from "./Section.jsx";
import { notes } from "../notes.js";
import { messages } from "../data.js";

export default function Notes({ param }) {
  if (param) {
    const note = notes.find((n) => n.slug === param);
    return (
      <Section id="notes">
        <a href="#/notes" className="back">← Notes</a>
        {note ? (
          <article>
            <header className="note-header">
              <h1>{note.title}</h1>
              {note.date && <time className="muted" dateTime={note.date}>{note.date}</time>}
            </header>
            <div className="note-body" dangerouslySetInnerHTML={{ __html: note.html }} />
          </article>
        ) : (
          <p className="muted">{messages.noteNotFound}</p>
        )}
      </Section>
    );
  }

  return (
    <Section id="notes" back>
      {notes.length === 0 && <p className="muted">{messages.notesEmpty}</p>}
      <ul className="note-list">
        {notes.map((n) => (
          <li key={n.slug}>
            <a href={`#/notes/${n.slug}`} className="panel note-row">
              <strong>{n.title}</strong>
              {n.date && <time className="muted" dateTime={n.date}>{n.date}</time>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
