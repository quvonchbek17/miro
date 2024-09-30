import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv"
dotenv.config()

const miroApi = axios.create({
  baseURL: process.env.MIRO_BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});


export const miroBuilder = (token: string) => {
  return {
    get: (url: string, config: AxiosRequestConfig = {}) => miroApi.get(url, { ...config, headers: { Authorization: `Bearer ${token}`, ...config.headers } }),
    post: (url: string, data: any = {}, config: AxiosRequestConfig = {}) => miroApi.post(url, data, { ...config, headers: { Authorization: `Bearer ${token}`, ...config.headers } }),
    put: (url: string, data: any, config: AxiosRequestConfig = {}) => miroApi.put(url, data, { ...config, headers: { Authorization: `Bearer ${token}`, ...config.headers } }),
    patch: (url: string, data: any, config: AxiosRequestConfig = {}) => miroApi.patch(url, data, { ...config, headers: { Authorization: `Bearer ${token}`, ...config.headers } }), // PATCH so'rov
    delete: (url: string, config: AxiosRequestConfig = {}) => miroApi.delete(url, { ...config, headers: { Authorization: `Bearer ${token}`, ...config.headers } }),
  };
};
