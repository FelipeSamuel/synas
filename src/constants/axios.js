import axios from 'axios';
import {
  API_COMPATIBILITY_URL,
  API_MANDALA_URL,
  API_URL,
  COMPATIBILITY_TOKEN,
  USER_TOKEN_STORAGE_NAME,

} from './variables';

export const axiosLPCreate = async () => {
  const axiosClient = axios.create({
    baseURL: API_URL,
   // baseURL: 'http://localhost:8000/api',
  });

  axiosClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem(USER_TOKEN_STORAGE_NAME)}`;

  return axiosClient;
};

export const axiosMandalaCreate = async () => {
  const axiosClient = axios.create({
    baseURL: API_MANDALA_URL,
  });

  return axiosClient;
};

export const axiosCompatibilityCreate = async () => {
  const axiosClient = axios.create({
    baseURL: API_COMPATIBILITY_URL,
  });

  axiosClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem(COMPATIBILITY_TOKEN)}`;

  return axiosClient;
};
