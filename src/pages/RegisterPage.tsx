import { Link } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";
import { useState } from "react";
import OtpVerificationForm from "@/components/auth/OtpVerificationForm";
import { useAuth } from "@/lib/hooks/useAuth";
import { useAlert } from "@/lib/hooks/useAlert";
import { Register } from "@tanstack/react-query";
import { AuthenticationApi } from "@/api/authentication-api";

const RegisterPage = () => {
  const [verifyOtp, setVerifyOtp] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showDialogAlert } = useAlert()
  const { login } = useAuth()

  const onSubmit = async (formData: Register) => {
    setIsSubmitting(true)
    try {

      const { data } = await AuthenticationApi.register(formData)
      if (data.verifyOtp || true) {
        setVerifyOtp(true)
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
            <div className="relative flex flex-col m-5 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
              <div className="flex flex-col justify-center px-10 py-8">
                <span className="mb-3 text-4xl font-bold">Welcome to website</span>
                <span className="font-light text-gray-400 mb-5 text-center">Please enter your details to get started</span>
                <RegisterForm isSubmitting={isSubmitting} onSubmit={onSubmit} />
                <div className="text-center text-gray-400">
                  Already have an account?
                  <Link to={"/login"} className="font-bold text-black"> Login now</Link>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

export default RegisterPage;