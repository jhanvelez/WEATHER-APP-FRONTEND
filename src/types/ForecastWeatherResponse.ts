import { Temperature, Weather, Wind } from './CurrentWeatherResponse';

/**
 * Representa la respuesta del pronóstico del tiempo.
 * 
 * @interface Forecast
 * 
 * @property {string} date - La fecha del pronóstico.
 * @property {Temperature} temperature - La temperatura pronosticada.
 * @property {Weather} weather - Las condiciones climáticas pronosticadas.
 * @property {Wind} wind - La información del viento pronosticado.
 * @property {number} humidity - El porcentaje de humedad relativa.
 * @property {number} pressure - La presión atmosférica en hPa.
 * @property {number} visibility - La visibilidad en metros.
 */
export interface Forecast {
  date: string;
  temperature: Temperature;
  weather: Weather;
  wind: Wind;
  humidity: number;
  pressure: number;
  visibility: number;
}

export interface ForecastWeatherResponse {
  city: string;
  country: string;
  forecast: Forecast[];
}