import { ReactNode, lazy } from "react";
import AuthGuard from "@/feature/auth/_guards/AuthGuard";
import { ROLE_ADMIN, ROLE_SUPER_ADMIN, ROLE_USER } from "@/config/constants";
import Layout from "@/layout/Layout";
import { AsynPageLoader } from "@/components/async-component";

const AddPropertyPage = lazy(() => import("@/pages/user/property-edit-page"));
const UserDashboard = lazy(() => import("@/pages/user/user-dashboard-page"));
const PaymentGuard = lazy(() => import("@/layout/guards/PaymentGauard"));
const ProjectDetailPage = lazy(() => import("@/feature/property/ProjectDetail"));
const UsersPage = lazy(() => import("@/pages/admin/users-page"));
const AdminDashBoardPage = lazy(() => import("@/pages/admin/admin-dashboard-page"));
const SubscriptionPage = lazy(() => import("@/pages/admin/plans-page"));
const SubscriptionPlanPage = lazy(() => import("@/pages/admin/plans-page"));
const PropertyStatsPage = lazy(() => import("@/pages/user/property-stats-page"));
const DataDictionaryPage = lazy(() => import("@/pages/admin/property-dd-page"));

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
            { path: "", element:  <AsynPageLoader><AdminDashBoardPage /></AsynPageLoader> },
            { path: "dashboard", element: <AsynPageLoader><AdminDashBoardPage /></AsynPageLoader> },
            { path: "plans", element: <AsynPageLoader><SubscriptionPage /></AsynPageLoader> },
            { path: "users", element: <AsynPageLoader><UsersPage /></AsynPageLoader> },
            { path: "data-dictionary", element: <AsynPageLoader><DataDictionaryPage /></AsynPageLoader> }
        ]
    }
]

const adminRoutes: RouteDefinition[] = [
    {
        path: "/admin",
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            { path: "", element: <AsynPageLoader><AdminDashBoardPage /></AsynPageLoader> },
            { path: "dashboard", element: <AsynPageLoader><AdminDashBoardPage /></AsynPageLoader> },
            { path: "plans", element: <AsynPageLoader><SubscriptionPlanPage /></AsynPageLoader> },
            { path: "users", element: <AsynPageLoader><UsersPage /> </AsynPageLoader>},
            { path: "data-dictionary", element: <AsynPageLoader><DataDictionaryPage /></AsynPageLoader> }
        ]
    }
]

const userRoutes: RouteDefinition[] = [
    {
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            { path: "/dashboard", element: <AsynPageLoader><UserDashboard /></AsynPageLoader> },
            // { path: "/search", element: <SearchPropertyPage /> },
            { path: "/property/:uniqueId", element: <AsynPageLoader><PaymentGuard> <AddPropertyPage /> </PaymentGuard></AsynPageLoader> },
            { path: "/property/id", element: <AsynPageLoader><ProjectDetailPage /></AsynPageLoader> },
            { path: "/property/id/edit", element: <AsynPageLoader><PaymentGuard> <AddPropertyPage /> </PaymentGuard></AsynPageLoader> },
            { path: "/property/id/stats", element: <AsynPageLoader><PaymentGuard> <PropertyStatsPage /> </PaymentGuard></AsynPageLoader> }
            // { path: "/explore", element: <PaymentGuard><div> Page under development</div></PaymentGuard> },
            // { path: "/subscription", element: <SubscribtionPage /> }
        ]
    }
]