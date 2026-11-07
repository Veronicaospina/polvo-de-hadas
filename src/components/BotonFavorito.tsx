import { useState } from 'react';
import { useFavoritos } from '../store/favoritos';
import { useToast } from '../store/toast';
import { ModalConfirmacion } from './ModalConfirmacion';
import type { Personaje } from '../types/personaje';

interface Props {
  personaje: Personaje;
  conTexto?: boolean;
}

export function BotonFavorito({ personaje, conTexto = false }: Props) {
  const esFavorito = useFavoritos((s) => s.favoritos.some((f) => f._id === personaje._id));
  const agregar = useFavoritos((s) => s.agregar);
  const quitar = useFavoritos((s) => s.quitar);
  const mostrarToast = useToast((s) => s.mostrar);
  const [confirmando, setConfirmando] = useState(false);

  function handleClick() {
    if (esFavorito) {
      setConfirmando(true);
      return;
    }
    agregar(personaje);
    mostrarToast(`Agregaste a ${personaje.name} a favoritos`, 'exito');
  }

  function confirmarQuitar() {
    setConfirmando(false);
    quitar(personaje._id);
    mostrarToast(`Quitaste a ${personaje.name} de favoritos`, 'info');
  }

  return (
    <>
      <button
        onClick={handleClick}
        aria-label={esFavorito ? `Quitar a ${personaje.name} de favoritos` : `Agregar a ${personaje.name} a favoritos`}
        className={
          conTexto
            ? 'min-h-11 cursor-pointer rounded-full bg-pink-600 px-6 font-bold text-white transition hover:bg-pink-700'
            : 'h-11 w-11 cursor-pointer rounded-full border-2 border-pink-300 bg-white text-xl transition hover:scale-110'
        }
      >
        {esFavorito ? '💖' : '🤍'}
        {conTexto && (esFavorito ? ' Quitar de favoritos' : ' Agregar a favoritos')}
      </button>

      <ModalConfirmacion
        abierto={confirmando}
        titulo="¿Quitar de favoritos?"
        mensaje={`¿Quieres quitar a ${personaje.name} de tus favoritos?`}
        textoConfirmar="Quitar"
        onConfirmar={confirmarQuitar}
        onCancelar={() => setConfirmando(false)}
      />
    </>
  );
}
