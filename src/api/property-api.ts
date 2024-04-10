import { HttpClient } from "@/lib/network/http-helper";
import { ApiResponse } from "./response-type/ApiResponse";

const uploadPropertyImage = (uniqueId: string, file: any): Promise<ApiResponse> => {
    
    const form = new FormData();
    form.append('file', file)

    return new Promise((resolve, reject) => {
        HttpClient.multipartPost("/property/" + uniqueId + "/images", form)
            .then((res: ApiResponse) => resolve(res))
            .catch((e) => reject(e))
    })
}

export const PropertyApi = {
    uploadPropertyImage
}