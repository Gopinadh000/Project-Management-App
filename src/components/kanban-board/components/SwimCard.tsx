import { Box, Avatar, Chip, Typography, LinearProgress } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const SwimCard = ({ task }: any) => {
  const dueDate = new Date(task.duedate);
  const today = new Date();
  const diffDays = Math.ceil(
    (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Box className="w-full bg-app-secondary rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 p-4 flex flex-col gap-2 cursor-pointer select-none">
      {/* Task ID */}
      <Box className="flex justify-between items-center">
        <Typography variant="caption" className="text-gray-400 tracking-wide">
          {task.id}
        </Typography>

        <Chip
          sx={{
            fontSize: "10px",
            height: "20px",
            borderRadius: "6px",
            backgroundColor: "#eef4ff",
            borderColor: "#dbe6ff",
            color: "#335dff",
            fontWeight: 500,
          }}
          size="small"
          label={task.issuedata?.type}
          variant="outlined"
        />
      </Box>

      {/* Title */}
      <Typography
        variant="subtitle1"
        className="font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        sx={{
          lineHeight: 1.2,
        }}
      >
        {task.taskname}
      </Typography>

      {/* Description */}
      {task.taskdesc && (
        <Typography
          variant="body2"
          className="text-gray-500"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            whiteSpace: "normal",
            fontSize: "12px",
            height: "34px",
            color: "#6b7280",
          }}
        >
          {task.taskdesc}
        </Typography>
      )}

      {/* Assignee */}
      <Box className="flex items-center gap-2 mt-1">
        <Avatar
          src={task.assignee?.userimg}
          sx={{
            width: 28,
            height: 28,
            border: "2px solid white",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        />
        <Typography variant="body2" className="text-gray-700 font-medium">
          {task.assignee?.username}
        </Typography>
      </Box>

      {/* Chips */}
      <Box className="flex gap-2 justify-between mt-2">
        <Chip
          size="small"
          label={task.priority?.level}
          sx={{
            fontSize: "10px",
            height: "20px",
            borderRadius: "6px",
            backgroundColor: "#fff5f5",
            borderColor: "#ffd6d6",
            color: "#d32f2f",
            fontWeight: 500,
          }}
          variant="outlined"
        />

        <Chip
          size="small"
          label={`Due in ${diffDays} days`}
          sx={{
            fontSize: "10px",
            height: "20px",
            borderRadius: "6px",
            backgroundColor: "#f0fdf4",
            borderColor: "#d1fadf",
            color: "#15803d",
            fontWeight: 500,
          }}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default SwimCard;
