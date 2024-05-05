import { useAuth } from "@/lib/hooks/useAuth";
import LoginPage from "@/pages/login-page";
import NotFoundPage from "@/pages/not-found-page";
import RegisterPage from "@/pages/register-page";
import RouteBuilder, { RouteDefinition } from "@/routing/RouteBuilder";
import RouteLayout from "@/routing/RouteLayout";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

const MainLayout = () => {

    const { authority, isLoggedIn, logout } = useAuth()

    const getFeatureRoutes = (): RouteDefinition[] => {
        if (isLoggedIn) {
            return RouteBuilder({ role: authority })
        }
        return []
    }

    const Logout = () => {
        useEffect(() => {
            logout()
        }, [])

        return <LoginPage />
    }

    const routes: RouteDefinition[] = [
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/logout", element: <Logout /> },
        ...getFeatureRoutes(),
        { path: "*", element: <NotFoundPage /> }
    ]

    return (
        <BrowserRouter>
            <RouteLayout routes={routes} authority={authority} />
        </BrowserRouter>
    );
}

export default MainLayout;