import { Login } from "@schema/auth/login-form-schema"
import { API_URL_LOGIN, API_URL_REGISTER, API_URL_VERIFY_OTP } from "../config"
import { Http } from "../http-client/http-helper"
import { Otp } from "@schema/auth/otp-form-schema"
import { Register } from "@/lib/schema/auth/register-form-schema"
import { ApiResponse } from "../ApiResponse"

const login = (body: Login): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Http.post({ path: API_URL_LOGIN, body: body })
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
        Http.post({ path: API_URL_REGISTER, body: body })
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
        Http.post({ path: API_URL_VERIFY_OTP, body: body })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export const AuthService = {
    login,
    register,
    verifyOtp
}