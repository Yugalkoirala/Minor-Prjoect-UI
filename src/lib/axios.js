import axios from "axios";

// to not repeat local host everytime
const $axios = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
});

// Add a request interceptor
// to add access token to every request
$axios.interceptors.request.use(function (config) {
    const accesstoken = localStorage.getItem("accesstoken");
    if (accesstoken) {
        config.headers.Authorization = `Bearer ${accesstoken}`;
    }
    return config;
});

export { $axios };