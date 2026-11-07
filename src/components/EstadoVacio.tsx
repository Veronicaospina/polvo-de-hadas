import type { ReactNode } from 'react';

interface Props {
  icono: string;
  titulo: string;
  mensaje: string;
  children: ReactNode;
}

export function EstadoVacio({ icono, titulo, mensaje, children }: Props) {
  return (
    <div className="px-4 py-20 text-center">
      <p aria-hidden="true" className="text-6xl">{icono}</p>
      <h2 className="mt-4 font-titulo text-2xl text-pink-700">{titulo}</h2>
      <p className="mt-2 mb-6 font-semibold">{mensaje}</p>
      {children}
    </div>
  );
}
