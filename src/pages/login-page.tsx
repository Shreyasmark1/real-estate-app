import LoginForm from "@/feature/auth/_components/login-form";
import { useState } from "react";
import OtpVerificationForm from "@/feature/auth/_components/otp-form";
import { useAuth } from "@/lib/hooks/useAuth";
import { useAlert } from "@/lib/hooks/useAlert";
import { Login } from "@/feature/auth/_schemas/login-form-schema";
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
            showDialogAlert({ message: error.message, type: "error" })
        }
        setIsSubmitting(false)
    }

    return (
        <>
            {
                verifyOtp ? <OtpVerificationForm handleVerification={login} /> :
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
                    </div>
            }
        </>
    );
}

export default LoginPage;