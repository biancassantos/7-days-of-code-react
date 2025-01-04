import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

function PrivateRoute() {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute;