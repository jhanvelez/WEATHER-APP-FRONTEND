import React, { Suspense, lazy, useMemo, useCallback, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentWeather, setForecast } from '../store/weatherSlice';
import { fetchCurrentWeather, fetchForecastWeather } from '../api/weatherApi';
import WeatherForm from '../components/WeatherForm';
import ErrorBoundary from '../components/ErrorBoundary';
import { weatherReducer, initialState } from '../reducers/weatherReducer';

// Lazy load components
const WeatherDisplay = lazy(() => import('../components/WeatherDisplay'));
const ForecastDisplay = lazy(() => import('../components/ForecastDisplay'));
const NoData = lazy(() => import('../components/NoData'));
const PromptSearch = lazy(() => import('../components/PromptSearch'));
const Loading = lazy(() => import('../components/Loading'));

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(weatherReducer, initialState);

  const { hasError, hasSearched, isLoading, currentWeather, forecast } = state;

  // Maneja la búsqueda del clima para una ciudad y país específicos
  const handleSearch = useCallback(async (city: string, country: string) => {
    localDispatch({ type: 'SEARCH_INIT' });

    try {
      const data = await fetchCurrentWeather(city, country);

      if (data.status === 500) {
        localDispatch({ type: 'SEARCH_FAILURE' });
        return;
      }

      // Despacha la acción para establecer el clima actual en el store
      dispatch(setCurrentWeather(data.data));

      const forecastData = await fetchForecastWeather(city, country);
      // Despacha la acción para establecer el pronóstico en el store
      dispatch(setForecast(forecastData.data));

      localDispatch({
        type: 'SEARCH_SUCCESS',
        payload: { currentWeather: data.data, forecast: forecastData.data },
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      localDispatch({ type: 'SEARCH_FAILURE' });
    }
  }, [dispatch]);

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
    <>
      {/* Componente de formulario para buscar el clima */}
      <WeatherForm onSearch={handleSearch} />
  
      {/* Línea divisoria */}
      <div className="w-full border-t border-gray-300 my-4"></div>

      {/* Componente para mostrar el clima actual */}
      <div className="container mx-auto p-4">
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando...</div>}>
            {content}
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Home;