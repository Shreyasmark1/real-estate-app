import { getPaymentStatus } from "@/lib/store/local-storage/local-storage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type props = {
    children: ReactNode
}

const PaymentGuard = ({ children }: props) => {

    const isSubscribed = getPaymentStatus();
    return true ? (children) : <Navigate to="/subscription" />
}

export default PaymentGuard;