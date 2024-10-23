import { useState, useEffect } from 'react';
import { CurrentWeatherResponse } from '../types/CurrentWeatherResponse';
import { fetchWeather } from '../api/weatherApi';

export const useWeather = (city: string, country: string): CurrentWeatherResponse | null => {
  const [weather, setWeather] = useState<CurrentWeatherResponse | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city, country);
        const formattedData: CurrentWeatherResponse = {
          city: data.city,
          country: data.country,
          temperature: data.temperature,
          weather: data.weather,
          wind: data.wind,
          humidity: data.humidity,
          pressure: data.pressure,
          visibility: data.visibility,
          sunrise: data.sunrise,
          sunset: data.sunset,
          timezone: data.timezone,
        };
        setWeather(formattedData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeather();
  }, [city, country]);

  return weather;
};