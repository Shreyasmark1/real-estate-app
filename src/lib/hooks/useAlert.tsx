import { useContext } from "react"
import { AlertContext } from "../context/AlertContext"

export const useAlert = () => {

    const context = useContext(AlertContext)

    if(!context){
        throw Error("useAlert must be inside AlertContextProvider")
    }

    return context
}