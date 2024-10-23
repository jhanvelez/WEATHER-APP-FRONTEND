import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentWeather } from '../store/weatherSlice';
import { fetchWeather } from '../api/weatherApi';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather.current);

  const handleSearch = async (city: string, country: string) => {
    try {
      const data = await fetchWeather(city, country);
      dispatch(setCurrentWeather(data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <WeatherForm onSearch={handleSearch} />
      <div className="w-full border-t border-gray-300 my-4"></div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default Home;