import { logOnDev } from "@/utils/logger";
import { AUTH_ERROR_INFO, FAILED_INFO, SUCCESS_INFO } from "./config";
import { ApiResponse } from "./ApiResponse";

export const generateApiMessage = (response: ApiResponse): string => {
    let message = "Something went wrong while processing your request"

    switch (response.status) {
        case FAILED_INFO: {
            message = response.description
            break
        }

        case SUCCESS_INFO: {
            message = response.description
            break
        }

        case AUTH_ERROR_INFO: {
            message = response.description
            break
        }

        default: {

        }
    }

    logOnDev(`⬇️ [API] ${response.description}: ${response.status}`)
    return message;
}