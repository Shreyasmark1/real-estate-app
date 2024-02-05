import { FormFieldSchema } from "@/schema/from-field";
import { z } from "zod";

// form fields can be configured from backend and validation can be regex
export const loginFormFields: FormFieldSchema[] = [
    {
        name: "userName",
        fieldValidation: z.string().min(5, "Invalid Mobile/Email"),
        fieldType: "text" ,
        label: "Mobile/Email",
        defaultValue: "",
        render: true
    },
    {
        name: "password",
        fieldValidation: z.string().min(6, "Invalid password"),
        fieldType: "password" ,
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