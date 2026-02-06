import React, { memo, useState } from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Badge,
  InputBase,
  Avatar,
  IconButton,
} from "@mui/material";
import Poppover from "../poppover/Poppover";
import { useAuth } from "../../services/context/AuthContext";
import { useTheme } from "../../hooks/useTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PaletteIcon from "@mui/icons-material/Palette";
import { useNavigate, useLocation } from "react-router-dom";

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

  console.log(user, "user");

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
      label: "Support",
      icon: <HelpOutlineIcon fontSize="small" />,
      action: () => console.log("Support clicked"),
      route: "/support",
    },
    {
      label: "Account Settings",
      icon: <AccountBoxIcon fontSize="small" />,
      action: () => console.log("Account Settings clicked"),
      route: "/account-settings",
    },
    {
      label: "Privacy Center",
      icon: <LockIcon fontSize="small" />,
      action: () => console.log("Privacy Center clicked"),
      route: "/privacy",
    },
    {
      label: "Feedback",
      icon: <FeedbackIcon fontSize="small" />,
      action: () => console.log("Feedback clicked"),
      route: "/feedback",
    },
    {
      label: "History",
      icon: <HistoryIcon fontSize="small" />,
      action: () => console.log("History clicked"),
      route: "/history",
    },
  ];

  const handleOnClickHamberger = () => {
    if (onToggleSidebar) {
      onToggleSidebar();
    }
  };

  const [searchValue, setSearchValue] = useState("");

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
          className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer transition-colors duration-200"
          onClick={handleOnClickHamberger}
        >
          {onToggleSidebar ? (
            <MenuIcon className="text-gray-600 dark:text-gray-300" />
          ) : (
            <MenuOpenIcon className="text-gray-600 dark:text-gray-300" />
          )}
        </div>
        {/* Search Bar */}
        {/* <Box
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex-1 max-w-md"
          sx={{
            "&:focus-within": {
              borderColor: "var(--app-primary-500)",
            },
          }}
        >
          <SearchIcon className="text-gray-400" fontSize="small" />
          <InputBase
            placeholder="Q Ctrl + K"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 text-sm"
            sx={{
              "& .MuiInputBase-input": {
                color: "var(--app-text-primary)",
                "&::placeholder": {
                  opacity: 0.6,
                },
              },
            }}
          />
        </Box> */}
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
                        fontWeight: theme === "BLUE_THEME" ? 500 : 400,
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
                {/* <Badge
                  badgeContent={notifications.length}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "var(--app-primary-500)",
                      color: "white",
                      right: 4,
                      top: 4,
                      fontSize: "0.7rem",
                      minWidth: "18px",
                      height: "18px",
                    },
                  }}
                > */}
                <Box className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                  <CircleNotificationsIcon
                    fontSize="medium"
                    className="text-gray-600 dark:text-gray-300"
                  />
                </Box>

                {/* </Badge> */}
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
                      <Box>
                        <Typography
                          variant="body1"
                          className="text-gray-900 dark:text-gray-100 font-semibold"
                          sx={{
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            lineHeight: 1.2,
                          }}
                        >
                          {user?.firstName || ""}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-600 dark:text-gray-400"
                          sx={{ fontSize: "0.75rem", lineHeight: 1.2 }}
                        >
                          {user?.role || "UI/UX Designer"}
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton
                      size="small"
                      onClick={logout}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      sx={{
                        "&:hover": {
                          backgroundColor: isDark ? "#374151" : "#f3f4f6",
                        },
                      }}
                    >
                      <LogoutIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                {/* Menu Items */}
                <List sx={{ py: 0.5 }}>
                  {profileMenuItems.map((item, index) => {
                    const isActive = location.pathname === item.route;
                    return (
                      <React.Fragment key={item.label}>
                        <ListItem
                          onClick={item.action}
                          sx={{
                            py: 1,
                            px: 2,
                            cursor: "pointer",
                            backgroundColor: isActive
                              ? "var(--app-primary-50)"
                              : "transparent",
                            "&:hover": {
                              backgroundColor: isActive
                                ? "var(--app-primary-100)"
                                : isDark
                                ? "#374151"
                                : "#f9fafb",
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
                        {index < profileMenuItems.length - 1 && (
                          <Divider sx={{ mx: 2 }} />
                        )}
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
