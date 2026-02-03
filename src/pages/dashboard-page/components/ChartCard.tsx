import React from "react";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  value?: string;
  children: React.ReactNode;
  timeRange?: string[];
  activeRange?: string;
  onRangeChange?: (range: string) => void;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  value,
  children,
  timeRange = ["Month", "Week"],
  activeRange = "Month",
  onRangeChange,
}) => {
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
        height: "100%",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          borderColor: "var(--app-primary-300)",
        },
      }}
    >
      <Box className="flex items-center justify-between mb-4">
        <Box>
          <Typography
            variant="h6"
            sx={{ 
              fontSize: "1.125rem", 
              fontWeight: 600,
              color: "var(--app-text-primary)",
              mb: 1,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              sx={{ 
                fontSize: "0.875rem",
                color: "var(--app-text-secondary)",
              }}
            >
              {subtitle}
            </Typography>
          )}
          {value && (
            <Typography
              variant="h5"
              sx={{ 
                fontSize: "1.5rem", 
                fontWeight: 700,
                color: "var(--app-text-primary)",
                mt: 1,
              }}
            >
              {value}
            </Typography>
          )}
        </Box>
        {timeRange.length > 0 && onRangeChange && (
          <ButtonGroup
            size="small"
            variant="outlined"
            sx={{
              "& .MuiButton-root": {
                borderColor: "var(--app-primary-500)",
                color: "var(--app-text-primary)",
                "&.Mui-selected": {
                  backgroundColor: "var(--app-primary-500)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "var(--app-primary-600)",
                  },
                },
              },
            }}
          >
            {timeRange.map((range) => (
              <Button
                key={range}
                onClick={() => onRangeChange(range)}
                variant={activeRange === range ? "contained" : "outlined"}
                sx={{
                  backgroundColor:
                    activeRange === range
                      ? "var(--app-primary-500)"
                      : "transparent",
                  color:
                    activeRange === range
                      ? "white"
                      : "var(--app-text-primary)",
                  "&:hover": {
                    backgroundColor:
                      activeRange === range
                        ? "var(--app-primary-600)"
                        : "var(--app-primary-100)",
                  },
                }}
              >
                {range}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </Box>
      <Box className="mt-4" sx={{ height: "calc(100% - 100px)" }}>
        {children}
      </Box>
    </Box>
  );
};

export default ChartCard;

