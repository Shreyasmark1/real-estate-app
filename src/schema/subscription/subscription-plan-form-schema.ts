import { z } from "zod";
import { FormFieldSchema } from "../from-field";
import { PlanStatus } from "./subscription-types";

export const subscriptionPlanFormFields: FormFieldSchema[] = [
    {
        name: "uniqueId",
        fieldValidation: z.optional(z.string()),
        fieldType: "text",
        label: "Unique Id",
        defaultValue: "",
        render: false
    },
    {
        name: "planName",
        fieldValidation: z.string().min(3, "Plan name should be minimum 3 characters long").max(100, "Plan name cannot be more than 100 characers"),
        fieldType: "text",
        label: "Plan Name",
        defaultValue: "",
        render: true
    },
    {
        name: "price",
        fieldValidation: z.preprocess(
            (a) => parseInt(z.any().parse(a), 10),
            z.number().positive("Amount cannot be Negative").min(100, "Amount cannot be less than 100").max(100000, "Amount cannot be more than 99,999")
          ),
        fieldType: "number",
        label: "Amount",
        defaultValue: "0",
        render: true
    },
    {
        name: "features",
        fieldValidation: z.array(z.string().min(6, "Feature needs to be 6 chracters long").max(100, "Feature cannot be more than 100 chracters")).max(15, "There can be Max of 15 features").min(1, "There needs to be atleast 1 feature"),
        fieldType: "text-array",
        label: "Features",
        defaultValue: [],
        render: true
    },
    {
        name: "status",
        fieldValidation: z.nativeEnum(PlanStatus),
        fieldType: "undefined",
        label: "Status",
        defaultValue: PlanStatus.DISABLED,
        render: false
    },
    {
        name: "createdAt",
        fieldValidation: z.string().nullable().optional(),
        fieldType: "text",
        label: "Created At",
        defaultValue: "",
        render: false
    },
    {
        name: "updatedAt",
        fieldValidation: z.string().nullable().optional(),
        fieldType: "text",
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