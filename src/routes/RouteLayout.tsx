import { ROLE_SUPER_ADMIN, ROLE_ADMIN, ROLE_USER } from "@/config/constants";

import { useNavigate, useRoutes } from "react-router-dom";
import { RouteDefinition } from "./RouteBuilder";
import { useEffect, useState } from "react";

type Props = {
    routes: RouteDefinition[],
    authority: string | undefined,
}

const RouteLayout = ({ routes, authority,  }: Props) => {

    const routing = useRoutes(routes)
    const navigate = useNavigate();

    const [prevAuthority, setPrevAuthority] = useState(authority);

    useEffect(() => {
        if (prevAuthority !== authority) {
            if (authority === ROLE_SUPER_ADMIN) navigate("/super-admin");
            if (authority === ROLE_ADMIN) navigate("/admin");
            if (authority === ROLE_USER) navigate("/dashboard");
            if (!authority) navigate("/login");
            console.log("authority", authority);
        }
        // Update the previous authority
        setPrevAuthority(authority);
    }, [authority]);



    return (
        <>
            {routing}
        </>
    );
}

export default RouteLayout;