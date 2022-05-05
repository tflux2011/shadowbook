import axios from "axios";
// import router from './../router/index';
import { apiUrl } from "./../environment/environment";
// import { GET_LOCAL_DB_DATA } from "../browser-db-config/localStorage";

const config = {
  baseURL: apiUrl
};

const HTTP_CLIENT = new axios.create(config);

const authInterceptor = (config) => {
  return config;
};

const loggerInterceptor = (config) => {
  return config;
};

HTTP_CLIENT.interceptors.request.use(authInterceptor);
HTTP_CLIENT.interceptors.request.use(loggerInterceptor);

// HTTP_CLIENT.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     const user = GET_LOCAL_DB_DATA('traction-app-user-data');
//     // const business = GET_LOCAL_DB_DATA('traction-app-current-user-business-data');

//     if (error.message === 'Request failed with status code 401') {
//       localStorage.removeItem('traction-app-user-data');
//       localStorage.removeItem('traction-app-current-user-business-data');
//       router.push({ name: 'Login' });
//     } else if (!user || !business) {
//       router.push({ name: 'Login' });
//     };
    
//     return Promise.reject(error);
//   }
// );

export { HTTP_CLIENT };
