import NotificationDialog from "@/components/NotificationDialog";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { isNotEmptyString } from "@/utils/string-util";
import { PropsWithChildren, useState } from "react";
import { createContext } from "react";

type AlertType = "error" | "info" | "warning"

type AlertProps = {
    message: string,
    title?: string,
    type?: AlertType
}

type AlertContentType = {
    showDialogAlert: (object: AlertProps) => void
    showToastAlert: (object: AlertProps) => void
    showToastError: (message: string) => void
    showDialogError: (message: string) => void
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

    const showToastAlert = ({ message, title = "", type = "info" }: AlertProps) => {
        toast({
            title: title,
            description: message,
            duration: 2000,
            variant: type === "error" ? "destructive" : "default",
            // action: (
            //     <ToastAction altText="Close" >Close</ToastAction>
            // ),
        })
    }

    const showToastError = (message : string) => {
        showDialogAlert({message, title: "ERROR", type: "error"})
    }

    const showDialogError = (message: string) => {
        showDialogAlert({message, title: "ERROR", type: "error"})
    }

    return (
        <AlertContext.Provider value={{ showDialogAlert, showToastAlert, showToastError, showDialogError }}>
            {children}
            <NotificationDialog isOpen={isNotEmptyString(message)} message={message} title={title} isError={type === "error"} handleClose={handleDialogClose}/>
            <Toaster />
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;
