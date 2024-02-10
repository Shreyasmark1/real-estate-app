import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { SubscriptionPlan } from "@/schema/subscription/subscription-plan-form-schema"
import { CircleIcon } from "lucide-react"
import { formatDate } from "@/lib/utils/utils"
import { PlanStatus } from "@/schema/subscription/subscription-types"
import SuperAdminGuard from "@/layout/guards/SuperAdminGuard"
import { useSubscriptionService } from "@/services/SubscriptionSerivce"

// export const SubscriptionTableColumnRef = (setOpenSheet: { (value: SetStateAction<boolean>): void; (arg0: () => JSX.Element): void }): ColumnDef<SubscriptionPlan>[] => [

export const SubscriptionTableColumnRef = (toggleSheet: (plans?: SubscriptionPlan) => void): ColumnDef<SubscriptionPlan>[] => {

    const { togglePlanStatus } = useSubscriptionService();

    const enablePlan = (uniqueId: string) => togglePlanStatus.mutate({ uniqueId, status: PlanStatus.ACTIVE })
    const disablePlan = (uniqueId: string) => togglePlanStatus.mutate({ uniqueId, status: PlanStatus.DISABLED })

    return [
        {
            id: "status",
            enableHiding: false,
            header: "Status",
            cell: ({ row }) => {

                const plan: SubscriptionPlan = row.original
                
                const status = row.getValue("status")     
                
                console.log(plan.status, "hi", status);
                

                const fillColor = plan.status === PlanStatus.ACTIVE ? "#7fff00" : "#8c8c8c"

                return (
                    <CircleIcon fill={fillColor}
                        stroke="none"
                        className="mx-2"
                        size={10} />
                )

            }

        },
        {
            accessorKey: "planName",
            header: "Plan Name",
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("price"))

                // Format the amount as a dollar amount
                const formatted = new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                }).format(amount)

                return <div className="font-medium">{formatted}</div>
            }
        },
        {
            accessorKey: "createdAt",
            header: ({ column }) => {
                return (
                    <Button
                        className="p-0 m-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Created on
                        <CaretSortIcon />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const createdAt: string = new String(row.getValue("createdAt")).toString()
                return (
                    <div>
                        {formatDate(createdAt)}
                    </div>
                )
            }
        },
        {
            accessorKey: "updatedAt",
            header: ({ column }) => {
                return (
                    <Button
                        className="p-0 m-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Last updated
                        <CaretSortIcon />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const updatedAt = row.getValue("updatedAt")
                return (
                    <div>
                        {!updatedAt ? "No data available" : formatDate(new String(updatedAt).toString())}
                    </div>
                )
            }
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const plan = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-4 w-4 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="text-center">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <SuperAdminGuard>
                                <DropdownMenuItem
                                    onClick={() => navigator.clipboard.writeText(plan.uniqueId)}
                                >
                                    <span className="w-full"> Copy ID </span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => toggleSheet(plan)}><span className="w-full"> Edit </span></DropdownMenuItem>
                            </SuperAdminGuard>
                            {
                                plan.status === PlanStatus.ACTIVE ?
                                    (
                                        <DropdownMenuItem onClick={() => disablePlan(plan.uniqueId)}><span className="w-full">Disable</span></DropdownMenuItem>
                                    ) :
                                    (
                                        <DropdownMenuItem onClick={() => enablePlan(plan.uniqueId)}><span className="w-full">Enable</span></DropdownMenuItem>
                                    )
                            }
                            {/* <DropdownMenuItem className="bg-destructive text-destructive-foreground hover:bg-destructive/90"><span className="w-full">Delete</span></DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]
}