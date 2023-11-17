import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.dealrock.com/';

const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const updateToken = (token: string) => {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default http;
