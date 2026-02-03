import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import StatCard from "./components/StatCard";
import ChartCard from "./components/ChartCard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const DashboardPage = () => {
  const [activeRange, setActiveRange] = useState("Month");

  // Sample chart data - replace with actual charts later
  const LineChartPlaceholder = () => (
    <Box
      className="flex items-end justify-between h-full p-4"
      sx={{ minHeight: "300px" }}
    >
      {[20, 40, 60, 80, 100, 120, 140, 120, 100, 80, 60, 40].map(
        (height, index) => (
          <Box
            key={index}
            sx={{
              width: "24px",
              height: `${height}%`,
              backgroundColor: "var(--app-primary-500)",
              borderRadius: "4px 4px 0 0",
              opacity: 0.8,
            }}
          />
        )
      )}
    </Box>
  );

  const BarChartPlaceholder = () => (
    <Box
      className="flex items-end justify-between h-full p-4"
      sx={{ minHeight: "300px" }}
    >
      {[60, 80, 45, 70, 90, 55, 75].map((height, index) => (
        <Box
          key={index}
          sx={{
            width: "40px",
            height: `${height}%`,
            backgroundColor: "#14b8a6",
            borderRadius: "4px 4px 0 0",
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box className="flex flex-col gap-6">
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{ 
          fontSize: "1.875rem", 
          fontWeight: 700, 
          mb: 3,
          color: "var(--app-text-primary)",
        }}
      >
        Dashboard
      </Typography>

      {/* Statistics Cards */}
      <Box
        sx={{ 
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
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
      </Box>

      {/* Charts Section */}
      <Box 
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
      </Box>
    </Box>
  );
};

export default DashboardPage;
