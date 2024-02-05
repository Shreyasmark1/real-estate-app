import { SubscriptionApi } from "@/api/subscription-api";
import { SubscriptionPlan } from "@/schema/subscription/subscription-plan-form-schema"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_KEY = "plans";

export const useSubscriptionService = () => {

    const queryClient = useQueryClient()

    const plans = useQuery({ queryKey: [QUERY_KEY], queryFn: SubscriptionApi.getPlans , initialData: []})

    const savePlan = useMutation({
        mutationFn: (plan: SubscriptionPlan) => SubscriptionApi.createOrUpdatePlan(plan),
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        },
    })

    const selectPlan = useMutation({ mutationFn: (planId: string) => SubscriptionApi.choosePlan(planId)})

    return { plans, savePlan, selectPlan };
}