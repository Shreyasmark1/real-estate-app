import LoginPage from "@/pages/Login";
import RouteBuilder from "@/route/RouteBuilder";
import { getUserType } from "@/utils/utils";
import { useRoutes } from "react-router-dom";

const Logout = () => {
    // TODO: logout
    // clear cache, storage
    return <LoginPage />
}

const MainLayout = () => {

    const routing = useRoutes([
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <LoginPage /> },
        { path: "/logout", element: <Logout /> },
        ...RouteBuilder({ user: getUserType(1) })
    ])

    return (
        <>
            {routing}
        </>
    );
}

export default MainLayout;