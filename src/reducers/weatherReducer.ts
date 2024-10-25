import { CurrentWeatherResponse } from '../types/CurrentWeatherResponse';
import { ForecastWeatherResponse } from '../types/ForecastWeatherResponse';

interface WeatherState {
  hasError: boolean;
  hasSearched: boolean;
  isLoading: boolean;
  currentWeather: CurrentWeatherResponse | null;
  forecast: ForecastWeatherResponse | null;
}

type WeatherAction =
  | { type: 'SEARCH_INIT' }
  | { type: 'SEARCH_SUCCESS'; payload: { currentWeather: CurrentWeatherResponse; forecast: ForecastWeatherResponse } }
  | { type: 'SEARCH_FAILURE' };

export const initialState: WeatherState = {
  hasError: false,
  hasSearched: false,
  isLoading: false,
  currentWeather: null,
  forecast: null,
};

export const weatherReducer = (state: WeatherState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case 'SEARCH_INIT':
      return {
        ...state,
        hasError: false,
        hasSearched: true,
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        currentWeather: action.payload.currentWeather,
        forecast: action.payload.forecast,
      };
    case 'SEARCH_FAILURE':
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};