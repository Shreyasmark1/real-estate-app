import { useState } from "react";
import { IndianRupeeIcon, SearchIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import ComboBox from "./form-fields/ComboBox";
import { Input } from "../ui/input";

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
        <div className="w-2/6">
            <div className="bg-gray-100 rounded-3xl flex flex-wrap px-8 py-6">
                <div className="flex justify-between w-full px-2">
                    <Badge variant="outline" className="cursor-pointer">Filter</Badge>
                    <Badge variant="outline" className="cursor-pointer">Reset</Badge>
                </div>
                <div className="relative w-full mt-1">
                    <Input
                        className="pl-10"
                        leftIcon={<SearchIcon />}
                    />
                </div>
                <div className="w-full">
                    <Label className="ml-1">Price range</Label>
                    <div className="flex gap-1">
                        <Input
                            className="pl-9"
                            type="number"
                            leftIcon={<IndianRupeeIcon size={16} />}
                        />
                        <Input
                            className="pl-9"
                            type="number"
                            leftIcon={<IndianRupeeIcon size={16} />}
                        />
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