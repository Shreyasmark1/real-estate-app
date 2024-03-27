import { ROLE_SUPER_ADMIN } from "@/config/constants";
import { useAuth } from "@/lib/hooks/useAuth";
import { PropsWithChildren } from "react";

const SuperAdminGuard = ({ children } : PropsWithChildren) => {

    const { authority } = useAuth();

    return authority === ROLE_SUPER_ADMIN? (children): <></>
}
 
export default SuperAdminGuard;