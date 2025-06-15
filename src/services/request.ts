import axios from "axios";
import { store } from "@/redux/store";
import { setIsAuthenticated } from "./auth/authSlice";

const request = axios.create({
    baseURL: import.meta.env.API_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

request.interceptors.request.use(
    (config) => {
        if (store.getState().auth.access_token) {
            config.headers.Authorization = `Bearer ${
                store.getState().auth.access_token
            }`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

request.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                const token = store.getState().auth.access_token;
                if (token) {
                    store.dispatch(setIsAuthenticated(false));
                }
            }
        }
        return Promise.reject(error);
    },
);

export default request;
