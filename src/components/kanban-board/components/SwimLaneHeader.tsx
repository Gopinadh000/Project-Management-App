import { Box } from "@mui/material";
import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



const SwimLaneHeader = ({ laneData, toggleLaneCollapsed }: any) => {
  return (
    <Box className="border-b px-4 border-app-secondary-200 rounded-sm h-[40px] flex items-center justify-center bg-app-white">
      <Box className="w-full">
        {!laneData?.collapsed ? <p className="">{laneData.displayName}</p> : ""}
      </Box>
      {!laneData?.collapsed ? (
        <Box className="w-8 rounded-sm mr-2 flex items-center justify-center text-right border  border-app-primary-100 px-1 cursor-pointer hover:border-app-primary-900">
          <span>{laneData?.totalTasks}</span>
        </Box>
      ) : (
        ""
      )}
      <Box
        onClick={() => toggleLaneCollapsed(laneData.id)}
        className="w-6 rounded-sm flex items-center justify-center text-right border border-gray-100 cursor-pointer hover:border-app-primary-900"
      >
        {laneData?.collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </Box>
    </Box>
  );
};

export default SwimLaneHeader;
