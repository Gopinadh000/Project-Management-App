import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth-pages/LoginPage";
import Outer from "./Outer";
import RegisterPage from "../pages/auth-pages/RegisterPage";
import AppLayout from "../layout/AppLayout";
import PageNotFound from "../pages/error-pages/PageNotFound";

const RoutesWrapper = () => {
  return (
    <>
      <Routes>
        <Route element={<Outer />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<Outer />}>
          <Route path="register" element={<RegisterPage />} />
          <Route element={<Outer />}>
            <Route path="/*" element={<AppLayout />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RoutesWrapper;
