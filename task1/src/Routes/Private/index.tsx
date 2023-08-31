import { Outlet, Navigate } from "react-router-dom";
import { pathList } from "../PathList";
const PrivateRoute = () => {
  const isLogin = localStorage.getItem("email");

  return isLogin ? <Outlet /> : <Navigate to={pathList.Login.path} />;
};
export default PrivateRoute;
