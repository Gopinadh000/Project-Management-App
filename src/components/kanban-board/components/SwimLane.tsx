import { Box } from "@mui/material";
import React from "react";
import SwimCard from "./SwimCard";
import SwimLaneHeader from "./SwimLaneHeader";
import type { SwimLaneData } from "../types/taskCard.types";

const SwimLane: React.FC<{ laneData: SwimLaneData }> = ({ laneData }) => {
  return (
    <Box
      className="h-full border rounded-lg flex flex-col transition-all duration-300"
      sx={{
        width: laneData?.collapsed ? 60 : 320,
        minWidth: laneData?.collapsed ? 60 : 320,
        borderColor: "var(--app-secondary-200)",
        backgroundColor: "var(--app-bg-secondary)",
      }}
    >
      {/* Header */}
      <Box className="h-10">
        <SwimLaneHeader laneData={laneData} />
      </Box>

      {/* Cards Container */}
      <Box className="flex-1 overflow-y-auto p-4 space-y-4 ">
        {!laneData?.collapsed ? (
          laneData?.tasks?.map((task) => <SwimCard key={task.id} task={task} />)
        ) : (
          <>
            <Box className="w-full rounded-sm mr-2 flex items-center px-1 justify-center text-right border border-app-primary-100 cursor-pointer hover:border-app-primary-900">
              <span>{laneData?.totalTasks}</span>
            </Box>
            <Box
              className="text-gray-500  font-semibold tracking-wider"
              sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {laneData?.displayName}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SwimLane;
