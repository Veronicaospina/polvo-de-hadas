import { API_URL } from '../lib/api';
import { useFetch } from '../hooks/useFetch';
import { Cargando } from './Cargando';
import { CuadriculaPersonajes } from './CuadriculaPersonajes';
import { EstadoVacio } from './EstadoVacio';
import { MensajeError } from './MensajeError';
import { Paginacion } from './Paginacion';
import type { RespuestaApi } from '../types/personaje';

interface Props {
  nombre: string;
  mundo: string;
  pagina: number;
  onPagina: (pagina: number) => void;
  onQuitarFiltros: () => void;
}

export function Resultados({ nombre, mundo, pagina, onPagina, onQuitarFiltros }: Props) {
  const url = `${API_URL}/character?page=${pagina}&pageSize=24&name=${encodeURIComponent(nombre)}&${mundo}`;
  const { datos, cargando, error, reintentar } = useFetch<RespuestaApi>(url);

  if (cargando) return <Cargando />;
  if (error || !datos) {
    return <MensajeError mensaje="No pudimos cargar los personajes." onReintentar={reintentar} />;
  }

  const personajes = Array.isArray(datos.data) ? datos.data : [datos.data];

  if (personajes.length === 0) {
    return (
      <EstadoVacio
        icono="🔍"
        titulo={`Sin resultados para "${nombre}"`}
        mensaje="Revisa cómo está escrito el nombre o busca en otro mundo."
      >
        <button
          onClick={onQuitarFiltros}
          className="min-h-11 cursor-pointer rounded-full bg-pink-600 px-6 font-bold text-white hover:bg-pink-700"
        >
          {mundo ? 'Buscar en todos los mundos' : 'Borrar la búsqueda'}
        </button>
      </EstadoVacio>
    );
  }

  return (
    <section aria-labelledby="titulo-resultados">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="titulo-resultados" className="font-titulo text-3xl text-pink-700">Resultados</h2>
        <p className="font-semibold">
          Mostrando {personajes.length} {personajes.length === 1 ? 'personaje' : 'personajes'}
        </p>
      </div>
      <CuadriculaPersonajes personajes={personajes} />
      {datos.info.totalPages > 1 && (
        <Paginacion pagina={pagina} total={datos.info.totalPages} onCambiar={onPagina} />
      )}
    </section>
  );
}
