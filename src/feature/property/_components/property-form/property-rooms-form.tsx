import { useForm } from "react-hook-form";
import FormFieldWrapper from "../../../../components/form-fields/FormFieldWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Form } from "../../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../../../../components/ui/textarea";
import SingleDigitNumberInput from "../../../../components/form-fields/SingleDigitNumberInput";
import { PropertyRoom, PropertySchema } from "../../_schemas/property-schema";
import { Button } from "@/components/ui/button";
import { useFormErrorToast } from "@/lib/hooks/useFormError";

const PropertyFormStep3 = () => {

    const formContext = useForm<PropertyRoom>({
        resolver: zodResolver(PropertySchema.PropertyRoomFormSchema),
        defaultValues: PropertySchema.propertyRoomDefaults
    });

    const onSubmit = (data: any) => {
        alert(data)
    }

    useFormErrorToast({ formContext })

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
                            name="noOfRooms"
                            label="Number of rooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput
                                maxValue={50}
                                minValue={0}
                                fieldName="noOfRooms"
                                formContext={formContext}
                            />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="flex items-center justify-between"
                            name="noOfBedrooms"
                            label="Number of bedrooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput
                                maxValue={50}
                                minValue={0}
                                fieldName="noOfBedrooms"
                                formContext={formContext}
                            />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="flex items-center justify-between"
                            name="noOfBathrooms"
                            label="Number of bathrooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput
                                maxValue={50}
                                minValue={0}
                                fieldName="noOfBathrooms"
                                formContext={formContext}
                            />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="flex items-center justify-between"
                            name="noOfGuestrooms"
                            label="Number of guest rooms:"
                            labelStyle="font-medium"
                            control={formContext.control}
                        >
                            <SingleDigitNumberInput maxValue={50} minValue={0} fieldName="noOfGuestrooms" formContext={formContext} />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name=""
                            label="Short description"
                            control={formContext.control}
                        >
                            <Textarea />
                        </FormFieldWrapper>
                        <Button
                            type="submit"
                            className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                            Save & Continue
                        </Button>
                    </form>
                </Form>
            </CardContent >
        </Card >
    );
}

export default PropertyFormStep3;