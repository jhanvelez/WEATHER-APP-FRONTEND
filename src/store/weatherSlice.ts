import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentWeatherResponse } from '../types/CurrentWeatherResponse';
import { ForecastWeatherResponse } from '../types/ForecastWeatherResponse';

interface WeatherState {
  current: CurrentWeatherResponse | null;
  forecast: ForecastWeatherResponse | null ;
}

const initialState: WeatherState = {
  current: null,
  forecast: null,
};

/**
 * @description
 * Este módulo define un slice de Redux para manejar el estado del clima en la aplicación.
 * crear un slice llamado 'weather' con un estado inicial
 * y dos reducers: `setCurrentWeather` y `setForecast`.
 * 
 * @typedef {Object} CurrentWeatherResponse
 * @description Representa la respuesta de la API para el clima actual.
 * 
 * @typedef {Object} ForecastWeatherResponse
 * @description Representa la respuesta de la API para el pronóstico del clima.
 * 
 * @function setCurrentWeather
 * @description Actualiza el estado con la información del clima actual.
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<CurrentWeatherResponse>} action - La acción que contiene la información del clima actual.
 * 
 * @function setForecast
 * @description Actualiza el estado con la información del pronóstico del clima.
 * @param {Object} state - El estado actual del slice.
 * @param {PayloadAction<ForecastWeatherResponse>} action - La acción que contiene la información del pronóstico del clima.
 */
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather(state, action: PayloadAction<CurrentWeatherResponse>) {
      state.current = action.payload;
    },
    setForecast(state, action: PayloadAction<ForecastWeatherResponse>) {
      state.forecast = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecast } = weatherSlice.actions;
export default weatherSlice.reducer;