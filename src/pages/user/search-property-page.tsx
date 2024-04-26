import ProjectListCard from "@/feature/property/_components/property-list-card";
import FilterProjectForm from "@/feature/property/_components/FilterProjectForm";
import { FilterIcon } from "lucide-react";
import { useState } from "react";

const SearchPropertyPage = () => {

    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    const [_show, setShow] = useState(false)

    const toggleSheet = () => setShow(prev => !prev)

    return (
        <div className="page-style flex gap-1">
            <div className="hidden md:block fixed w-3/12">
                <FilterProjectForm />
            </div>
            <div className="md:w-8/12 ml-auto bg-gray-100 rounded-3xl overflow-auto">
                <span className="text-2xl"> Best Options</span>
                <div className="flex flex-col gap-3">
                    {
                        list.map((_, index) => (
                            <ProjectListCard key={index} />
                        ))
                    }
                </div>
            </div>
            <FilterIcon onClick={toggleSheet} className="md:hidden fixed h-[46px] w-[46px] bottom-8 left-8 bg-blue-500 text-white p-2 rounded-full hover:cursor-pointer" />
        </div>
    );
}

export default SearchPropertyPage;
