import { default as axiosIntance } from 'axios';

const axios = axiosIntance.create({
  baseURL: 'https://api-customer.witchayut.com',
});

export default axios;
