import { ApiResponse } from "@/api/response-type/ApiResponse"
import { HttpClient } from "@/lib/network/http-helper"
import { SubscriptionPlan } from "@/feature/subscription/_schemas/subscription-plan-form-schema"
import { PlanStatus } from "@/feature/subscription/_schemas/subscription-types"
import { StringUtil } from "@/lib/utils/string-util"

const API_URL_PLANS = "/subscription/plan"
const API_URL_CHOOSE_PLAN = "/subscription/choose-plan"

const choosePlan = (planId: string): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.post({ path: API_URL_CHOOSE_PLAN + "/" + planId, body: null })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const createOrUpdatePlan = (plan: SubscriptionPlan): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        const pathVariable = StringUtil.isEmptyString(plan.uniqueId) ? null : plan.uniqueId
        HttpClient.post({ path: API_URL_PLANS, pathVariable: pathVariable, body: plan })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const getPlans = (): Promise<SubscriptionPlan[]> => {
    return new Promise((resolve, reject) => {
        HttpClient.get({ path: API_URL_PLANS })
            .then((res: ApiResponse) => resolve(res.data.plans))
            .catch((e) => reject(e))
    })
}

const togglePlanStatus = (uniqueId: string, planStatus: PlanStatus): Promise<ApiResponse> => {

    if (StringUtil.isEmptyString(uniqueId) || planStatus == null) Promise.reject("Invalid plan id or status");

    return new Promise((resolve, reject) => {
        HttpClient.post({ path: `${API_URL_PLANS}/${uniqueId}/status`, body: { status: planStatus } })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(new Error(e)))
    })
}

export const SubscriptionApi = {
    getPlans,
    createOrUpdatePlan,
    choosePlan,
    togglePlanStatus
}