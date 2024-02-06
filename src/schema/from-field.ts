export type FormFieldSchema = {
    name: string,
    fieldValidation: any,
    fieldType: fieldType,
    label:string,
    defaultValue: any,
    className?: string,
    render: boolean
}

type fieldType =
 "text" | "email" | "number" | "password" | "text-area" | "dropdown" | "image" | "text-array" | "undefined"