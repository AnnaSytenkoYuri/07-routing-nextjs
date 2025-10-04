interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <div>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </div>
  );
}
