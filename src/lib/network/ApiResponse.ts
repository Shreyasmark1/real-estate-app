import { FAILED_DEFAULT, SUCCESS, SUCCESS_DEFAULT, SUCCESS_INFO } from "./config"

export class ApiResponse {
    status: number
    description: string
    data: any
    recordCount: number = -1

    constructor({ status = FAILED_DEFAULT, description = "Something went wrong", data = null}){
        this.status = status,
        this.description = description,
        this.data = data
    }

    get isSuccess() {
        return this.status === SUCCESS || this.status === SUCCESS_DEFAULT || this.status === SUCCESS_INFO
    }
}