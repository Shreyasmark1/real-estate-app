
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "../ui/form";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Login, LoginFormDefaults, LoginFormFields, LoginFormSchema } from "@schema/auth/login-form-schema";

type LoginFormProps = {
    isSubmitting: boolean
    onSubmit: SubmitHandler<Login>
}

const LoginForm = ({ onSubmit, isSubmitting }: LoginFormProps) => {

    const formContext = useForm<Login>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: LoginFormDefaults
    });

    return (
        <Form {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                {
                    LoginFormFields.map((formField) => (
                        <div key={formField.name} className="grid w-full max-w-sm items-center py-1 mb-1 text-md">
                            <FormField
                                name={formField.name}
                                control={formContext.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <Label> {formField.label} </Label>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type={formField.fieldType}
                                                autoComplete={formField.name === 'password' ? 'current-password' : 'on'}
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
                    className="w-full bg-black text-white p-2 rounded-1g mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Login
                </Button>
            </form>
        </Form >
    );
}

export default LoginForm;