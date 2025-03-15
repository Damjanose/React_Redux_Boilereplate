import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;