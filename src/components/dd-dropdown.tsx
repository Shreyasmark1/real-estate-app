import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import ComboBox from "./form-fields/ComboBox";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import { Button } from "./ui/button";
import { UseFormReturn } from "react-hook-form";
import { SetStateAction, useState } from "react";
import { CommandItem } from "./ui/command";
import { cn } from "@/lib/utils";
import { PropertyDD } from "../feature/property/_schemas/property-schema";

type Props = {
    formContext: UseFormReturn<any, any, undefined>,
    options: PropertyDD[],
    label: string,
    fieldName: string,
    className?: string
}

const DDDropdown = ({ formContext, options, fieldName, label, className }: Props) => {

    const [comboOpen, setComboOpen] = useState<boolean>(false)

    const currentValue = formContext?.watch(fieldName)

    const filter = (value: string, search: string) => {
        search = search.toLowerCase();
        const option = options.find(option => option.value.toLowerCase() === value.toLowerCase());
        if (!option) return 0; // Value not found in options array
        const label = option.value.toLowerCase();
        return label.includes(search) ? 1 : 0;
    }

    return (
        <FormFieldWrapper
            className={className}
            name={fieldName}
            label={label}
            control={formContext?.control}
        >
            <ComboBox
                enableSearch={false}
                className="w-[150px]"
                filter={filter}
                trigger={
                    <Button
                        role="combobox"
                        aria-expanded={comboOpen}
                        variant="outline"
                        className="w-full justify-between rounded-lg"
                    >
                        <span className="overflow-hidden truncate">
                            {currentValue ? options.find((obj) => obj.uniqueId === currentValue)?.value : ""}
                        </span>
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                }>
                {
                    options.map(({ value, uniqueId }) => (
                        <CommandItem
                            key={uniqueId}
                            value={uniqueId ?? undefined}
                            onChange={(selectedValue: any) => formContext?.setValue(fieldName, selectedValue)}
                            onSelect={(selectedValue: SetStateAction<string>) => {
                                const newValue: any = selectedValue === currentValue ? "" : selectedValue;
                                formContext?.setValue(fieldName, newValue)
                                setComboOpen(false)
                            }}
                        >
                            {value}
                            <CheckIcon
                                className={cn(
                                    "ml-auto h-4 w-4",
                                    currentValue === uniqueId ? "opacity-100" : "opacity-0"
                                )}
                            />
                        </CommandItem >
                    ))
                }
            </ComboBox>
        </FormFieldWrapper>
    );
}

export default DDDropdown;