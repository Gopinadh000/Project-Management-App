import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import NavBar from "../components/navbar/NavBar";
import MainContainer from "../components/main-container/MainContainer";
import RoutesPage from "../routes/app-routes/RoutesPage";
import { memo } from "react";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-row  bg:app-primary-500">
        <SideBar />
        <Box className="w-full">
          <NavBar />
          <MainContainer>
            <RoutesPage />
          </MainContainer>
        </Box>
      </div>
    </>
  );
};

export default memo(AppLayout);
