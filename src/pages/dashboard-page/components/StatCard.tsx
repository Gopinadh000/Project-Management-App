import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const StatCard = ({ itemData }: any) => {
  return (
    <>
      <div className="border border-app-secondary-200 h-34 w-60 rounded-md hover:border-app-primary-500 p-3 bg-app-white shadow-sm">
        <Box className="flex items-center justify-center rounded-md bg-app-primary-50 w-10 h-10">
          {itemData.icon}
        </Box>
        <Box className="flex flex-col mt-1 h-2/3">
          <Typography variant="subtitle1" className="text-app-secondary-500">
            {itemData.title}
          </Typography>
          <p className="text-app-secondary-800 font-extrabold! text-xl">
            {itemData?.value}
          </p>
        </Box>
      </div>
    </>
  );
};

export default StatCard;
