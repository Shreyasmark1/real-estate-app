import { DataTable } from "@/components/DataTable";
import PlanForm from "@/components/forms/PlanForm";
import { SubscriptionTableColumnRef } from "@/components/subscription/SubscriptionTableColumn";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { usePageName } from "@/lib/hooks/usePageName";
import { RootState } from "@/lib/store/redux/store";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const SubscriptionPlanList = () => {

    const [openSheet, setOpenSheet] = useState<any>()
    const { setPageName } = usePageName()
    const columnRef = SubscriptionTableColumnRef(setOpenSheet)
    const plans = useSelector((state: RootState) => state.subscriptionReducer.planList)

    useEffect(() => {
        setPageName("Plans")
    }, [])

    return (
        <div className="page-style flex justify-center">
            <Card className="w-full p-2 h-full">
                <DataTable columns={columnRef} data={plans} />
            </Card>
            <Sheet open={!!openSheet} onOpenChange={() => setOpenSheet(null)}>
                <SheetContent className="w-4/6 sm:max-w-none">
                    <ScrollArea className="h-full" scrollHideDelay={200} type="scroll">
                        {openSheet}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
            <PlusIcon  onClick={() =>  setOpenSheet(<PlanForm/>)}  className="fixed h-[50px] w-[50px] bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full"/>
        </div >
    );
}

export default SubscriptionPlanList;