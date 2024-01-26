import { FormFieldSchema, FormFieldType } from "@/feature/types/from-field";
import { z } from "zod";

export const loginFormFields: FormFieldSchema[] = [
    {
        name: "userName",
        fieldValidation: z.string().min(5, "Invalid user name"),
        fieldType: FormFieldType.text,
        label: "Mobile/Email",
        defaultValue: "",
        render: true
    },
    {
        name: "password",
        fieldValidation: z.string().min(6, "Invalid password"),
        fieldType: FormFieldType.password,
        label: "Password",
        defaultValue: "",
        render: true
    }
]

export const loginFormDefaults = Object.fromEntries(
    loginFormFields.map((field) => [field.name, field.defaultValue])
)

export const LoginFormSchema = z.object(
    Object.fromEntries(
        loginFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type Login = z.infer<typeof LoginFormSchema>