import { useContext } from "react"
import { NotificationDialogContext } from "../context/DialogContext"

export const useNotification = () => {

    const context = useContext(NotificationDialogContext)

    if(!context){
        throw Error("useNotificationDialog provider must be inside DialogContextProvider")
    }

    return context
}