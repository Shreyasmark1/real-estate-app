import { HttpClient } from "@/lib/network/http-helper";
import { ApiResponse } from "./response-type/ApiResponse";
import { StringUtil } from "@/lib/utils/string-util";
import { Property, PropertyBasicDetail, PropertyDD } from "@/feature/property/_schemas/property-schema";

const API_URL_PROPERTY_DD = "/property/dd";

const uploadPropertyImage = (uniqueId: string, file: any): Promise<ApiResponse> => {

    console.log(file)

    const form = new FormData();
    form.append('file', file)

    return new Promise((resolve, reject) => {
        HttpClient.multipartPost("/property/" + uniqueId + "/images", form)
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
        const pathVariable = StringUtil.isEmptyString(body.uniqueId) ? "" : "/" + body.uniqueId
        HttpClient.post({ path: "/property" + pathVariable + "/basic-detail", body: body })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const savePropertyImages = (body: any, uniqueId: string): Promise<ApiResponse> => {

    if (StringUtil.isEmptyString(uniqueId)) return Promise.reject("Invalid property id")

    return new Promise((resolve, reject) => {
        HttpClient.post({ path: `/property/${uniqueId}/images/final`, body: body })
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

const getPropertyList = (): Promise<Property[]> => {
    return new Promise((resolve, reject) => {
        HttpClient.get({ path: "/property/"})
            .then((res: ApiResponse) => resolve(res.data.list))
            .catch((e) => reject(e))
    })
}

const getPropertyDetails = (uniqueId:string): Promise<Property> => {

    if(StringUtil.isEmptyString(uniqueId)) return Promise.reject("Invalid Property id");

    return new Promise((resolve, reject) => {
        HttpClient.get({ path: "/property/" + uniqueId})
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
    getPropertyDetails
}