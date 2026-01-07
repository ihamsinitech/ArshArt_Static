import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8083/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Request interceptor
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('arshart_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.clear();
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

export default instance;