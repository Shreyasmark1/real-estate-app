import { PropsWithChildren, createContext, useState } from "react";
import { USER_ROLES, USER_TYPE_ADMIN, USER_TYPE_SUPER_ADMIN, USER_TYPE_USER } from "@/config/constants";
import SecureStorageService from "../store/local-storage/local-storage-secure";
import { LS_USER_TYPE } from "@/config/env-helper";

type AuthContextType = {
    isLoggedIn: boolean;
    authority?: string;
    logout: () => void;
    login: (userType: number) => void;
    hasAuthority: (authorityName: string) => boolean;
    setAuthority: (authorityName: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthContextProvider = ({ children }: PropsWithChildren) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [authority, setAuthority] = useState<string | undefined>()
    const [authorities, setAuthorities] = useState<string[]>([])

    const login = (userType: number) => {
        const userAuthority = USER_ROLES.filter((item) => item.userType === userType)[0]

        setAuthority(userAuthority.default);
        setAuthorities(userAuthority.roles);
        setIsLoggedIn(true)

        SecureStorageService.setItem(LS_USER_TYPE, userType)
        return true;
    }

    const logout = () => {
        setAuthority(undefined)
        setIsLoggedIn(false)
        setAuthorities([])
        SecureStorageService.removeItem(LS_USER_TYPE)
    }

    const hasAuthority = (authorityName: string): boolean => {
        return authorities.includes(authorityName);
    }

    const persistRefresh = () => {
        if(isLoggedIn) return

        const userType = SecureStorageService.getItem(LS_USER_TYPE)

        if(typeof userType === "number"){
            if(userType === USER_TYPE_ADMIN || userType === USER_TYPE_SUPER_ADMIN || userType === USER_TYPE_USER){
                login(userType)
            }
        }
    }

    persistRefresh()

    return (
        <AuthContext.Provider value={{ setAuthority, hasAuthority, login, logout, isLoggedIn, authority }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;