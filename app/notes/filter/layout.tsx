interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

export default function NotesLayout({ children, sidebar, modal }: Props) {
  return (
    <div>
      {modal}
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </div>
  );
}
