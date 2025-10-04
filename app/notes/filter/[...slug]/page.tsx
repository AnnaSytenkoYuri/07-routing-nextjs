// import { fetchNotes } from "@/lib/api";
// import NotesClient from "./Notes.client";



// export default async function FilterNotesPage({ params }: PageProps) {
 
//   const notes = await fetchNotes({tag})

//   return (
//     <div>
//    <NotesClient notes={notes.notes} tag={rawTag ?? null}/>
//     </div>
//   );
// }

import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export default async function NotesPage({params}: PageProps) {
  const rawTag = (await params).slug?.[0] ?? "all";
  const tag = rawTag === "all" ? undefined : rawTag;

  const queryClient = new QueryClient();

  const page = 1;
  const search = "";
  const perPage = 12;

  await queryClient.prefetchQuery({
    queryKey: ["notes", page, perPage, search, tag],
    queryFn: () => fetchNotes(page, perPage, search, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient noteClientPage={page} noteClientSearch={search} noteClientTag={tag}/>
    </HydrationBoundary>
  );
}
