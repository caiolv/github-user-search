import axios from 'axios';

export const PER_PAGE = 20;

const api = axios.create({
    baseURL: 'https://api.github.com/',
});

api.interceptors.request.use(config => {
    config.params = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        ...config.params,
    };
    config.headers = {
        "Authorization": `token ${process.env.REACT_APP_API_KEY}`,
    }
    return config;
});

export default api;