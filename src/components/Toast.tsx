import { useEffect } from 'react';
import { useToast } from '../store/toast';
import type { DatosToast } from '../store/toast';

interface Props {
  toast: DatosToast;
}

const ESTILOS = {
  exito: { color: 'bg-emerald-700', icono: '✓' },
  error: { color: 'bg-rose-700', icono: '✕' },
  info: { color: 'bg-violet-700', icono: 'i' },
};

export function Toast({ toast }: Props) {
  const cerrar = useToast((s) => s.cerrar);
  const estilo = ESTILOS[toast.tipo];

  useEffect(() => {
    const id = setTimeout(() => cerrar(toast.id), 4000);
    return () => clearTimeout(id);
  }, [toast.id, cerrar]);

  return (
    <div
      role={toast.tipo === 'error' ? 'alert' : 'status'}
      className={`flex items-center gap-3 rounded-3xl px-4 py-2 font-bold text-white shadow-lg ${estilo.color}`}
    >
      <span aria-hidden="true">{estilo.icono}</span>
      <p className="flex-1">{toast.mensaje}</p>
      <button
        aria-label="Cerrar aviso"
        onClick={() => cerrar(toast.id)}
        className="h-11 w-11 shrink-0 cursor-pointer text-xl"
      >
        ×
      </button>
    </div>
  );
}
