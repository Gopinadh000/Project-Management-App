import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import StatCard from "./components/StatCard";
import ChartCard from "./components/ChartCard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SuperAdminDashboard from "./dashboards/SuperAdminDashboard";
import ManagerDashbaord from "./dashboards/ManagerDashbaord";
import UserDashboard from "./dashboards/UserDashboard";
import { useAuth } from "../../services/context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

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
          <Typography variant="h6">
            No dashboard available for your role.
          </Typography>
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

      {/* Statistics Cards */}
      {/* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          width: "100%",
        }}
      >
        <StatCard
          title="Total Page Views"
          value="4,42,236"
          percentage={59.3}
          trend="up"
          description="You made an extra 35,000 this year"
          icon={<VisibilityIcon sx={{ fontSize: "2rem" }} />}
        />
        <StatCard
          title="Total Users"
          value="78,250"
          percentage={70.5}
          trend="up"
          description="You made an extra 8,900 this year"
          icon={<PeopleIcon sx={{ fontSize: "2rem" }} />}
        />
        <StatCard
          title="Total Order"
          value="18,800"
          percentage={27.4}
          trend="up"
          description="You made an extra 1,943 this year"
          icon={<ShoppingCartIcon sx={{ fontSize: "2rem" }} />}
        />
        <StatCard
          title="Total Sales"
          value="35,078"
          percentage={27.4}
          trend="up"
          description="You made an extra 20,395 this year"
          icon={<AttachMoneyIcon sx={{ fontSize: "2rem" }} />}
        />
      </Box> */}

      {/* Charts Section */}
      {/* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          gap: 3,
        }}
      >
        <ChartCard
          title="Unique Visitor"
          timeRange={["Month", "Week"]}
          activeRange={activeRange}
          onRangeChange={setActiveRange}
        >
          <LineChartPlaceholder />
        </ChartCard>
        <ChartCard
          title="Income Overview"
          subtitle="This Week Statistics"
          value="$7,650"
        >
          <BarChartPlaceholder />
        </ChartCard>
      </Box> */}
    </Box>
  );
};

export default DashboardPage;



