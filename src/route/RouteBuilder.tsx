import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import UserDashboard from "@/pages/UserDashboard";

const RouteBuilder = () => {

    return ([
        { path: "", element: <div>Hellow world</div>},
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/dashboard", element: <UserDashboard/> },
    ]);
}

export default RouteBuilder;