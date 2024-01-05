import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { CommandGroup, CommandItem } from "cmdk";
import { Command, CheckIcon } from "lucide-react";
import { SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import InputField from "./form-fields/InputField";

const options = [
    {
        value: "next.js",
        label: "Apartment",
    },
    {
        value: "sveltekit",
        label: "Villa",
    },
    {
        value: "nuxt.js",
        label: "House",
    },
    {
        value: "astro",
        label: "Agricultural land",
    },
    {
        value: "remix",
        label: "Hotel",
    },
]


const FilterProjectForm = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className="w-1/3">
            <div className="bg-gray-100 rounded-3xl flex flex-wrap px-8 py-6 relative transform -translate-y-44 translate-x-4">
                <span className="w-1/2 px-5">Filter</span> <span className="w-1/2 text-right px-5">Reset</span>
                <div className="relative w-full mt-1">
                    <InputField />
                </div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between rounded-lg"
                        >
                            <span className="overflow-hidden">
                                {value
                                    ? "Type: " + options.find((framework) => framework.value === value)?.label
                                    : "Type"}
                            </span>
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            {/* <CommandInput placeholder="Search type..." className="h-9" />
                                <CommandEmpty>Not found.</CommandEmpty>  */}
                            <CommandGroup>
                                {options.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue: SetStateAction<string>) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {framework.label}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export default FilterProjectForm;