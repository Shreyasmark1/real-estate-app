import { AUTHORITY_ADMIN, AUTHORITY_SUPER_ADMIN, AUTHORITY_USER } from "@/config/constants"

type DrawerNavigation = {
    locationName: string,
    url: string
}

export const getDrawerNavigation = (authorityName: string | undefined) : DrawerNavigation[] => {

    if(!authorityName) return []

    switch(authorityName){
        case AUTHORITY_SUPER_ADMIN: return superAdminDrawerNavigation;
        case AUTHORITY_ADMIN: return adminDrawerNavigation;
        case AUTHORITY_USER: return userDrawerNavigation;
        default: return []
    }
}

const superAdminDrawerNavigation: DrawerNavigation[] = [
    { locationName: "Plans", url: "/super-admin/plans"},
    { locationName: "Users", url: "/user-admin/users"}
]

const adminDrawerNavigation: DrawerNavigation[] = [
    { locationName: "Users", url: "/admin/users"}
]

const userDrawerNavigation: DrawerNavigation[] = [
    {
        locationName: "Dashboard",
        url: "/dashboard"
    },
    {
        locationName: "Explore",
        url: "/dashboard"
    },
    {
        locationName: "My Projects",
        url: "/dashbaord"
    },
    {
        locationName: "Subscription",
        url: "/subscription"
    }
]