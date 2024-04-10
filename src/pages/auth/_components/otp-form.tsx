import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../../components/ui/form";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import FormFieldWrapper from "../../../components/forms/form-fields/FormFieldWrapper";
import { useAlert } from "@/lib/hooks/useAlert";
import { useFormErrorToast } from "@/lib/hooks/useFormError";
import { OtpFormSchema, otpFormDefaults, Otp, otpFormFields } from "@/schema/auth/otp-form-schema";
import { Input } from "../../../components/ui/input";
import { AuthenticationApi } from "@/api/authentication-api";

type Props = {
    handleVerification: (data: any) => void
}

const OtpVerificationForm = ({ handleVerification }: Props) => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const { showDialogAlert } = useAlert()

    const formContext = useForm({
        resolver: zodResolver(OtpFormSchema),
        defaultValues: otpFormDefaults
    })

    useFormErrorToast({ formContext })

    const onSubmit = async (formData: Otp) => {
        setIsSubmitting(true)
        try {

            const { data } = await AuthenticationApi.verifyOtp(formData);

            handleVerification(data.userType)

        } catch (error: any) {
            if (typeof error.message === "string") {
                console.log(error.message)
            }

            showDialogAlert({ message: error.message, type: "error" })
        }
        setIsSubmitting(false)
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 w-[450px]">
                        <span className="mb-6 text-4xl font-medium text-center">Verify OTP</span>
                        <span className="font-light text-gray-400 mb-7 text-center">Enter the 6-digit OTP sent to your mobile number to proceed</span>
                        <Form {...formContext}>
                            <form onSubmit={formContext.handleSubmit(onSubmit)}>
                                {
                                    otpFormFields.map((formField) => (
                                        <FormFieldWrapper
                                            key={formField.name}
                                            name={formField.name}
                                            label={formField.label}
                                            control={formContext.control}
                                        >
                                            <Input type={formField.fieldType} autoComplete={formField.fieldType === "password" ? "current-password" : "on"} />
                                        </FormFieldWrapper>
                                    ))
                                }
                                <div className="flex flex-row my-4 mt-2 w-full">
                                    <Button
                                        disabled={isSubmitting}
                                        className="w-[300px] rounded-1g hover:bg-white hover:text-black hover:border hover:border-gray-300 mx-2">
                                        Verify
                                    </Button>
                                    <Button
                                        disabled={isSubmitting}
                                        type="button"
                                        variant="ghost"
                                        className="w-full rounded-1g mx-2"
                                    >
                                        Edit Mobile Number
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OtpVerificationForm;