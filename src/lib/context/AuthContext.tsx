import LoginPage from "@/pages/Login";
import { ReactNode, createContext, useState } from "react";
import { USER_AUTHPRITIES } from "@/utils/constants";

type AuthContextType = {
    isLoggedIn: boolean;
    authority?: string;
    logout: () => ReactNode;
    login: (userType: number) => void;
    hasAuthority: (authorityName: string) => boolean;
    setAuthority: (authorityName: string) => void
}

type AuthContextProp = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthContextProvider = ({ children }: AuthContextProp) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [authority, setAuthority] = useState<string | undefined>("SUPER_ADMIN")
    const [authorities, setAuthorities] = useState<string[]>([])

    const login = (userType: number) => {
        const userAuthority = USER_AUTHPRITIES.filter((item) => item.userType === userType)[0]

        setAuthority(userAuthority.default);
        setAuthorities(userAuthority.authorities);
        setIsLoggedIn(true)
        // TODO: store in local storage
    }

    const logout = () => {
        setAuthority(undefined)
        setIsLoggedIn(false)
        setAuthorities([])
        // TODO: remove from local storage
        console.log("logout")
        return <LoginPage />
    }

    const hasAuthority = (authorityName: string): boolean => {
        return authorities.includes(authorityName);
    }

    return (
        <AuthContext.Provider value={{ setAuthority, hasAuthority, login, logout, isLoggedIn, authority}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;