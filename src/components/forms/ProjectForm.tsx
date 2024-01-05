import { Project, ProjectFormSchema, projectFormDefaults, projectFormFields } from "@/lib/schema/project/project-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import StandardFormField from "./form-fields/InputField";
import { FormFieldType } from "@/lib/schema/from-field";

const ProjectForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const formContext = useForm<Project>({
        resolver: zodResolver(ProjectFormSchema),
        defaultValues: projectFormDefaults
    });

    const onSubmit = () => {
        setIsSubmitting(true)
    }

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    projectFormFields.map((formField) => (
                        formField.fieldType === FormFieldType.image ? <></> :
                            <StandardFormField key={formField.name} formFieldSchema={formField} control={formContext.control} />
                    ))
                }
                <Button
                    disabled={isSubmitting}
                    className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Register
                </Button>
            </form>
        </Form>
    );
}

export default ProjectForm;