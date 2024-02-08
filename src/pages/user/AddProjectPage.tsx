import FormFieldWrapper from "@/components/forms/form-fields/FormFieldWrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePageName } from "@/lib/hooks/usePageName";
import { Project, ProjectFormSchema, projectFormDefaults } from "@/schema/project/project-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const AddProjectPage = () => {

    const PAGE_NAME = "New Project"

    const { setPageName } = usePageName();

    useEffect(() => {
        setPageName(PAGE_NAME)
    }, [])

    const [isSubmitting, _setIsSubmitting] = useState(false);

    const formContext = useForm<Project>({
        resolver: zodResolver(ProjectFormSchema),
        defaultValues: projectFormDefaults
    });

    return (
        <div className="page-style">
            <Form {...formContext}>
                <form className="flex gap-4 flex-wrap">
                    <FormFieldWrapper
                        className="w-[300px]"
                        name="projName"
                        control={formContext.control}
                        label="Project Name"
                    >
                        <Input type="text" />
                    </FormFieldWrapper>
                    <FormFieldWrapper
                        className="w-[300px]"
                        name="projType"
                        label="Project Type"
                    >
                        <Input type="text" />
                    </FormFieldWrapper>
                    <FormFieldWrapper
                        className="w-[300px]"
                        name="price"
                        label="Price"
                    >
                        <Input type="text" />
                    </FormFieldWrapper>
                    <Button
                        disabled={isSubmitting}
                        className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                        Register
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export default AddProjectPage;