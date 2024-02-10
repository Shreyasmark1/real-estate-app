import { useAuth } from "@/lib/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type props = {
    children: ReactNode
}

const AuthGuard = ({ children }: props) => {

    const { isLoggedIn } = useAuth()

    return isLoggedIn ? (children) : <Navigate to="/login" />
}

export default AuthGuard;