import DialogContextProvider from "./lib/context/DialogContext";
import MainLayout from "./layout/MainLayout";
import { Provider } from 'react-redux'
import { store } from "./lib/store/redux/store";
import AuthContextProvider from "./lib/context/AuthContext";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <DialogContextProvider>
                    <AuthContextProvider>
                        <MainLayout />
                    </AuthContextProvider>
                </DialogContextProvider>
            </Provider>
        </>
    );
}

export default App;