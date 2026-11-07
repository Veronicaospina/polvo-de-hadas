export function Cargando() {
  return (
    <div role="status" className="flex flex-col items-center gap-4 py-20">
      <div className="h-14 w-14 rounded-full border-8 border-pink-200 border-t-pink-600 motion-safe:animate-spin" />
      <p className="font-bold">Cargando personajes...</p>
    </div>
  );
}
