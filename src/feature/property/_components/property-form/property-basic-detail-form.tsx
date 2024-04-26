import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormFieldWrapper from "../../../../components/form-fields/FormFieldWrapper";
import { Input } from "../../../../components/ui/input";
import { Form } from "../../../../components/ui/form";
import PropertyTypeDropdown from "../PropertyTypeDropdown";
import { Button } from "../../../../components/ui/button";
import EnumDropdown from "../../../../components/form-fields/EnumDropdown";
import { AdvertiserType, SaleType } from "@/feature/property/_schemas/enum";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { useEffect } from "react";
import { PropertyBasic, PropertySchema } from "../../_schemas/property-schema";

type Props = {
    next: () => void
}

const PropertyFormStep1 = ({ next }: Props) => {

    const formContext = useForm<PropertyBasic>({
        resolver: zodResolver(PropertySchema.PropertyBasicFormSchema),
        defaultValues: PropertySchema.propertyFormDefaults
    });

    const onSubmit = (_data: any) => next()

    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <Card className="w-full md:w-2/5 md:p-8 mx-auto"> {/* max-w-lg */}
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Step 1 </CardTitle>
                <CardDescription>Fill in the basic details of your property</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...formContext}>
                    <form onSubmit={formContext.handleSubmit(onSubmit)}>
                        <FormFieldWrapper
                            className="w-full"
                            name="propertyName"
                            control={formContext.control}
                            label="Property Name"
                        >
                            <Input type="text" placeholder="E.g. Modern Family Home" />
                        </FormFieldWrapper>
                        <PropertyTypeDropdown
                            formContext={formContext}
                        />
                        <div className="md:flex gap-1">
                            <FormFieldWrapper
                                className="w-full"
                                name="basePrice"
                                label="Base Price"
                                control={formContext.control}
                            >
                                <Input type="number" />
                            </FormFieldWrapper>
                            <FormFieldWrapper
                                className="w-full"
                                name="maxPrice"
                                label="Max Price (optional)"
                                control={formContext.control}

                            >
                                <Input type="text" />
                            </FormFieldWrapper>
                        </div>
                        <div className="md:flex gap-1">
                            <FormFieldWrapper
                                className="w-full"
                                name="area"
                                label="Area (m²)"
                                control={formContext.control}
                            >
                                <Input type="number" />
                            </FormFieldWrapper>
                            <FormFieldWrapper
                                className="w-full"
                                name="propertyAge"
                                label="Property Age"
                                control={formContext.control}
                            >
                                <Input type="number" />
                            </FormFieldWrapper>
                        </div>
                        <div className="md:flex gap-1">
                            <EnumDropdown
                                formContext={formContext}
                                options={AdvertiserType}
                                fieldName="advertiserType"
                                label="Posting as"
                            />
                            <EnumDropdown
                                formContext={formContext}
                                options={SaleType}
                                fieldName="saleType"
                                label="Sale Type"
                            />
                        </div>
                        <Button
                            className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                            Save & Continue
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

    );
}

export default PropertyFormStep1;