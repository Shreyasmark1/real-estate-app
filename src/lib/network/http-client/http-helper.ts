import axios from "axios";
import { onError, onRequest, onResponse } from "./http-interceptor";
import { ApiResponse } from "../ApiResponse";
import { generateApiMessage } from "../util";

export const Axios = axios.create({ baseURL: "http://localhost:8080" })

Axios.interceptors.request.use(onRequest, onError);
Axios.interceptors.response.use(onResponse, onError);

export const get = () => {

}

export interface HttpPostParam {
    path: string,
    queryParams?: any,
    body: any
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

export const put = () => {

}

export const multipartPost = () => {

}

export const Http = {
    get,
    post,
    put,
    multipartPost
}

