import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SuperAdminGuard from "@/layout/guards/SuperAdminGuard"
import { DataDictionary } from "@/schema/data-dictionary/data-dictionary-form-schema"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"

function DataDictionaryColumnRef(): ColumnDef<DataDictionary>[] {

    return [
        {
            id: "uniqueId",
            enableHiding: true,
        },
        {
            accessorKey: "ddValue",
            header: "Value",
        },
        {
            accessorKey: "ddTypeName",
            header: "Type",
        },
        {
            accessorKey: "createdAt",
            header: "Created At"
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const dataDictionary = row.original

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
                                    onClick={() => navigator.clipboard.writeText(dataDictionary.uniqueId)}
                                >
                                    <span className="w-full"> Copy ID </span>
                                </DropdownMenuItem>
                            </SuperAdminGuard>
                            <DropdownMenuSeparator />
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

export { DataDictionaryColumnRef }