import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link, useNavigate , useLocation, NavLink} from "react-router-dom";

import useScreenSizeHook from "../../services/hooks/useScreenSizeHook";
import { useThemesState } from "../../services/redux/states/useApplicationState";
import { setTheme, setMode } from "../../services/redux/slices/themeSlice";
import { sidebardata } from "../../assets/dummy-data/sidebar-data";
import GoVantage from "../../assets/go-vantage-logo.png"
import Avatar from "../avatar/Avatar";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';


const SideBar = ({
  borderRequired = false,
  backGroundColor = "gray-50",
}: any) => {


  const {
    screenSize: { screensize },
  } = useScreenSizeHook();
  const navigate = useNavigate();
  const { themeState, dispatch } = useThemesState();


   const location = useLocation(); // 👈 Get current route

  const handleSideOption = (name, route) => {
    if (name === "Logout") {
      localStorage.removeItem("appuser-token");
      // navigate("/login"); // Redirect to login page after logout
    } else if (route) {
      navigate(route); // Navigate to other routes
    }
  };

  const handleChangeTheme = (theme) => {
    console.log(theme);

    dispatch(setTheme({ theme: theme }));
  };

  const handleChangeMode = (mode) => {
    dispatch(setMode({ mode: mode }));
  };


  return (
    <div
      className={`${
        borderRequired ? "border-0" : ""} h-screen bg-${backGroundColor}  xxs:w-[80px] xs:w-[80px] sm:w-[80px]  md:w-[300px]  dark:bg-app-secondary-900`}>
      <Box className="flex justify-center cursor-pointer items-center h-16  border border-b hover:bg-blue-900 xxs:hidden xs:hidden sm:hidden md:block">
        <NavLink to="/">
         <Avatar  imgurl={GoVantage}/>
        </NavLink>
      </Box>
       <Box className="flex justify-center cursor-pointer items-center w-full h-16 border border-b hover:bg-blue-900 text-blue-900 hover:text-white xxs:flex   md:hidden">
        <NavLink to="/">
         <h2 className="font-bold  text-2xl">Go</h2>
        </NavLink>
      </Box>  
     <div className="flex  flex-col p-4 gap-3  mt-16 overflow-auto">
        {sidebardata?.map((item) => {
          const isActive = location.pathname === item.route;
          return (
            <NavLink key={item.key} to={item.route}>
              <Box
                onClick={() => handleSideOption(item.name, item.route)}
                className={`p-1 flex items-center border border-black-50 gap-3 rounded-s cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? "bg-app-primary-900 text-white"
                      : "hover:bg-app-primary-100 hover:text-app-primary-900 text-gray-700"
                  }`}>
                <span>{item.icon}</span>
                <Box className="xxs:hidden xs:hidden sm:hidden  md:block">
                   <Typography variant="h6">{item.title}</Typography> 
                </Box>
              </Box>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
