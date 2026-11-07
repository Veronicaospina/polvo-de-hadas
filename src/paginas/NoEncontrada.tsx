import { Link } from 'react-router';

export function NoEncontrada() {
  return (
    <div className="px-4 py-24 text-center">
      <p className="font-titulo text-8xl text-pink-600 text-shadow-[4px_4px_0_white] md:text-9xl">404</p>
      <h1 className="mt-4 font-titulo text-3xl text-pink-700">Página no encontrada</h1>
      <p className="mt-2 font-semibold">Esta página voló con el polvo de hadas: la dirección no existe.</p>
      <Link
        to="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-pink-600 px-6 font-bold text-white hover:bg-pink-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
