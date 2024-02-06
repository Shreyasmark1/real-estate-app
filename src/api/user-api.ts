import { HttpClient } from "@/lib/network/http-helper";
import { ApiResponse } from "./response-type/ApiResponse";
import { isEmptyString } from "@/lib/utils/string-util";
import { User } from "@/schema/user/user-form-schema";

const API_URL_USER = "/user";
const generateUserApiUrl = (uniqueId: string, path?: string) => {
    return `${API_URL_USER}/${uniqueId}${path ? path : ""}`
}

const getUsers = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        HttpClient.get({ path: API_URL_USER })
            .then((res: ApiResponse) => resolve(res.data.users))
            .catch((e) => reject(new Error(e)))
    })
}

const changeUserRole = (uniqueId: string, asAdmin: boolean) => {

    if (isEmptyString(uniqueId) || asAdmin == null) Promise.reject("Invalid user Id or type");

    return new Promise((resolve, reject) => {
        HttpClient.post({ path: generateUserApiUrl(uniqueId, "/role"), body: { asAdmin } })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(new Error(e)))
    })
}

export const UsersApi = {
    getUsers,
    changeUserRole
}