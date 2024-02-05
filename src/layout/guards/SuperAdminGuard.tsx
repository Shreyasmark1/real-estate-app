import { AUTHORITY_SUPER_ADMIN } from "@/config/constants";
import { useAuth } from "@/lib/hooks/useAuth";
import { PropsWithChildren } from "react";

const SuperAdminGuard = ({ children } : PropsWithChildren) => {

    const { authority } = useAuth()

    const isSuperAdmin: boolean = authority === AUTHORITY_SUPER_ADMIN

    return isSuperAdmin? (children): <></>
}
 
export default SuperAdminGuard;