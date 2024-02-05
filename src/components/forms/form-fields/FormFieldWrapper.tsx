import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FormFieldSchema } from "@/schema/from-field";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { PropsWithChildren } from "react";
import { Control } from "react-hook-form";

type Props = PropsWithChildren & {
    formFieldSchema?: FormFieldSchema,
    control?: Control<{ [x: string]: any; }> | undefined
    className?: string
}

const FormFieldWrapper = ({ formFieldSchema, control, children, className }: Props) => {
    if (!formFieldSchema?.render) return <></>

    // default: throw new Error(`${FormFieldType[formFieldSchema.fieldType]} is invalid input field create a custom UI for it`)

    return (
        <FormField
            name={formFieldSchema ? formFieldSchema.name : ""}
            control={control}
            render={({ field }) => (
                <FormItem className={cn("", className)}>
                    <Label>{formFieldSchema ? formFieldSchema.label : ""}</Label>
                    <FormControl {...field}>
                        {children}
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