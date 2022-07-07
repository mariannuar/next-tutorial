import React from 'react';
import Link from 'next/link';

export default function Notes() {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Nota: ${i}`}));

  return (
    <div>
      <h1>Notas</h1>

      {notes.map(note => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
