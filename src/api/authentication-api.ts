import { Login } from "@/schema/auth/login-form-schema"
import { Otp } from "@/schema/auth/otp-form-schema"
import { HttpClient } from "@/lib/network/http-helper"
import { Register } from "@tanstack/react-query"
import { ApiResponse } from "./response-type/ApiResponse"

const API_URL_LOGIN = "/auth/login"
const API_URL_REGISTER = "/auth/register"
const API_URL_VERIFY_OTP = "/auth/verify-otp"

export const AUTH_URL: string[] = [
    API_URL_LOGIN,
    API_URL_REGISTER,
    API_URL_VERIFY_OTP
]

export const OPEN_URL_LIST: string[] = [
    API_URL_LOGIN,
    API_URL_REGISTER
]
const login = (body: Login): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.post({ path: API_URL_LOGIN, body: body })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

const register = (body: Register): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.post({ path: API_URL_REGISTER, body: body })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

const verifyOtp = (body: Otp): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.post({ path: API_URL_VERIFY_OTP, body: body })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export const AuthenticationApi = {
    login,
    register,
    verifyOtp
}