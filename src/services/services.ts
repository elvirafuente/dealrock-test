import http, { updateToken } from './config';
import { endpoints } from './enpoints';
import { UserLogin } from '../types';

export const login = (userData: UserLogin) => {
  return http.post(endpoints.login, userData).then((res) => {
    updateToken(res.data.access_token);
    return res;
  });
};

export const getUser = () => {
  return http.get(endpoints.user);
};
