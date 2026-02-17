import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const StatCard = ({ itemData }: any) => {
  return (
    <div>
      <div className=" border border-app-secondary-600  h-34 w-64 flex-wrap rounded-md hover:border-app-primary-500 px-3 py-1   bg-app-secondary-50">
        <Box className="flex h-1/3">{itemData.icon}</Box>
        <Box className="flex flex-col mt-1 h-2/3">
          <Typography variant="h6" className="text-app-secondary-500 ">
            {itemData.title}
          </Typography>
          <Typography
            className="text-app-secondary-800 font-extrabold!"
            fontSize={26}
            variant="h6"
          >
            {itemData?.value}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default StatCard;
