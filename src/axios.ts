// src/axios.ts
import axios from 'axios';

/**
 * Creates an instance of Axios with a predefined configuration.
 * 
 * The Axios instance is configured to use a base URL of 'http://localhost:8000/api'.
 * This base URL will be prepended to any relative URL passed to the instance methods.
 * 
 * @constant
 * @type {AxiosInstance}
 */
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Opcional: Configurar interceptores si es necesario
api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default api;