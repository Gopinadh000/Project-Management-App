import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth-pages/LoginPage";
import Outer from "./Outer";
import RegisterPage from "../pages/auth-pages/RegisterPage";
import AppLayout from "../layout/AppLayout";

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
      </Routes>
    </>
  );
};

export default RoutesWrapper;
