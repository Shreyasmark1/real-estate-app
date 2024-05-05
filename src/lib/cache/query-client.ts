import { QueryClient } from "@tanstack/react-query";

// TODO: will not reset all query after logout?
export const networkQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1, // 1 sec in milliseconds
            retry: 0, // Number of retry attempts
            retryDelay: 1000, // time delay between retry attempts
        }
    }
});