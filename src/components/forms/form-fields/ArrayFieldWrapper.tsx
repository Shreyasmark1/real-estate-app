import { Card } from "@/components/ui/card";
import { Control, FieldValues, useFieldArray } from "react-hook-form";
import FormFieldWrapper from "./FormFieldWrapper";
import { FormFieldSchema } from "@/lib/schema/from-field";
import { Label } from "@radix-ui/react-label";
import { Accordion } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FormField = {
    Component: any,
    props?: any,
}

type Props = {
    formFieldSchema?: FormFieldSchema,
    control?: Control<FieldValues> | undefined,
    Child?: FormField,
    label?: string
}

const ArrayFieldWrapper = ({ formFieldSchema, control, Child, label }: Props) => {

    if (formFieldSchema) formFieldSchema.label = ""

    const { fields, append } = useFieldArray({
        control,
        name: "test"
    });

    // append({name: "test"})

    return (
        <Card className="p-2">
            <Label> {label} hi </Label>
            <Accordion type="single" collapsible>
                {
                    fields.map((field, index) => (
                        <AccordionItem value={field.id}>
                            <AccordionTrigger>{`${label} # ${index + 1}`}</AccordionTrigger>
                            <AccordionContent>
                                <FormFieldWrapper
                                    formFieldSchema={formFieldSchema}
                                    control={control}
                                    childProps={{...field, ...Child?.props}}
                                    key={field.id}
                                    Child={Child} />
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
            <button
                type="button"
                onClick={() => append({ name: "test" })}
            >hi</button>
        </Card>
    );
}

export default ArrayFieldWrapper;