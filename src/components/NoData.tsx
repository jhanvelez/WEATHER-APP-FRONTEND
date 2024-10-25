import React from 'react';

const NoData: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">No se encontró información</h2>
      <p className="text-gray-600">Intenta buscar otra ciudad o código de país.</p>
    </div>
  );
};

export default React.memo(NoData);