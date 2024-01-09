import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Otp, OtpFormSchema, otpFormDefaults, otpFormFields } from "@schema/auth/otp-form-schema";
import { useNotification } from "@/lib/hooks/useNotificationDialog";
import { useState } from "react";
import { AuthService } from "@api/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import FormFieldWrapper from "./form-fields/FormFieldWrapper";
import InputField from "./form-fields/InputField";

const OtpVerificationForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    let navigate = useNavigate()
    const { showDialog } = useNotification()

    const formContext = useForm({
        resolver: zodResolver(OtpFormSchema),
        defaultValues: otpFormDefaults
    })

    const onSubmit = async (formData: Otp) => {
        setIsSubmitting(true)
        try {

            await AuthService.verifyOtp(formData);
            navigate("/dashboard")

        } catch (error: any) {
            showDialog({ message: error, isError: true })
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
                                            formFieldSchema={formField}
                                            control={formContext.control}
                                            Child={{
                                                Component: InputField
                                            }} />
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