const isEmptyString = (str: string | any): boolean => {
    if (!isString(str) || str.trim() === "") return true;
    return false;
}

const isNotEmptyString = (str: string | any): boolean => {
    return !isEmptyString(str);
}

const isString = (str: any) => {
    if (typeof str === "string") return true;
    return false;
}

export const StringUtil = {
    isEmptyString,
    isNotEmptyString,
    isString
}