import { ROLE_SUPER_ADMIN, ROLE_ADMIN, ROLE_USER } from "@/config/constants";
import { useAuth } from "@/lib/hooks/useAuth";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import RouteBuilder, { RouteDefinition } from "@/routing/RouteBuilder";
import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

const MainLayout = () => {

    const { authority, isLoggedIn, logout } = useAuth()

    const navigate = useNavigate();

    const getFeatureRoutes = (): RouteDefinition[] => {
        if (isLoggedIn) {
            return RouteBuilder({ role:authority })
        }
        return []
    }

    const Logout = () => {
        useEffect(() => {
            logout()
        },[])
        
        return <LoginPage/>
    }

    const routing = useRoutes([
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/logout", element: <Logout/> },
        ...getFeatureRoutes()
    ])

    useEffect(() => {
        if(authority === ROLE_SUPER_ADMIN) navigate("/super-admin")
        if(authority === ROLE_ADMIN) navigate("/admin")
        if(authority === ROLE_USER) navigate("/dashboard")
        if(!authority) navigate("/login")
        console.log("authority",authority)
    }, [authority])

    return (
        <>
            {routing}
        </>
    );
}

export default MainLayout;