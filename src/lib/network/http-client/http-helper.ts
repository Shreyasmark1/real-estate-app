import axios from "axios";
import { onError, onRequest, onResponse } from "./http-interceptor";
import { ApiResponse } from "../ApiResponse";
import { generateApiMessage } from "../util";
import { BASE_URL } from "@/utils/env-helper";

export const Axios = axios.create({ baseURL: BASE_URL })

Axios.interceptors.request.use(onRequest, onError);
Axios.interceptors.response.use(onResponse, onError);

interface HttpPostParam {
    path: string,
    queryParams?: any,
    body: any,
    abortController?: any
}

interface HttpGetParam {
    path: string,
    queryParams?: any,
    abortController?: any
}

const get = ({ path, queryParams = null, abortController = undefined}: HttpGetParam): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Axios.get(path, 
            { 
                params: queryParams,
                signal: abortController
            })
            .then((res) => {
                const response = new ApiResponse(res)

                if (response.isSuccess) {
                    return resolve(response)
                }

                return reject(generateApiMessage(response))
            })
            .catch(e => {
                reject(e);
            })
    })

}

const post = ({ path, queryParams = null, body = null, abortController = undefined }: HttpPostParam): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Axios.post(path, body,
            {
                params: queryParams,
                signal: abortController
            })
            .then((res) => {
                const response = new ApiResponse(res)

                if (response.isSuccess) {
                    return resolve(response)
                }

                return reject(generateApiMessage(response))
            })
            .catch(e => {
                reject(e);
            })
    })
}

const put = () => {

}

const multipartPost = () => {

}

export const Http = {
    get,
    post,
    put,
    multipartPost
}

