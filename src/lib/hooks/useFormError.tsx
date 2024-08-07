import { useEffect } from "react";
import { useAlert } from "./useAlert";
import { UseFormReturn } from "react-hook-form";

type Props = {
    formContext: UseFormReturn<{[x: string]: any}, any, undefined>
}

export const useFormErrorToast = ({ formContext }: Props) => {
    
    const { showToastError , showDialogError } = useAlert()
    const { formState } = formContext;
    const { errors } = formState;

    useEffect(() => {
        if (Object.keys(errors).length > 0) {

            const [_field, error] = Object.entries(errors)[0];

            // TODO: dont show one array error at a time
            if (Array.isArray(error)) error.forEach(err => showToastError(`${err.message}`));
            
            else if (error?.message) showToastError(`${error.message}`);

            // unidentified error
            else showDialogError("Please check the data you entered")
        }
    }, [errors]);
}
