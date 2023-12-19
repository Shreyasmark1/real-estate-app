import { z } from "zod";
import { FormField } from "../from-field";

export const projectFormFields: FormField[] = [
    {
        name: "projectType",
        fieldValidation: z.string().length(36),
        fieldType: "",
        label: "Project type",
        defaultValue: ""
    },
    {
        name: "saleType",
        fieldValidation: z.string().length(36),
        fieldType: "",
        label: "Sale type",
        defaultValue: ""
    },
    {
        name: "price",
        fieldValidation: z.number(),
        fieldType: "number",
        label: "price",
        defaultValue: 0
    },
    {
        name: "projectName",
        fieldValidation: z.string().min(3),
        fieldType: "text",
        label: "Project name",
        defaultValue: ""
    },
    {
        name: "description",
        fieldValidation: z.string().min(20),
        fieldType: "text",
        label: "Description",
        defaultValue: ""
    }
]

export const projectFormDefaults = Object.fromEntries(
    projectFormFields.map((field) => [field.name, field.defaultValue])
)

export const ProjectFormSchema = z.object(
    Object.fromEntries(
        projectFormFields.map((field) => [field.name, field.fieldValidation])
    )
)

export type Project = z.infer<typeof ProjectFormSchema>