/********************************************************/
/*          Archivo de Configuración de Axios           */
/********************************************************/

import axios from 'axios';
import join from "url-join";
// import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = import.meta.env;// process.env; // getEnvVariables();

// const endPoint = axios.create({
//     baseURL: VITE_API_URL
// })

// const token = localStorage.getItem('x-token');
// //Request interceptors (para agregarle el jwt)
// endPoint.interceptors.request.use(config => {
//     config.headers = {
//         //Agrego los headers que necesite
//         ...config.headers,
//         Authorization: `Bearer ${token}`
//     }

//     return config;
// })

// export default endPoint;

export default function endPoint(axios) {
    axios.interceptors.request.use(
        config => {
            //   const { auth: { authToken } } = store.getState();
            const token = localStorage.getItem('x-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            // if (!isAbsoluteURLRegex.test(config.url)) {
            config.url = join(VITE_API_URL, config.url);
            // }

            return config;
        },
        // err => Promise.reject(err)
    );
}
