import { Box } from "@mui/material";
interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <Box className="p-10 bg-gray-100 h-full">{children}</Box>
    </>
  );
};

export default MainContainer;
