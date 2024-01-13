import { usePageName } from "@/lib/context/PageContext";
import { useEffect } from "react";

const ProjectsPage = () => {

    const PAGE_NAME = "Search Projects"

    const { setPageName } = usePageName();

    useEffect(() => {
        setPageName(PAGE_NAME)
    }, [])
    
    return ( 
        <>
        </>
     );
}
 
export default ProjectsPage;