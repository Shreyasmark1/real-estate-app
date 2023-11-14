import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const Register = () => {
    return ( 
        <>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">welcome </span>
        <span className="font-light text-gray-400 mb-8">welcome back please enter your details</span>
        {/* <div className="py-4">
            <span className="mb-2 text-md">UserName</span>
            <input type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="name"
            id="name"/>
        </div> */}
         <div className="grid w-full max-w-sm items-center gap-1.5 py-4 mb-2 text-md ">
      <Label htmlFor="email">Email</Label>
      <Input type="name" id="Email"   className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 py-4 mb-2 text-md ">
      <Label htmlFor="email">Password</Label>
      <Input type="password" id="password"   className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 py-4 mb-2 text-md ">
      <Label htmlFor="email">Confirm Password</Label>
      <Input type="password" id="password"  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
    </div>
        {/* <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input type="password"
            name="pass"
            id="pass"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>

        </div> */}
        {/* <div className="flex justify-between w-full py-4">
            <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
             </div>
             <span className="font-bold text-md">Forgot password</span>
        </div> */}
         <div>
      <div className="flex items-center space-x-2  mr-24 py-4">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Remember for 30 days</Label>
        

      </div>
     
    </div>
        <Button className="w-full bg-black text-white p-2 rounded-1g mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">sign In</Button>
        {/* <button className="w-full border border-gray-300 text-md p-2 rounded-1g mb-6 hover:bg-black hover:text-white">
            <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            sign in with google
        </button> */}
          <Button className="w-full border border-gray-300 text-md p-2 rounded-1g mb-6 hover:bg-black hover:text-white w-full bg-black text-white p-2 rounded-1g mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
      <Mail className="mr-2 h-4 w-4 " /> Login with Google
    </Button>
        <div className="text-center text-gray-400">
            Dont have an account?
            <span className="font-bold text-black">sign up for free</span>
        </div>
            </div>
            <div className="relative">

            </div>
        </div>
     </div>
        </>
     );
}
 
export default Register;