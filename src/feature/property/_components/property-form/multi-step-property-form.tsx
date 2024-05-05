import { useMultistepForm } from "@/lib/hooks/useMultiStepForm";
import PropertyFormStep1 from "./property-basic-detail-form";
import PropertyFormStep2 from "./property-images-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import PropertyFormStep3 from "./property-rooms-form";
import { usePropertyService } from "@/services/PropertyService";
import { StringUtil } from "@/lib/utils/string-util";
import { ReactElement, useEffect, useState } from "react";
import { Property, PropertySchema } from "../../_schemas/property-schema";

type Props = {
    id: string | undefined
}

const MultiStepPropertyForm = ({ id }: Props) => {

    const [property, setProperty] = useState<Property>(PropertySchema.propertyBasicFormDefaults as Property)
    const [steps, setSetps] = useState<ReactElement[]>([]);

    const { getPropertyDetail, getPropertyDDList } = usePropertyService()

    const handleNext = (uniqueId: string) => {
        if (StringUtil.isNotEmptyString(uniqueId) && typeof uniqueId === "string" && uniqueId !== "new") {
            getPropertyDetail(uniqueId)
                .then((res) => {
                    setProperty(res)
                    next()
                })
        } else {
            next()
        }
    }

    const handleBack = () => back()

    const propertyDD = getPropertyDDList().data;

    useEffect(() => {

        if (StringUtil.isNotEmptyString(id) && typeof id === "string" && id !== "new") {
            getPropertyDetail(id)
                .then((res) => {
                    setProperty(res)
                })
        }

    }, [id])

    useEffect(() => {
        if (property) {

            const newSteps = [
                <PropertyFormStep1
                    key={JSON.stringify(property)}
                    propertyDDList={propertyDD}
                    next={handleNext}
                    defaultValue={property} />,
                <PropertyFormStep2
                    key={JSON.stringify(property)}
                    next={handleNext}
                    bannerImg={property.bannerImg}
                    images={property.images}
                    uniqueId={property.uniqueId} />,
                <PropertyFormStep3
                    key={JSON.stringify(property)}
                    defaultValue={property.rooms ? property.rooms : PropertySchema.propertyRoomDefaults}
                    uniqueId={property.uniqueId}
                />
            ]

            setSetps(newSteps)
        }
    }, [property, propertyDD])


    const { step, back, next, isFirstStep, isLastStep } = useMultistepForm(steps)

    return (
        <>
            <div className="flex justify-between mb-3 text-2xl font-semibold w-full">
                <div className={cn("cursor-pointer flex items-center gap-2", isFirstStep ? 'invisible' : '')} onClick={handleBack}>  <ArrowLeft /> <span>Back</span> </div>
                <div className={cn("cursor-pointer flex items-center gap-2", isLastStep || StringUtil.isEmptyString(property.uniqueId) ? 'invisible' : '')} onClick={next}> <span>Next</span>  <ArrowRight /></div>
            </div>
            {step}
        </>
    );
}

export default MultiStepPropertyForm;