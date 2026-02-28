import { Box } from "@mui/material";
import React from "react";
import SwimCard from "./SwimCard";
import SwimLaneHeader from "./SwimLaneHeader";
import type { SwimLaneData } from "../types/taskCard.types";

const SwimLane: React.FC<{
  laneData: SwimLaneData;
  handleLaneCollapsed: (laneId: string) => void;
}> = ({ laneData, handleLaneCollapsed }) => {
  return (
    <Box
      className="h-full rounded-md flex flex-col transition-all duration-300"
      sx={{
        width: laneData?.collapsed ? 60 : 320,
        minWidth: laneData?.collapsed ? 60 : 320,

        border: "1px solid #e5e7eb",
        background: "var(--app-bg-primary)",

        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <Box className="h-10">
        <SwimLaneHeader
          laneData={laneData}
          toggleLaneCollapsed={handleLaneCollapsed}
        />
      </Box>

      {/* Cards Container */}
      <Box
        className="flex-1 overflow-y-auto p-3 space-y-3"
        sx={{
          scrollbarWidth: "thin",

          "&::-webkit-scrollbar": {
            width: 6,
          },

          "&::-webkit-scrollbar-thumb": {
            background: "#e5e7eb",
            borderRadius: 6,
          },

          "&::-webkit-scrollbar-thumb:hover": {
            background: "#cbd5f5",
          },
        }}
      >
        {!laneData?.collapsed ? (
          laneData?.tasks?.map((task) => <SwimCard key={task.id} task={task} />)
        ) : (
          <>
            {/* Collapsed Task Counter */}
            <Box
              className="w-full rounded-md flex items-center justify-center border cursor-pointer"
              sx={{
                // borderColor: "#e5e7eb",
                // background: "#f9fafb",
                height: 32,
                fontSize: "13px",
                fontWeight: 600,
                color: "#374151",
                transition: "all .2s",

                "&:hover": {
                  borderColor: "#6366f1",
                  background: "#eef2ff",
                  color: "#4338ca",
                },
              }}
            >
              {laneData?.totalTasks}
            </Box>

            {/* Collapsed Lane Name */}
            <Box
              className="text-gray-500 font-semibold tracking-wide"
              sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "12px",
                letterSpacing: "0.08em",
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