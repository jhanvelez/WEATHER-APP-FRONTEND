// src/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Opcional: Configurar interceptores si es necesario
api.interceptors.response.use(
  response => response,
  error => {
    // Manejo de errores global
    return Promise.reject(error);
  }
);

export default api;