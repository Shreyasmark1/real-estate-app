import { Card } from "@/components/ui/card";
import { Control, FieldValues, useFieldArray } from "react-hook-form";
import FormFieldWrapper from "./FormFieldWrapper";
import { FormFieldSchema } from "@/feature/types/from-field";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type FormField = {
    Component: any,
    props?: any,
}

type Props = {
    formFieldSchema?: FormFieldSchema,
    control?: Control<FieldValues> | undefined,
    Child?: FormField,
    className?: string,
}

const ArrayFieldWrapper = ({ formFieldSchema, control, Child, className }: Props) => {

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
                        <div key={field.id} className="flex items-center gap-3">
                            <Badge variant="outline">{`${index + 1}`}</Badge>
                            <FormFieldWrapper
                                formFieldSchema={newFormFieldSchema}
                                childProps={Child?.props}
                                Child={Child} />
                            <Badge
                            className="h-10"
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
                <PlusCircleIcon/>
            </Button>
        </Card>
    );
}

export default ArrayFieldWrapper;
