import { useNotification } from "@/lib/hooks/useNotification"
import { ApiResponse } from "@/lib/network/ApiResponse"
import { Http } from "@/lib/network/http-client/http-helper"
import { SubscriptionPlan } from "@/lib/schema/subscription-plan/subscription-plan-form-schema"
import { setSubscriptionPlanList } from "@/lib/store/redux/slice/SubscriptionSlice"
import { isEmptyString } from "@/utils/StringUtil"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const API_URL_PLANS = "/subscription/plan"
const API_URL_INNIT_PAYMENT = "/subscription/choose-plan"

export const useSubscriptionService = () => {
    const { showDialog } = useNotification()
    const dispatch = useDispatch()

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

    const savePlan = (plan: SubscriptionPlan) => {
        const pathVariable = isEmptyString(plan.uniqueId) ? null : plan.uniqueId
        Http.post({ path: API_URL_PLANS, pathVariable: pathVariable, body: plan })
            .then((_res: ApiResponse) => {
                showDialog({ message: "Saved!" })
            })
            .catch((e) => {
                showDialog(e)
            })
    }

    const getPlans = () => {
        Http.get({ path: API_URL_PLANS })
            .then((res: ApiResponse) => {
                dispatch(setSubscriptionPlanList(res.data.plan))
            })
            .catch((e) => {
                showDialog(e)
            })
    }

    useEffect(() => {
        getPlans()
    }, []);

    return { choosePlan, savePlan };
}