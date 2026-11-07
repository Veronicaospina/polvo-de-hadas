import { useEffect, useRef } from 'react';
import { useToast } from '../store/toast';

/*
  DARK PATTERN
  1. Confirm-shaming: el texto para rechazar hace sentir mal a quien lo usa.
  2. Misdirection: aceptar es un botón grande y llamativo; rechazar es un enlace gris y diminuto.
  3. Pre-checked: la casilla de ofertas ya viene marcada, aunque nadie la pidió.
*/
export function ModalDarkPattern() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mostrarToast = useToast((s) => s.mostrar);

  useEffect(() => {
    const id = setTimeout(() => dialogRef.current?.showModal(), 3000);
    return () => clearTimeout(id);
  }, []);

  function aceptar() {
    dialogRef.current?.close();
    mostrarToast('Ya eres parte del Club de las Princesas', 'exito');
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="titulo-club"
      className="m-auto max-w-md rounded-3xl border-4 border-pink-300 bg-white p-6 text-center text-fuchsia-950 backdrop:bg-fuchsia-950/60"
    >
      <p aria-hidden="true" className="text-5xl">👑</p>
      <h2 id="titulo-club" className="mt-2 font-titulo text-3xl text-pink-700">
        ¡Únete al Club de las Princesas!
      </h2>
      <p className="mt-2 font-semibold">Recibe novedades de tus personajes favoritos todas las semanas.</p>
      <label className="mt-4 flex items-center justify-center gap-2 text-sm">
        <input type="checkbox" defaultChecked />
        Quiero recibir ofertas de marcas aliadas
      </label>
      <button
        onClick={aceptar}
        autoFocus
        className="mt-4 min-h-14 w-full cursor-pointer rounded-full bg-pink-600 px-6 text-lg font-bold text-white hover:bg-pink-700"
      >
        ¡Sí, quiero ser parte del club!
      </button>
      <button
        onClick={() => dialogRef.current?.close()}
        className="mt-3 cursor-pointer text-xs text-gray-400 underline"
      >
        No gracias, prefiero una vida sin magia
      </button>
    </dialog>
  );
}
