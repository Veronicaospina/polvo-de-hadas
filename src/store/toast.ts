import { create } from 'zustand';

export type TipoToast = 'exito' | 'error' | 'info';

export interface DatosToast {
  id: number;
  mensaje: string;
  tipo: TipoToast;
}

interface ToastState {
  toasts: DatosToast[];
  mostrar: (mensaje: string, tipo: TipoToast) => void;
  cerrar: (id: number) => void;
}

export const useToast = create<ToastState>()((set) => ({
  toasts: [],
  mostrar: (mensaje, tipo) =>
    set((s) => ({ toasts: [...s.toasts, { id: Date.now(), mensaje, tipo }] })),
  cerrar: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));
