import { Box } from "@mui/material";
interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <Box 
        sx={{
          padding: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "var(--app-bg-primary)",
          flex: 1,
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          transition: "background-color 0.2s",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainContainer;
