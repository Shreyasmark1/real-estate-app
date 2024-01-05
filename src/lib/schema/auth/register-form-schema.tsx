import { z } from "zod";
import { FormFieldSchema, FormFieldType } from "../from-field";

export const registerFormFields: FormFieldSchema[] = [
    {
        name: "fullName",
        fieldValidation: z.string().min(3, "Invalid name"),
        fieldType: FormFieldType.text,
        label: "Name",
        defaultValue: ""
    },
    {
        name: "mobile",
        fieldValidation: z.string().length(10, "Invalid mobile number"),
        fieldType: FormFieldType.number,
        label: "Mobile number",
        defaultValue: ""
    },
    {
        name: "email",
        fieldValidation: z.string().email("Invalid email"),
        fieldType: FormFieldType.email,
        label: "Email address",
        defaultValue: ""
    },
    {
        name: "password",
        fieldValidation: z.string().min(6, "Password must be atleast 6 characters"),
        fieldType: FormFieldType.password,
        label: "Create a new Password",
        defaultValue: ""
    },
    {
        name: "confirmPassword",
        fieldValidation: z.string(),
        fieldType: FormFieldType.password,
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