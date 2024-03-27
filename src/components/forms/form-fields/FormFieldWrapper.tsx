import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { PropsWithChildren } from "react";
import { Control } from "react-hook-form";

type Props = PropsWithChildren & {
    // control?: Control<{ [x: string]: any; }> | undefined 
    control?: Control<any, any>
    className?: string,
    name?: string,
    label?: string
}

const FormFieldWrapper = (props: Props) => {
    // default: throw new Error(`${FormFieldType[formFieldSchema.fieldType]} is invalid input field create a custom UI for it`)

    return (
        <FormField
            name={props.name ? props.name : ""}
            control={props.control}
            render={({ field }) => (
                <FormItem className={cn("", props.className)}>
                    <Label>{props.label ? props.label : ""}</Label>
                    <FormControl {...field}>
                        {props.children}
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