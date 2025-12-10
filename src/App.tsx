import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import MainContainer from "./components/main-container/MainContainer";
import RoutesPage from "./routes/app-routes/RoutesPage";

function App() {
  return (
    <div className="flex flex-row  bg:app-primary-500">
      <SideBar />
      <Box className="w-full">
        <NavBar />
        <MainContainer>
          <RoutesPage />
        </MainContainer>
      </Box>
    </div>
  );
}

export default App;
