import AddPropertyPage from "@/pages/property/add-property-page";
import UserDashboard from "@/pages/user/user-dashboard-page";
import { ReactNode } from "react";
import PaymentGuard from "@/layout/guards/PaymentGauard";
import ProjectDetailPage from "@/feature/user/user/ProjectDetail";
import AuthGuard from "@/layout/guards/AuthGuard";
import UsersPage from "@/pages/users-page";
import AdminDashBoardPage from "@/pages/admin-dashboard-page";
import SubscriptionPage from "@/pages/plans-page";
import SubscriptionPlanPage from "@/pages/plans-page";
import { ROLE_ADMIN, ROLE_SUPER_ADMIN, ROLE_USER } from "@/config/constants";
import Layout from "@/layout/Layout";
import PropertyStatsPage from "@/pages/property/property-stats-page";
import DataDictionaryPage from "@/pages/data-dictionary/data-dictionary-page";

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
            { path: "users", element: <UsersPage /> },
            { path: "data-dictionary", element: <DataDictionaryPage /> }
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
            { path: "users", element: <UsersPage /> },
            { path: "data-dictionary", element: <DataDictionaryPage /> }
        ]
    }
]

const userRoutes: RouteDefinition[] = [
    {
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            { path: "/dashboard", element: <UserDashboard /> },
            // { path: "/search", element: <SearchPropertyPage /> },
            { path: "/property/new", element: <PaymentGuard> <AddPropertyPage /> </PaymentGuard> },
            { path: "/property/id", element: <ProjectDetailPage /> },
            { path: "/property/id/edit", element: <PaymentGuard> <AddPropertyPage /> </PaymentGuard> },
            { path: "/property/id/stats", element: <PaymentGuard> <PropertyStatsPage /> </PaymentGuard> }
            // { path: "/explore", element: <PaymentGuard><div> Page under development</div></PaymentGuard> },
            // { path: "/subscription", element: <SubscribtionPage /> }
        ]
    }
]