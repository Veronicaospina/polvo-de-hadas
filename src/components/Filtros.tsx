import { MUNDOS } from '../lib/api';

interface Props {
  busqueda: string;
  mundo: string;
  onBusqueda: (valor: string) => void;
  onMundo: (valor: string) => void;
}

const claseCampo = 'min-h-11 w-full rounded-full border-2 border-pink-400 bg-white px-5 font-semibold';

export function Filtros({ busqueda, mundo, onBusqueda, onMundo }: Props) {
  return (
    <div role="search" className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 text-left sm:flex-row">
      <div className="flex-1">
        <label htmlFor="busqueda" className="mb-1 block font-bold">Buscar por nombre</label>
        <input
          id="busqueda"
          type="search"
          placeholder="Ariel, Elsa, Miley..."
          value={busqueda}
          onChange={(e) => onBusqueda(e.target.value)}
          className={claseCampo}
        />
      </div>
      <div className="sm:w-64">
        <label htmlFor="mundo" className="mb-1 block font-bold">Mundo</label>
        <select
          id="mundo"
          value={mundo}
          onChange={(e) => onMundo(e.target.value)}
          className={claseCampo}
        >
          {MUNDOS.map((m) => (
            <option key={m.nombre} value={m.filtro}>{m.nombre}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
