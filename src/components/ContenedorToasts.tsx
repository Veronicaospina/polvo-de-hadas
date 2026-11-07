import { useToast } from '../store/toast';
import { Toast } from './Toast';

export function ContenedorToasts() {
  const toasts = useToast((s) => s.toasts);

  return (
    <div className="fixed right-4 bottom-6 left-4 z-50 flex flex-col gap-2 sm:left-auto sm:w-96">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} />
      ))}
    </div>
  );
}
