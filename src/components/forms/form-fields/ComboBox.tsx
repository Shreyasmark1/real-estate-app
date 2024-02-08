import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { SetStateAction, useEffect, useState } from "react";
import { RefCallBack } from "react-hook-form";


type ListItem = {
    [key: string]: any;
};

type Props = {
    onChange?: (e: any) => void,
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void,
    value?: any,
    disabled?: boolean,
    ref?: RefCallBack,
    name?: string,
    options: ListItem[],
    labelField: string,
    valueField: string,
    enableSearch: boolean,
    className?: string
}

const ComboBox = ({ onChange, onBlur, value, disabled, ref, name, options, labelField, valueField, enableSearch, className }: Props) => {

    const [open, setOpen] = useState(false)

    const [lookupTable, setLookupTable] = useState<any>({});

    const filterByLabel = (value: string, search: string) => {
        const lowerSearch = search.toLowerCase();
        const lowerValue = value.toLowerCase();
        return lookupTable[lowerValue]?.some((label: string) => label.includes(lowerSearch)) ? 1 : 0;
    }

    useEffect(() => {
        let newLookupTable: any = {};

        options.forEach(option => {
            const label = option[labelField].toLowerCase();
            const value = option[valueField].toLowerCase();
            if (newLookupTable[value]) throw new Error(`Duplicate value found: ${value}`);
            newLookupTable[value] = [label];
        });

        setLookupTable(newLookupTable);        

    }, [options, labelField, valueField]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    disabled={disabled}
                    aria-expanded={open}
                    onBlur={onBlur}
                    ref={ref}
                    variant="outline"
                    name={name}
                    className={`w-full justify-between rounded-lg ${className}`}
                >
                    <span className="overflow-hidden truncate">
                        {value ? "Type: " + options.find((data) => data?.[valueField] === value)?.[labelField] : "Type"}
                    </span>
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`p-0 ${className}`}>
                <Command filter={(value, search) => filterByLabel(value, search)}>
                    {
                        enableSearch ? (
                            <>
                                <CommandInput placeholder="Search type..." className="h-9" />
                                <CommandEmpty>Not found.</CommandEmpty>
                            </>
                        ) : <></>
                    }
                    <CommandGroup>
                        {options.map((data) => (
                            <CommandItem
                                key={data?.[valueField]}
                                value={data?.[valueField]}
                                onChange={onChange}
                                onSelect={(currentValue: SetStateAction<string>) => {
                                    const newValue = currentValue === value ? "" : currentValue;
                                    if(onChange) onChange(newValue)
                                    setOpen(false)
                                }}
                            >
                                {data?.[labelField]}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === data?.[valueField] ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default ComboBox;