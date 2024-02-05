import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";

type NotificationDialogProp = {
    title?: string,
    message: string,
    isError?: boolean,
    isOpen: boolean
    handleClose?: () => void
}

const NotificationDialog = ({ message, title, isError, isOpen, handleClose }: NotificationDialogProp) => {

    const handleDialogClose = () => {
        handleClose && handleClose();
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className={isError ? "text-red-500" : ""}>{title? title: "ERROR"}</DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button onClick={handleDialogClose} type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default NotificationDialog;