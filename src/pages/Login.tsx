import { Link } from "react-router-dom";
import { Login } from "@/lib/schemas/auth";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {

    const onSubmit = async (data: Login) => {
        console.log(data);

        window.alert("Account created")
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold text-center">Welcome back</span>
                        <span className="font-light text-gray-400 mb-8 text-center">Login to continue</span>
                        <LoginForm onSubmit={onSubmit} />
                        <div className="text-center text-gray-400">
                            Dont have an account?
                            <Link className="font-bold text-black" to={"/register"}> Create one for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;