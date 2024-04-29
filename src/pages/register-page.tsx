import RegisterForm from "@/feature/auth/_components/register-form";
import { useState } from "react";
import OtpVerificationForm from "@/feature/auth/_components/otp-form";
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
            <RegisterForm isSubmitting={isSubmitting} onSubmit={onSubmit} />
          </div>
      }
    </>
  );
}

export default RegisterPage;