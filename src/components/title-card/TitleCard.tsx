import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface TitleCardProps {
  title: string;
}

const TitleCard = ({ title }: TitleCardProps) => {
  return (
    <Box>
      <Typography variant="h6" className="font-bold">
        {title}
      </Typography>
    </Box>
  );
};

export default TitleCard;
