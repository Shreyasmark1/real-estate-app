import { Link } from "react-router-dom";
import LoginForm from "@/components/forms/LoginForm";
import { useState } from "react";
import OtpVerificationForm from "@/components/forms/OtpVerificationForm";
import { useAuth } from "@/lib/hooks/useAuth";
import { useAlert } from "@/lib/hooks/useAlert";
import { Login } from "@/schema/auth/login-form-schema";
import { AuthenticationApi } from "@/api/authentication-api";

const LoginPage = () => {
    const [verifyOtp, setVerifyOtp] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { showDialogAlert } = useAlert()
    const { login } = useAuth()

    const onSubmit = async (formData: Login) => {
        setIsSubmitting(true)
        try {

            const { data } = await AuthenticationApi.login(formData)
            if (data.verifyOtp === true) {
                setVerifyOtp(true)
            } else {
                login(data.userType)
            }

        } catch (error: any) {
            showDialogAlert({ message: error.message, type: "error"})
        }
        setIsSubmitting(false)
    }

    return (
        <>
            {
                verifyOtp ? <OtpVerificationForm handleVerification={login} /> :
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                            <div className="flex flex-col justify-center p-8 md:p-14">
                                <span className="mb-3 text-4xl font-bold text-center">Welcome back</span>
                                <span className="font-light text-gray-400 mb-7 text-center">Login to continue</span>
                                <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
                                <div className="text-center text-gray-400">
                                    Dont have an account?
                                    <Link className="font-bold text-black" to={"/register"}> Create one for free</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default LoginPage;