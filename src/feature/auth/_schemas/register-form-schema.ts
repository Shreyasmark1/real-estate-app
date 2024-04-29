import { FormFieldSchema } from "@/schema/from-field";
import { z } from "zod";

export const registerFormFields: FormFieldSchema[] = [
    {
        name: "fullName",
        fieldValidation: z.string().min(3, "Invalid name"),
        fieldType: "text",
        label: "Name",
        defaultValue: "",
        render: true
    },
    {
        name: "mobile",
        fieldValidation: z.string().length(10, "Invalid mobile number"),
        fieldType: "number",
        label: "Mobile number",
        defaultValue: "",
        render: true
    },
    {
        name: "email",
        fieldValidation: z.string().email("Invalid email"),
        fieldType: "email",
        label: "Email address",
        defaultValue: "",
        render: true
    },
    {
        name: "password",
        fieldValidation: z.string().min(6, "Password must be atleast 6 characters"),
        fieldType: "password",
        label: "Create a new Password",
        defaultValue: "",
        render: true
    },
    {
        name: "confirmPassword",
        fieldValidation: z.string(),
        fieldType: "password",
        label: "Confirm password",
        defaultValue: "",
        render: true
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