import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../schema/user/user-form-schema";
import { CircleIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useUserService } from "../../services/UserService";
import SuperAdminGuard from "@/layout/guards/SuperAdminGuard";
import tubeSpinner from "../../assets/tube-spinner.svg";
import { USER_TYPE_ADMIN, USER_TYPE_SUPER_ADMIN } from "@/config/constants";
import { ReactNode } from "react";

export const UserTableColumnRef = (): ColumnDef<User>[] => {
    const { changeUserRole } = useUserService()

    const makeAdmin = (uniqueId: string, fullName: string) => changeUserRole.mutate({ uniqueId, asAdmin: true, fullName })
    const makeUser = (uniqueId: string, fullName: string) => changeUserRole.mutate({ uniqueId, asAdmin: false, fullName })

    return [
        {
            id: "status",
            enableHiding: false,
            header: "Status",
            cell: () => {
                return (<CircleIcon fill="#7fff00" stroke="none" className="mx-2" size={10} />)
            }
        },
        {
            accessorKey: "fullName",
            header: "Full Name",
            cell: ({ row }) => {
                const user = row.original
                return renderName(user.fullName, user.role)
            }
        },
        {
            accessorKey: "mobile",
            header: "Mobile"
        },
        {
            accessorKey: "email",
            header: "Email"
        },
        {
            header: "Actions",
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const user = row.original

                if(user.role === USER_TYPE_SUPER_ADMIN) return (<></>)

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
                                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.uniqueId)}>
                                    <span className="w-full"> Copy ID </span>
                                </DropdownMenuItem>
                            </SuperAdminGuard>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem onClick={() => toggleSheet(user)}><span className="w-full"> Edit </span></DropdownMenuItem>
                            <DropdownMenuItem><span className="w-full">Disable</span></DropdownMenuItem> */}
                            <SuperAdminGuard>
                                {
                                    changeUserRole.isPending ? (
                                        <DropdownMenuItem className="flex justify-center"><img height={20} width={20} src={tubeSpinner} /></DropdownMenuItem>
                                    ) :
                                        (
                                            <>
                                                {
                                                    user.role === USER_TYPE_SUPER_ADMIN ? (<></>) :
                                                        user.role === USER_TYPE_ADMIN ?
                                                            (
                                                                <DropdownMenuItem>
                                                                    <span className="w-full" onClick={() => makeUser(user.uniqueId, user.fullName)}>Make User</span>
                                                                </DropdownMenuItem>
                                                            ) :
                                                            (
                                                                <DropdownMenuItem>
                                                                    <span className="w-full" onClick={() => makeAdmin(user.uniqueId, user.fullName)}>Make Admin</span>
                                                                </DropdownMenuItem>
                                                            )
                                                }
                                                {/* <DropdownMenuItem className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                                    <span className="w-full">Delete</span>
                                                </DropdownMenuItem> */}
                                            </>
                                        )
                                }
                            </SuperAdminGuard>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]
}

const renderName = (fullName: string, role: number): ReactNode => {
        
    if (role === USER_TYPE_SUPER_ADMIN) return (<> {fullName} <span className="text-violet-700"> (super admin) </span></>)
    if (role === USER_TYPE_ADMIN) return (<> {fullName} <span className="text-violet-700"> (admin)</span></>)

    return <span>{fullName}</span>;
}