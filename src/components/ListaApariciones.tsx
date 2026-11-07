interface Props {
  titulo: string;
  items: string[];
}

export function ListaApariciones({ titulo, items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="mt-5">
      <h2 className="font-titulo text-xl text-pink-700">{titulo} ({items.length})</h2>
      <ul className="mt-2 flex max-h-44 flex-wrap gap-2 overflow-y-auto">
        {items.map((item) => (
          <li key={item} className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-900">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
