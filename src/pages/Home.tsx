import React, { useState, Suspense, lazy, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentWeather, setForecast } from '../store/weatherSlice';
import { fetchCurrentWeather, fetchForecastWeather  } from '../api/weatherApi';
import WeatherForm from '../components/WeatherForm';

// Lazy load components
const WeatherDisplay = lazy(() => import('../components/WeatherDisplay'));
const ForecastDisplay = lazy(() => import('../components/ForecastDisplay'));
const NoData = lazy(() => import('../components/NoData'));
const PromptSearch = lazy(() => import('../components/PromptSearch'));
const Loading = lazy(() => import('../components/Loading'));

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Obtiene el clima actual y el pronóstico del store
  const currentWeather = useSelector((state: RootState) => state.weather.current);
  const forecast = useSelector((state: RootState) => state.weather.forecast);

  // Maneja la búsqueda del clima para una ciudad y país específicos
  const handleSearch = async (city: string, country: string) => {
    setHasError(false); // Restablece el estado de error
    setHasSearched(true); // Establece que se ha realizado una búsqueda
    setIsLoading(true); // Establece el estado de carga en verdadero
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
    } finally {
      setIsLoading(false); // Set loading state to false after search completes
    }
  };

  // Memoriza el contenido a mostrar basado en el estado de la búsqueda
  const content = useMemo(() => {
    if (!hasSearched) {
      return <PromptSearch />;
    }
    if (isLoading) {
      return <Loading />;
    }
    if (hasError) {
      return <NoData />;
    }
    return (
      <>
        {currentWeather && <WeatherDisplay weather={currentWeather} />}
        {forecast && <ForecastDisplay forecast={forecast} />}
      </>
    );
  }, [hasSearched, isLoading, hasError, currentWeather, forecast]);

  return (
    <div>
      {/* Componente de formulario para buscar el clima */}
      <WeatherForm onSearch={handleSearch} />
  
      {/* Línea divisoria */}
      <div className="w-full border-t border-gray-300 my-4"></div>

      {/* Componente para mostrar el clima actual */}
      <div className="container mx-auto p-4">
        <Suspense fallback={<div>Loading...</div>}>
          {content}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;