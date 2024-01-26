export const APP_NAME: string = "APP NAME"

export const AUTHORITY_ADMIN = "ADMIN";
export const AUTHORITY_SUPER_ADMIN = "SUPER_ADMIN";
export const AUTHORITY_USER = "USER";

export const USER_AUTHPRITIES = [
    {userType: 0, default: AUTHORITY_SUPER_ADMIN, authorities: [AUTHORITY_SUPER_ADMIN, AUTHORITY_ADMIN, AUTHORITY_USER]},
    {userType: 1, default: AUTHORITY_ADMIN, authorities: [AUTHORITY_ADMIN, AUTHORITY_USER]},
    {userType: 3, default: AUTHORITY_USER, authorities: [AUTHORITY_USER]}
]
