import DialogContextProvider from "./lib/context/AlertContext";
import MainLayout from "./layout/MainLayout";
import { Provider } from 'react-redux'
import { store } from "./lib/store/redux/store";
import AuthContextProvider from "./lib/context/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { networkQueryClient } from "./lib/cache/query-client";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <DialogContextProvider>
                    <QueryClientProvider client={networkQueryClient}>
                        <AuthContextProvider>
                            <MainLayout />
                        </AuthContextProvider>
                    </QueryClientProvider>
                </DialogContextProvider>
            </Provider>
        </>
    );
}

export default App;