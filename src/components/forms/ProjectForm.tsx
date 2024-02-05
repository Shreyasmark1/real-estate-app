import { Project, ProjectFormSchema, projectFormDefaults, projectFormFields } from "@/schema/project/project-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

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
                        formField.fieldType === "image" ? <></> :
                            <Input key={formField.name} />
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