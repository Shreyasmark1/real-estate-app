import UserLayout from "@/layout/UserLayout";
import NewProjectPage from "@/pages/AddProject";
import SubscribtionPage from "@/pages/user/Subscription";
import UserDashboard from "@/pages/user/UserDashboard";
import { ReactNode } from "react";
import PaymentGuard from "@/layout/guards/PaymentGauard";
import SearchProjectPage from "@/pages/user/SearchProjects";
import ProjectDetailPage from "@/pages/ProjectDetail";
import AuthGuard from "@/layout/guards/AuthGuard";
import UsersPage from "@/pages/admin/Users";
import AdminLayout from "@/layout/AdminLayout";
import { ADMIN, SUPER_ADMIN } from "@/utils/constants";

type RouteDefinition = {
    path?: string,
    element: ReactNode,
    children?: RouteDefinition[]
}

type Prop = {
    user: string
}

const RouteBuilder = ({ user }: Prop): RouteDefinition[] => {

    if (user === ADMIN) {
        return ([
            {
                path:"/admin",
                element: <AuthGuard><AdminLayout/></AuthGuard>,
                children: [
                    { path: "", element: <div>Admin</div>},
                    { path: "dashboard", element: <div>Admin</div> },
                    { path: "users", element: <UsersPage/>}
                ]
            }
        ])
    }

    if (user == SUPER_ADMIN) {
        return ([
            {
                path:"/super-admin",
                element: <AuthGuard><UserLayout /></AuthGuard>,
                children: [
                    { path: "/", element: <div>Super admin</div> }
                ]
            }
        ])
    }

    return ([
        {
            element: <AuthGuard><UserLayout /></AuthGuard>,
            children: [
                {
                    path: "/dashboard",
                    element: <UserDashboard />,
                },
                {
                    path: "/search",
                    element: <SearchProjectPage />
                },
                {
                    path: "/project",
                    element: <ProjectDetailPage />
                },
                {
                    path: "/add-project",
                    element: <PaymentGuard> <NewProjectPage /> </PaymentGuard>
                },
                {
                    path: "/explore",
                    element: <PaymentGuard><div> Page under development</div></PaymentGuard>
                },
                {
                    path: "/subscription",
                    element: <SubscribtionPage />
                }
            ]
        }
    ])
}

export default RouteBuilder;