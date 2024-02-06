export const APP_NAME: string = "APP NAME"

export const ROLE_SUPER_ADMIN = "SUPER_ADMIN";
export const ROLE_ADMIN = "ADMIN";
export const ROLE_USER = "USER";

export const USER_TYPE_SUPER_ADMIN: number = 0;
export const USER_TYPE_ADMIN: number = 1;
export const USER_TYPE_USER: number = 3;

export const USER_ROLES = [
    {userType: USER_TYPE_SUPER_ADMIN, default: ROLE_SUPER_ADMIN, roles: [ROLE_SUPER_ADMIN, ROLE_ADMIN, ROLE_USER]},
    {userType: USER_TYPE_ADMIN, default: ROLE_ADMIN, roles: [ROLE_ADMIN, ROLE_USER]},
    {userType: USER_TYPE_USER, default: ROLE_USER, roles: [ROLE_USER]}
]
