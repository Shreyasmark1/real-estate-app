import { API_URL_LOGIN, API_URL_REGISTER, API_URL_VERIFY_OTP } from "../api/authentication-api";

export const CONTENT_TYPE_JSON : string = 'application/json';
export const CONTENT_TYPE_FORM : string = 'multipart/form-data';

// status from server
export const FAILED = 5000 // don't show this error to user
export const FAILED_INFO = 5001 // show error to user
export const FAILED_DEFAULT = 5002; // don't show this error

export const SUCCESS = 2000; // don't show this message
export const SUCCESS_INFO = 2001; // ok to show this error
export const SUCCESS_DEFAULT = 2002; // don't show this message

export const AUTH_ERROR = 4000; // remove jwt and redirect to login page
export const AUTH_ERROR_INFO = 4001; // show error to front end

// url groups
export const AUTH_URL: string[] = [
    API_URL_LOGIN,
    API_URL_REGISTER,
    API_URL_VERIFY_OTP
]

export const OPEN_URL_LIST: string[] = [
    API_URL_LOGIN,
    API_URL_REGISTER
]

export const MULTIPART_URL_LIST: string[] = []