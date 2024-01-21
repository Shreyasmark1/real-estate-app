export const isEmptyString = (string: any): boolean => {
    if(typeof string === "string"){
        if(string.trim() === "") return true
        return false
    }

    return true;
}