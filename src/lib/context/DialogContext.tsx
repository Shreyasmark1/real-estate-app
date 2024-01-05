import NotificationDialog from "@/components/NotificationDialog";
import { logOnDev } from "@/utils/logger";
import { ReactNode, createContext, useState } from "react";

type DialogContentType = {
    showDialog: (object: ShowDialogProps) => void
    showSnackBar : (object: ShowSnackBarProps) => void
}

type ShowDialogProps = {
    message: string,
    title?: string,
    isError?: boolean
}

type ShowSnackBarProps = {
    message: string,
    title?: string,
    isError? : boolean
}

type DialogContextProp = {
    children: ReactNode
}

export const NotificationDialogContext = createContext<DialogContentType | undefined>(undefined)

const DialogContextProvider = ({ children }: DialogContextProp) => {

    const [message, setMessage] = useState("")
    const [title, setTile] = useState("")
    const [isError, setIsError] = useState<boolean>(false)

    const showDialog = ({ message, title = "", isError = false }: ShowDialogProps) => {
        setMessage(message? message: "Something went wrong: null")
        setTile(title ? title : isError ? "ERROR" : "")
        setIsError(isError)
    }

    const showSnackBar = ({ message, title = "", isError = false} : ShowSnackBarProps) => {
        logOnDev({message, title, isError})
    }

    const handleClose = () => {
        setMessage("")
        setTile("")
        setIsError(false)
    }

    return (
        <NotificationDialogContext.Provider value={{ showDialog, showSnackBar }}>
            {children}
            <NotificationDialog message={message} title={title} open={message != ""} isError={isError} handleClose={handleClose} />
        </NotificationDialogContext.Provider>
    );
}

export default DialogContextProvider;