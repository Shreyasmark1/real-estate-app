import LoginPage from "@/pages/LoginPage";
import { PropsWithChildren, ReactNode, createContext, useState } from "react";
import { USER_AUTHPRITIES } from "@/config/constants";

type AuthContextType = {
    isLoggedIn: boolean;
    authority?: string;
    logout: () => ReactNode;
    login: (userType: number) => void;
    hasAuthority: (authorityName: string) => boolean;
    setAuthority: (authorityName: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthContextProvider = ({ children }: PropsWithChildren) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [authority, setAuthority] = useState<string | undefined>()
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