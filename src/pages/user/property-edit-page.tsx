import MultiStepPropertyForm from "@/feature/property/_components/property-form/multi-step-property-form";
import { usePageName } from "@/lib/hooks/usePageName";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PropertyEditPage = () => {

    const { setPageName } = usePageName();

    useEffect(() => setPageName("Add New Property"), [])

    const { uniqueId } = useParams()

    return (
        <div className="page-style">
            <MultiStepPropertyForm id={uniqueId} />
        </div>
    );
}

export default PropertyEditPage;
