import { Box } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import NavBar from "../components/navbar/NavBar";
import MainContainer from "../components/main-container/MainContainer";
import RoutesPage from "../routes/app-routes/RoutesPage";
import { memo, useState } from "react";
import { TableReloadProvider } from "../components/data-table";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <TableReloadProvider>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--app-bg-primary)",
        height: "100vh",
        overflow: "hidden",
        transition: "background-color 0.2s",
      }}
    >
      <SideBar isOpen={sidebarOpen} />
      <Box 
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "all 0.3s",
        }}
      >
        <NavBar onToggleSidebar={toggleSidebar} />
        <MainContainer>
          <RoutesPage />
        </MainContainer>
      </Box>
    </Box>
    </TableReloadProvider>
  );
};

export default memo(AppLayout);
