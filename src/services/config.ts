import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.dealrock.com/';

const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default http;
