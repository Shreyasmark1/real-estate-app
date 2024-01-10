
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { Login, LoginFormSchema, loginFormDefaults, loginFormFields } from "@schema/auth/login-form-schema";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import InputField from "./form-fields/InputField";

type LoginFormProps = {
    isSubmitting: boolean
    onSubmit: SubmitHandler<Login>
}

const LoginForm = ({ onSubmit, isSubmitting }: LoginFormProps) => {

    const formContext = useForm<Login>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: loginFormDefaults
    });

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    loginFormFields.map((formField) => (
                        <FormFieldWrapper 
                        key={formField.name} 
                        formFieldSchema={formField} 
                        control={formContext.control} 
                        Child={{
                            Component: InputField,
                            props: {fieldType: formField.fieldType}
                        }} />
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