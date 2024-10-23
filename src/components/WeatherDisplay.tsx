import React from 'react';
import { CurrentWeatherResponse } from '../types/CurrentWeatherResponse';

// Definición de las propiedades que el componente WeatherDisplay espera recibir
interface WeatherDisplayProps {
  weather: CurrentWeatherResponse | null;
}

// Componente funcional que muestra la información del clima
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  // Si no hay datos de clima, no renderiza nada
  if (!weather) {
    return null;
  }

  // Si no hay información de clima específica, muestra un mensaje de error
  if (!weather.weather) {
    return <p>No se encontraron resultados</p>;
  }

  // URL del icono del clima
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Clima en {weather.city}, {weather.country}</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Información del clima */}
        <div className="flex items-center animate-fade-in-up delay-100">
          <img src={iconUrl} alt={weather.weather.description} className="w-12 h-12 mr-2" />
          <span className="font-semibold">Clima:</span>
          <span className="ml-2">{weather.weather.main} - {weather.weather.description}</span>
        </div>
        {/* Información de la temperatura actual */}
        <div className="flex items-center animate-fade-in-up delay-200">
          <span className="font-semibold">Temperatura:</span>
          <span className="ml-2">{weather.temperature.current}°C</span>
        </div>
        {/* Información de la sensación térmica */}
        <div className="flex items-center animate-fade-in-up delay-300">
          <span className="font-semibold">Sensación Térmica:</span>
          <span className="ml-2">{weather.temperature.feels_like}°C</span>
        </div>
        {/* Información de la temperatura mínima */}
        <div className="flex items-center animate-fade-in-up delay-400">
          <span className="font-semibold">Temperatura Mínima:</span>
          <span className="ml-2">{weather.temperature.min}°C</span>
        </div>
        {/* Información de la temperatura máxima */}
        <div className="flex items-center animate-fade-in-up delay-500">
          <span className="font-semibold">Temperatura Máxima:</span>
          <span className="ml-2">{weather.temperature.max}°C</span>
        </div>
        {/* Información de la velocidad del viento */}
        <div className="flex items-center animate-fade-in-up delay-600">
          <span className="font-semibold">Velocidad del Viento:</span>
          <span className="ml-2">{weather.wind.speed} m/s</span>
        </div>
        {/* Información de la dirección del viento */}
        <div className="flex items-center animate-fade-in-up delay-700">
          <span className="font-semibold">Dirección del Viento:</span>
          <span className="ml-2">{weather.wind.deg}°</span>
        </div>
        {/* Información de la humedad */}
        <div className="flex items-center animate-fade-in-up delay-800">
          <span className="font-semibold">Humedad:</span>
          <span className="ml-2">{weather.humidity}%</span>
        </div>
        {/* Información de la presión atmosférica */}
        <div className="flex items-center animate-fade-in-up delay-900">
          <span className="font-semibold">Presión:</span>
          <span className="ml-2">{weather.pressure} hPa</span>
        </div>
        {/* Información de la visibilidad */}
        <div className="flex items-center animate-fade-in-up delay-1000">
          <span className="font-semibold">Visibilidad:</span>
          <span className="ml-2">{weather.visibility} m</span>
        </div>
        {/* Información del amanecer */}
        <div className="flex items-center animate-fade-in-up delay-1100">
          <span className="font-semibold">Amanecer:</span>
          <span className="ml-2">{weather.sunrise}</span>
        </div>
        {/* Información del atardecer */}
        <div className="flex items-center animate-fade-in-up delay-1200">
          <span className="font-semibold">Atardecer:</span>
          <span className="ml-2">{weather.sunset}</span>
        </div>
        {/* Información de la zona horaria */}
        <div className="flex items-center col-span-2 animate-fade-in-up delay-1300">
          <span className="font-semibold">Zona Horaria:</span>
          <span className="ml-2">{weather.timezone}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;