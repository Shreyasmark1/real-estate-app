import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FormFieldSchema, FormFieldType } from "@/lib/schema/from-field";
import { Label } from "@radix-ui/react-label";
import { Control } from "react-hook-form";

type FormField = {
    Component: any,
    props?: any,
}

type Props = {
    formFieldSchema?: FormFieldSchema,
    control?: Control<{ [x: string]: any; }> | undefined,
    Child: FormField,
    className?: string
}

const FormFieldWrapper = ({ formFieldSchema, control, Child, className }: Props) => {

    let fieldType = "text";

    if (formFieldSchema) {
        switch (formFieldSchema.fieldType) {
            case FormFieldType.text:
                fieldType = "text";
                break;

            case FormFieldType.number:
                fieldType = "number";
                break;

            case FormFieldType.email:
                fieldType = "email";
                break;

            case FormFieldType.password:
                fieldType = "password";
                break;

            default: throw new Error(`${FormFieldType[formFieldSchema.fieldType]} is invalid input field create a custom UI for it`)
        }
    }

    return (
        <div className={className ? className : "grid w-full max-w-sm items-center gap-1.5 text-md"}>
            <FormField
                name={formFieldSchema ? formFieldSchema.name : ""}
                control={control}
                render={({ field }) => (
                    <FormItem>
                        <Label>{formFieldSchema ? formFieldSchema.label : ""}</Label>
                        <FormControl>
                            <Child.Component {...field} {...Child.props} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}

export default FormFieldWrapper;