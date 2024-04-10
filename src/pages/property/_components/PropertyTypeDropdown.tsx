import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import ComboBox from "../../../components/forms/form-fields/ComboBox";
import FormFieldWrapper from "../../../components/forms/form-fields/FormFieldWrapper";
import { Button } from "../../../components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { SetStateAction, useState } from "react";
import { CommandItem } from "../../../components/ui/command";
import { cn } from "@/lib/utils";

type Props = {
    formContext?: UseFormReturn<any, any, undefined>,
}

const PropertyTypeDropdown = ({ formContext }: Props) => {

    const [comboOpen, setComboOpen] = useState<boolean>(false)

    const currentValue = formContext?.watch("propertyType")

    const filter = (value: string, search: string) => {
        search = search.toLowerCase();
        const option = options.find(option => option.value.toLowerCase() === value.toLowerCase());
        if (!option) return 0; // Value not found in options array
        const label = option.label.toLowerCase();
        return label.includes(search) ? 1 : 0;
    }

    return (
        <FormFieldWrapper
            // className="w-[300px] md:w-[200px]"
            name="propertyType"
            label="Property Type"
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
                            {currentValue ? options.find(({ value }) => value === currentValue)?.label : ""}
                        </span>
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                }>
                {
                    options.map(({ label, value }) => (
                        <CommandItem
                            key={value}
                            value={value}
                            // onChange={(selectedValue: any) => formContext?.setValue("propertyType", selectedValue)}
                            onSelect={(selectedValue: SetStateAction<string>) => {
                                const newValue: any = selectedValue === currentValue ? "" : selectedValue;
                                formContext?.setValue("propertyType", newValue)
                                setComboOpen(false)
                            }}
                        >
                            {label}
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

export default PropertyTypeDropdown;

const options = [
    {
        value: "123456789012345678901234567890123456",
        label: "Apartment",
    },
    {
        value: "123456789012345678901234567890123457",
        label: "Villa",
    },
    {
        value: "123456789012345678901234567890123458",
        label: "House",
    },
    {
        value: "123456789012345678901234567890123459",
        label: "Agricultural land",
    },
    {
        value: "1234567890123456789012345678901234560",
        label: "Hotel",
    },
]