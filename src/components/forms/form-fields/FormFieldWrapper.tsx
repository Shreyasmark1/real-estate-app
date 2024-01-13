import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormFieldSchema, FormFieldType } from "@/lib/schema/from-field";
import { Label } from "@radix-ui/react-label";
import { Control } from "react-hook-form";

type Props = {
    formFieldSchema?: FormFieldSchema,
    control?: Control<{ [x: string]: any; }> | undefined,
    className?: string,
    childProps?: any,
    Child?: any
}

const FormFieldWrapper = ({ formFieldSchema, control, className, childProps, Child }: Props) => {

    if (!formFieldSchema?.render) return <></>

    let Component = Child ? Child.Component : Input;

    Input.defaultProps?.type

    if (formFieldSchema && !Child) {
        switch (formFieldSchema.fieldType) {
            case FormFieldType.text:
                if (Component.defaultProps?.type) {
                    Component.defaultProps.type = "text"
                }
                break;

            case FormFieldType.number:
                if (Component.defaultProps?.type) {
                    Component.defaultProps.type = "number"
                }
                break;

            case FormFieldType.email:
                if (Component.defaultProps?.type) {
                    Component.defaultProps.type = "email"
                }
                break;

            case FormFieldType.password:
                if (Component.defaultProps?.type) {
                    Component.defaultProps.type = "password"
                }
                break;

            case FormFieldType.textArea:
                Component = Textarea
                break
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
                            <Component {...field} {...childProps} />
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