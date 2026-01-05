import React, { memo } from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Badge,
} from "@mui/material";
import Poppover from "../poppover/Poppover";
// import { Button } from 'go-van-ui';
import { useAuth } from "../../services/context/AuthContext";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

interface NavBarProps {
  borderRequired?: boolean;
  backGroundColor?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  borderRequired = true,
  backGroundColor = "gray-50",
}) => {
  const { user, logout } = useAuth();

  // Sample notifications data
  const notifications = [
    { id: 1, title: "New project assigned", time: "2 min ago" },
    { id: 2, title: "Task deadline approaching", time: "1 hour ago" },
    { id: 3, title: "Team meeting at 3 PM", time: "2 hours ago" },
    { id: 2, title: "Task deadline approaching", time: "1 hour ago" },
    { id: 2, title: "Task deadline approaching", time: "1 hour ago" },
    { id: 2, title: "Task deadline approaching", time: "1 hour ago" },
  ];

  // Profile menu items with logout functionality
  const profileMenuItems = [
    { label: "Profile", action: () => console.log("Profile clicked") },
    { label: "Settings", action: () => console.log("Settings clicked") },
    { label: "Help", action: () => console.log("Help clicked") },
    { label: "Logout", action: () => logout() },
  ];

  return (
    <div
      className={`${
        borderRequired ? "border-b-2" : ""
      } flex justify-end items-center w-full h-16 bg-${backGroundColor}`}
    >
      <div className="flex gap-4 items-end px-2 mr-4">
        <Box className="flex items-center cursor-pointer p-2">
          <SettingsBrightnessIcon fontSize="large" />
        </Box>
        <Box>
          <Poppover
            parentComponent={
              <span className="flex gap-3 p-2 items-center font-bold">
                <Badge
                  badgeContent={notifications.length}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "red",
                      color: "white",
                      right: 10,
                      top: 10,
                    },
                  }}
                >
                  <CircleNotificationsIcon
                    fontSize="large"
                    className="rounded-full hover:bg-gray-300 cursor-pointer"
                  />
                </Badge>
              </span>
            }
            childComponent={
              <Box sx={{ width: 300, maxHeight: 400 }}>
                <Box className="p-2 bg-gray-300">
                  <Typography variant="h6" fontWeight="medium">
                    Notifications
                  </Typography>
                </Box>
                <Box className="max-h-80 overflow-auto">
                  <List>
                    {notifications.map((notification, index) => (
                      <React.Fragment key={notification.id}>
                        <ListItem sx={{ py: 0.5, overflow: "auto" }}>
                          <ListItemText
                            primary={notification.title}
                            secondary={notification.time}
                            primaryTypographyProps={{ fontSize: "0.9rem" }}
                            secondaryTypographyProps={{
                              fontSize: "0.8rem",
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                        {index < notifications.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Box>

                {notifications.length === 0 && (
                  <Box sx={{ p: 3, textAlign: "center" }}>
                    <Typography color="text.secondary">
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
              <span className="flex gap-3 p-2 items-center font-bold">
                <AccountCircleIcon
                  fontSize="large"
                  className="rounded-full hover:bg-gray-300 cursor-pointer"
                />
                <span className="cursor-pointer">{user?.name || "User"}</span>
              </span>
            }
            childComponent={
              <Box sx={{ minWidth: 200 }}>
                <List>
                  {profileMenuItems.map((item, index) => (
                    <React.Fragment key={item.label}>
                      <ListItem
                        onClick={item.action}
                        sx={{
                          py: 0.5,
                          px: 1,
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{ fontSize: "0.9rem" }}
                        />
                      </ListItem>
                      {index < profileMenuItems.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
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
