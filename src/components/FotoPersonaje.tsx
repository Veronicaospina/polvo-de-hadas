import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import type { Personaje } from '../types/personaje';

interface Props {
  personaje: Personaje;
  className?: string;
}

export function FotoPersonaje({ personaje, className = '' }: Props) {
  const [fotoRota, setFotoRota] = useState(false);

  function revisarFoto(e: SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth === 300 && naturalHeight === 171) setFotoRota(true);
  }

  if (!personaje.imageUrl || fotoRota) {
    return (
      <div
        role="img"
        aria-label={`${personaje.name} no tiene foto`}
        className={`flex items-center justify-center bg-pink-100 text-6xl ${className}`}
      >
        🎀
      </div>
    );
  }

  return (
    <img
      src={personaje.imageUrl}
      alt={`Foto de ${personaje.name}`}
      loading="lazy"
      onLoad={revisarFoto}
      onError={() => setFotoRota(true)}
      className={`object-cover object-top ${className}`}
    />
  );
}
