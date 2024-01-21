import { useOutletContext } from "react-router"

export type PageContextType = {
    pageName: string
    setPageName: React.Dispatch<React.SetStateAction<string>>
}

export function usePageName(){
    return useOutletContext<PageContextType>()
}