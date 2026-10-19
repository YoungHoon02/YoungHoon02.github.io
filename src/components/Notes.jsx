import Section from "./Section.jsx";
import PageHeader from "./PageHeader.jsx";
import Empty from "./Empty.jsx";
import { notes } from "../notes.js";
import { messages, labels } from "../data.js";

export default function Notes({ param }) {
  if (param) {
    const note = notes.find((n) => n.slug === param);
    return (
      <Section id="notes">
        <a href="#/notes" className="back">← Notes</a>
        {note ? (
          <article data-stagger>
            <header className="note-header">
              <h1>{note.title}</h1>
              {note.date && <time className="muted" dateTime={note.date}>{note.date}</time>}
            </header>
            <div className="note-body" dangerouslySetInnerHTML={{ __html: note.html }} />
          </article>
        ) : (
          <Empty title={messages.noteNotFound} />
        )}
      </Section>
    );
  }

  return (
    <Section id="notes">
      <PageHeader title="Notes" countLabel={labels.noteCount} count={notes.length} />
      {notes.length === 0 && <Empty title={messages.notesEmpty} hint={messages.notesEmptyHint} />}
      <ul className="note-list">
        {notes.map((n) => (
          <li key={n.slug} data-stagger>
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
