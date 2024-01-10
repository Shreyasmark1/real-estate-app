import ProjectListCard from "@/components/ProjectListCard";
import FilterProjectForm from "@/components/forms/FilterProjectForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchProjectPage = () => {

    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <div>
            <div className="flex">
                <FilterProjectForm />
                <div className="ml-8 w-3/5 py-6 px-8 bg-gray-100 rounded-3xl">
                    <span className="text-2xl"> Best Options</span>
                    <ScrollArea className="flex flex-col mt-2 h-[450px]">
                        {
                            list.map((_, index) => (
                                <ProjectListCard key={index} />
                            ))
                        }
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}

export default SearchProjectPage;
