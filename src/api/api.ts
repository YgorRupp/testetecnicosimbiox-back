import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org",
  timeout: 20000,
});

export default api;
