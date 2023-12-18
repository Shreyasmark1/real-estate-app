import { InternalAxiosRequestConfig, AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { OPEN_URL_LIST, MULTIPART_URL_LIST, CONTENT_TYPE_FORM, CONTENT_TYPE_JSON, AUTH_URL } from "../config";
import { logOnDev } from "@/utils/logger";
import SecureStorageService from "../../store/local-storage/local-storage-secure";
import { LS_ACESS_TOKEN_KEY, LS_REFRESH_TOKEN_KEY, LS_TRANSACTION_TOKEN_KEY } from "@/utils/env-helper";
import { ApiResponse } from "../ApiResponse";
import { generateApiMessage } from "../util";

export const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

    const token = SecureStorageService.getItem(LS_ACESS_TOKEN_KEY);
    const transactionToken = SecureStorageService.getItem(LS_TRANSACTION_TOKEN_KEY);

    const { method, url, baseURL, data } = config;

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${baseURL}${url} | Request`);

    if (!url) {
        return config;
    }

    if (!OPEN_URL_LIST.includes(url) && token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (AUTH_URL.includes(url) && transactionToken) {
        data.token = transactionToken
    }

    const contentType = MULTIPART_URL_LIST.includes(url) ? CONTENT_TYPE_FORM : CONTENT_TYPE_JSON;
    config.headers['Content-Type'] = contentType;
    return config;
}

export const onResponse = (response: AxiosResponse): any => {

    const { method, url, baseURL } = response.config;
    const { status } = response;

    logOnDev(`⬇️ [API] ${method?.toUpperCase()} ${baseURL}${url} | Response ${status}`);

    const res = new ApiResponse(response.data)

    if (!url) {
        return Promise.resolve(res)
    }

    if (AUTH_URL.includes(url)) {

        const accessToken = res.data?.accessToken
        const refreshToken = res.data?.refreshToken
        const transactionToken = res.data?.token

        if(accessToken){
            SecureStorageService.setItem(LS_ACESS_TOKEN_KEY, accessToken)
            delete res.data.accessToken
        }

        if(refreshToken){
            SecureStorageService.setItem(LS_REFRESH_TOKEN_KEY, refreshToken)
            delete res.data.refreshToken
        }

        if(transactionToken){
            SecureStorageService.setItem(LS_TRANSACTION_TOKEN_KEY, transactionToken)
            delete res.data.token
        }
    }

    return Promise.resolve(res);
}

export const onError = (error: AxiosError | Error) => {

    if (error instanceof AxiosError) {
        const { message } = error;
        const { method, url, baseURL } = error.config as AxiosRequestConfig;
        const { statusText, status } = error.response as AxiosResponse ?? {};

        logOnDev(`🚨 [API] ${method?.toUpperCase()} ${baseURL}${url} | Error ${status ? status : ""} : ${statusText ? statusText : ""} \n ${message? message: ""}`, true);

        switch (status) {
            case 401: {
                // "Login required"
                // try auto login
                // Delete Token & Go To Login Page if you required.
                // sessionStorage.removeItem("token");
                // window.location = "/login";
                break;
            }
            case 403: {
                // "Permission denied"
                break;
            }
            case 404: {
                // "Invalid request" not found
                break;
            }
            case 500: {
                // "Server error"
                break;
            }
            default: {
                // "Unknown error occurred"
                break;
            }
        }
    }

    return handleErrorMessage(error);
}

const handleErrorMessage = (error: any) => {

    let errorMessage = "Something went wrong"

    if (error.message) {
        errorMessage = error.message
    }

    if (error && error.response && error.response.data) {
        errorMessage = generateApiMessage(error.response.data)
    }

    return Promise.reject(errorMessage)
}