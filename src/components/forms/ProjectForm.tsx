import { Project, ProjectFormSchema, projectFormDefaults, projectFormFields } from "@/lib/schema/project/project-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import { FormFieldType } from "@/lib/schema/from-field";
import InputField from "./form-fields/InputField";

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
    );
}

export default ProjectForm;