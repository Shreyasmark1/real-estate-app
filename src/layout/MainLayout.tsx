import { useAuth } from "@/lib/hooks/useAuth";
import LoginPage from "@/pages/Login";
import RouteBuilder, { RouteDefinition } from "@/route/RouteBuilder";
import { logOnDev } from "@/utils/logger";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = () => {

    const { authority, isLoggedIn, logout } = useAuth()

    const getFeatureRoutes = (): RouteDefinition[] => {
        console.log("hi")
        if (isLoggedIn) {
            return RouteBuilder({ authority })
        }
        return []
    }

    const Logout = () => {
        useEffect(() => {
            logout();
        }, []);

        return null;
    }

    const routing = useRoutes([
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <LoginPage /> },
        { path: "/logout", element: <Logout /> },
        ...getFeatureRoutes()
    ])

    useEffect(() => {
        // Navigate to authority dashbaord
        logOnDev(authority)
        logOnDev(routing)
    }, [authority])

    useEffect(() => {
        console.log(routing)
    },[routing])

    return (
        <>
            {routing}
        </>
    );
}

export default MainLayout;