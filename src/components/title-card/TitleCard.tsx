import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface TitleCardProps {
  title: string;
}

const TitleCard = ({ title }: TitleCardProps) => {
  return (
    <Box className="flex items-center justify-between mb-2 leading-3">
      <Typography variant="h5" className="font-bold">
        {title}
      </Typography>
    </Box>
  );
};

export default TitleCard;
