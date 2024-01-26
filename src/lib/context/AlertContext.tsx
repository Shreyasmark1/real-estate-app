import NotificationDialog from "@/components/NotificationDialog";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import React, { useRef, useState } from "react";
import { ReactNode, createContext, useImperativeHandle } from "react";

type AlertType = "error" | "info" | "warning"

type AlertProps = {
    message: string,
    title?: string,
    type?: AlertType
}

type AlertContentType = {
    showDialogAlert: (object: AlertProps) => void
    showToastAlert: (object: AlertProps) => void
}

type AlertContextProp = {
    children: ReactNode
}

export const AlertContext = createContext<AlertContentType | undefined>(undefined)

const AlertContextProvider = ({ children }: AlertContextProp) => {
    const { toast } = useToast()
    const { showDialog } = useAlertDialog()
    const alertDialogRef = useRef<{ showDialog: (props: AlertProps) => void } | null>(null);

    const showDialogAlert = ({ message, title = "", type = "info" }: AlertProps) => {
        showDialog({message, title, type})
    }

    const showToastAlert = ({ message, title = "", type = "info" }: AlertProps) => {
        toast({
            title: title,
            description: message,
            duration: 4000,
            variant: type === "error" ? "destructive" : "default",
            action: (
                <ToastAction altText="Close" >Close</ToastAction>
            ),
        })
    }

    return (
        <AlertContext.Provider value={{ showDialogAlert, showToastAlert }}>
            {children}
            <AlertDialog ref={alertDialogRef} />
            <Toaster />
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;

const AlertDialog = React.forwardRef(({ }, ref) => {
    const [dialogProps, setDialogProps] = useState<AlertProps>({ message: "", title: "", type: "info" });
    const [open, setOpen] = useState(false);

    const showDialog = (props: AlertProps) => {
        setDialogProps(props);
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(true)
    }

    // expose the showDialog function to parent via ref
    useImperativeHandle(ref, () => ({
        showDialog
    }));

    if (!open) {
        return null;
    }

    return <NotificationDialog message={dialogProps.message} title={dialogProps.title} isError={dialogProps.type === "error"} handleClose={handleClose} />
});

const useAlertDialog = () => {
    const alertDialogRef = useRef<{ showDialog: (props: AlertProps) => void } | null>(null);

    if (!alertDialogRef.current) throw new Error("Alert Dialog error")
    
    return alertDialogRef.current
}
