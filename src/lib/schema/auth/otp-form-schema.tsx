import { z } from "zod"
import { FormField } from "./auth-schema"

export const OtpFormFields : FormField[] = [
    {
        name: "otp",
        fieldValidation: z.string().min(6, "Invalid OTP").max(6, "Invalid OTP"),
        fieldType: "number",
        label: "Enter OTP sent to your mobile",
        defaultValue: ""
    }
]

export const OtpFormDefaults = Object.fromEntries(
    OtpFormFields.map((field) => [field.name, field.defaultValue])
)

export const OtpFormSchema = z.object(
    Object.fromEntries(
        OtpFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type Otp = z.infer<typeof OtpFormSchema>