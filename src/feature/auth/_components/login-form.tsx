
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import FormFieldWrapper from "../../../components/forms/form-fields/FormFieldWrapper";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { Login, LoginFormSchema, loginFormDefaults, loginFormFields } from "@/feature/auth/_schemas/login-form-schema";
import { Input } from "../../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Link } from "react-router-dom";

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
        <Card className="mx-auto bg-white shadow-2xl rounded-2xl p-8 w-screen md:max-w-sm">
            <CardHeader>
                <CardTitle className="m-3 text-4xl font-bold text-center">Welcome back</CardTitle>
                <CardDescription className="text-center">
                    Login to continue
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...formContext}>
                    <form
                        onSubmit={formContext.handleSubmit(onSubmit)}
                        className="flex flex-col gap-2"
                    >
                        {
                            loginFormFields.map((formField) => (
                                <FormFieldWrapper
                                    key={formField.name}
                                    name={formField.name}
                                    label={formField.label}
                                    control={formContext.control}
                                >
                                    <Input
                                        type={formField.fieldType}
                                        autoComplete={formField.fieldType === "password" ? "current-password" : "on"} />
                                </FormFieldWrapper>
                            ))
                        }
                        <Button
                            disabled={isSubmitting}
                            size="lg"
                            className="w-full">
                            Login
                        </Button>
                    </form>
                </Form >
            </CardContent>
            <CardFooter className="text-center p-0 gap-1">
                Dont have an account?
                <Link className="font-bold" to={"/register"}> Create one for free</Link>
            </CardFooter>
        </Card>
    );
}

export default LoginForm;