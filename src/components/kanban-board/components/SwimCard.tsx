import { Box } from "@mui/material";
import React from "react";

const SwimCard = ({task}:any) => {
  return( <Box className="w-full h-[180px] rounded-lg p-2 border border-app-secondary-200 bg-app-white">
         <p>{task.name}</p>
         <p>{task.assignee}</p>
         <p>{task.status}</p>
    </Box>);
};

export default SwimCard;
