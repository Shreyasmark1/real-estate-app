import searchBackground from "@/assets/search-background.jpg"
import ProjectListCard from "@/components/ProjectListCard";
import FilterProjectForm from "@/components/forms/FilterProjectForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchProjectPage = () => {


    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <div className="h-screen">
            <img
                src={searchBackground}
                className="h-2/5 w-full object-cover rounded-3xl"
            />
            <div className="flex sticky top-0 h-full">
                <FilterProjectForm />
                <div className="ml-8 w-3/5 py-6 px-8 bg-gray-100 rounded-3xl transform -translate-y-44 translate-x-4">
                    <span className="text-2xl"> Best Options</span>
                    <ScrollArea className="flex flex-col h-[500px] mt-2">
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
