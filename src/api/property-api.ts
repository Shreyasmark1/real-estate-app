import { HttpClient } from "@/lib/network/http-helper";
import { ApiResponse } from "./response-type/ApiResponse";
import { StringUtil } from "@/lib/utils/string-util";
import { Property, PropertyBasicDetail, PropertyDD, PropertyList, PropertyRoom } from "@/feature/property/_schemas/property-schema";

const API_URL_PROPERTY_DD = "/property/dd";
export const generatePropertyImageUploadUrl = (uniqueId: string) => `/property/${uniqueId}/images`
const generatePropertySaveUrl = (uniqueId: string | null, endpoint: string) => `/property${StringUtil.isNotEmptyString(uniqueId) ? "/" + uniqueId : ""}${endpoint}`

const uploadPropertyImage = (body: PropertyImageUpload): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.multipartPost(generatePropertyImageUploadUrl(body.uniqueId), body.form)
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const getDD = (): Promise<PropertyDD[]> => {
    return new Promise((resolve, reject) => {
        HttpClient.get({ path: API_URL_PROPERTY_DD })
            .then((res: ApiResponse) => resolve(res.data.ddList))
            .catch((e) => reject(e))
    })
}

const createOrUpdateDD = (dd: PropertyDD): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        const pathVariable = StringUtil.isEmptyString(dd.uniqueId) ? null : dd.uniqueId
        HttpClient.post({ path: API_URL_PROPERTY_DD, pathVariable: pathVariable, body: dd })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const createOrUpdatePropertyBasic = (body: PropertyBasicDetail): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.post({ path: generatePropertySaveUrl(body.uniqueId, "/basic-detail"), body: body })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const savePropertyRooms = (body: PropertyRoom): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
        HttpClient.post({ path: generatePropertySaveUrl(body.uniqueId, "/rooms"), body: body })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const savePropertyImages = (body: any, uniqueId: string): Promise<ApiResponse> => {

    if (StringUtil.isEmptyString(uniqueId)) return Promise.reject("Invalid property id")

    return new Promise((resolve, reject) => {
        HttpClient.post({ path: generatePropertySaveUrl(body.uniqueId, "/images/final"), body: body })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const getPropertyList = (): Promise<PropertyList[]> => {
    return new Promise((resolve, reject) => {
        HttpClient.get({ path: "/property/" })
            .then((res: ApiResponse) => resolve(res.data.list))
            .catch((e) => reject(e))
    })
}

const getPropertyDetails = (uniqueId: string): Promise<Property> => {

    if (StringUtil.isEmptyString(uniqueId)) return Promise.reject("Invalid Property id");

    return new Promise((resolve, reject) => {
        HttpClient.get({ path: "/property/" + uniqueId })
            .then((res: ApiResponse) => resolve(res.data))
            .catch((e) => reject(e))
    })
}

export const PropertyApi = {
    uploadPropertyImage,
    getDD,
    createOrUpdateDD,
    createOrUpdatePropertyBasic,
    savePropertyImages,
    getPropertyList,
    getPropertyDetails,
    savePropertyRooms
}

export type PropertyImageUpload = {
    uniqueId: string,
    form: FormData
}