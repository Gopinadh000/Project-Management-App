import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

interface StatCardProps {
  title: string;
  value: string | number;
  percentage: number;
  trend: "up" | "down";
  description: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentage,
  trend,
  description,
  icon,
}) => {
  const formattedValue = typeof value === "number" ? value.toLocaleString() : value;
  const trendColor = trend === "up" ? "#10b981" : "#ef4444";

  return (
    <Box
      sx={{
        backgroundColor: "var(--app-bg-primary)",
        borderRadius: "12px",
        padding: 3,
        border: "1px solid",
        borderColor: "var(--app-secondary-200)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s",
        minWidth: { xs: "100%", sm: "280px" },
        flex: 1,
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-2px)",
          borderColor: "var(--app-primary-300)",
        },
      }}
    >
      <Box className="flex items-start justify-between mb-4">
        <Box>
          <Typography
            variant="body2"
            sx={{ 
              fontSize: "0.875rem",
              color: "var(--app-text-secondary)",
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{ 
              fontSize: "1.875rem", 
              fontWeight: 700,
              color: "var(--app-text-primary)",
            }}
          >
            {formattedValue}
          </Typography>
        </Box>
        {icon && (
          <Box className="text-app-primary-500">{icon}</Box>
        )}
      </Box>
      <Box className="flex items-center gap-2">
        <Box
          className="flex items-center gap-1 px-2 py-1 rounded"
          sx={{
            backgroundColor: trend === "up" ? "#d1fae5" : "#fee2e2",
            color: trendColor,
          }}
        >
          {trend === "up" ? (
            <TrendingUpIcon sx={{ fontSize: "1rem" }} />
          ) : (
            <TrendingDownIcon sx={{ fontSize: "1rem" }} />
          )}
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: trendColor,
            }}
          >
            {percentage}%
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ 
            fontSize: "0.875rem",
            color: "var(--app-text-secondary)",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatCard;

