import { Register, RegisterSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormField, FormItem, FormControl, FormDescription, FormMessage, Form } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type RegisterFormProps = {
    onSubmit: SubmitHandler<{
        name: string,
        mobile: string,
        email: string,
        password: string,
        confirmPassword: string
    }>
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {

    const form = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            mobile: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full max-w-sm items-center gap-1.5 text-md ">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Name</Label>
                                <FormControl>
                                    <Input {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 text-md ">
                    <FormField
                        name="mobile"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Mobile</Label>
                                <FormControl>
                                    <Input type="email" {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 text-md ">
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Email</Label>
                                <FormControl>
                                    <Input type="text" {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 text-md ">
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Password</Label>
                                <FormControl>
                                    <Input type="password" {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 text-md ">
                    <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Confirm password</Label>
                                <FormControl>
                                    <Input type="password" {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="w-full bg-black text-white mt-2 rounded-1g my-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                    Register
                </Button>
            </form>
        </Form>
    );
}

export default RegisterForm;