import axios, { InternalAxiosRequestConfig } from "axios";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../shared/auth-guard/auth-guard";
import ApiAuthService from "./auth/auth.service";
import { ILoginResponseEntity } from "./auth/entity/login-response.entity";
import { Result } from "../shared/protocol/result";
import { LOGIN_PATH } from "../routers/public.route";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const config = {
  baseURL: `${API_BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
};

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const api = axios.create(config);

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  error => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
   
    if (error.response?.status === 401 && authToken) {
      const authApi = new ApiAuthService(api);
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);

      if (!refreshToken) {
        localStorage.removeItem(AUTH_TOKEN);
        window.location.href = LOGIN_PATH;
        return;
      }

      return authApi
        .refreshToken(refreshToken)
        .then((result: Result<ILoginResponseEntity>) => {
          const newAuthToken = result.getValue()?.token;
          const newRefreshToken = result.getValue()?.refresh;

          if (newAuthToken && newRefreshToken) {
            localStorage.setItem(AUTH_TOKEN, newAuthToken);
            localStorage.setItem(REFRESH_TOKEN, newRefreshToken);
            return api.request(error.config);
          }

          localStorage.removeItem(AUTH_TOKEN);
          window.location.href = LOGIN_PATH;
        })
        .catch(() => {
          localStorage.removeItem(AUTH_TOKEN);
          window.location.href = LOGIN_PATH;
        });
    }

    if (error.response?.status === 403) {
      localStorage.removeItem(AUTH_TOKEN);
      window.location.href = LOGIN_PATH;
    }

    return Promise.reject(error);
  },
);

export { API_BASE_URL, config, api as employeesAPI };
