import React from 'react';
import { CurrentWeatherResponse } from '../types/CurrentWeatherResponse';

interface WeatherDisplayProps {
  weather: CurrentWeatherResponse | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  if (!weather) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Clima en {weather.city}, {weather.country}</h2>
      <p>Temperatura: {weather.temperature.current}°C</p>
      <p>Sensación Térmica: {weather.temperature.feels_like}°C</p>
      <p>Temperatura Mínima: {weather.temperature.min}°C</p>
      <p>Temperatura Máxima: {weather.temperature.max}°C</p>
      <p>Clima: {weather.weather.main} - {weather.weather.description}</p>
      <p>Velocidad del Viento: {weather.wind.speed} m/s</p>
      <p>Dirección del Viento: {weather.wind.deg}°</p>
      <p>Humedad: {weather.humidity}%</p>
      <p>Presión: {weather.pressure} hPa</p>
      <p>Visibilidad: {weather.visibility} m</p>
      <p>Amanecer: {weather.sunrise}</p>
      <p>Atardecer: {weather.sunset}</p>
      <p>Zona Horaria: {weather.timezone}</p>
    </div>
  );
};

export default WeatherDisplay;