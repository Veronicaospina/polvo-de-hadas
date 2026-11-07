import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Inicio } from './paginas/Inicio';
import { Explorar } from './paginas/Explorar';
import { Detalle } from './paginas/Detalle';
import { Favoritos } from './paginas/Favoritos';
import { Contacto } from './paginas/Contacto';
import { NoEncontrada } from './paginas/NoEncontrada';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/explorar/:id" element={<Detalle />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}
