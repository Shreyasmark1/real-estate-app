import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import FormFieldWrapper from "../../../components/forms/form-fields/FormFieldWrapper";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { Register, RegisterFormSchema, registerFormDefaults, registerFormFields } from "@/schema/auth/register-form-schema";
import { Input } from "../../../components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../components/ui/card";
import { Link } from "react-router-dom";

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
        <Card className="mx-auto bg-white shadow-2xl rounded-2xl p-4 w-screen md:w-[450px]">
            <CardHeader>
                <CardTitle className=" text-4xl font-bold text-center">App name</CardTitle>
                <CardDescription className="text-center">
                    Please enter your details to get started
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...formContext}>
                    <form onSubmit={formContext.handleSubmit(onSubmit)}>
                        {
                            registerFormFields.map((formField) => (
                                <FormFieldWrapper
                                    key={formField.name}
                                    name={formField.name}
                                    label={formField.label}
                                    control={formContext.control}
                                >
                                    <Input type={formField.fieldType} autoComplete={formField.fieldType === "password" ? "current-password" : "on"} />
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
            </CardContent>
            <CardFooter className="p-0 justify-center gap-1">
                Already have an account?
                <Link className="font-bold" to={"/login"}> Login now</Link>
            </CardFooter>
        </Card>
    );
}

export default RegisterForm;