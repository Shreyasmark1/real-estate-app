import { z } from "zod";
import { FormField } from "../from-field";

export const LoginFormFields: FormField[] = [
    {
        name: "userName",
        fieldValidation:z.string().min(5, "Invalid user name"),
        fieldType: "text",
        label: "Mobile/Email",
        defaultValue: ""
    },
    {
        name: "password",
        fieldValidation:  z.string().min(6, "Invalid password"),
        fieldType: "password",
        label: "Password",
        defaultValue: "",
    }
]

export const LoginFormDefaults = Object.fromEntries(
    LoginFormFields.map((field) => [field.name, field.defaultValue])
)

export const LoginFormSchema = z.object(
    Object.fromEntries(
        LoginFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type Login = z.infer<typeof LoginFormSchema>