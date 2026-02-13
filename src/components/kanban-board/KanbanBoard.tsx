import React from "react";
import SwimLanesBoardContainer from "./components/SwimLanesBoardContainer";
import { Box } from "@mui/material";

const KanbanBoard = () => {
  return (
    <Box className="h-full w-full overflow-auto">
      <SwimLanesBoardContainer />
    </Box>
  );
};

export default KanbanBoard;
