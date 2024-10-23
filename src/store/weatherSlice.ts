import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentWeatherResponse } from '../types/CurrentWeatherResponse';
import { ForecastWeatherResponse } from '../types/ForecastWeatherResponse';

interface WeatherState {
  current: CurrentWeatherResponse | null;
  forecast: ForecastWeatherResponse['forecast'];
}

const initialState: WeatherState = {
  current: null,
  forecast: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather(state, action: PayloadAction<CurrentWeatherResponse>) {
      state.current = action.payload;
    },
    setForecast(state, action: PayloadAction<ForecastWeatherResponse['forecast']>) {
      state.forecast = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecast } = weatherSlice.actions;
export default weatherSlice.reducer;