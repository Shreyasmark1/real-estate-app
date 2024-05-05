import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {

    const location = useLocation();

    return (
        <div className="page-style flex justify-center items-center gap-14">
            <div className="text-4xl font-bold">404 page not found {location.pathname}</div>
            {
                location.pathname === "/dashboard" ? <Link to={"/login"}>Login </Link> : <Link to={"/dashboard"}>Navigate to Dashboard</Link>
            }
        </div>
    );
}

export default NotFoundPage;