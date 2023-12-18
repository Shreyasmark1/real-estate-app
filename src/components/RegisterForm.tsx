import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormField, FormItem, FormControl, FormDescription, FormMessage, Form } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Register, registerFormDefaults, registerFormFields, RegisterFormSchema } from "@schema/auth/register-form-schema";

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

export default RegisterForm;