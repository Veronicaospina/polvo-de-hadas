import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { ModalConfirmacion } from '../components/ModalConfirmacion';
import { useToast } from '../store/toast';

interface Formulario {
  nombre: string;
  email: string;
  mensaje: string;
}

const FORM_VACIO = { nombre: '', email: '', mensaje: '' };
const TOCADOS_VACIO = { nombre: false, email: false, mensaje: false };

function validar(form: Formulario) {
  const errores: Partial<Formulario> = {};
  if (form.nombre.trim().length < 2) errores.nombre = 'El nombre debe tener al menos 2 caracteres.';
  if (!form.email.includes('@') || !form.email.includes('.')) errores.email = 'Ingresa un email válido (debe tener @ y punto).';
  if (form.mensaje.trim().length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  return errores;
}

function claseCampo(hayError: boolean) {
  return `w-full rounded-2xl border-2 bg-white px-4 py-3 font-medium ${hayError ? 'border-rose-700' : 'border-pink-300'}`;
}

export function Contacto() {
  const mostrarToast = useToast((s) => s.mostrar);
  const [form, setForm] = useState<Formulario>(FORM_VACIO);
  const [tocados, setTocados] = useState(TOCADOS_VACIO);
  const [confirmando, setConfirmando] = useState(false);

  const errores = validar(form);
  const hayErrores = Object.keys(errores).length > 0;
  const errorNombre = tocados.nombre ? errores.nombre : undefined;
  const errorEmail = tocados.email ? errores.email : undefined;
  const errorMensaje = tocados.mensaje ? errores.mensaje : undefined;

  function alCambiar(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function alSalir(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTocados((prev) => ({ ...prev, [name]: true }));
  }

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setConfirmando(true);
  }

  function confirmarEnvio() {
    setConfirmando(false);
    mostrarToast(`Gracias, ${form.nombre.trim()}. Enviaste tu mensaje de prueba.`, 'exito');
    setForm(FORM_VACIO);
    setTocados(TOCADOS_VACIO);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="font-titulo text-4xl text-pink-700">Contacto</h1>
      <p className="mt-1 font-semibold">¿Tienes preguntas? Envíanos un mensaje.</p>

      <form
        onSubmit={enviar}
        noValidate
        className="mt-6 flex flex-col gap-4 rounded-3xl border-4 border-pink-200 bg-white p-6 shadow-[8px_8px_0_var(--color-pink-300)]"
      >
        <div>
          <label htmlFor="nombre" className="mb-1 block font-bold">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={alCambiar}
            onBlur={alSalir}
            aria-invalid={!!errorNombre}
            aria-describedby={errorNombre ? 'error-nombre' : undefined}
            className={claseCampo(!!errorNombre)}
          />
          {errorNombre && <p id="error-nombre" role="alert" className="mt-1 text-sm font-bold text-rose-700">{errorNombre}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-bold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={alCambiar}
            onBlur={alSalir}
            aria-invalid={!!errorEmail}
            aria-describedby={errorEmail ? 'error-email' : undefined}
            className={claseCampo(!!errorEmail)}
          />
          {errorEmail && <p id="error-email" role="alert" className="mt-1 text-sm font-bold text-rose-700">{errorEmail}</p>}
        </div>

        <div>
          <label htmlFor="mensaje" className="mb-1 block font-bold">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={alCambiar}
            onBlur={alSalir}
            aria-invalid={!!errorMensaje}
            aria-describedby={errorMensaje ? 'error-mensaje' : undefined}
            className={claseCampo(!!errorMensaje)}
          />
          {errorMensaje && <p id="error-mensaje" role="alert" className="mt-1 text-sm font-bold text-rose-700">{errorMensaje}</p>}
        </div>

        <button
          type="submit"
          disabled={hayErrores}
          className="min-h-12 cursor-pointer rounded-full bg-pink-600 font-bold text-white hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-fuchsia-900"
        >
          Enviar mensaje
        </button>
        <p className="text-center text-sm">Formulario de prueba</p>
      </form>

      <ModalConfirmacion
        abierto={confirmando}
        titulo="¿Enviar mensaje?"
        mensaje={`Vas a enviar tu mensaje como ${form.nombre.trim()}.`}
        textoConfirmar="Enviar"
        onConfirmar={confirmarEnvio}
        onCancelar={() => setConfirmando(false)}
      />
    </div>
  );
}
