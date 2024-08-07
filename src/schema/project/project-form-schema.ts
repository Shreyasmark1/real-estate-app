import { z } from "zod";
import { FormFieldSchema } from "../from-field";
import { validateImageFileType } from "@/lib/utils/utils";
import { MAX_IMG_FILE_SIZE } from "@/config/file-constants";

export const projectFormFields: FormFieldSchema[] = [
    {
        name: "projName",
        fieldValidation: z.string().min(3),
        fieldType: "text",
        label: "Project name",
        defaultValue: "",
        render: true
    },
    {
        name: "projType",
        fieldValidation: z.string().length(36),
        fieldType: "dropdown",
        label: "Project type",
        defaultValue: "",
        render: true
    },
    // {
    //     name: "saleType",
    //     fieldValidation: z.string().length(36),
    //     fieldType: "",
    //     label: "Sale type",
    //     defaultValue: ""
    // },
    {
        name: "price",
        fieldValidation: z.number(),
        fieldType: "number",
        label: "Price",
        defaultValue: 0,
        render: true
    },
    {
        name: "description",
        fieldValidation: z.string().min(20),
        fieldType: "dropdown",
        label: "Description",
        defaultValue: "",
        render: true
    },
    {
        name: "area",
        fieldValidation: z.number(),
        fieldType: "number",
        label: "Area (sq. meter)",
        defaultValue: 0,
        render: true
    },
    {
        name: "Project Image",
        fieldValidation: z.any()
            .refine((file: File) => file?.size !== 0, "File is required")
            .refine((file) => file.size < MAX_IMG_FILE_SIZE, "Max size is 5MB.")
            .refine((file) => validateImageFileType(file), "Only .png, .jpeg formats are supported."),
        fieldType: "image",
        label: "Project Image",
        defaultValue: null,
        render: true
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