import { TarjetaPersonaje } from './TarjetaPersonaje';
import type { Personaje } from '../types/personaje';

interface Props {
  personajes: Personaje[];
}

export function CuadriculaPersonajes({ personajes }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {personajes.map((p) => (
        <li key={p._id}>
          <TarjetaPersonaje personaje={p} />
        </li>
      ))}
    </ul>
  );
}
