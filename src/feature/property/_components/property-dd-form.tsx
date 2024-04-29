import { usePropertyService } from "@/services/PropertyService";
import { PropertyDD, PropertySchema } from "../_schemas/property-schema";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { Form } from "@/components/ui/form";
import FormFieldWrapper from "@/components/form-fields/FormFieldWrapper";
import { Input } from "@/components/ui/input";
import { PropertyDDType } from "../_schemas/enum";
import EnumDropdown from "@/components/form-fields/EnumDropdown";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
    defaultValues?: PropertyDD,
    lable?: string,
    closeForm: () => void
}


const PropertyDDForm = ({ defaultValues, closeForm }: Props) => {

    const { saveDD } = usePropertyService()

    const formContext = useForm<PropertyDD>({
        resolver: zodResolver(PropertySchema.ProperTyDDSchema),
        defaultValues: defaultValues ? defaultValues : PropertySchema.propertyDDDefaults
    });

    useFormErrorToast({ formContext })

    const onSubmit = (dd: PropertyDD) => saveDD.mutate(dd)

    if (saveDD.isSuccess) closeForm()

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)} className="p-2 flex flex-wrap gap-10">

                <FormFieldWrapper
                    className="w-[300px]"
                    name="value"
                    label="Value"
                    control={formContext.control}
                >
                    <Input type="text" />
                </FormFieldWrapper>

                <EnumDropdown
                    formContext={formContext}
                    options={PropertyDDType}
                    fieldName="ddType"
                    label="Type"
                />

                <Button
                    type="submit"
                    disabled={saveDD.isPending}
                    className="mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Save
                </Button>
            </form>
        </Form>
    );
}

export default PropertyDDForm;