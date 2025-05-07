interface Props {
  children: React.ReactNode;
}

export default function AppendixLayout({ children }: Props) {
  return (
    <div className="px-3 py-2">
      <nav className="mb-3">
        <h1 className="text-2xl font-bold">별지</h1>
      </nav>
      {children}
    </div>
  );
}
