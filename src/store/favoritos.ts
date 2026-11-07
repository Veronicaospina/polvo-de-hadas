import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Personaje } from '../types/personaje';

interface FavoritosState {
  favoritos: Personaje[];
  agregar: (personaje: Personaje) => void;
  quitar: (id: number) => void;
}

export const useFavoritos = create<FavoritosState>()(
  persist(
    (set) => ({
      favoritos: [],
      agregar: (personaje) => set((s) => ({ favoritos: [...s.favoritos, personaje] })),
      quitar: (id) => set((s) => ({ favoritos: s.favoritos.filter((f) => f._id !== id) })),
    }),
    { name: 'favoritos' }
  )
);
