import { Link } from 'react-router';
import { BotonFavorito } from './BotonFavorito';
import { FotoPersonaje } from './FotoPersonaje';
import type { Personaje } from '../types/personaje';

interface Props {
  personaje: Personaje;
}

export function TarjetaPersonaje({ personaje }: Props) {
  const aparicion =
    personaje.films[0] ??
    personaje.tvShows[0] ??
    personaje.shortFilms[0] ??
    personaje.videoGames[0] ??
    personaje.parkAttractions[0];

  return (
    <article className="relative h-full overflow-hidden rounded-3xl border-4 border-pink-200 bg-white shadow-[6px_6px_0_var(--color-pink-300)] transition hover:border-pink-400 motion-safe:hover:-rotate-1">
      <Link to={`/explorar/${personaje._id}`} className="block">
        <FotoPersonaje personaje={personaje} className="aspect-square w-full" />
        <div className="p-3 sm:p-4">
          <h3 className="font-titulo text-lg text-pink-700 sm:text-xl">{personaje.name}</h3>
          <p className="mt-1 text-sm">Películas: <strong>{personaje.films.length}</strong></p>
          <p className="text-sm">Series: <strong>{personaje.tvShows.length}</strong></p>
          {aparicion && (
            <p className="mt-2 w-fit max-w-full truncate rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-900">
              {aparicion}
            </p>
          )}
        </div>
      </Link>
      <div className="absolute top-3 right-3">
        <BotonFavorito personaje={personaje} />
      </div>
    </article>
  );
}
