import React, { memo, useState } from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
} from "@mui/material";
import Poppover from "../poppover/Poppover";
import { useAuth } from "../../services/context/AuthContext";
import { useTheme } from "../../hooks/useTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PaletteIcon from "@mui/icons-material/Palette";
import { useNavigate, useLocation } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

interface NavBarProps {
  borderRequired?: boolean;
  backGroundColor?: string;
  onToggleSidebar?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  borderRequired = true,
  onToggleSidebar,
}) => {
  const { user, logout } = useAuth();
  const { theme, toggleMode, changeTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [openSideBar, setOpenSidebar] = useState(false);

  // Sample notifications data
  const notifications = [
    { id: 1, title: "New project assigned", time: "2 min ago" },
    { id: 2, title: "Task deadline approaching", time: "1 hour ago" },
    { id: 3, title: "Team meeting at 3 PM", time: "2 hours ago" },
    { id: 4, title: "Task deadline approaching", time: "1 hour ago" },
    { id: 5, title: "Task deadline approaching", time: "1 hour ago" },
    { id: 6, title: "Task deadline approaching", time: "1 hour ago" },
  ];

  // Profile menu items with icons and routes
  const profileMenuItems = [
    {
      label: "Profile",
      icon: <PersonIcon fontSize="small" />,
      action: () => console.log("Profile clicked"),
      route: "/profile",
    },
    {
      label: "Setting",
      icon: <SettingsIcon fontSize="small" />,
      action: () => navigate("/settings"),
      route: "/settings",
    },
    {
      label: "Logout",
      icon: <LogoutIcon fontSize="small" />,
      action: () => logout(),
    },
  ];

  const handleOnClickHamberger = () => {
    if (onToggleSidebar) {
      setOpenSidebar((prev) => !prev);
      onToggleSidebar();
    }
  };

  return (
    <div
      className="flex justify-between items-center w-full h-16 px-4 transition-colors duration-200"
      style={{
        backgroundColor: "var(--app-bg-primary)",
        borderBottom: borderRequired
          ? "1px solid var(--app-secondary-200)"
          : "none",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex items-center gap-4 flex-1">
        <div
          className="flex items-center justify-center p-1 hover:bg-gray-100 dark:hover:bg-gray-800 border rounded-md cursor-pointer transition-colors duration-200"
          onClick={handleOnClickHamberger}
        >
          {openSideBar ? (
            <ChevronRightOutlinedIcon
              className="text-gray-600 dark:text-gray-300 "
              fontSize="small"
            />
          ) : (
            <ChevronLeftOutlinedIcon
              fontSize="small"
              className="text-gray-600 dark:text-gray-300"
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* Theme Color Selector */}
        <Box>
          <Poppover
            parentComponent={
              <Box className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                <PaletteIcon
                  fontSize="medium"
                  className="text-gray-600 dark:text-gray-300"
                />
              </Box>
            }
            childComponent={
              <Box
                sx={{
                  minWidth: 200,
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <List sx={{ py: 0.5 }}>
                  <ListItem
                    onClick={() => changeTheme("BLUE_THEME")}
                    sx={{
                      py: 1,
                      px: 2,
                      cursor: "pointer",
                      backgroundColor:
                        theme === "BLUE_THEME"
                          ? "var(--app-primary-50)"
                          : "transparent",
                      "&:hover": {
                        backgroundColor:
                          theme === "BLUE_THEME"
                            ? "var(--app-primary-100)"
                            : isDark
                            ? "#374151"
                            : "#f9fafb",
                      },
                      transition: "background-color 0.2s",
                    }}
                  >
                    <ListItemText
                      primary="Blue Theme"
                      primaryTypographyProps={{
                        fontSize: "0.875rem",
                        fontWeight: theme === "BLUE_THEME" ? 600 : 600,
                        color:
                          theme === "BLUE_THEME"
                            ? "var(--app-primary-500)"
                            : "var(--app-text-primary)",
                      }}
                    />
                  </ListItem>
                  <Divider sx={{ mx: 2 }} />
                  <ListItem
                    onClick={() => changeTheme("YELLOW_THEME")}
                    sx={{
                      py: 1,
                      px: 2,
                      cursor: "pointer",
                      backgroundColor:
                        theme === "YELLOW_THEME"
                          ? "var(--app-primary-50)"
                          : "transparent",
                      "&:hover": {
                        backgroundColor:
                          theme === "YELLOW_THEME"
                            ? "var(--app-primary-100)"
                            : isDark
                            ? "#374151"
                            : "#f9fafb",
                      },
                      transition: "background-color 0.2s",
                    }}
                  >
                    <ListItemText
                      primary="Yellow Theme"
                      primaryTypographyProps={{
                        fontSize: "0.875rem",
                        fontWeight: theme === "YELLOW_THEME" ? 500 : 400,
                        color:
                          theme === "YELLOW_THEME"
                            ? "var(--app-primary-500)"
                            : "var(--app-text-primary)",
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          />
        </Box>
        {/* Mode Toggle */}
        <Box
          className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={toggleMode}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <LightModeIcon fontSize="medium" className="text-yellow-500" />
          ) : (
            <DarkModeIcon
              fontSize="medium"
              className="text-gray-600 dark:text-gray-300"
            />
          )}
        </Box>
        <Box>
          <Poppover
            parentComponent={
              <span className="flex gap-3 p-2 items-center font-bold">
                <Box className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                  <CircleNotificationsIcon
                    fontSize="medium"
                    className="text-gray-600 dark:text-gray-300"
                  />
                </Box>
              </span>
            }
            childComponent={
              <Box
                sx={{
                  width: 320,
                  maxHeight: 400,
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <Box
                  className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"
                  sx={{
                    backgroundColor: "var(--app-bg-secondary)",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="medium"
                    className="text-gray-900 dark:text-gray-100"
                    sx={{ fontSize: "1rem", fontWeight: 600 }}
                  >
                    Notifications
                  </Typography>
                </Box>
                <Box className="max-h-80 overflow-auto">
                  <List sx={{ py: 0 }}>
                    {notifications.map((notification, index) => (
                      <React.Fragment key={notification.id}>
                        <ListItem
                          sx={{
                            py: 1.5,
                            px: 2,
                            "&:hover": {
                              backgroundColor: isDark ? "#374151" : "#f9fafb",
                            },
                            transition: "background-color 0.2s",
                          }}
                        >
                          <ListItemText
                            primary={notification.title}
                            secondary={notification.time}
                            primaryTypographyProps={{
                              fontSize: "0.875rem",
                              color: "var(--app-text-primary)",
                              fontWeight: 500,
                            }}
                            secondaryTypographyProps={{
                              fontSize: "0.75rem",
                              color: "var(--app-text-secondary)",
                            }}
                          />
                        </ListItem>
                        {index < notifications.length - 1 && (
                          <Divider sx={{ mx: 2 }} />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Box>

                {notifications.length === 0 && (
                  <Box sx={{ p: 4, textAlign: "center" }}>
                    <Typography
                      className="text-gray-600 dark:text-gray-400"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      No new notifications
                    </Typography>
                  </Box>
                )}
              </Box>
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          />
        </Box>
        <Box>
          <Poppover
            parentComponent={
              <span className="flex items-center gap-2 bg-app-primary-100 max-w-32  cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: "var(--app-primary-500)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </Avatar>
                <div className="flex flex-col">
                  <Typography
                    variant="body2"
                    className="text-gray-900 dark:text-gray-100 font-medium"
                    sx={{ fontSize: "0.75rem", fontWeight: 500 }}
                  >
                    {user?.name && (
                      <div className="name font-bold">
                        {user.name.split(" ")[0]}
                      </div>
                    )}
                  </Typography>
                  <span className="text-gray-400 text-[8px]">{user?.role}</span>
                </div>
              </span>
            }
            childComponent={
              <Box
                sx={{
                  minWidth: 280,
                  maxWidth: 320,
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                {/* User Info Header */}
                <Box
                  className="px-4 py-3 border-b border-gray-200 dark:border-gray-700"
                  sx={{
                    backgroundColor: "var(--app-bg-secondary)",
                  }}
                >
                  <Box className="flex items-center justify-between">
                    <Box className="flex items-center gap-3">
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: "var(--app-primary-500)",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </Avatar>
                      <Box className="flex flex-col">
                        <Typography
                          variant="body1"
                          className="text-gray-900 dark:text-gray-100 font-semibold"
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {user?.name || ""}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-600 dark:text-gray-400 bg-app-primary-200 w-fit p-1"
                          sx={{ fontSize: "10px", lineHeight: 1.2 }}
                        >
                          {user?.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Menu Items */}
                <List sx={{ py: 0.5, width: "100%" }}>
                  {profileMenuItems.map((item, index) => {
                    const isActive = location.pathname === item.route;
                    return (
                      <React.Fragment key={item.label}>
                        <Box className="px-2">
                          <ListItem
                            onClick={item.action}
                            sx={{
                              py: 1,
                              px: 2,
                              // margin: "0px 10px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              backgroundColor: isActive
                                ? "var(--app-primary-50)"
                                : "transparent",
                              "&:hover": {
                                backgroundColor: "var(--app-primary-100)",
                                // backgroundColor: isActive
                                //   ? "var(--app-primary-100)"
                                //   : isDark
                                //   ? "#374151"
                                //   : "#f9fafb",
                              },
                              transition: "background-color 0.2s",
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 36,
                                color: isActive
                                  ? "var(--app-primary-500)"
                                  : "var(--app-text-secondary)",
                              }}
                            >
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: "0.875rem",
                                fontWeight: isActive ? 500 : 400,
                                color: isActive
                                  ? "var(--app-primary-500)"
                                  : "var(--app-text-primary)",
                              }}
                            />
                          </ListItem>
                        </Box>
                      </React.Fragment>
                    );
                  })}
                </List>
              </Box>
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          />
        </Box>
      </div>
    </div>
  );
};

export default memo(NavBar);
