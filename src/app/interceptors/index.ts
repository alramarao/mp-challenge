import { HttpErrorInterceptor } from "./http-error.interceptor";
import { ApiInterceptor } from "./api.interceptor";

export const interceptorProviders = [
    ApiInterceptor, HttpErrorInterceptor
];