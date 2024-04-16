import { useForm } from "react-hook-form";
import { Form } from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFieldWrapper from "../../../components/forms/form-fields/FormFieldWrapper";
import ArrayFieldWrapper from "../../../components/forms/form-fields/ArrayFieldWrapper";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { SubscriptionPlan, subscriptionPlanFormDefaults, subscriptionPlanFormFields, subscriptionPlanFormSchema } from "@/feature/subscription/_schemas/subscription-plan-form-schema";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";

type Props = {
    defaultValues?: SubscriptionPlan,
    lable?: string,
    closeForm: () => void
}

const PlanForm = ({ defaultValues, closeForm }: Props) => {

    const { savePlan } = useSubscriptionService()

    const formContext = useForm<SubscriptionPlan>({
        resolver: zodResolver(subscriptionPlanFormSchema),
        defaultValues: defaultValues ? defaultValues : subscriptionPlanFormDefaults
    });

    useFormErrorToast({ formContext })

    const onSubmit = (plan: SubscriptionPlan) => savePlan.mutate(plan)

    if (savePlan.isSuccess) closeForm()

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)} className="p-2 flex flex-wrap gap-10">
                {
                    subscriptionPlanFormFields.map((formField) => (
                        !formField.render ? (<></>) :

                            formField.fieldType == "text-array" ?
                                <ArrayFieldWrapper
                                    formFieldSchema={formField}
                                    className="w-full"
                                    control={formContext.control}
                                    key={formField.name}
                                >
                                    <Input type="text" className="w-[600px]" />
                                </ArrayFieldWrapper>
                                :

                                <FormFieldWrapper
                                    className="w-[300px]"
                                    key={formField.name}
                                    name={formField.name}
                                    label={formField.label}
                                    control={formContext.control}
                                >
                                    <Input type={formField.fieldType} />
                                </FormFieldWrapper>
                    ))
                }
                <Button
                    type="submit"
                    disabled={savePlan.isPending}
                    className="mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Save
                </Button>
            </form>
        </Form>
    );
}

export default PlanForm;