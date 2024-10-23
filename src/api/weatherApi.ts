import axios from '../axios';

export const fetchWeather = async (city: string, codeCountry: string) => {
  try {
    const response = await axios.get(`/weather/current`, {
      params: {
        city,
        codeCountry
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};