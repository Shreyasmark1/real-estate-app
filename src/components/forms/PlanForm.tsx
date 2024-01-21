import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import { FormFieldType } from "@/lib/schema/from-field";
import ArrayFieldWrapper from "./form-fields/ArrayFieldWrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SubscriptionPlan, subscriptionPlanFormDefaults, subscriptionPlanFormFields, subscriptionPlanFormSchema } from "@/lib/schema/subscription-plan/subscription-plan-form-schema";
import { useSubscriptionService } from "@/services/SubscriptionSerivce";

type Props = {
    defaultValues?: SubscriptionPlan,
    lable?: string
}

const PlanForm = ({ defaultValues }: Props) => {

    const { savePlan } = useSubscriptionService()

    const formContext = useForm<SubscriptionPlan>({
        resolver: zodResolver(subscriptionPlanFormSchema),
        defaultValues: defaultValues ? defaultValues : subscriptionPlanFormDefaults
    });

    const onSubmit = (plan: SubscriptionPlan) => {
        savePlan(plan)
    }

    return (
        <Form {...formContext}>
            {Object.keys(formContext.formState.errors).length > 0 &&
                <div>
                    {Object.entries(formContext.formState.errors).map(([field, error]) => (
                        <p key={field}>{field}: {error?.message?.toString()}</p>
                    ))}
                </div>
            }
            <form onSubmit={formContext.handleSubmit(onSubmit)} className="p-2 flex flex-wrap gap-10">
                {
                    subscriptionPlanFormFields.map((formField) => (
                        formField.fieldType == FormFieldType.stringArray ?
                            <ArrayFieldWrapper
                                formFieldSchema={formField}
                                className="w-full"
                                control={formContext.control}
                                key={formField.name}
                                Child={{ Component: Input, props: { className: "w-[600px]" } }} />
                            :

                            <FormFieldWrapper
                                className="w-[300px]"
                                key={formField.name}
                                formFieldSchema={formField}
                                control={formContext.control}
                            />
                    ))
                }
                <Button
                    type="submit"
                    className="mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Save
                </Button>
            </form>
        </Form>
    );
}

export default PlanForm;