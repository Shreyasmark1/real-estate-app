import { Link } from "react-router-dom";
import RegisterForm from "@/components/RegisterForm";
import { Register } from "@/lib/schemas/auth";

const RegisterPage = () => {

  const onSubmit = async (data: Register) => {
    console.log(data);

    window.alert("Account created")
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-5 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center px-12 py-8">
            <span className="mb-3 text-4xl font-bold">Welcome to website</span>
            <span className="font-light text-gray-400 mb-8 text-center">Please enter your details to get started</span>
            <RegisterForm onSubmit={onSubmit} />
            <div className="text-center text-gray-400">
              Already have an account?
              <Link to={"/login"} className="font-bold text-black"> Login now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;