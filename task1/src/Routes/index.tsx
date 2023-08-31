import { Routes, Route } from "react-router-dom";
import { pathList } from "./PathList";
import PrivateRoute from "./Private";
import { Suspense } from "react";

const RouteList = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path={pathList.Home.path}
            element={<pathList.Home.element />}
          />
        </Route>
        <Route
          path={pathList.Login.path}
          element={<pathList.Login.element />}
        />
        <Route
          path={pathList.Signup.path}
          element={<pathList.Signup.element />}
        />
        <Route
          path={pathList.pageNotFound.path}
          element={<pathList.pageNotFound.element />}
        />
      </Routes>
    </Suspense>
  );
};
export default RouteList;
