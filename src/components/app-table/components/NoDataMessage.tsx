import { Box, Typography } from "@mui/material";

const NoDataMessage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: '300px',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        No Data Available To Display
      </Typography>
    </Box>
  );
};

export default NoDataMessage;
