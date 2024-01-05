import { SubscriptionPlan } from "@/lib/schema/subscription-plan";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type Props = {
    plan: SubscriptionPlan,
    handler: (planId: string) => void,
}

const SubscriptionPlanCard = ({ plan, handler }: Props) => {
    return (
        <div className="sm:w-full md:w-[300px] my-1 md:mx-8 text-center text-gray-600">
            <div className="text-xl p-3 text-pink-600 font-semibold">{plan.planName}</div>
            <Separator />
            <div className="p-4 text-gray-900 text-2xl"> Rs.{plan.price}</div>
            {
                plan.features.length > 0 ? (
                    plan.features.map((feature) => (
                        <>
                            <Separator />
                            <div className="p-3"> {feature} </div>
                        </>
                    ))
                ) : <></>
            }
            <Separator />
            <Button variant="outline" onClick={() => handler(plan.uniqueId)} className="bg-green-400 text-white mt-5 mb-7">Continue</Button>
        </div>
    );
}

export default SubscriptionPlanCard;