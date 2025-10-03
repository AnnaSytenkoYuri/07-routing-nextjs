import { Note } from "@/types/note"

interface NotesProps {
  tag: string | null;
  notes: Note[];
}

export default function NotesClient({ tag, notes }: NotesProps) {

  return (
    <div>
      <h1>{tag ? `Notes tagged "${tag}"` : "All Notes"}</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
