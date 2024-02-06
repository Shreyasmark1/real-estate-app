import { ROLE_SUPER_ADMIN, ROLE_ADMIN, ROLE_USER } from "@/config/constants";

type DrawerNavigation = {
    locationName: string,
    url: string
}

export const getDrawerNavigation = (roleName: string | undefined): DrawerNavigation[] => {

    if (!roleName) return []

    switch (roleName) {
        case ROLE_SUPER_ADMIN: return superAdminDrawerNavigation;
        case ROLE_ADMIN: return adminDrawerNavigation;
        case ROLE_USER: return userDrawerNavigation;
        default: return []
    }
}

const superAdminDrawerNavigation: DrawerNavigation[] = [
    { locationName: "Dashboard", url: "/super-admin/dashboard" },
    { locationName: "Plans", url: "/super-admin/plans" },
    { locationName: "Users", url: "/super-admin/users" }
]

const adminDrawerNavigation: DrawerNavigation[] = [
    { locationName: "Dashboard", url: "/admin/dashboard" },
    { locationName: "Plans", url: "/admin/plans" },
    { locationName: "Users", url: "/admin/users" }
]

const userDrawerNavigation: DrawerNavigation[] = [
    { locationName: "Dashboard", url: "/dashboard" },
    { locationName: "Explore", url: "/dashboard" },
    { locationName: "My Projects", url: "/dashbaord" },
    { locationName: "Subscription", url: "/subscription" }
]