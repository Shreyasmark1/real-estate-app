import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import ArrayFieldWrapper from "./form-fields/ArrayFieldWrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SubscriptionPlan, subscriptionPlanFormDefaults, subscriptionPlanFormFields, subscriptionPlanFormSchema } from "@/schema/subscription/subscription-plan-form-schema";
import { useAlert } from "@/lib/hooks/useAlert";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";

type Props = {
    defaultValues?: SubscriptionPlan,
    lable?: string,
    closeForm: () => void
}

const PlanForm = ({ defaultValues, closeForm }: Props) => {

    const { savePlan } = useSubscriptionService()
    const { showToastAlert, showDialogAlert } = useAlert()

    const formContext = useForm<SubscriptionPlan>({
        resolver: zodResolver(subscriptionPlanFormSchema),
        defaultValues: defaultValues ? defaultValues : subscriptionPlanFormDefaults
    });

    useFormErrorToast({ formContext })

    const onSubmit = (plan: SubscriptionPlan) => {
        savePlan.mutate(plan)
    }

    if (savePlan.isError) {
        showDialogAlert({ message: savePlan.error.message, type: "error" })
    }

    if (savePlan.isSuccess) {
        showToastAlert({ message: "Saved!" })
        closeForm()
    }

    return (
        <Form {...formContext}>
            {/* {Object.keys(formContext.formState.errors).length > 0 &&
                <div>
                    {Object.entries(formContext.formState.errors).map(([field, error]) => (
                        <p key={field}>{field}: {error?.message?.toString()}</p>
                    ))}
                </div>
            } */}

            <form onSubmit={formContext.handleSubmit(onSubmit)} className="p-2 flex flex-wrap gap-10">
                {
                    subscriptionPlanFormFields.map((formField) => (
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
                                formFieldSchema={formField}
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