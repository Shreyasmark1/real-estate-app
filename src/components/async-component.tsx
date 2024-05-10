import LoadingPage from "@/pages/loading-page";
import { PropsWithChildren, Suspense } from "react";

function AsynPageLoader({ children } : PropsWithChildren){
    return <Suspense fallback= {<LoadingPage/>}> {children} </Suspense>
}

export { AsynPageLoader }