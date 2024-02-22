import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import spinner from "./../assets/Spinner.gif";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh] ">
        <img src={spinner} alt="" />
      </div>
    );
  }

  if (user?.email) {
    return children;
  } else {
    toast.error("Please login first before adding product");
  }
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};
export default PrivateRoute;
