import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { sidebardata } from "../../assets/dummy-data/sidebar-data";
import GoVantage from "../../assets/go-vantage-logo.png";
import Avatar from "../avatar/Avatar";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSideOption = (name, route) => {
    navigate(route);
  };

  return (
    <Box
      className={`h-screen bg-gray-50  xxs:w-[80px] xs:w-[80px] sm:w-[80px]  md:w-[300px]  dark:bg-app-secondary-900`}
    >
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
      <Box className="flex  flex-col p-4 gap-3  mt-16 overflow-auto">
        {sidebardata?.map((item) => {
          const isActive = location.pathname === item.route;
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
                <Typography variant="h6">{item.title}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
