import InputField from "@/components/forms/form-fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { usePageName } from "@/lib/context/PageContext";
import { FormFieldType } from "@/lib/schema/from-field";
import { Project, ProjectFormSchema, projectFormDefaults, projectFormFields } from "@/lib/schema/project/project-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const AddProjectPage = () => {

    const PAGE_NAME = "New Project"

    const { setPageName } = usePageName();

    useEffect(() => {
        setPageName(PAGE_NAME)
    }, [])

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formContext = useForm<Project>({
        resolver: zodResolver(ProjectFormSchema),
        defaultValues: projectFormDefaults
    });

    return (
        <>
        <div> Page under development </div>
            <Form {...formContext}>
                <form className="flex flex-wrap md:w-4/5">
                    {
                        projectFormFields.map((formField) => (
                            formField.fieldType === FormFieldType.image || formField.fieldType === FormFieldType.dropdown ? (<></>) :
                                <InputField key={formField.name} />
                        ))
                    }
                    <Button
                        disabled={isSubmitting}
                        className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                        Register
                    </Button>
                </form>
            </Form>
        </>
    );
}

export default AddProjectPage;