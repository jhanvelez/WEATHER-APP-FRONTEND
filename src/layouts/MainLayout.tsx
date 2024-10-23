import React, { PropsWithChildren } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

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