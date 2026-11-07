import { useEffect, useState } from 'react';
import { useToast } from '../store/toast';

export function useFetch<T>(url: string) {
  const [datos, setDatos] = useState<T | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [intento, setIntento] = useState(0);
  const mostrarToast = useToast((s) => s.mostrar);

  useEffect(() => {
    const control = new AbortController();

    async function cargar() {
      setCargando(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: control.signal });
        if (!res.ok) throw new Error('Falló la petición');
        setDatos((await res.json()) as T);
      } catch (e) {
        if ((e as Error).name === 'AbortError') return;
        setError((e as Error).message);
        mostrarToast('No pudimos conectar con Disney API', 'error');
      } finally {
        if (!control.signal.aborted) setCargando(false);
      }
    }

    cargar();
    return () => control.abort();
  }, [url, intento, mostrarToast]);

  function reintentar() {
    setIntento((i) => i + 1);
  }

  return { datos, cargando, error, reintentar };
}
