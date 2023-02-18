import { default as axiosIntance } from 'axios';

const axios = axiosIntance.create({
  baseURL: 'https://api.example.com',
});

export default axios;
