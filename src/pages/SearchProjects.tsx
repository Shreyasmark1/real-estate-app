import searchBackground from "@/assets/search-background.jpg"
import FilterProjectForm from "@/components/forms/FilterProjectForm";

const SearchProjectPage = () => {

    return (
        <div className="h-screen">
            <img
                src={searchBackground}
                className="h-2/5 w-full object-cover rounded-3xl"
            />
            <FilterProjectForm/>
        </div>
    );
}

export default SearchProjectPage;
