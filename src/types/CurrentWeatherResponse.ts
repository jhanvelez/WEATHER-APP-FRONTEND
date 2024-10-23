// src/types/CurrentWeatherResponse.ts
export interface Temperature {
  current: number;
  feels_like: number;
  min: number;
  max: number;
}

export interface Weather {
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface CurrentWeatherResponse {
  city: string;
  country: string;
  temperature: Temperature;
  weather: Weather;
  wind: Wind;
  humidity: number;
  pressure: number;
  visibility: number;
  sunrise: string;
  sunset: string;
  timezone: number;
}