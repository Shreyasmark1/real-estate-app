import { z } from "zod";
import { PropertyDDType } from "./enum";

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

const propertyBasicFormDefaults: PropertyBasicDetail = {
    uniqueId: "",
    propertyName: "",
    area: 0,
    basePrice: 0,
    maxPrice: 0,
    propertyAge: 0,
    propertyTypeDD: "",
    saleTypeDD: "",
    advertiserTypeDD: ""
}

const PropertyBasicFormSchema = z.object({
    uniqueId: z.string().nullable(),
    propertyName: z.string().min(0),
    basePrice: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter the price" }).min(1, "Please enter a valid price")
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
    propertyTypeDD: z.string().length(36, "Please select property type"),
    advertiserTypeDD: z.string().length(36, "Please select property type"),
    saleTypeDD: z.string().length(36, "Please select property type"),


    // propertyCode: z.string().nullable(),
    // projectId: z.string().nullable(),
    // saleType: z.nativeEnum(SaleType),
    // transactionType: z.nativeEnum(TransactionType),
    // description: z.array(z.object({
    //     title: z.string(),
    //     description: z.string()
    // })),
    // address: z.string(),
    // propertyBannerImg: z.string(),
    // propertyBannerVideo: z.string(),
    // propertyImges: z.array(z.string()),
    // propertyVideos: z.array(z.string()),
})

const propertyRoomDefaults: PropertyRoom = {
    uniqueId: "",
    noOfRooms: 0,
    noOfBedrooms: 0,
    noOfBathrooms: 0,
    noOfGuestrooms: 0
}

const PropertyRoomFormSchema = z.object({
    uniqueId: z.string().length(36, "Invalid property id"),
    noOfRooms: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Amount cannot be negative")
    ),
    noOfBedrooms: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Amount cannot be negative")
    ),
    noOfBathrooms: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Amount cannot be negative")
    ),
    noOfGuestrooms: z.preprocess(
        (a) => parseInt(z.any().parse(a), 10),
        z.number({ invalid_type_error: "Please enter a valid number or 0" }).min(0, "Amount cannot be negative")
    ),
})

const propertyDDDefaults: PropertyDD = {
    uniqueId: null,
    value: "",
    ddType: PropertyDDType.PROPERTY_TYPE
}

const ProperTyDDSchema = z.object({
    uniqueId: z.string().nullable(),
    value: z.string({ invalid_type_error: "Value cannot be empty" }).min(3, "Should be atleast 3 characters"),
    ddType: z.nativeEnum(PropertyDDType),
})

export const PropertySchema = {
    PropertyBasicFormSchema,
    propertyBasicFormDefaults,
    ProperTyDDSchema,
    propertyDDDefaults,
    PropertyRoomFormSchema,
    propertyRoomDefaults
}
export type PropertyDD = z.infer<typeof ProperTyDDSchema>
export type PropertyBasicDetail = z.infer<typeof PropertyBasicFormSchema>
export type PropertyRoom = z.infer<typeof PropertyRoomFormSchema>
export type Property = PropertyBasicDetail & {
    uniqueId:string,
    rooms: PropertyRoom
    bannerImag: string
    images: any[]
    createdAt: string,
    updatedAt: string
}