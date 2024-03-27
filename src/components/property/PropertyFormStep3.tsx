import { useForm } from "react-hook-form";
import FormFieldWrapper from "../forms/form-fields/FormFieldWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { PropertyBasic, PropertyBasicFormSchema, propertyFormDefaults } from "@/schema/property/property-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";

type Props = {
    next: () => void
}

const PropertyFormStep3 = ({ next }: Props) => {

    const formContext = useForm<PropertyBasic>({
        resolver: zodResolver(PropertyBasicFormSchema),
        defaultValues: propertyFormDefaults
    });

    const onSubmit = (_data: any) => next()

    return (
        <Card className="w-full md:w-2/5 md:p-8 mx-auto"> {/* max-w-lg */}
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Step 3</CardTitle>
                <CardDescription>Fill in aditional details of your property</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...formContext}>
                    <form onSubmit={formContext.handleSubmit(onSubmit)}>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Number of rooms:"
                            control={formContext.control}
                        >
                            <Input type="number" />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Number of bedroom:"
                            control={formContext.control}
                        >
                            <Input type="number" />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Number of kitchen:"
                            control={formContext.control}
                        >
                            <Input type="number" />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Number of bathroom:"
                            control={formContext.control}
                        >
                            <Input type="number" />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Number of guest room:"
                            control={formContext.control}
                        >
                            <Input type="number" />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Short description"
                            control={formContext.control}
                        >
                            <Textarea />
                        </FormFieldWrapper>
                        <FormFieldWrapper
                            className="w-full"
                            name="basePrice"
                            label="Address"
                            control={formContext.control}
                        >
                            <Textarea />
                        </FormFieldWrapper>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default PropertyFormStep3;