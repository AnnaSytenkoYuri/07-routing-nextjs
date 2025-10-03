import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export default async function FilterNotesPage({ params }: PageProps) {
  const rawTag = (await params).slug?.[0]; 
  const tag = rawTag === "all" ? undefined : rawTag;
  const notes = await fetchNotes({tag})

  return (
    <div>
   <NotesClient notes={notes.notes} tag={rawTag ?? null}/>
    </div>
  );
}
