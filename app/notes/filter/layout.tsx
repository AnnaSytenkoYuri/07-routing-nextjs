interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

export default function NotesLayout({ children, sidebar, modal }: Props) {
  return (
    <div>
      <aside>{sidebar}</aside>
      <div>{children}</div>
      {modal}
    </div>
  );
}
