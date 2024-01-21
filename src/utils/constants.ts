export const APP_NAME: string = "APP NAME"

export const MAX_DOC_FILE_SIZE = 0
export const MAX_IMG_FILE_SIZE = 0

export const AUTHORITY_ADMIN = "ADMIN";
export const AUTHORITY_SUPER_ADMIN = "SUPER_ADMIN";
export const AUTHORITY_USER = "USER";

export const USER_AUTHPRITIES = [
    {userType: 0, default: AUTHORITY_SUPER_ADMIN, authorities: [AUTHORITY_SUPER_ADMIN, AUTHORITY_ADMIN, AUTHORITY_USER]},
    {userType: 1, default: AUTHORITY_ADMIN, authorities: [AUTHORITY_ADMIN, AUTHORITY_USER]},
    {userType: 3, default: AUTHORITY_USER, authorities: [AUTHORITY_USER]}
]

export const enum FILE_EXTENTIONS {
    DOCX = "docx",
    PDF = "pdf",
    PNG = "png",
    JPEG = "jpeg",
    MP4 = "mp4",
}