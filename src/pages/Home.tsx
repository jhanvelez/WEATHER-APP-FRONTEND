import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentWeather, setForecast } from '../store/weatherSlice';
import { fetchCurrentWeather, fetchForecastWeather  } from '../api/weatherApi';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import ForecastDisplay from '../components/ForecastDisplay';

const Home: React.FC = () => {
  // Obtiene la función dispatch de Redux
  const dispatch = useDispatch();
  // Obtiene el estado actual del clima desde el store de Redux
  const currentWeather = useSelector((state: RootState) => state.weather.current);
  // Obtiene el pronóstico del clima desde el store de Redux
  const forecast = useSelector((state: RootState) => state.weather.forecast);

  // Maneja la búsqueda del clima para una ciudad y país específicos
  const handleSearch = async (city: string, country: string) => {
    try {
      // Fetch del clima actual
      const data = await fetchCurrentWeather(city, country);
      // Despacha la acción para establecer el clima actual en el store
      dispatch(setCurrentWeather(data.data));

      // Fetch del pronóstico del clima
      const forecast = await fetchForecastWeather(city, country);

      // Imprime en consola el pronóstico obtenido
      console.log('Fetching forecast for:', forecast.data);

      // Despacha la acción para establecer el pronóstico en el store
      dispatch(setForecast(forecast.data));

    } catch (error) {
      // Manejo de errores en caso de que falle la obtención de datos
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      {/* Componente de formulario para buscar el clima */}
      <WeatherForm onSearch={handleSearch} />
      <div className="w-full border-t border-gray-300 my-4"></div>

      {/* Componente para mostrar el clima actual */}
      <div className="container mx-auto p-4">
        <WeatherDisplay weather={currentWeather} />
        {/* Componente para mostrar el pronóstico del clima */}
        <ForecastDisplay forecast={forecast} />
      </div>

    </div>
  );
};

export default Home;