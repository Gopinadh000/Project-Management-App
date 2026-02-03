import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useTheme } from "../../../hooks/useTheme";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isUser,
  timestamp,
}) => {
  const { isDark } = useTheme();

  return (
    <Box
      className={`flex gap-3 mb-6 ${isUser ? "flex-row" : "flex-row"}`}
      sx={{
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      {!isUser && (
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "var(--app-primary-500)",
            flexShrink: 0,
          }}
        >
          <SmartToyIcon sx={{ fontSize: "1.2rem" }} />
        </Avatar>
      )}
      <Box
        className="flex flex-col gap-1"
        sx={{
          maxWidth: { xs: "85%", sm: "75%", md: "65%" },
          alignItems: isUser ? "flex-end" : "flex-start",
        }}
      >
        <Box
          className="rounded-2xl px-4 py-3"
          sx={{
            backgroundColor: isUser
              ? "var(--app-primary-500)"
              : "var(--app-bg-secondary)",
            color: isUser ? "white" : "var(--app-text-primary)",
            borderTopLeftRadius: isUser ? "1.5rem" : "0.25rem",
            borderTopRightRadius: isUser ? "0.25rem" : "1.5rem",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: isUser ? "white" : undefined,
            }}
          >
            {message}
          </Typography>
        </Box>
        {timestamp && (
          <Typography
            variant="caption"
            sx={{ 
              fontSize: "0.75rem", 
              px: 1,
              color: "var(--app-text-secondary)",
            }}
          >
            {timestamp}
          </Typography>
        )}
      </Box>
      {isUser && (
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "var(--app-secondary-500)",
            flexShrink: 0,
          }}
        >
          <PersonIcon sx={{ fontSize: "1.2rem" }} />
        </Avatar>
      )}
    </Box>
  );
};

export default MessageBubble;

