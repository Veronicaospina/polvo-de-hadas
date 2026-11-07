import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContenedorToasts } from './ContenedorToasts';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-pink-50 bg-[radial-gradient(var(--color-pink-200)_2px,transparent_2px)] bg-size-[22px_22px] font-sans text-fuchsia-950">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ContenedorToasts />
    </div>
  );
}
