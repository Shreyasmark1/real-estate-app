
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { Login, LoginFormSchema, loginFormDefaults, loginFormFields } from "@/schema/auth/login-form-schema";
import { Input } from "../ui/input";

type LoginFormProps = {
    isSubmitting: boolean
    onSubmit: SubmitHandler<Login>
}

const LoginForm = ({ onSubmit, isSubmitting }: LoginFormProps) => {

    const formContext = useForm<Login>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: loginFormDefaults
    });

    useFormErrorToast({ formContext })

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    loginFormFields.map((formField) => (
                        <FormFieldWrapper
                            key={formField.name}
                            formFieldSchema={formField}
                            control={formContext.control}
                        >
                            <Input type={formField.fieldType} autoComplete={formField.fieldType === "password"? "current-password": "on"}/>
                        </FormFieldWrapper>
                    ))
                }
                <Button
                    disabled={isSubmitting}
                    className="w-full bg-black text-white p-2 rounded-1g mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Login
                </Button>
            </form>
        </Form >
    );
}

export default LoginForm;