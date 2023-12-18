import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";

type NotificationDialogProp = {
    title: string,
    message: string,
    isError: boolean,
    open: boolean,
    handleClose: () => void
}

const NotificationDialog = ({ message, title, isError, open, handleClose }: NotificationDialogProp) => {

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className={isError ? "text-red-500" : ""}>{title}</DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button onClick={() => handleClose()} type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default NotificationDialog;