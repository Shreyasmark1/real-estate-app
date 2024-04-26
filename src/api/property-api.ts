import { HttpClient } from "@/lib/network/http-helper";
import { ApiResponse } from "./response-type/ApiResponse";
import { StringUtil } from "@/lib/utils/string-util";
import { PropertyDD } from "@/feature/property/_schemas/property-schema";

const API_URL_PROPERTY_DD = "/property/dd";

const uploadPropertyImage = (uniqueId: string, file: any): Promise<ApiResponse> => {

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

export const PropertyApi = {
    uploadPropertyImage,
    getDD,
    createOrUpdateDD
}