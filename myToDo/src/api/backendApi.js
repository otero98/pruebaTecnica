import axios from "axios";

const backendApi = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

//CONFIGURAR INTERCEPTORES

backendApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers
    }

    return config;
    
})

export default backendApi;
