import { DataTable } from "@/components/DataTable";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { UserTableColumnRef } from "@/components/user/UsersTableColumnRef";
import { useUserService } from "@/services/UserService";
import { useAlert } from "@/lib/hooks/useAlert";
import { usePageName } from "@/lib/hooks/usePageName";
import { useEffect, useState } from "react";

const UsersPage = () => {
    const [openSheet, setOpenSheet] = useState<any>()

    const { users } = useUserService()
    const { showToastAlert } = useAlert()
    const { setPageName } = usePageName()

    const toggleSheet = () => {
        // setOpenSheet(<PlanForm defaultValues={plans} closeForm={closeSheet} />)
    }

    const closeSheet = () => {
        setOpenSheet(null)
    }

    const columnRef = UserTableColumnRef(toggleSheet)

    useEffect(() => {
        setPageName("Users")
    }, [])

    if (users.isError) {
        showToastAlert({ message: users.error.message, type: "error", title: "ERROR" })
    }

    return (
        <div className="page-style flex justify-center">
            <Card className="w-full p-2 h-full">
                {
                    users.isError ? (<div>Error getting data</div>) :
                        users.isLoading ? <div>Loading...</div> :
                            <DataTable columns={columnRef} data={users.data} />
                }
            </Card>
            <Sheet open={!!openSheet} onOpenChange={closeSheet}>
                <SheetContent className="w-4/6 sm:max-w-none">
                    <ScrollArea className="h-full" scrollHideDelay={200} type="scroll">
                        {openSheet}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
            {/* <PlusIcon onClick={() => toggleSheet()} className="fixed h-[50px] w-[50px] bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full" /> */}
        </div >
    );
}

export default UsersPage;