import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;

  return config;
  }
  return config;
});

export default api;