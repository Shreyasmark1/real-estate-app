import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import FormFieldWrapper from "./FormFieldWrapper";
import { Button } from "@/components/ui/button";
import ComboBox from "./ComboBox";
import { CommandItem } from "@/components/ui/command";

type Props = {
    label: string,
    fieldName: string,
    options: { [key: string]: string }, // any key-value enum 
    formContext: UseFormReturn<any, any, undefined>,
}

const EnumDropdown = ({ formContext, options, fieldName, label }: Props) => {

    const [comboOpen, setComboOpen] = useState<boolean>(false)

    const currentValue = formContext.watch(fieldName)

    const filter = (value: string, search: string) => {
        search = search.toLowerCase();
        const option = Object.values(options).find(option => option.toLowerCase() === value.toLowerCase());
        if (!option) return 0; // Value not found in options array
        const label = option.toLowerCase();
        return label.includes(search) ? 1 : 0;
    }

    return (
        <FormFieldWrapper
            // className="w-[300px] md:w-[200px]"
            name={fieldName}
            label={label}
            control={formContext?.control}
        >
            <ComboBox
                enableSearch
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
                            {currentValue ? options[currentValue] : ""}
                        </span>
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                }>
                {
                    Object.entries(options).map(([key, value]) => (
                        <CommandItem
                            key={value}
                            value={value}
                            // onChange={(selectedValue: any) => formContext?.setValue("advertiserType", selectedValue)}
                            onSelect={(selectedValue: SetStateAction<string>) => {
                                const newValue: any = selectedValue === currentValue ? null : selectedValue;
                                // work around for cmdk converting selectedValue to lowercase by default
                                formContext?.setValue(fieldName, newValue ? value : null)
                                setComboOpen(false)
                            }}
                        >
                            {key}
                            <CheckIcon
                                className={cn(
                                    "ml-auto h-4 w-4",
                                    currentValue === value ? "opacity-100" : "opacity-0"
                                )}
                            />
                        </CommandItem >
                    ))
                }
            </ComboBox>
        </FormFieldWrapper>
    );
}

export default EnumDropdown;