import { z } from "zod"
import { FormFieldSchema, FormFieldType } from "../from-field"

export const otpFormFields: FormFieldSchema[] = [
    {
        name: "otp",
        fieldValidation: z.string().min(6, "Invalid OTP").max(6, "Invalid OTP"),
        fieldType: FormFieldType.number,
        label: "Enter OTP sent to your mobile",
        defaultValue: "",
        render: true
    }
]

export const otpFormDefaults = Object.fromEntries(
    otpFormFields.map((field) => [field.name, field.defaultValue])
)

export const OtpFormSchema = z.object(
    Object.fromEntries(
        otpFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type Otp = z.infer<typeof OtpFormSchema>