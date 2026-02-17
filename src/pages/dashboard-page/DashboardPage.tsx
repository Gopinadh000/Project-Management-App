import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SuperAdminDashboard from "./dashboards/SuperAdminDashboard";
import ManagerDashbaord from "./dashboards/ManagerDashbaord";
import UserDashboard from "./dashboards/UserDashboard";
import { useAuth } from "../../services/context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();
  // const user = {
  //   role: "SUPER_ADMIN",
  // };

  const renderDashboardByRole = () => {
    switch (user?.role) {
      case "SUPER_ADMIN":
        return <SuperAdminDashboard />;
      case "MANAGER":
        return <ManagerDashbaord />;
      case "USER":
        return <UserDashboard />;
      default:
        return (
          <Box className="h-full border text-center">
            No dashboard available for your role.
          </Box>
        );
    }
  };

  return (
    <Box className="flex flex-col gap-6">
      {/* Page Title  */}
      <Box className="flex flex-col gap-1">
        <Typography variant="h5" className="font-bold">
          Dashboard
        </Typography>
        <Box className="flex flex-row justify-between gap-0.5">
          <Typography variant="subtitle1" className="text-gray-500">
            Welcome back! Here's what's happening with your projects.
          </Typography>
          <Typography variant="subtitle2" className="text-gray-400">
            {new Date().toDateString()}
          </Typography>
        </Box>
      </Box>
      <Box>{renderDashboardByRole()}</Box>
    </Box>
  );
};

export default DashboardPage;



