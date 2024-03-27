import { useMultistepForm } from "@/lib/hooks/useMultiStepForm";
import PropertyFormStep1 from "./PropertyFormStep1";
import PropertyFormStep2 from "./PropertyFormStep2";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import PropertyFormStep3 from "./PropertyFormStep3";

const MultiStepPropertyForm = () => {

    const handleNext = () => next()
    const handleBack = () => back()

    const steps: ReactElement[] = [
        <PropertyFormStep1 next={handleNext} />,
        <PropertyFormStep2 />,
        <PropertyFormStep3 next={handleNext} />
    ]

    const { step, back, next, isFirstStep, isLastStep } = useMultistepForm(steps)

    return (
        <>
            <div className="flex justify-between mb-3 text-2xl font-semibold">
                <div className={cn("cursor-pointer flex items-center gap-2", isFirstStep ? 'invisible' : '')} onClick={handleBack}>  <ArrowLeft /> <span>Back</span> </div>
                <div className={cn("cursor-pointer flex items-center gap-2", isLastStep ? 'invisible' : '')} onClick={handleNext}> <span>Next</span>  <ArrowRight /></div>
            </div>
            {step}
        </>
    );
}

export default MultiStepPropertyForm;