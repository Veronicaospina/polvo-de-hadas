import { Link } from 'react-router';

interface Props {
  mensaje: string;
  onReintentar?: () => void;
}

const claseBoton =
  'mt-6 inline-flex min-h-11 cursor-pointer items-center rounded-full bg-rose-700 px-6 font-bold text-white hover:bg-rose-800';

export function MensajeError({ mensaje, onReintentar }: Props) {
  return (
    <div role="alert" className="px-4 py-20 text-center">
      <p aria-hidden="true" className="text-6xl">💔</p>
      <h2 className="mt-4 font-titulo text-2xl text-rose-700">{mensaje}</h2>
      {onReintentar ? (
        <>
          <p className="mt-2 font-semibold">Revisa tu conexión e inténtalo de nuevo.</p>
          <button onClick={onReintentar} className={claseBoton}>Reintentar</button>
        </>
      ) : (
        <Link to="/explorar" className={claseBoton}>Volver a explorar</Link>
      )}
    </div>
  );
}
