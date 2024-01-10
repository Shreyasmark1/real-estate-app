import { ADMIN, FILE_EXTENTIONS, SUPER_ADMIN, USER } from "./constants";

export const validateImageFileType = (file: File): boolean => {

    if (file?.name) {
        const fieldType = file.name.split(".").pop();
        if (fieldType === FILE_EXTENTIONS.JPEG || fieldType === FILE_EXTENTIONS.PNG) return true;
    }

    return false;
}

export function getUserType(type: number){
    if(type === 1) return SUPER_ADMIN;
    if(type === 2) return ADMIN;
    return USER;
}