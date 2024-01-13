export type FormFieldSchema = {
    name: string,
    fieldValidation: any,
    fieldType: FormFieldType,
    label:string,
    defaultValue: any,
    className?: string,
    render: boolean
}

export enum FormFieldType {
    text,
    number,
    email,
    password,
    checkbox,
    dropdown,
    image,
    textArea,
    stringArray
}