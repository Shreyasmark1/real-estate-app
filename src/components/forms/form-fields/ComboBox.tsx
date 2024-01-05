// import { cn } from "@/lib/utils";
// import { CaretSortIcon } from "@radix-ui/react-icons";
// import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
// import { Command, CheckIcon } from "lucide-react";
// import { SetStateAction, useState } from "react";
// import { Button } from "../ui/button";
// import { CommandGroup, CommandItem } from "../ui/command";
// import { FormFieldSchema, FormFieldType } from "@/lib/schema/from-field";
// import { Control } from "react-hook-form";

// type Props = {
//     formFieldSchema?: FormFieldSchema,
//     control?: Control<{ [x: string]: any; }> | undefined
// }

// const ComboBox = ({ formFieldSchema, control }: Props) => {

//     const frameworks = [{}]

//     const [open, setOpen] = useState(false)
//     const [value, setValue] = useState("")

//     if(formFieldSchema?.fieldType != FormFieldType.dropdown){
//         const filedTypeName = FormFieldType[formFieldSchema.fieldType]
//         throw new Error(`${filedTypeName} is not compatible with ComboBox`)
//     }

//     return (
//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//                 <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={open}
//                     className="w-[200px] justify-between rounded-lg"
//                 >
//                     <span className="overflow-hidden">
//                         {value
//                             ? "Type: " + frameworks.find((framework) => framework.value === value)?.label
//                             : "Type"}
//                     </span>
//                     <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     {/* <CommandInput placeholder="Search type..." className="h-9" />
//                                 <CommandEmpty>Not found.</CommandEmpty>  */}
//                     <CommandGroup>
//                         {frameworks.map((framework) => (
//                             <CommandItem
//                                 key={framework.value}
//                                 value={framework.value}
//                                 onSelect={(currentValue: SetStateAction<string>) => {
//                                     setValue(currentValue === value ? "" : currentValue)
//                                     setOpen(false)
//                                 }}
//                             >
//                                 {framework.label}
//                                 <CheckIcon
//                                     className={cn(
//                                         "ml-auto h-4 w-4",
//                                         value === framework.value ? "opacity-100" : "opacity-0"
//                                     )}
//                                 />
//                             </CommandItem>
//                         ))}
//                     </CommandGroup>
//                 </Command>
//             </PopoverContent>
//         </Popover>
//     );
// }

// export default ComboBox;