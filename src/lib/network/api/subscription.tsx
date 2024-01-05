import { ApiResponse } from "../ApiResponse"
import { API_URL_INNIT_PAYMENT, API_URL_PLANS } from "../config"
import { Http } from "../http-client/http-helper"

const getPlans = (): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Http.get({ path: API_URL_PLANS })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

const choosePlan = (planId: string): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        Http.post({ path: API_URL_INNIT_PAYMENT + "/" + planId, body: null })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export const SubscriptionService = {
    getPlans,
    choosePlan
}