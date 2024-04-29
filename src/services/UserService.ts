import { UsersApi } from "@/api/user-api";
import { useAlert } from "@/lib/hooks/useAlert";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_KEY = "users";

type MutationVariables = {
    uniqueId: string;
    asAdmin: boolean;
    fullName: string;
};

export const useUserService = () => {
    const queryClient = useQueryClient()

    const { showToastSuccess, showToastError } = useAlert()

    const users = useQuery({ queryKey: [QUERY_KEY], queryFn: UsersApi.getUsers, initialData: [], retry: false })

    if (users.isError) showToastError(users.error.message)

    const changeUserRole = useMutation({
        mutationFn: ({ uniqueId, asAdmin }: MutationVariables) => UsersApi.changeUserRole(uniqueId, asAdmin),
        onSuccess(_data, variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            showToastSuccess(`Made ${variables.fullName} as ${variables.asAdmin ? "Admin" : "User"}`)
        },
        onError: ({error} : any) => showToastError(error.message)
    })

    return { users, changeUserRole };
}