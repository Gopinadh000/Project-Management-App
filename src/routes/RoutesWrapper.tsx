import { Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/auth-pages/LoginPage";
import Outer from "./Outer";
import RegisterPage from "../pages/auth-pages/RegisterPage";

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
            <Route path="/*" element={<App />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutesWrapper;
