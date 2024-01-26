import { DataTable } from "@/components/DataTable";
import PlanForm from "@/components/forms/PlanForm";
import { SubscriptionTableColumnRef } from "@/features/subscription/components/SubscriptionTableColumn";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useAlert } from "@/lib/hooks/useAlert";
import { usePageName } from "@/lib/hooks/usePageName";
import { SubscriptionPlan } from "@/feature/subscription/schema/subscription-plan-form-schema";
import { useSubscriptionService } from "@/features/subscription/services/SubscriptionSerivce";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const SubscriptionPlanPage = () => {
    const [openSheet, setOpenSheet] = useState<any>()

    const { plans } = useSubscriptionService()
    const { showToastAlert } = useAlert()
    const { setPageName } = usePageName()

    const toggleSheet = (plans?: SubscriptionPlan) => {
        setOpenSheet(<PlanForm defaultValues={plans} closeForm={closeSheet} />)
    }

    const closeSheet = () => {
        setOpenSheet(null)
    }

    const columnRef = SubscriptionTableColumnRef(toggleSheet)

    useEffect(() => {
        setPageName("Plans")
    }, [])

    if (plans.isError) {
        showToastAlert({ message: plans.error.message, isError: true })
    }

    return (
        <div className="page-style flex justify-center">
            <Card className="w-full p-2 h-full">
                {
                    plans.isLoading ? <div>Loading...</div> : <DataTable columns={columnRef} data={plans.data} />
                }
            </Card>
            <Sheet open={!!openSheet} onOpenChange={closeSheet}>
                <SheetContent className="w-4/6 sm:max-w-none">
                    <ScrollArea className="h-full" scrollHideDelay={200} type="scroll">
                        {openSheet}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
            <PlusIcon onClick={() => toggleSheet()} className="fixed h-[50px] w-[50px] bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full" />
        </div >
    );
}

export default SubscriptionPlanPage;