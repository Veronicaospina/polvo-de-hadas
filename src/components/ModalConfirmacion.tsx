import { useEffect, useRef } from 'react';

interface Props {
  abierto: boolean;
  titulo: string;
  mensaje: string;
  textoConfirmar: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}

export function ModalConfirmacion({ abierto, titulo, mensaje, textoConfirmar, onConfirmar, onCancelar }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (abierto) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [abierto]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={onCancelar}
      aria-label={titulo}
      className="m-auto max-w-sm rounded-3xl border-4 border-pink-300 bg-white p-6 text-center text-fuchsia-950 backdrop:bg-fuchsia-950/60"
    >
      <p aria-hidden="true" className="text-5xl">🥺</p>
      <h2 className="mt-2 font-titulo text-2xl text-pink-700">{titulo}</h2>
      <p className="mt-2 font-semibold">{mensaje}</p>
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={onCancelar}
          autoFocus
          className="min-h-11 cursor-pointer rounded-full bg-violet-100 px-6 font-bold text-violet-900 hover:bg-violet-200"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirmar}
          className="min-h-11 cursor-pointer rounded-full bg-pink-600 px-6 font-bold text-white hover:bg-pink-700"
        >
          {textoConfirmar}
        </button>
      </div>
    </dialog>
  );
}
