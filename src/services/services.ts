import http from './config';
import { endpoints } from './enpoints';
import { Login } from '../types';

export const login = async (userData: Login) => {
  return http.post(endpoints.login, userData);
};
