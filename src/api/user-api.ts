import { HttpClient } from "@/lib/network/http-helper";
import { ApiResponse } from "./response-type/ApiResponse";
import { isEmptyString, isString } from "@/utils/string-util";
import { User } from "@/schema/user/user-form-schema";

const API_URL_USERS = "/user";
const API_URL_MAKE_ADMIN = "/user/make-admin"

const getUsers = (): Promise<User[]>=> {
    return new Promise((resolve, reject) => {
        HttpClient.get({ path: API_URL_USERS })
            .then((res: ApiResponse) => {
                resolve(res.data.users)
            })
            .catch((e) => {
                reject(new Error(e))
            })
    })
}

const makeUserAsAdmin = (uniqueId: string) => {

    if(isEmptyString(uniqueId) || !isString(uniqueId)){
        throw new Error("Invalid user Id");
    }

    return new Promise((resolve, reject) => {
        HttpClient.post({ path: API_URL_MAKE_ADMIN, pathVariable: uniqueId, body: null })
            .then((res: ApiResponse) => {
                resolve(res)
            })
            .catch((e) => {
                reject(new Error(e))
            })
    })
}

export const UsersApi = {
    getUsers,
    makeUserAsAdmin
}