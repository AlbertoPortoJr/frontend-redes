import axios from "axios";

const api = axios.create({
  baseURL: "http://18.191.22.196:5000/api",
  timeout: 1000,
});

export default api;
