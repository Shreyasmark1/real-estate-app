import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { RegisterFormSchema, registerFormDefaults, registerFormFields } from "@/schema/auth/register-form-schema";
import { Register } from "@tanstack/react-query";
import { Input } from "../ui/input";

type RegisterFormProps = {
    onSubmit: SubmitHandler<Register>,
    isSubmitting: boolean
}

const RegisterForm = ({ onSubmit, isSubmitting }: RegisterFormProps) => {

    const formContext = useForm<Register>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: registerFormDefaults
    });

    useFormErrorToast({ formContext })

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    registerFormFields.map((formField) => (
                        <FormFieldWrapper
                            key={formField.name}
                            formFieldSchema={formField}
                            control={formContext.control}
                        >
                            <Input type={formField.fieldType}  autoComplete={formField.fieldType === "password"? "current-password": "on"} />
                        </FormFieldWrapper>
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

export default RegisterForm;