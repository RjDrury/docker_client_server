import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/' // Replace with your base URL
});
export const getHelloWorld = () => {
  const response = axiosInstance.get('/');
  return response;
};
