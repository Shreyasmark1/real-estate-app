import { z } from "zod";

export const LoginSchema = z.object({
    userName: z.string().min(5, "Invalid user name"),
    password: z.string().min(6, "Invalid password")
})

export type Login = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
    name: z.string().min(3, "Invalid name"),
    email: z.string().email("Invalid email"),
    mobile: z.string().length(10, "Invalid mobile number"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"]
});

export type Register = z.infer<typeof RegisterSchema>