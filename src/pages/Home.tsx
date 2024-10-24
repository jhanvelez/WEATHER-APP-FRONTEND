import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentWeather, setForecast } from '../store/weatherSlice';
import { fetchCurrentWeather, fetchForecastWeather  } from '../api/weatherApi';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import ForecastDisplay from '../components/ForecastDisplay';
import PromptSearch from '../components/PromptSearch';
import NoData from '../components/NoData';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);


  // Obtiene el clima actual y el pronóstico del store
  const currentWeather = useSelector((state: RootState) => state.weather.current);
  const forecast = useSelector((state: RootState) => state.weather.forecast);

  // Maneja la búsqueda del clima para una ciudad y país específicos
  const handleSearch = async (city: string, country: string) => {
    setHasError(false); // Restablece el estado de error
    setHasSearched(true); // Establece que se ha realizado una búsqueda
    try {
      const data = await fetchCurrentWeather(city, country);

      if (data.status === 500) {
        setHasError(true);
        return;
      }

      // Despacha la acción para establecer el clima actual en el store
      dispatch(setCurrentWeather(data.data));

      const forecast = await fetchForecastWeather(city, country);
      // Despacha la acción para establecer el pronóstico en el store
      dispatch(setForecast(forecast.data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setHasError(true);
    }
  };

  return (
    <div>
      {/* Componente de formulario para buscar el clima */}
      <WeatherForm onSearch={handleSearch} />
  
      {/* Línea divisoria */}
      <div className="w-full border-t border-gray-300 my-4"></div>

      {/* Componente para mostrar el clima actual */}
      <div className="container mx-auto p-4">
      {!hasSearched ? (
          <PromptSearch />
        ) : hasError ? (
          <NoData />
        ) : (
          <>
            {currentWeather && <WeatherDisplay weather={currentWeather} />}
            {forecast && <ForecastDisplay forecast={forecast} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;