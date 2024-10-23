import axios from '../axios'

// Función para obtener el clima actual
export const fetchCurrentWeather = async (
  city: string,
  codeCountry: string,
) => {
  try {
    const response = await axios.get(`/weather/current`, {
      params: {
        city,
        codeCountry,
      },
    })

    return {
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    console.error('Error al capturar la información:', error)
    return {
      status: 500,
      data: [],
    }
  }
}

// Función para obtener el pronóstico del clima
export const fetchForecastWeather = async (
  city: string,
  codeCountry: string,
) => {
  try {
    const response = await axios.get(`/weather/forecast`, {
      params: {
        city,
        codeCountry,
        days: 5,
      },
    })

    return {
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    console.error('Error al capturar la información:', error)
    return {
      status: 500,
      data: [],
    }
  }
}
