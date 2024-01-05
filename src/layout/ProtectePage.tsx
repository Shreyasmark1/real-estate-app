import SecureStorageService from "@/lib/store/local-storage/local-storage-secure";
import { LS_ACESS_TOKEN_KEY } from "@/utils/env-helper";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type props = {
    children: ReactNode
}

const ProjectedPage = ({ children }: props) => {

    const isLoggedIn = SecureStorageService.getItem(LS_ACESS_TOKEN_KEY);
    return true ? (children) : <Navigate to="/login" />
}

export default ProjectedPage;