import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://api.github.com',
});

export default Api;
