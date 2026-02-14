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
    <Box className="w-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all p-4 flex flex-col gap-1 cursor-pointer">
      {/* Task ID */}
      <Box className="flex justify-between">
        <Typography variant="caption" className="text-gray-400">
          {task.id}
        </Typography>

        <Chip
          sx={{
            fontSize: "10px",
            height: "18px",
            borderRadius: "4px",
            padding: "1px",
          }}
          size="small"
          label={task.issuedata?.type}
          color="primary"
          variant="outlined"
        />
      </Box>

      {/* Title */}
      <Typography
        variant="subtitle1"
        className="font-semibold text-gray-800 hover:text-blue-600"
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
            fontSize: "11px",
            height: "32px",
          }}
        >
          {task.taskdesc}
        </Typography>
      )}

      {/* Assignee */}
      <Box className="flex items-center gap-2 mt-1">
        <Avatar src={task.assignee?.userimg} sx={{ width: 28, height: 28 }} />
        <Typography variant="body2" className="text-gray-700">
          {task.assignee?.username}
        </Typography>
      </Box>

      {/* Chips */}
      <Box className="flex gap-2 justify-between mt-2">
        <Chip
          size="small"
          label={task.priority?.level}
          color={task.priority?.color}
          variant="outlined"
           sx={{
            fontSize: "10px",
            height: "18px",
            borderRadius: "4px",
            padding: "1px",
          }}
        />

        <Chip
          size="small"
          label={`Due in ${diffDays} days`}
          variant="outlined"
           sx={{
            fontSize: "10px",
            height: "18px",
            borderRadius: "4px",
            padding: "1px",
          }}
        />
      </Box>
    </Box>
  );
};

export default SwimCard;
