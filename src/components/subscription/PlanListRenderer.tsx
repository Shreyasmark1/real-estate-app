import { SubscriptionPlan } from "@/schema/subscription/subscription-plan-form-schema";
import SubscriptionPlanCard from "./SubscriptionPlanCard";
import { Key } from "react";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";

type Props = {
    plans?: SubscriptionPlan[],
}

const PlanListRenderer = ({ plans }: Props) => {

    const { selectPlan } = useSubscriptionService()

    const onSelect = (uniqueId: string) => selectPlan.mutate(uniqueId)

    if (plans && plans.length > 0) {
        return (
            <div className="flex flex-col sm:flex-row">
                {
                    plans.map((plan: SubscriptionPlan, index: Key | null | undefined) => (
                        <SubscriptionPlanCard key={index} plan={plan} handler={onSelect} disabled={selectPlan.isPending} />
                    ))
                }
            </div>
        )
    }

    return (
        <div> Plans are not available for now </div>
    );
}

export default PlanListRenderer;