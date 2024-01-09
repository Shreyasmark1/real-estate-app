import MainLayout from "@/layout/MainLayout";
import ProjectedPage from "@/layout/ProtectePage";
import UserLayout from "@/layout/UserLayout";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import NewProjectPage from "@/pages/AddProject";
import SubscribtionPage from "@/pages/Subscription";
import UserDashboard from "@/pages/UserDashboard";
import { ReactNode } from "react";
import PaymentGuard from "@/layout/PaymentGauard";
import SearchProjectPage from "@/pages/SearchProjects";
import ProjectDetailPage from "@/pages/ProjectDetail";

type RouteDefinition = {
    path?: string,
    element: ReactNode,
    children?: RouteDefinition[],
    name?: string
}

const RouteBuilder = (): RouteDefinition[] => {

    return ([
        {
            element: <MainLayout />,
            children: [
                { path: "/", element: <div>Hellow world</div> },
                { path: "/login", element: <LoginPage /> },
                { path: "/register", element: <RegisterPage /> },
                {
                    element: <ProjectedPage><UserLayout /></ProjectedPage>,
                    children: [
                        {
                            path: "dashboard",
                            element: <UserDashboard />,
                        },
                        {
                            path: "search",
                            element: <SearchProjectPage />
                        },
                        {
                            path: "project",
                            element: <ProjectDetailPage />
                        },
                        {
                            path: "add-project",
                            element: <PaymentGuard> <NewProjectPage /> </PaymentGuard>
                        },
                        {
                            path: "explore",
                            element: <PaymentGuard><div> Page under development</div></PaymentGuard>
                        },
                        {
                            path: "subscription",
                            element: <SubscribtionPage />
                        }
                    ]
                },
                {
                    path: "admin",
                    element: <div>Admin </div>
                }
            ]
        }
    ]);
}

export default RouteBuilder;