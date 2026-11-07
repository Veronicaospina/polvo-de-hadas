import { Link, useParams } from 'react-router';
import { BotonFavorito } from '../components/BotonFavorito';
import { Cargando } from '../components/Cargando';
import { FotoPersonaje } from '../components/FotoPersonaje';
import { ListaApariciones } from '../components/ListaApariciones';
import { MensajeError } from '../components/MensajeError';
import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../lib/api';
import type { RespuestaApi } from '../types/personaje';

export function Detalle() {
  const { id } = useParams();
  const { datos, cargando, error, reintentar } = useFetch<RespuestaApi>(`${API_URL}/character/${id}`);

  if (cargando) return <Cargando />;
  if (error || !datos) {
    return <MensajeError mensaje="No pudimos cargar este personaje." onReintentar={reintentar} />;
  }
  if (Array.isArray(datos.data)) {
    return <MensajeError mensaje="No encontramos este personaje." />;
  }

  const personaje = datos.data;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link to="/explorar" className="font-bold text-pink-700 underline">
        ← Volver a explorar
      </Link>

      <article className="mt-4 flex flex-col overflow-hidden rounded-3xl border-4 border-pink-200 bg-white shadow-[8px_8px_0_var(--color-pink-300)] md:flex-row">
        <FotoPersonaje personaje={personaje} className="aspect-square w-full md:w-2/5 md:self-start" />
        <div className="flex-1 p-6 md:p-8">
          <h1 className="font-titulo text-4xl text-pink-700">{personaje.name}</h1>
          <div className="mt-4">
            <BotonFavorito personaje={personaje} conTexto />
          </div>
          <ListaApariciones titulo="Películas" items={personaje.films} />
          <ListaApariciones titulo="Cortos" items={personaje.shortFilms} />
          <ListaApariciones titulo="Series" items={personaje.tvShows} />
          <ListaApariciones titulo="Videojuegos" items={personaje.videoGames} />
          <ListaApariciones titulo="Atracciones" items={personaje.parkAttractions} />
        </div>
      </article>
    </div>
  );
}
