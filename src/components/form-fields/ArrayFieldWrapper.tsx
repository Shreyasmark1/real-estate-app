import { Card } from "@/components/ui/card";
import { Control, FieldValues, useFieldArray } from "react-hook-form";
import FormFieldWrapper from "./FormFieldWrapper";
import { FormFieldSchema } from "@/schema/from-field";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    formFieldSchema?: FormFieldSchema,
    control?: Control<FieldValues> | undefined,
    className?: string,
}

const ArrayFieldWrapper = ({ formFieldSchema, control, children, className }: Props) => {

    const { fields, append, remove } = useFieldArray({
        control,
        name: formFieldSchema ? formFieldSchema.name : ""
    });

    if (fields.length === 0) append("")

    return (
        <Card className={cn("p-2 w-full", className)}>
            <Label className="pt-2"> {formFieldSchema?.label} </Label>
            {
                fields.map((field, index) => {

                    const name = `${formFieldSchema?.name}.${index}`;
                    const newFormFieldSchema = formFieldSchema ? { ...formFieldSchema, name: name.toString(), label: "" } : undefined;

                    return (
                        <div key={field.id + index} className="flex items-center gap-3">
                            <Badge variant="outline">{`${index + 1}`}</Badge>
                            <FormFieldWrapper name={newFormFieldSchema ? newFormFieldSchema.name : ""}>
                                {children}
                            </FormFieldWrapper>
                            <Badge
                                className="h-10 cursor-pointer"
                                variant="destructive"
                                onClick={() => remove(index)}
                            >
                                Remove
                            </Badge>
                        </div>
                    )
                })
            }
            <Button
                variant="ghost"
                onClick={() => append("")}
            >
                <PlusCircleIcon />
            </Button>
        </Card>
    );
}

export default ArrayFieldWrapper;
