import { useForm } from "react-hook-form";
import FormFieldWrapper from "../../../../components/form-fields/FormFieldWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Form } from "../../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../../../../components/ui/textarea";
import SingleDigitNumberInput from "../../../../components/form-fields/SingleDigitNumberInput";
import { PropertyBasic, PropertySchema } from "../../_schemas/property-schema";

type Props = {
    next: () => void
}

const PropertyFormStep3 = ({ next }: Props) => {

    const formContext = useForm<PropertyBasic>({
        resolver: zodResolver(PropertySchema.PropertyBasicFormSchema),
        defaultValues: PropertySchema.propertyFormDefaults
    });

    const onSubmit = (_data: any) => next()

    return (
        <Card className="w-full md:w-2/5 md:p-8 mx-auto"> {/* max-w-lg */}
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Rooms</CardTitle>
                <CardDescription>Tell us number of rooms this property has</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <Form {...formContext}>
                    <form className="w-full flex flex-col gap-2" onSubmit={formContext.handleSubmit(onSubmit)}>
                        <FormFieldWrapper
                            className="w-full flex items-center justify-between"
                            name="basePrice"
                            label="Number of rooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput maxValue={50} minValue={0} fieldName="basePrice" formContext={formContext} />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="flex items-center justify-between"
                            name="basePrice"
                            label="Number of bedrooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput maxValue={50} minValue={0} fieldName="basePrice" formContext={formContext} />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="flex items-center justify-between"
                            name="basePrice"
                            label="Number of bathrooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput maxValue={50} minValue={0} fieldName="basePrice" formContext={formContext} />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="flex items-center justify-between"
                            name="basePrice"
                            label="Number of guest rooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput maxValue={50} minValue={0} fieldName="basePrice" formContext={formContext} />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Short description"
                            control={formContext.control}
                        >
                            <Textarea />
                        </FormFieldWrapper>
                    </form>
                </Form>
            </CardContent >
        </Card >
    );
}

export default PropertyFormStep3;