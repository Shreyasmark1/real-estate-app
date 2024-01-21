import SubscriptionPlanCard from "@/components/SubscriptionPlanCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageName } from "@/lib/hooks/usePageName";
import { SubscriptionPlan } from "@/lib/schema/subscription-plan/subscription-plan-form-schema";
import { getPaymentStatus, getPlanName } from "@/lib/store/local-storage/local-storage";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";
import { Key, useEffect } from "react";

const SubscribtionPage = () => {
    const PAGE_NAME = "Pricing"
    const { setPageName } = usePageName();

    const paymentStatus = getPaymentStatus();

    const planName = getPlanName();

    const { plans, choosePlan } = useSubscriptionService()

    useEffect(() => {
        setPageName(PAGE_NAME)
    }, [])

    return (
        <>
            {
                paymentStatus ? <div> You subscribed to {planName} </div> :
                    (
                        <>
                            <div className="mt-3 text-center sm:text-left">
                                <span className="font-semibold text-3xl bt-3 sm:mb-3 text-purple-600">Unlock a world of premium features!</span><br />
                                <span className="font-light md:font-medium mt-10">Step into the future with our tailored plans. Choose your subscription plan today!</span>
                            </div>
                            <br />
                            <div className="flex flex-col sm:flex-row items-center justify-center">
                                {
                                    plans.length > 0 ? (
                                        plans.map((plan: SubscriptionPlan, index: Key | null | undefined) => (
                                            <SubscriptionPlanCard key={index} plan={plan} handler={choosePlan} />
                                        ))
                                    ) : <div> Plans are not available for now </div>
                                }
                            </div>
                            <br />
                            <div className="flex flex-col items-center justofy-center mx-2">
                                <div className="font-semibold text-2xl mb-7">FAQs</div>
                                <Accordion type="single" collapsible className="w-[350px] md:w-[600px]">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger> How do we pay?</AccordionTrigger>
                                        <AccordionContent>
                                            We offer bank card, upi payment option
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger> Can i get refund?</AccordionTrigger>
                                        <AccordionContent>
                                            Please go throught our terms and conditions
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </>
                    )
            }
        </>
    );
}

export default SubscribtionPage;