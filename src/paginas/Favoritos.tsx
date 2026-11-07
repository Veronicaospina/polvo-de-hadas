import { Link } from 'react-router';
import { CuadriculaPersonajes } from '../components/CuadriculaPersonajes';
import { EstadoVacio } from '../components/EstadoVacio';
import { useFavoritos } from '../store/favoritos';

export function Favoritos() {
  const favoritos = useFavoritos((s) => s.favoritos);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-titulo text-4xl text-pink-700">Mis favoritos</h1>

      {favoritos.length === 0 ? (
        <EstadoVacio
          icono="🤍"
          titulo="No tienes favoritos guardados"
          mensaje="Toca el corazón de un personaje para guardarlo aquí."
        >
          <Link
            to="/explorar"
            className="inline-flex min-h-11 items-center rounded-full bg-pink-600 px-6 font-bold text-white hover:bg-pink-700"
          >
            Explorar personajes
          </Link>
        </EstadoVacio>
      ) : (
        <>
          <h2 className="mt-1 mb-6 font-semibold">
            {favoritos.length} {favoritos.length === 1 ? 'personaje guardado' : 'personajes guardados'}
          </h2>
          <CuadriculaPersonajes personajes={favoritos} />
        </>
      )}
    </div>
  );
}
