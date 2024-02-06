export const isEmptyString = (str: string | any): boolean => {
    if(!isString(str) || str.trim() === "") return true;
    return false;
}

export const isNotEmptyString = (str: string): boolean => {
    return !isEmptyString(str);
}

export const isString = (str: any) => {
    if(typeof str === "string") return true;
    return false;
}