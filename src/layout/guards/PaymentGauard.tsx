import { getPaymentStatus } from "@/lib/store/local-storage/local-storage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type props = {
    children: ReactNode
}

const PaymentGuard = ({ children }: props) => {

    const isLoggedIn = getPaymentStatus();
    return isLoggedIn ? (children) : <Navigate to="/subscription" />
}

export default PaymentGuard;