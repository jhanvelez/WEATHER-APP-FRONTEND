// Interface para representar la temperatura
export interface Temperature {
  current: number; // Temperatura actual
  feels_like: number; // Sensación térmica
  min: number; // Temperatura mínima
  max: number; // Temperatura máxima
}

// Interface para representar el clima
export interface Weather {
  main: string; // Condición principal del clima (ej. Clear, Rain)
  description: string; // Descripción del clima (ej. clear sky)
  icon: string; // Icono representativo del clima
}

// Interface para representar el viento
export interface Wind {
  speed: number; // Velocidad del viento
  deg: number; // Dirección del viento en grados
}

// Interface para representar la respuesta del clima actual
export interface CurrentWeatherResponse {
  city: string; // Nombre de la ciudad
  country: string; // Código del país
  temperature: Temperature; // Información de la temperatura
  weather: Weather; // Información del clima
  wind: Wind; // Información del viento
  humidity: number; // Humedad en porcentaje
  pressure: number; // Presión atmosférica en hPa
  visibility: number; // Visibilidad en metros
  sunrise: string; // Hora del amanecer en formato ISO 8601
  sunset: string; // Hora del atardecer en formato ISO 8601
  timezone: number; // Desplazamiento de la zona horaria en segundos desde UTC
}