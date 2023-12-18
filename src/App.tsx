import { useRoutes } from "react-router-dom";
import RouteBuilder from "./route/RouteBuilder";
import DialogContextProvider from "./lib/context/DialogContext";

const App = () => {

    const routing = useRoutes(RouteBuilder())

    /* TODO: theme, providers */
    return (
        <>
            <DialogContextProvider>
                {routing}
            </DialogContextProvider>
        </>
    );
}

export default App;