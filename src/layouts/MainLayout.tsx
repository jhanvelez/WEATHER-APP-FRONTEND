import React, { PropsWithChildren } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

/**
 * Componente MainLayout que sirve como el diseño principal para la aplicación.
 * Incluye un encabezado, un área de contenido principal y un pie de página.
 *
 * @component
 * @example
 * ```tsx
 * <MainLayout>
 *   Componentes hijos aquí
 * </MainLayout>
 * ```
 *
 * @returns {JSX.Element} El componente MainLayout renderizado.
 */
const MainLayout: React.FC<PropsWithChildren<unknown>> = () => (
  <div className="flex flex-col min-h-screen dark:bg-boxdark-2 dark:text-bodydark">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      <Home />
    </main>
    <Footer />
  </div>
);

export default MainLayout;