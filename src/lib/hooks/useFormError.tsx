import { useEffect } from "react";
import { useAlert } from "./useAlert";
import { UseFormReturn } from "react-hook-form";

type Props = {
    formContext: UseFormReturn<{[x: string]: any}, any, undefined>
}

export const useFormErrorToast = ({ formContext }: Props) => {
    
    const { showToastAlert, showDialogAlert } = useAlert()
    const { formState } = formContext;
    const { errors } = formState;

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const [_field, error] = Object.entries(errors)[0];
            if (Array.isArray(error)) {
                error.forEach(err => showToastAlert({ message: `${err.message}`, type: "error" }));
            } else if (error?.message) {
                showToastAlert({ message: `${error.message}`, type: "error" });
            } else {
                showDialogAlert({ message: "Please check the data you entered", type: "error" })
            }
        }
    }, [errors]);
}
