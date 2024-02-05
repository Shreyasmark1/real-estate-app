import { QueryClient } from "@tanstack/react-query";


// TODO: can use different query client for different use cases?

export const networkQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});