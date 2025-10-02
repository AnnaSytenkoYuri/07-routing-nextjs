import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  const page = 1;
  const search = "";
  const perPage = 12;

  await queryClient.prefetchQuery({
    queryKey: ["notes", page, perPage, search],
    queryFn: () => fetchNotes(page, perPage, search),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient noteClientPage={page} noteClientSearch={search} />
    </HydrationBoundary>
  );
}
