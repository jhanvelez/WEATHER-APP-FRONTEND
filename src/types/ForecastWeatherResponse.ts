import { Temperature, Weather, Wind } from './CurrentWeatherResponse';

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