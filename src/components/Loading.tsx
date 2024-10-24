import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-2xl font-bold mb-4">Buscando...</h2>
      <p className="text-gray-600">Por favor, espera mientras obtenemos la información.</p>
    </div>
  );
};

export default Loading;