import NotificationDialog from "@/components/NotificationDialog";
import { Toaster } from "@/components/ui/sonner";
import { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";
import { StringUtil } from "../utils/string-util";

type AlertType = "error" | "info" | "warning" | "success"

type AlertProps = {
    message: string,
    title?: string,
    type?: AlertType
}

type AlertContentType = {
    showDialogAlert: (object: AlertProps) => void
    showDialogError: (message: string) => void
    showToastSuccess: (message: string) => void
    showToastInfo: (mesage: string) => void,
    showToastWarning: (message: string) => void,
    showToastError: (message: string) => void
}

export const AlertContext = createContext<AlertContentType | undefined>(undefined)

const AlertContextProvider = ({ children }: PropsWithChildren) => {
    const [message, setMessage] = useState("")
    const [title, setTitle] = useState("")
    const [type, setType] = useState<AlertType>("info")

    const showDialogAlert = ({ message, title = "", type = "info" }: AlertProps) => {
        setMessage(message)
        setTitle(title)
        setType(type)
    }

    const handleDialogClose = () => {
        setMessage("")
        setTitle("")
        setType("info")
    }

    // toast
    const showToastSuccess = (message: string) => toast.success(message)
    const showToastInfo = (message: string) => toast.info(message)
    const showToastError = (message: string) => toast.error("ERROR", { description: message })
    const showToastWarning = (message: string) => toast.warning(message)

    // dialog
    const showDialogError = (message: string) => showDialogAlert({ message, title: "ERROR", type: "error" })


    return (
        <AlertContext.Provider
            value={{
                showDialogAlert,
                showDialogError,
                showToastSuccess,
                showToastInfo,
                showToastWarning,
                showToastError
            }}>
            {children}
            <NotificationDialog
                isOpen={StringUtil.isNotEmptyString(message)}
                message={message}
                title={title}
                isError={type === "error"}
                handleClose={handleDialogClose} />
            <Toaster expand={false} closeButton />
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;
