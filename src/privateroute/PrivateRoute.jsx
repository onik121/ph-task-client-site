import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {

    // const { user, loading } = useAuth();
    const loading = false;
    const user = false;
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    if (user) {
        return children;
    }

    // return <Navigate state={location.pathname} to={'/login'}></Navigate>;
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;