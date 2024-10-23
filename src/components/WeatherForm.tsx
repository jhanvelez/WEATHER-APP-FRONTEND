import React, { useState } from 'react';

interface WeatherFormProps {
  onSearch: (city: string, country: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState({ city: '', country: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { city: '', country: '' };

    if (!city) {
      newErrors.city = '¡La ciudad es requerida!';
      valid = false;
    }

    if (!country) {
      newErrors.country = '¡El código del país es requerido!';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      onSearch(city, country);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 p-4">
    <h2 className="text-xl font-semibold mb-4">Ingresa Ciudad y Código del País</h2>
    <div className="flex space-x-4">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.city && <p className="text-red text-sm mt-1">{errors.city}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Codigo del país</label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Código del país"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors.country && <p className="text-red text-sm mt-1">{errors.country}</p>}
      </div>

      <div className='pt-6'>
        <button type="submit" className="inline-flex rounded bg-primary py-2 px-3 text-sm font-medium text-white hover:bg-opacity-90">
          Preciona para buscar
        </button>
      </div>
    </div>
  </form>
  );
};

export default WeatherForm;