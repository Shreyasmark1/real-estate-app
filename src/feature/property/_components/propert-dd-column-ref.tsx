import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SuperAdminGuard from "@/feature/super-admin/_gaurds/super-admin-guard"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import { CircleIcon } from "lucide-react"
import { PropertyDD } from "../_schemas/property-schema"
import { PropertyDDType } from "../_schemas/enum"

export const PropertyDDColumnRef = (toggleSheet: (dd?: PropertyDD) => void): ColumnDef<PropertyDD>[] => {

    return [
        {
            id: "uniqueId",
            enableHiding: true,
        },
        {
            id: "status",
            enableHiding: false,
            header: "Status",
            cell: () => {
                return (<CircleIcon fill="#7fff00" stroke="none" className="mx-2" size={10} />)
            }
        },
        {
            accessorKey: "value",
            header: "Value",
        },
        {
            accessorKey: "ddType",
            header: ({ column }) => {
                return (
                    <Button
                        className="p-0 m-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Type
                        <CaretSortIcon />
                    </Button>
                )
            },
            cell: ({ cell }) => {
                return ( cell.getValue() === PropertyDDType.PROPERTY_TYPE ? "Property Type" : "Sale Type")
            }

        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {

                const propertyDD = row.original

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
                                    onClick={() => navigator.clipboard.writeText(propertyDD.uniqueId || "")}
                                >
                                    <span className="w-full"> Copy ID </span>
                                </DropdownMenuItem>
                            </SuperAdminGuard>
                            <DropdownMenuSeparator />
                            <SuperAdminGuard>
                                <DropdownMenuItem onClick={() => toggleSheet(propertyDD)}><span className="w-full"> Edit </span></DropdownMenuItem>
                            </SuperAdminGuard>
                            <DropdownMenuItem
                                onClick={undefined}
                            >
                                <span className="w-full">Disable</span></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]
}