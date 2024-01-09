import { useState } from "react";
import InputField from "./form-fields/InputField";
import { IndianRupeeIcon, SearchIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import ComboBox from "./form-fields/ComboBox";

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
    const [value, setValue] = useState("")

    return (
        <div className="w-2/6 h-full">
            <div className="bg-gray-100 rounded-3xl flex flex-wrap px-8 py-6 relative transform -translate-y-44 translate-x-4 ">
                <div className="flex justify-between w-full px-2">
                    <Badge variant="outline" className="cursor-pointer">Filter</Badge>
                    <Badge variant="outline" className="cursor-pointer">Reset</Badge>
                </div>
                <div className="relative w-full mt-1">
                    <InputField
                        className="pl-10"
                        leftIcon={<SearchIcon />}
                    />
                </div>
                <div className="w-full">
                    <Label className="ml-1">Price range</Label>
                    <div className="flex gap-0.5">
                        <div className="relative">
                            <InputField
                                className="pl-9"
                                leftIcon={<IndianRupeeIcon size={16} />}
                            />
                        </div>
                        <div className="relative">
                            <InputField
                                className="pl-9"
                                leftIcon={<IndianRupeeIcon size={16} />}
                            />
                        </div>
                    </div>
                </div>
                <ComboBox
                    options={options}
                    value={value}
                    onChange={setValue}
                    labelField={"label"}
                    valueField={"value"}
                    enableSearch
                    className="w-[150px]" />
            </div>
        </div>
    );
}

export default FilterProjectForm;