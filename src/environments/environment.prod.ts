import * as config from '../../config.json';

export const environment = {
  production: true,
  apiUrl: "https://app.starterkitchen.de/public",
  login : config.login,
  password : config.password,
  wsUrl: "http://snackbot-kitchen.local",
  wsPort: "8000"
};
