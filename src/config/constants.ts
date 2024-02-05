export const APP_NAME: string = "APP NAME"

export const AUTHORITY_SUPER_ADMIN = "SUPER_ADMIN";
export const AUTHORITY_ADMIN = "ADMIN";
export const AUTHORITY_USER = "USER";

export const ROLE_SUPER_ADMIN = 0;
export const ROLE_ADMIN = 1;
export const ROLE_USER = 3;

export const USER_AUTHPRITIES = [
    {userType: ROLE_SUPER_ADMIN, default: AUTHORITY_SUPER_ADMIN, authorities: [AUTHORITY_SUPER_ADMIN, AUTHORITY_ADMIN, AUTHORITY_USER]},
    {userType: ROLE_ADMIN, default: AUTHORITY_ADMIN, authorities: [AUTHORITY_ADMIN, AUTHORITY_USER]},
    {userType: ROLE_USER, default: AUTHORITY_USER, authorities: [AUTHORITY_USER]}
]
