import { z } from "zod";
import { AdvertiserType, SaleType, TransactionType } from "./enum";

// export const projectFormFields: FormFieldSchema[] = [
//     {
//         name: "projName",
//         fieldValidation: z.string().min(3),
//         fieldType: "text",
//         label: "Project name",
//         defaultValue: "",
//         render: true
//     },
//     {
//         name: "projType",
//         fieldValidation: z.string().length(36),
//         fieldType: "dropdown",
//         label: "Project type",
//         defaultValue: "",
//         render: true
//     },
//     // {
//     //     name: "saleType",
//     //     fieldValidation: z.string().length(36),
//     //     fieldType: "",
//     //     label: "Sale type",
//     //     defaultValue: ""
//     // },
//     {
//         name: "price",
//         fieldValidation: z.number(),
//         fieldType: "number",
//         label: "Price",
//         defaultValue: 0,
//         render: true
//     },
//     {
//         name: "description",
//         fieldValidation: z.string().min(20),
//         fieldType: "dropdown",
//         label: "Description",
//         defaultValue: "",
//         render: true
//     },
//     {
//         name: "area",
//         fieldValidation: z.number(),
//         fieldType: "number",
//         label: "Area (sq. meter)",
//         defaultValue: 0,
//         render: true
//     },
//     {
//         name: "Project Image",
//         fieldValidation: z.any()
//             .refine((file: File) => file?.size !== 0, "File is required")
//             .refine((file) => file.size < MAX_IMG_FILE_SIZE, "Max size is 5MB.")
//             .refine((file) => validateImageFileType(file), "Only .png, .jpeg formats are supported."),
//         fieldType: "image",
//         label: "Project Image",
//         defaultValue: null,
//         render: true
//     }
// ]

export const propertyFormDefaults: PropertyBasic = {
    uniqueId: "",
    projectId: "",
    propertyCode: "",
    propertyName: "",
    propertyType: "",
    area: 0,
    advertiserType: AdvertiserType.OWNER,
    basePrice: 0,
    maxPrice: 0,
    propertyAge: 0,
    description: [],
    saleType: SaleType.SALE,
    transactionType: TransactionType.NEW
}

export const PropertyBasicFormSchema = z.object({
    uniqueId: z.string().nullable(),
    propertyCode: z.string().nullable(),
    projectId: z.string().nullable(),
    propertyName: z.string().min(0),
    propertyType: z.string().length(36, "Please select property type"),
    saleType: z.nativeEnum(SaleType),
    transactionType: z.nativeEnum(TransactionType),
    basePrice: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Amount cannot be less than 100" }).min(100, "Amount cannot be less than 100")
    ),
    maxPrice: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Amount cannot be negative")
    ),
    area: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Value cannot be negative")
    ),
    propertyAge: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Amount cannot be negative")
    ),
    description: z.array(z.object({
        title: z.string(),
        description: z.string()
    })),
    advertiserType: z.nativeEnum(AdvertiserType),
    // address: z.string(),
    // propertyBannerImg: z.string(),
    // propertyBannerVideo: z.string(),
    // propertyImges: z.array(z.string()),
    // propertyVideos: z.array(z.string()),
})

export type PropertyBasic = z.infer<typeof PropertyBasicFormSchema>