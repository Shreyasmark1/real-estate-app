import ProjectListCard from "@/components/ProjectListCard";

const SearchProjectPage = () => {

    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <div className="page-style">
            <div className="flex">
                {/* <FilterProjectForm /> */}
                <div className="w-full bg-gray-100 rounded-3xl">
                    <span className="text-2xl"> Best Options</span>
                    <div className="flex flex-col mt-2">
                        {
                            list.map((_, index) => (
                                <ProjectListCard key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchProjectPage;
