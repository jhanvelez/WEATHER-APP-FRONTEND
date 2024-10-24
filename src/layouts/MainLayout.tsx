import React, { PropsWithChildren, Suspense, lazy } from 'react';

// Lazy load components
const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));
const Home = lazy(() => import('../pages/Home'));

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
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
    <main className="flex-grow container mx-auto p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </main>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </div>
);

export default MainLayout;