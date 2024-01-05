import axios from "axios";
import { onError, onRequest, onResponse } from "./http-interceptor";
import { ApiResponse } from "../ApiResponse";
import { generateApiMessage } from "../util";

export const Axios = axios.create({ baseURL: "http://localhost:8080" })

Axios.interceptors.request.use(onRequest, onError);
Axios.interceptors.response.use(onResponse, onError);

interface HttpPostParam {
    path: string,
    queryParams?: any,
    body: any
}

interface HttpGetParam {
    path: string,
    queryParams?: any
}

const get = ({ path, queryParams = null }: HttpGetParam): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Axios.get(path, { params: queryParams })
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

const post = ({ path, queryParams = null, body = null }: HttpPostParam): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Axios.post(path, body, { params: queryParams })
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

