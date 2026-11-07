interface Props {
  pagina: number;
  total: number;
  onCambiar: (pagina: number) => void;
}

const claseBoton =
  'min-h-11 cursor-pointer rounded-full bg-pink-600 px-5 font-bold text-white hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-40';

export function Paginacion({ pagina, total, onCambiar }: Props) {
  return (
    <nav aria-label="Paginación" className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <button onClick={() => onCambiar(pagina - 1)} disabled={pagina === 1} className={claseBoton}>
        Anterior
      </button>
      <span aria-current="page" className="font-bold">Página {pagina} de {total}</span>
      <button onClick={() => onCambiar(pagina + 1)} disabled={pagina === total} className={claseBoton}>
        Siguiente
      </button>
    </nav>
  );
}
