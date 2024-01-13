import { z } from "zod";
import { FormFieldSchema, FormFieldType } from "../from-field";

export const planFormFields: FormFieldSchema[] = [
    {
        name: "uniqueId",
        fieldValidation: z.optional(z.string()),
        fieldType: FormFieldType.textArea,
        label: "Project name",
        defaultValue: "",
        render: false
    },
    {
        name: "planName",
        fieldValidation: z.string().min(3).max(100),
        fieldType: FormFieldType.text,
        label: "Plan Name",
        defaultValue: "",
        render: true
    },
    {
        name: "price",
        fieldValidation: z.number().min(2).max(5),
        fieldType: FormFieldType.number,
        label: "Amount",
        defaultValue: 0,
        render: true
    },
    {
        name: "features",
        fieldValidation: z.array(z.string().min(10).max(100)).length(1),
        fieldType: FormFieldType.stringArray,
        label: "Features",
        defaultValue: [],
        render: true
    },
    {
        name: "createdAt",
        fieldValidation: z.optional(z.string()),
        fieldType: FormFieldType.text,
        label: "Created At",
        defaultValue: "",
        render: false
    },
    {
        name: "updatedAt",
        fieldValidation: z.optional(z.string()),
        fieldType: FormFieldType.text,
        label: "Updated At",
        defaultValue: "",
        render: false
    }
]

export const planFormDefaults = Object.fromEntries(
    planFormFields.map((field) => [field.name, field.defaultValue])
)

export const PlanFormSchema = z.object(
    Object.fromEntries(
        planFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type Plan = z.infer<typeof PlanFormSchema>