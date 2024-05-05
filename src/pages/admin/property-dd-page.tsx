import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { PropertyDDColumnRef } from "@/feature/property/_components/propert-dd-column-ref";
import PropertyDDForm from "@/feature/property/_components/property-dd-form";
import { PropertyDD } from "@/feature/property/_schemas/property-schema";
import { usePropertyService } from "@/services/PropertyService";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const PropertyDDPage = () => {
    const [openSheet, setOpenSheet] = useState<any>()

    const { getPropertyDDList } = usePropertyService()


    const toggleSheet = (dd?: PropertyDD) => {
        setOpenSheet(<PropertyDDForm defaultValues={dd} closeForm={closeSheet} />)
    }

    const columnRef = PropertyDDColumnRef(toggleSheet)

    const closeSheet = () => setOpenSheet(null)

    return (
        <div className="page-style">
            <Card className="w-full h-full">
                <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columnRef} data={getPropertyDDList().data} />
                </CardContent>
            </Card>
            <Sheet open={!!openSheet} onOpenChange={closeSheet}>
                <SheetContent className="w-4/6 sm:max-w-none">
                    <ScrollArea className="h-full" scrollHideDelay={200} type="scroll">
                        {openSheet}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
            <PlusIcon onClick={() => toggleSheet()} className="fixed h-[50px] w-[50px] bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full hover:cursor-pointer" />
        </div>
    );
}

export default PropertyDDPage;