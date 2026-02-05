import Box from "@mui/material/Box";
import { SvgIcon, Typography } from "@mui/material";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { sidebardata } from "../../assets/dummy-data/sidebar-data";
import GoVantage from "../../assets/go-vantage-logo.png";
import Avatar from "../avatar/Avatar";
import { useAuth } from "../../services/context/AuthContext";
import { useTheme } from "../../hooks/useTheme";
import React, { useMemo, useCallback, memo } from "react";
import tasklogo from "../../assets/task-logo.svg";

// ...existing code...

// Static header/logo — does NOT read router or auth, so it won't re-render
const StaticBrand = memo<{ isOpen: boolean }>(({ isOpen }) => {
  return (
    <>
      <Box
        className="flex mb-20 justify-center cursor-pointer items-center h-16 xxs:hidden xs:hidden sm:hidden md:flex transition-colors duration-200"
        sx={{
          borderBottom: "1px solid",
          borderColor: "var(--app-secondary-200)",
          backgroundColor: "var(--app-bg-primary)",
          "&:hover": {
            backgroundColor: "var(--app-bg-secondary)",
          },
        }}
      >
        <NavLink
          to="/"
          className="flex items-center justify-center w-full h-full"
        >
          {isOpen ? (
            <span className="flex items-center">
              <span className="w-8 h-8">
                <Avatar imgurl={tasklogo} />
              </span>
              {/* <SvgIcon  icon={tasklogo} /> */}
              <span className="text-app-primary-600 font-bold text-2xl ml-2">
                Go Manage
              </span>
            </span>
          ) : (
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "6px",
                backgroundColor: "var(--app-primary-500)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                wordSpacing: "2px",
              }}
            >
              Go
            </Box>
          )}
        </NavLink>
      </Box>
      <Box
        className="flex justify-center cursor-pointer items-center w-full h-16 xxs:flex md:hidden transition-colors duration-200"
        sx={{
          borderBottom: "1px solid",
          borderColor: "var(--app-secondary-200)",
          backgroundColor: "var(--app-bg-primary)",
          "&:hover": {
            backgroundColor: "var(--app-bg-secondary)",
          },
        }}
      >
        <NavLink to="/">
          {isOpen ? (
            <h2
              className="font-bold text-2xl"
              style={{ color: "var(--app-text-primary)" }}
            >
              Go
            </h2>
          ) : (
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "4px",
                backgroundColor: "var(--app-primary-500)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              G
            </Box>
          )}
        </NavLink>
      </Box>
    </>
  );
});

// Menu that depends on location/auth/navigation
const MenuItems: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { theme } = useTheme();

  // only use pathname for active checks
  const pathname = location.pathname;

  const handleSideOption = useCallback(
    async (name: string, route: string) => {
      if (name === "Logout") {
        await logout();
      } else {
        navigate(route);
      }
    },
    [logout, navigate]
  );

  const renderedItems = useMemo(
    () =>
      sidebardata?.map((item) => {
        const isActive = pathname === item.route;
        return (
          <Box
            key={item.id}
            onClick={() => handleSideOption(item.name, item.route)}
            className={`flex items-center rounded-md cursor-pointer transition-all duration-200 ${
              isOpen ? "p-2  gap-2" : "p-2 justify-center"
            } ${
              isActive
                ? "text-white shadow-sm"
                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
            sx={{
              backgroundColor: isActive
                ? "var(--app-primary-500)"
                : "transparent",
              "&:hover": {
                backgroundColor: isActive
                  ? "var(--app-primary-600)"
                  : "var(--app-primary-100)",
              },
              minWidth: isOpen ? "auto" : "40px",
              width: isOpen ? "auto" : "100%",
              justifyContent: isOpen ? "flex-start" : "center",
              display: "flex",
            }}
            title={!isOpen ? item.title : undefined}
          >
            <Box
              className="flex items-center justify-center"
              sx={{
                color: isActive ? "white" : "var(--app-text-secondary)",
                minWidth: "24px",
                "& svg": {
                  fontSize: "1.5rem",
                  color: isActive ? "white" : "var(--app-text-secondary)",
                },
                "&:hover svg": {
                  color: isActive ? "white" : "var(--app-primary-500)",
                },
              }}
            >
              {item.icon}
            </Box>
            {isOpen && (
              <Box className="xxs:hidden xs:hidden sm:hidden md:block">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "white" : "var(--app-text-primary)",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            )}
          </Box>
        );
      }),
    [pathname, handleSideOption, isOpen, theme]
  );

  return (
    <Box
      className="flex flex-col gap-2.5 overflow-auto"
      sx={{
        padding: isOpen ? 2 : 1,
        backgroundColor: "var(--app-bg-primary)",
      }}
    >
      {renderedItems}
    </Box>
  );
};

interface SideBarProps {
  isOpen?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen = true }) => {
  return (
    <Box
      className={`h-screen transition-all duration-300 ${
        isOpen
          ? "min-w-[70px] xxs:w-[80px] xs:w-[80px] sm:w-[80px] md:w-[240px]"
          : "w-[64px] xxs:w-[64px] xs:w-[64px] sm:w-[64px] md:w-[64px]"
      }`}
      sx={{
        backgroundColor: "var(--app-bg-primary)",
        borderRight: "1px solid",
        borderColor: "var(--app-secondary-200)",
        boxShadow: "0px 0 0px rgba(0, 0, 0, 0.04)",
      }}
    >
      <StaticBrand isOpen={isOpen} />
      <MenuItems isOpen={isOpen} />
    </Box>
  );
};

export default memo(SideBar);