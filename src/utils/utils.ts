import { FILE_EXTENTIONS } from "./constants";

export const validateImageFileType = (file: File): boolean => {
    if (file?.name) {
        const fieldType = file.name.split(".").pop();
        if (fieldType === FILE_EXTENTIONS.JPEG || fieldType === FILE_EXTENTIONS.PNG) return true;
    }

    return false;
}

export function findByMatchingProperties(set: any[], properties: any) {
    return set.filter((entry) => {
      return Object.keys(properties).every((key) => {
        return entry[key] === properties[key];
      });
    });
  }