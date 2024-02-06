import { FILE_EXTENTIONS } from "@/config/file-constants";

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

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}