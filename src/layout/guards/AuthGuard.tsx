import { useAuth } from "@/lib/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type props = {
    children: ReactNode
}

const AuthGuard = ({ children }: props) => {

    const { isLoggedIn } = useAuth()

    // const isLoggedIn = SecureStorageService.getItem(LS_ACESS_TOKEN_KEY);
    return isLoggedIn ? (children) : <Navigate to="/login" />
}

export default AuthGuard;