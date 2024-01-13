import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plan, PlanFormSchema, planFormDefaults, planFormFields } from "@/lib/schema/subscription-plan/plan-form-schema";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import { FormFieldType } from "@/lib/schema/from-field";
import ArrayFieldWrapper from "./form-fields/ArrayFieldWrapper";
import { Textarea } from "../ui/textarea";

type Props = {
    defaultValues?: Plan,
    lable?: string
}

const PlanForm = ({ defaultValues }: Props) => {

    const formContext = useForm<Plan>({
        resolver: zodResolver(PlanFormSchema),
        defaultValues: defaultValues ? defaultValues : planFormDefaults
    });
    
    console.log(planFormFields)

    return (
        <Form {...formContext}>
            {
                planFormFields.map((formField) => (
                    formField.fieldType == FormFieldType.stringArray ?
                        <ArrayFieldWrapper
                            formFieldSchema={formField}
                            control={formContext.control}
                            key={formField.name}
                            // label={formField.label}
                            Child={{ Component: Textarea, props: { className: "w-full"} }} />
                        :

                        <FormFieldWrapper
                            key={formField.name}
                            formFieldSchema={formField}
                            control={formContext.control}
                        />
                ))
            }
        </Form>
    );
}

export default PlanForm;