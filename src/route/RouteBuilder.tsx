import MainLayout from "@/layout/MainLayout";
import UserLayout from "@/layout/UserLayout";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import NewProjectPage from "@/pages/project/AddProject";
import UserDashboard from "@/pages/user/UserDashboard";
import { APP_NAME } from "@/utils/constants";
import { ReactNode } from "react";

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
                { path: "", element: <div>Hellow world</div> },
                { path: "/login", element: <LoginPage /> },
                { path: "/register", element: <RegisterPage /> },
                {
                    element: <UserLayout />,
                    children: [
                        {
                            path: "/dashboard",
                            element: <UserDashboard />,
                            name: APP_NAME
                        },
                        {
                            path: "/explore",
                            element: <div>Search project</div>
                        },
                        {
                            path: "/project",
                            element: <> Project page</>
                        },
                        {
                            path: "/settings",
                            element: <> Project 1</>
                        },
                        {
                            path: "/add-project",
                            element: <NewProjectPage />
                        }
                    ]
                },
                {
                    path: "/admin",
                    element: <div>Admin </div>
                }
            ]
        }
    ]);
}

export default RouteBuilder;