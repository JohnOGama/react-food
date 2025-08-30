import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie } from "../helper/cookie.helper";

const accessToken = getCookie("RF-accessToken");

// Create axios instance
const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: log outgoing requests
    console.log(
      `[Request] ${config.method?.toUpperCase()} ${config.url}`,
      config
    );

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // unwrap data
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        "[Response Error]",
        error.response.status,
        error.response.data
      );

      // Example: handle unauthorized
      if (error.response.status === 401) {
        window.location.href = "/login";
      }
    } else {
      console.error("[Network Error]", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
