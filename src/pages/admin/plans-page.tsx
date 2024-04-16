import { DataTable } from "@/components/DataTable";
import PlanForm from "@/feature/subscription/_components/PlanForm";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { usePageName } from "@/lib/hooks/usePageName";
import { SubscriptionPlan } from "@/feature/subscription/_schemas/subscription-plan-form-schema";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SubscriptionTableColumnRef } from "@/feature/subscription/_components/SubscriptionTableColumn";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";

const SubscriptionPlanPage = () => {
    const [openSheet, setOpenSheet] = useState<any>()

    const { plans } = useSubscriptionService()
    const { setPageName } = usePageName()

    const toggleSheet = (plans?: SubscriptionPlan) => {
        setOpenSheet(<PlanForm defaultValues={plans} closeForm={closeSheet} />)
    }

    const closeSheet = () => setOpenSheet(null)

    const columnRef = SubscriptionTableColumnRef(toggleSheet)

    useEffect(() => setPageName("Plans"), [])

    return (
        <div className="page-style flex justify-center">
            <Card className="w-full p-2 h-full">
                <DataTable columns={columnRef} data={plans.data} />
            </Card>
            <Sheet open={!!openSheet} onOpenChange={closeSheet}>
                <SheetContent className="w-4/6 sm:max-w-none">
                    <ScrollArea className="h-full" scrollHideDelay={200} type="scroll">
                        {openSheet}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
            <PlusIcon onClick={toggleSheet} className="fixed h-[50px] w-[50px] bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full hover:cursor-pointer" />
        </div >
    );
}

export default SubscriptionPlanPage;