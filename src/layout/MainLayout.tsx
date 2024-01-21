import { useAuth } from "@/lib/hooks/useAuth";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import RouteBuilder, { RouteDefinition } from "@/route/RouteBuilder";
import { AUTHORITY_ADMIN, AUTHORITY_SUPER_ADMIN, AUTHORITY_USER } from "@/utils/constants";
import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

const MainLayout = () => {

    const { authority, isLoggedIn, logout } = useAuth()

    const navigate = useNavigate();

    const getFeatureRoutes = (): RouteDefinition[] => {
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
        { path: "/register", element: <RegisterPage /> },
        { path: "/logout", element: <Logout /> },
        ...getFeatureRoutes()
    ])

    useEffect(() => {
        if(authority === AUTHORITY_SUPER_ADMIN) navigate("/super-admin")
        if(authority === AUTHORITY_ADMIN) navigate("/admin")
        if(authority === AUTHORITY_USER) navigate("/dashboard")
        if(!authority) navigate("/login")
        console.log(authority)
    }, [authority])

    return (
        <>
            {routing}
        </>
    );
}

export default MainLayout;