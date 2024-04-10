import AddPropertyPage from "@/pages/property/add-property-page";
import SubscribtionPage from "@/pages/user/ChooseSubscriptionPage";
import UserDashboard from "@/pages/dashboard/UserDashboardPage";
import { ReactNode } from "react";
import PaymentGuard from "@/layout/guards/PaymentGauard";
import ProjectDetailPage from "@/pages/user/ProjectDetail";
import AuthGuard from "@/layout/guards/AuthGuard";
import UsersPage from "@/pages/admin/UsersPage";
import AdminDashBoardPage from "@/pages/admin/AdminDashboardPage";
import SubscriptionPage from "@/pages/admin/PlansPage";
import SubscriptionPlanPage from "@/pages/admin/PlansPage";
import { ROLE_ADMIN, ROLE_SUPER_ADMIN, ROLE_USER } from "@/config/constants";
import Layout from "@/layout/Layout";
import SearchPropertyPage from "@/pages/property/search-property-page";

export type RouteDefinition = {
    path?: string,
    element: ReactNode,
    children?: RouteDefinition[]
}

type Prop = {
    role?: string
}

const RouteBuilder = ({ role }: Prop): RouteDefinition[] => {

    if (!role) return []
    switch (role) {
        case ROLE_ADMIN: return adminRoutes;
        case ROLE_SUPER_ADMIN: return superAdminRoutes;
        case ROLE_USER: return userRoutes;
        default: return []
    }
}

export default RouteBuilder;

const superAdminRoutes: RouteDefinition[] = [
    {
        path: "/super-admin",
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            { path: "", element: <div>Super Admin</div> },
            { path: "dashboard", element: <AdminDashBoardPage /> },
            { path: "plans", element: <SubscriptionPage /> },
            { path: "users", element: <UsersPage /> }
        ]
    }
]

const adminRoutes: RouteDefinition[] = [
    {
        path: "/admin",
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            { path: "", element: <div>Admin</div> },
            { path: "dashboard", element: <AdminDashBoardPage /> },
            { path: "plans", element: <SubscriptionPlanPage /> },
            { path: "users", element: <UsersPage /> }
        ]
    }
]

const userRoutes: RouteDefinition[] = [
    {
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            { path: "/dashboard", element: <UserDashboard /> },
            { path: "/search", element: <SearchPropertyPage /> },
            { path: "/project", element: <ProjectDetailPage /> },
            { path: "/add-property", element: <PaymentGuard> <AddPropertyPage /> </PaymentGuard> },
            { path: "/explore", element: <PaymentGuard><div> Page under development</div></PaymentGuard> },
            { path: "/subscription", element: <SubscribtionPage /> }
        ]
    }
]