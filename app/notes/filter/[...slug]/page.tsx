import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NotesPage({ params }: PageProps) {
  const rawTag = (await params).slug?.[0] ?? "All";
  const tag = rawTag === "All" ? undefined : rawTag;

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
      <NotesClient
        noteClientTag={tag}
      />
    </HydrationBoundary>
  );
}
