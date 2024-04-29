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

    const [property, setProperty] = useState<Property | undefined>(undefined)

    const { getPropertyDetail, getPropertyDDList } = usePropertyService()

    const handleNext = (uniqueId: string) => {
        if (StringUtil.isNotEmptyString(uniqueId) && typeof uniqueId === "string" && uniqueId !== "new") {
            getPropertyDetail(uniqueId)
                .then((res) => {
                    setProperty(res)
                })
        }
        next()
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

    const [steps, setSetps] = useState<ReactElement[]>([]);

    useEffect(() => {
        if (property) {
            setSetps([
                <PropertyFormStep1 propertyDDList={propertyDD} next={handleNext} defaultValue={property ? property : PropertySchema.propertyBasicFormDefaults} />,
                <PropertyFormStep2 next={handleNext} property={property}  />,
                <PropertyFormStep3 />

            ])
        }
    }, [property])


    const { step, back, next, isFirstStep, isLastStep } = useMultistepForm(steps)

    return (
        <>
            <div className="flex justify-between mb-3 text-2xl font-semibold">
                <div className={cn("cursor-pointer flex items-center gap-2", isFirstStep ? 'invisible' : '')} onClick={handleBack}>  <ArrowLeft /> <span>Back</span> </div>
                <div className={cn("cursor-pointer flex items-center gap-2", isLastStep ? 'invisible' : '')} onClick={next}> <span>Next</span>  <ArrowRight /></div>
            </div>
            {step}
        </>
    );
}

export default MultiStepPropertyForm;