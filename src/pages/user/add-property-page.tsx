import MultiStepPropertyForm from "@/feature/property/_components/multi-step-property-form";
import { usePageName } from "@/lib/hooks/usePageName";
import { useEffect } from "react";

const AddPropertyPage = () => {

    const { setPageName } = usePageName();

    useEffect(() => setPageName("Add New Property"), [])

    return (
        <div className="page-style">
            <MultiStepPropertyForm/>
        </div>
    );
}

export default AddPropertyPage;
