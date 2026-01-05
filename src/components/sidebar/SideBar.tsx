import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { sidebardata } from "../../assets/dummy-data/sidebar-data";
import GoVantage from "../../assets/go-vantage-logo.png";
import Avatar from "../avatar/Avatar";
import { useAuth } from "../../services/context/AuthContext";
import React, { useMemo, useCallback, memo } from "react";

// ...existing code...

// Static header/logo — does NOT read router or auth, so it won't re-render
const StaticBrand = memo(() => {
  return (
    <>
      <Box className="flex justify-center cursor-pointer items-center h-16  border border-b hover:bg-blue-900 xxs:hidden xs:hidden sm:hidden md:block">
        <NavLink to="/">
          <Avatar imgurl={GoVantage} />
        </NavLink>
      </Box>
      <Box className="flex justify-center cursor-pointer items-center w-full h-16 border border-b hover:bg-blue-900 text-blue-900 hover:text-white xxs:flex   md:hidden">
        <NavLink to="/">
          <h2 className="font-bold  text-2xl">Go</h2>
        </NavLink>
      </Box>
    </>
  );
});

// Menu that depends on location/auth/navigation
const MenuItems: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

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
            className={`p-1 flex items-center border border-black-50 gap-3 rounded-s cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? "bg-app-primary-900 text-white"
                      : "hover:bg-app-primary-100 hover:text-app-primary-900 text-gray-700"
                  }`}
          >
            <span>{item.icon}</span>
            <Box className="xxs:hidden xs:hidden sm:hidden  md:block">
              <Typography variant="subtitle1">{item.title}</Typography>
            </Box>
          </Box>
        );
      }),
    [pathname, handleSideOption]
  );

  return (
    <Box className="flex  flex-col p-4 gap-3  mt-16 overflow-auto">
      {renderedItems}
    </Box>
  );
};

const SideBar = () => {
  return (
    <Box
      className={`h-screen bg-gray-50  xxs:w-[80px] xs:w-[80px] sm:w-[80px]  md:w-[280px]  dark:bg-app-secondary-900`}
    >
      <StaticBrand />
      <MenuItems />
    </Box>
  );
};

export default memo(SideBar);