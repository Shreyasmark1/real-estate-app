import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormFieldWrapper from "../../../../components/form-fields/FormFieldWrapper";
import { Input } from "../../../../components/ui/input";
import { Form } from "../../../../components/ui/form";
import { Button } from "../../../../components/ui/button";
import { PropertyDDType } from "@/feature/property/_schemas/enum";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { useEffect } from "react";
import { PropertyBasicDetail, PropertyDD, PropertySchema } from "../../_schemas/property-schema";
import DDDropdown from "../../../../components/dd-dropdown";
import { usePropertyService } from "@/services/PropertyService";

type Props = {
    defaultValue: PropertyBasicDetail
    propertyDDList: PropertyDD[]
    next: (uniqueId: string) => void
}

const PropertyFormStep1 = ({ next, propertyDDList, defaultValue }: Props) => {

    console.log(defaultValue)

    const { savePropertyBasic } = usePropertyService()

    const formContext = useForm<PropertyBasicDetail>({
        resolver: zodResolver(PropertySchema.PropertyBasicFormSchema),
        defaultValues: defaultValue
    })

    const onSubmit = (data: PropertyBasicDetail) => savePropertyBasic.mutate(data)

    useEffect(() => {
        if (savePropertyBasic.isSuccess) {
            next(savePropertyBasic.data.data.uniqueId)
        }
    }, [savePropertyBasic.isSuccess])

    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <Card className="w-full md:w-3/6 md:p-8 mx-auto"> {/* max-w-lg */}
            <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Property Details</CardTitle>
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
                            <DDDropdown
                                formContext={formContext}
                                fieldName="advertiserTypeDD"
                                label="Posting as"
                                options={propertyDDList.filter((item) => item.ddType === PropertyDDType.ADVERTISER_TYPE)}
                                className="w-full"
                            />
                            <DDDropdown
                                formContext={formContext}
                                fieldName="propertyTypeDD"
                                label="Property Type"
                                options={propertyDDList.filter((item) => item.ddType === PropertyDDType.PROPERTY_TYPE)}
                                className="w-full"
                            />
                            <DDDropdown
                                formContext={formContext}
                                fieldName="saleTypeDD"
                                label="Sale Type"
                                options={propertyDDList.filter((item) => item.ddType === PropertyDDType.SALE_TYPE)}
                                className="w-full"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={savePropertyBasic.isPending}
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