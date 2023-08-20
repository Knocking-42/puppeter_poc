import axios, { AxiosInstance } from "axios";

const apiManager: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 3000,
});

export default apiManager;
