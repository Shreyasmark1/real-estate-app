import { FILE_EXTENTIONS } from "./constants";

export const validateImageFileType = (file: File): boolean => {

    if (file?.name) {
        const fieldType = file.name.split(".").pop();
        if (fieldType === FILE_EXTENTIONS.JPEG || fieldType === FILE_EXTENTIONS.PNG) return true;
    }

    return false;
}