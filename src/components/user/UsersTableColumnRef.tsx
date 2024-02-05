import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../schema/user/user-form-schema";
import { CircleIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useUserService } from "../../services/UserService";
import SuperAdminGuard from "@/layout/guards/SuperAdminGuard";
import tubeSpinner from "../../assets/tube-spinner.svg";
import { useAlert } from "@/lib/hooks/useAlert";
import { ROLE_ADMIN, ROLE_SUPER_ADMIN, ROLE_USER } from "@/config/constants";
import { useEffect } from "react";

export const UserTableColumnRef = (toggleSheet: (user?: User) => void): ColumnDef<User>[] => {
    const { makeUserAdmin } = useUserService()
    const { showToastAlert } = useAlert()

    const makeAdmin = (uniqueId: string) => {
        makeUserAdmin.mutate(uniqueId)
    }

    useEffect(() => {
        if (makeUserAdmin.isError) {
            showToastAlert({ message: makeUserAdmin.error.message, type: "error" })
        }
    
        if (makeUserAdmin.isSuccess) {
            showToastAlert({ message: "Made this user admin", type: "info" })
        }
    },[makeUserAdmin])

    const renderName = (fullName: string, role: number): string => {
        if (role === ROLE_SUPER_ADMIN) {
            return `${fullName} (super admin)`
        }

        if (role === ROLE_ADMIN) {
            return `${fullName} (admin)`
        }

        return fullName;
    }

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
                return <span>{renderName(user.fullName, user.role)}</span>
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
                            <DropdownMenuItem onClick={() => toggleSheet(user)}><span className="w-full"> Edit </span></DropdownMenuItem>
                            <DropdownMenuItem><span className="w-full">Disable</span></DropdownMenuItem>
                            <SuperAdminGuard>
                                {
                                    makeUserAdmin.isPending ? (
                                        <DropdownMenuItem className="flex justify-center"><img height={20} width={20} src={tubeSpinner} /></DropdownMenuItem>
                                    ) :
                                        (
                                            <>
                                                {
                                                    user.role === ROLE_USER ? (
                                                        <DropdownMenuItem>
                                                            <span className="w-full" onClick={() => makeAdmin(user.uniqueId)}>Make Admin</span>
                                                        </DropdownMenuItem>
                                                    ): <></>
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