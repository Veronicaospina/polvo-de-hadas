import { useEffect, useState } from 'react';
import { Filtros } from '../components/Filtros';
import { Resultados } from '../components/Resultados';
import { MUNDOS } from '../lib/api';

export function Explorar() {
  const [busqueda, setBusqueda] = useState('');
  const [nombre, setNombre] = useState('');
  const [mundo, setMundo] = useState(MUNDOS[0].filtro);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const id = setTimeout(() => {
      setNombre(busqueda.trim());
      setPagina(1);
    }, 400);
    return () => clearTimeout(id);
  }, [busqueda]);

  function cambiarMundo(valor: string) {
    setMundo(valor);
    setPagina(1);
  }

  function cambiarPagina(valor: number) {
    setPagina(valor);
    window.scrollTo(0, 0);
  }

  function quitarFiltros() {
    if (mundo) {
      setMundo('');
    } else {
      setBusqueda('');
    }
    setPagina(1);
  }

  return (
    <>
      <section className="bg-linear-to-r from-pink-200 to-violet-200 px-4 py-10 text-center">
        <h1 className="font-titulo text-4xl text-pink-700 text-shadow-[2px_2px_0_white] md:text-5xl">
          Explorar personajes
        </h1>
        <p className="mt-2 font-semibold">Busca a tus personajes o elige un mundo de Disney.</p>
        <Filtros busqueda={busqueda} mundo={mundo} onBusqueda={setBusqueda} onMundo={cambiarMundo} />
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <Resultados
          nombre={nombre}
          mundo={mundo}
          pagina={pagina}
          onPagina={cambiarPagina}
          onQuitarFiltros={quitarFiltros}
        />
      </div>
    </>
  );
}
