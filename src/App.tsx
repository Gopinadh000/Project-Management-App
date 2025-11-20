import { Box, createTheme, ThemeProvider } from "@mui/material";
import { alpha } from "@mui/material/styles";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import MainContainer from "./components/main-container/MainContainer";
import RoutesPage from "./routes/app-routes/RoutesPage";
import { generateCssVariables } from "./styles/generatecssvariable";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1A365D',
      },
    },
  });

  // Attach alpha function to theme for go-van-ui compatibility
  (theme as any).alpha = alpha;

  // generateCssVariables()

  
  return (
    <ThemeProvider  theme={theme} >
       <div className="flex flex-row  bg:app-primary-500">
          <SideBar />
      <Box className="w-full">
        <NavBar />
        <MainContainer>
          <RoutesPage />
        </MainContainer>
      </Box>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
