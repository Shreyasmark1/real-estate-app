import SubscriptionPlanCard from "@/components/SubscriptionPlanCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageName } from "@/lib/context/PageContext";
import { useNotification } from "@/lib/hooks/useNotificationDialog";
import { SubscriptionService } from "@/lib/network/api/subscription";
import { getPaymentStatus, getPlanName } from "@/lib/store/local-storage/local-storage";
import { useEffect, useState } from "react";

const SubscribtionPage = () => {
    const PAGE_NAME = "Pricing"

    const [plans, setPlans] = useState([]);

    const { setPageName } = usePageName();

    const { showDialog } = useNotification()

    const paymentStatus = getPaymentStatus();

    const planName = getPlanName();

    const handler = async (planId: string) => {
        try {

            const res = await SubscriptionService.choosePlan(planId);

            window.location.replace(res.data.url)

        } catch (error: any) {
            showDialog({ message: error, isError: true })
        }
    }

    const fetchPlans = async () => {
        try {

            const { data } = await SubscriptionService.getPlans()
            if (data.plans.length > 0) {
                setPlans(data.plans)
            }

        } catch (error: any) {
            showDialog({ message: error, isError: true })

        }
    }

    useEffect(() => {
        setPageName(PAGE_NAME)
        fetchPlans()
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
                                        plans.map((plan, index) => (
                                            <SubscriptionPlanCard key={index} plan={plan} handler={handler} />
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