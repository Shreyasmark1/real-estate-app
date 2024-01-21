import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormFieldSchema, FormFieldType } from "@/lib/schema/from-field";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Control } from "react-hook-form";

type Props = {
    formFieldSchema?: FormFieldSchema,
    control?: Control<{ [x: string]: any; }> | undefined,
    childProps?: any,
    Child?: any,
    className?: string
}

const FormFieldWrapper = ({ formFieldSchema, control, childProps, Child, className }: Props) => {

    //if a hidden field
    if (!formFieldSchema?.render) return <></>

    // if child component is provided 
    let Component = Child ? Child.Component : Input;

    let type = "text"

    if (formFieldSchema && !Child) {
        switch (formFieldSchema.fieldType) {
            case FormFieldType.text:
                break;

            case FormFieldType.number:
                type = "number"
                break;

            case FormFieldType.email:
                type = "email"
                break;

            case FormFieldType.password:
                type = "password"
                break;

            case FormFieldType.textArea:
                Component = Textarea
                break
            default: throw new Error(`${FormFieldType[formFieldSchema.fieldType]} is invalid input field create a custom UI for it`)
        }
    }

    return (
        <FormField
            name={formFieldSchema ? formFieldSchema.name : ""}
            control={control}
            render={({ field }) => (
                <FormItem className={cn("", className)}>
                    <Label>{formFieldSchema ? formFieldSchema.label : ""}</Label>
                    <FormControl {...field}>
                        <Component type={type} {...childProps} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default FormFieldWrapper;