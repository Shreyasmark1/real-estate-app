import { z } from "zod";
import { FormField } from "./auth-schema";

export const registerFormFields: FormField[] = [
    {
        name: "fullName",
        fieldValidation: z.string().min(3, "Invalid name"),
        fieldType: "text",
        label: "Name",
        defaultValue: ""
    },
    {
        name: "mobile",
        fieldValidation: z.string().length(10, "Invalid mobile number"),
        fieldType: "number",
        label: "Mobile number",
        defaultValue: ""
    },
    {
        name: "email",
        fieldValidation: z.string().email("Invalid email"),
        fieldType: "email",
        label: "Email address",
        defaultValue: ""
    },
    {
        name: "password",
        fieldValidation: z.string().min(6, "Password must be atleast 6 characters"),
        fieldType: "password",
        label: "Create a new Password",
        defaultValue: ""
    },
    {
        name: "confirmPassword",
        fieldValidation: z.string(),
        fieldType: "password",
        label: "Confirm password",
        defaultValue: ""
    }
]

export const registerFormDefaults = Object.fromEntries(
    registerFormFields.map((field) => [field.name, field.defaultValue])
)

export const RegisterFormSchema = z.object(
    Object.fromEntries(
        registerFormFields.map((field) => [field.name, field.fieldValidation])
    )
).refine((data) => data.password && data.confirmPassword ? data.password === data.confirmPassword : false, {
    message: "Password must match",
    path: ["confirmPassword"]
})

export type Register = z.infer<typeof RegisterFormSchema>