import { Link, NavLink } from 'react-router';
import { useFavoritos } from '../store/favoritos';

function claseEnlace({ isActive }: { isActive: boolean }) {
  return `inline-flex min-h-11 items-center rounded-full px-3 font-bold transition sm:px-4 ${
    isActive ? 'bg-pink-600 text-white' : 'text-fuchsia-900 hover:bg-pink-100'
  }`;
}

export function Navbar() {
  const cantidad = useFavoritos((s) => s.favoritos.length);

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-2 border-b-4 border-pink-300 bg-white px-4 py-2 sm:px-8">
      <Link to="/" className="font-titulo text-2xl text-pink-600">
        🎀 Polvo de Hadas
      </Link>
      <nav aria-label="Navegación principal" className="flex flex-wrap gap-1 text-sm sm:gap-2 sm:text-base">
        <NavLink to="/" end className={claseEnlace}>Inicio</NavLink>
        <NavLink to="/explorar" className={claseEnlace}>Explorar</NavLink>
        <NavLink to="/favoritos" className={claseEnlace}>
          Favoritos {cantidad > 0 && `(${cantidad})`}
        </NavLink>
        <NavLink to="/contacto" className={claseEnlace}>Contacto</NavLink>
      </nav>
    </header>
  );
}
