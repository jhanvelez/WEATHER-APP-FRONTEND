import React from 'react';

const PromptSearch: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Busca el clima de tu ciudad</h2>
      <p className="text-gray-600">Ingresa una ciudad y un código de país para obtener el clima actual y el pronóstico.</p>
    </div>
  );
};

export default React.memo(PromptSearch);