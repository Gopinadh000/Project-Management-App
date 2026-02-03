import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface TitleCardProps {
  title: string;
}

const TitleCard = ({ title }: TitleCardProps) => {
  return (
    <Box>
      <Typography 
        variant="h6" 
        sx={{
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "var(--app-text-primary)",
          mb: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TitleCard;
