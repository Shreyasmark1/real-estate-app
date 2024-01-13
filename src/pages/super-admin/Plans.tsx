import { DataTable } from "@/components/DataTable";
import PlanForm from "@/components/forms/PlanForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { usePageName } from "@/lib/context/PageContext";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table"
import { CircleIcon } from "lucide-react";
import { useState } from "react";

type ListType = {
    planName: string,
    price: number,
    uniqueId: string,
    updatedAt: string
}

const Plans = () => {

    const [openSheet, setOpenSheet] = useState(false)

    const { setPageName } = usePageName()

    setPageName("Plans")

    const list = [
        { planName: "plan name", price: 10, uniqueId: "ytut", updatedAt: "12-10-2024" },
        { planName: "plan name", price: 10, uniqueId: "ytut", updatedAt: "12-10-2024" },
        { planName: "plan name", price: 10, uniqueId: "ytut", updatedAt: "12-10-2024" },
        { planName: "plan name", price: 10, uniqueId: "ytut", updatedAt: "12-10-2024" },
        { planName: "plan name", price: 10, uniqueId: "ytut", updatedAt: "12-10-2024" },
        { planName: "plan name", price: 10, uniqueId: "ytut", updatedAt: "12-10-2024" },

    ]

    const columns: ColumnDef<ListType>[] = [
        {
            id: "status",
            enableHiding: false,
            header: "Status",
            cell: () => {

                return (
                    <CircleIcon fill="#7fff00" stroke="none" className="mx-2" size={10} />
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

                return <div className="text-right font-medium">{formatted}</div>
            }
        },
        {
            accessorKey: "updatedAt",
            header: ({ column }) => {
                return (
                    <Button
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
                    <div className="px-4">
                        {typeof updatedAt === "string" ? updatedAt : ""}
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
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(plan.uniqueId)}
                            >
                                <span className="w-full"> Copy ID </span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setOpenSheet(true)}><span className="w-full"> Edit </span></DropdownMenuItem>
                            <DropdownMenuItem><span className="w-full">Disable</span></DropdownMenuItem>
                            <DropdownMenuItem className="bg-destructive text-destructive-foreground hover:bg-destructive/90"><span className="w-full">Delete</span></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    return (
        <div className="page-style flex justify-center">
            <Card className="h-full p-2 h-full">
                <DataTable columns={columns} data={list} />
            </Card>
            <Sheet open={openSheet} onOpenChange={() => setOpenSheet(prev => !prev)}>
                <SheetContent className="w-1/2 sm:max-w-none">
                    <PlanForm/>
                </SheetContent>
            </Sheet>
        </div >
    );
}

export default Plans;