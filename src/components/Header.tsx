import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-black p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Weather App</h1>
        <p className="text-lg">Consulta el clima actual y la previsión de hasta 5 días</p>
      </div>
    </header>
  );
};

export default Header;