import React from 'react';
import { ForecastWeatherResponse } from '../types/ForecastWeatherResponse';

// Definición de las propiedades que acepta el componente ForecastDisplay
interface ForecastDisplayProps {
  forecast: ForecastWeatherResponse | null;
}

// Componente funcional de React para mostrar el pronóstico del clima
const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ forecast }) => {
  // Si no hay pronóstico, no renderizar nada
  if (!forecast) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Pronóstico para {forecast.city}, {forecast.country}</h2>
      <div className="grid grid-cols-1 gap-4">
        {forecast.forecast.map((day, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{new Date(day.date).toLocaleString()}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center animate-fade-in-up delay-100">
                <img src={`http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`} alt={day.weather.description} className="w-12 h-12 mr-2" />
                <span className="font-semibold">Clima:</span>
                <span className="ml-2">{day.weather.main} - {day.weather.description}</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Temperatura:</span>
                <span className="ml-2">{day.temperature.current}°C</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Sensación Térmica:</span>
                <span className="ml-2">{day.temperature.feels_like}°C</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Temperatura Mínima:</span>
                <span className="ml-2">{day.temperature.min}°C</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Temperatura Máxima:</span>
                <span className="ml-2">{day.temperature.max}°C</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Velocidad del Viento:</span>
                <span className="ml-2">{day.wind.speed} m/s</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Dirección del Viento:</span>
                <span className="ml-2">{day.wind.deg}°</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Humedad:</span>
                <span className="ml-2">{day.humidity}%</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Presión:</span>
                <span className="ml-2">{day.pressure} hPa</span>
              </div>
              <div className="flex items-center animate-fade-in-up delay-100">
                <span className="font-semibold">Visibilidad:</span>
                <span className="ml-2">{day.visibility} m</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;