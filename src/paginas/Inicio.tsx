import { Link } from 'react-router';
import { ModalDarkPattern } from '../components/ModalDarkPattern';

export function Inicio() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-pink-200 via-fuchsia-200 to-violet-200 px-4 py-24 text-center md:py-36">
      <span aria-hidden="true" className="absolute top-8 left-[8%] text-4xl motion-safe:animate-bounce md:text-7xl">👑</span>
      <span aria-hidden="true" className="absolute top-12 right-[10%] text-4xl motion-safe:animate-pulse md:text-7xl">✨</span>
      <span aria-hidden="true" className="absolute bottom-8 left-[12%] text-4xl motion-safe:animate-pulse md:text-7xl">🎀</span>
      <span aria-hidden="true" className="absolute right-[12%] bottom-10 text-4xl motion-safe:animate-bounce md:text-7xl">🦋</span>

      <h1 className="mx-auto max-w-3xl font-titulo text-5xl text-pink-700 text-shadow-[3px_3px_0_white] md:text-7xl">
        Encuentra tu personaje Disney favorito
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg font-semibold">
        Explora princesas, hadas y estrellas de Disney Channel. Búscalas por nombre, filtra por película o serie y guarda tus favoritas.
      </p>
      <Link
        to="/explorar"
        className="mt-8 inline-flex min-h-14 items-center rounded-full bg-pink-600 px-8 text-lg font-bold text-white shadow-[4px_4px_0_white] transition hover:bg-pink-700 motion-safe:hover:scale-105"
      >
        Explorar personajes 💖
      </Link>

      <ModalDarkPattern />
    </section>
  );
}
