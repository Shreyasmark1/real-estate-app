
import { LoginSchema, Login } from "@/lib/schemas/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "./ui/form";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type LoginFormProps = {
    onSubmit: SubmitHandler<{ userName: string; password: string; }>
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {

    const form = useForm<Login>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            userName: "",
            password: "",
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full max-w-sm items-center gap-1.5 py-2 mb-1 text-md ">
                    <FormField
                        name="userName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Mobile/Email</Label>
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
                <div className="grid w-full max-w-sm items-center gap-1.5 py-4 mb-2 text-md ">
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label>Pasword</Label>
                                <FormControl>
                                    <Input type="password" id="password" {...field} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="w-full bg-black text-white p-2 rounded-1g mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">Login in</Button>
            </form>
        </Form >
    );
}

export default LoginForm;