import { z } from "zod";
import { FormFieldSchema, FormFieldType } from "../from-field";

export const subscriptionPlanFormFields: FormFieldSchema[] = [
    {
        name: "uniqueId",
        fieldValidation: z.optional(z.string()),
        fieldType: FormFieldType.text,
        label: "Unique Id",
        defaultValue: "",
        render: false
    },
    {
        name: "planName",
        fieldValidation: z.string().min(3, "Minimum 3 characters").max(100, "Maximun 100 characters allowed"),
        fieldType: FormFieldType.text,
        label: "Plan Name",
        defaultValue: "",
        render: true
    },
    {
        name: "price",
        fieldValidation: z.preprocess(
            (a) => parseInt(z.any().parse(a), 10),
            z.number().positive().min(100, "Minimun amount of 100").max(100000, "Max amount of 99,999")
          ),
        fieldType: FormFieldType.number,
        label: "Amount",
        defaultValue: "",
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
        fieldValidation: z.string().nullable().optional(),
        fieldType: FormFieldType.text,
        label: "Created At",
        defaultValue: "",
        render: false
    },
    {
        name: "updatedAt",
        fieldValidation: z.string().nullable().optional(),
        fieldType: FormFieldType.text,
        label: "Updated At",
        defaultValue: "",
        render: false
    }
]

export const subscriptionPlanFormDefaults = Object.fromEntries(
    subscriptionPlanFormFields.map((field) => [field.name, field.defaultValue])
)

export const subscriptionPlanFormSchema = z.object(
    Object.fromEntries(
        subscriptionPlanFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type SubscriptionPlan = z.infer<typeof subscriptionPlanFormSchema>