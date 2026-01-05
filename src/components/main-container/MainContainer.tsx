import { Box } from "@mui/material";
interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <Box className="p-6 bg-gray-100 h-full border-2 flex-1 min-h-0 overflow-hidden">
        {children}
      </Box>
    </>
  );
};

export default MainContainer;
