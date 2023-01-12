import axios from 'axios';

const api = axios.create({
  baseURL: "https://snk-api-production-c1d2.up.railway.app/",
});

export default api;