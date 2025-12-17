import axios from 'axios';

const $host = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const $authHost = axios.create({ baseURL: process.env.REACT_APP_API_URL });

//функция, которая параметром принимает конфиг, и в его поле headers передает токен
//They allow you to automatically add an authorization token to every outgoing request and handle common authentication errors
const authInterceptop = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptop);

export { $host, $authHost };
