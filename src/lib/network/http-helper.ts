import axios from "axios";
import { onError, onRequest, onResponse } from "./http-interceptor";
import { ApiResponse } from "../../api/response-type/ApiResponse";
import { BASE_URL } from "@/config/env-helper";
import { generateApiMessage } from "@/lib/utils/api-util";

const Axios = axios.create({ baseURL: BASE_URL })

Axios.interceptors.request.use(onRequest, onError);
Axios.interceptors.response.use(onResponse, onError);

interface HttpPostParam {
    path: string,
    pathVariable?: string | number | boolean | null
    queryParams?: any,
    body: any,
    abortController?: any
}

interface HttpGetParam {
    path: string,
    queryParams?: any,
    abortController?: any
}

// type HttpParam = {
//     path: string,
//     pathVariable?: string | number | boolean | null,
//     queryParams?: any,
//     abortController?: any
// } & ({ body: any } | {});

// type HttpGetParam = HttpParam & { body?: never };


const get = ({ path, queryParams = null, abortController = undefined }: HttpGetParam): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Axios.get(path,
            {
                params: queryParams,
                signal: abortController
            })
            .then((res) => {
                const response = new ApiResponse(res)
                if (response.isSuccess) return resolve(response)
                return reject(generateApiMessage(response))
            })
            .catch(e => reject(e))
    })

}

const post = ({ path, pathVariable = null, queryParams = null, body = null, abortController = undefined }: HttpPostParam): Promise<ApiResponse> => {

    if (pathVariable !== null) path = path + `/${pathVariable}`

    return new Promise((resolve, reject) => {
        Axios.post(path, body,
            {
                params: queryParams,
                signal: abortController
            })
            .then((res) => {
                const response = new ApiResponse(res)
                if (response.isSuccess) return resolve(response)
                return reject(new Error(generateApiMessage(response)))
            })
            .catch(e => reject(e))
    })
}

const put = () => {
    throw new Error("HTTP put not implemented")
}

const multipartPost = (path : string, formData: FormData) : Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Axios.post(path, formData)
            .then((res) => {
                const response = new ApiResponse(res)
                if (response.isSuccess) return resolve(response)
                return reject(new Error(generateApiMessage(response)))
            })
            .catch(e => reject(e))
    })
}

export const HttpClient = {
    get,
    post,
    put,
    multipartPost
}

