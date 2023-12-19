import { Project, ProjectFormSchema, projectFormDefaults, projectFormFields } from "@/lib/schema/project/project-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "../ui/form";
import { registerFormFields } from "@/lib/schema/auth/register-form-schema";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

const ProjectForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const formContext = useForm<Project>({
        resolver: zodResolver(ProjectFormSchema),
        defaultValues: projectFormDefaults
    });

    const onSubmit = () => {

    }

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    projectFormFields.map((formField) => (
                        <div key={formField.name} className="grid w-full max-w-sm items-center gap-1.5 text-md ">
                            <FormField
                                name={formField.name}
                                control={formContext.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <Label>{formField.label}</Label>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                autoComplete={formField.name === 'password' ? 'current-password' : 'on'}
                                                type={formField.fieldType}
                                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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