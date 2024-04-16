import { SubscriptionApi } from "@/api/subscription-api";
import { useAlert } from "@/lib/hooks/useAlert";
import { SubscriptionPlan } from "@/feature/subscription/_schemas/subscription-plan-form-schema"
import { PlanStatus } from "@/feature/subscription/_schemas/subscription-types";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_KEY = "plans";

type MutationVariables = {
    uniqueId: string;
    status: PlanStatus;
};

export const useSubscriptionService = () => {

    const queryClient = useQueryClient()
    const { showToastError, showToastSuccess } = useAlert()

    const plans = useQuery({ queryKey: [QUERY_KEY], queryFn: SubscriptionApi.getPlans, initialData: [] })

    if (plans.isError) showToastError(plans.error.message)

    const savePlan = useMutation({
        mutationFn: (plan: SubscriptionPlan) => SubscriptionApi.createOrUpdatePlan(plan),
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess("Saved!")
        },
        onError(error) { showToastError(error.message) }
    })

    const selectPlan = useMutation({
        mutationFn: (planId: string) => SubscriptionApi.choosePlan(planId),
        onSuccess(data, _variables, _context) {
            window.location.replace(data.data.url)
        },
        onError(error) { showToastError(error.message) }
    })

    const togglePlanStatus = useMutation({
        mutationFn: ({ uniqueId, status } : MutationVariables) => SubscriptionApi.togglePlanStatus(uniqueId, status),
        onSuccess(_data, variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess(variables.status === PlanStatus.ACTIVE? "Enabled This Plan" : "Disabled This Plan")
        },
        onError(error) { showToastError(error.message) }
    })

    return { plans, savePlan, selectPlan, togglePlanStatus };
}