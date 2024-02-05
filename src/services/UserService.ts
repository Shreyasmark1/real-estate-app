import { UsersApi } from "@/api/user-api";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_KEY = "users";

export const useUserService = () => {
    const queryClient = useQueryClient()

    const users = useQuery({ queryKey: [QUERY_KEY], queryFn: UsersApi.getUsers , initialData: [], retry: false})

    const makeUserAdmin = useMutation({
        mutationFn: (uniqueId: string) => UsersApi.makeUserAsAdmin(uniqueId),
        onSuccess(_data, _variables, _context) {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
        },
    })

    return { users, makeUserAdmin };
}