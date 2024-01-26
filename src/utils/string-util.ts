export const isEmptyString = (str: string): boolean => {
    if(str.trim() === "") return true;
    return false;
}

export const isNotEmptyString = (str: string): boolean => {
    return !isEmptyString(str);
}

export const isString = (str: any) => {
    if(typeof str === "string") return true;
    return false;
}