import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const PageNotFound = lazy(() => import("../Pages/PageNotFound"));
export const pathList = {
  Home: { path: "/", element: Home },
  Login: { path: "/login", element: Login },
  Signup: { path: "/signup", element: Signup },
  pageNotFound: { path: "*", element: PageNotFound },
};
