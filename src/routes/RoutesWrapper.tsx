import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth-pages/LoginPage";
import RegisterPage from "../pages/auth-pages/RegisterPage";
import AppLayout from "../layout/AppLayout";
import PageNotFound from "../pages/error-pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const RoutesWrapper = () => {
  return (
    <Routes>
      {/* Public Routes - redirects to home if already authenticated */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Protected Routes - requires authentication */}
      <Route element={<ProtectedRoute />}>
        <Route path="/*" element={<AppLayout />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesWrapper;
