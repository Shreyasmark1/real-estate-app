import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { Register, registerFormDefaults, registerFormFields, RegisterFormSchema } from "@schema/auth/register-form-schema";
import InputField from "./form-fields/InputField";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";

type RegisterFormProps = {
    onSubmit: SubmitHandler<Register>,
    isSubmitting: boolean
}

const RegisterForm = ({ onSubmit, isSubmitting }: RegisterFormProps) => {

    const formContext = useForm<Register>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: registerFormDefaults
    });

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    registerFormFields.map((formField) => (
                        <FormFieldWrapper
                            key={formField.name}
                            formFieldSchema={formField}
                            control={formContext.control}
                            Child={{
                                Component: InputField
                            }} />
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