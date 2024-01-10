import { Link, useNavigate } from "react-router-dom";
import LoginForm from "@/components/forms/LoginForm";
import { Login } from "@schema/auth/login-form-schema";
import { AuthService } from "@api/auth";
import { useState } from "react";
import { useNotification } from "@/lib/hooks/useNotification";
import OtpVerificationForm from "@/components/forms/OtpVerificationForm";

const LoginPage = () => {
    const [verifyOtp, setVerifyOtp] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { showDialog } = useNotification()
    let navigate = useNavigate()

    const onSubmit = async (formData: Login) => {
        setIsSubmitting(true)
        try {

            const { data } = await AuthService.login(formData)
            if (data.verifyOtp === true) {
                setVerifyOtp(true)
            } else {
                navigate("/dashboard")
            }

        } catch (error: any) {
            showDialog({ message: error, isError: true })
        }
        setIsSubmitting(false)
    }

    return (
        <>
            {
                verifyOtp ? <OtpVerificationForm /> :
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