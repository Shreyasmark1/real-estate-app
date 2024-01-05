export const setPaymentStatus = (status : string) => {
    localStorage.setItem("paymentStatus",  status);
}

export const getPaymentStatus = () => {
    return localStorage.getItem("paymentStatus")
}

export const planName = (name:string) => {
    localStorage.setItem("planName", name)
}

export const getPlanName = () => {
    return localStorage.getItem("planName");
}