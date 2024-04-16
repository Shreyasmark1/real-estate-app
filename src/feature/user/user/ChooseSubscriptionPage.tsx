import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";
import { usePageName } from "@/lib/hooks/usePageName";
import { getPaymentStatus, getPlanName } from "@/lib/store/local-storage/local-storage";
import { useEffect } from "react";
import PlanListRenderer from "@/components/subscription/PlanListRenderer";

const ChooseSubscriptionPage = () => {
    const PAGE_NAME = "Pricing"
    const { setPageName } = usePageName();
    const paymentStatus = getPaymentStatus();

    const planName = getPlanName();

    const { plans } = useSubscriptionService();

    useEffect(() => setPageName(PAGE_NAME), [])

    return (
        <>
            {
                paymentStatus ? <div> You subscribed to {planName} </div> :
                    (
                        <div className="page-style">
                            <div className="mt-3 text-center sm:text-left">
                                <span className="font-semibold text-3xl bt-3 sm:mb-3 text-purple-600">Unlock a world of premium features!</span><br />
                                <span className="font-light md:font-medium mt-10">Step into the future with our tailored plans. Choose your subscription plan today!</span>
                            </div>
                            <br />
                            <PlanListRenderer plans={plans.data} />
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
                        </div>
                    )
            }
        </>
    );
}

export default ChooseSubscriptionPage;