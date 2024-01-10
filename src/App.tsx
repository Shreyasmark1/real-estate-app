import DialogContextProvider from "./lib/context/DialogContext";
import MainLayout from "./layout/MainLayout";

const App = () => {
    return (
        <>
            <DialogContextProvider>
                <MainLayout/>
            </DialogContextProvider>
        </>
    );
}

export default App;