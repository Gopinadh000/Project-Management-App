import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useTheme } from "../../../hooks/useTheme";
import Typography from "@mui/material/Typography";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = "Message AI Assistant...",
}) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isDark } = useTheme();

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <Box
      sx={{
        padding: "1rem",
        position: "sticky",
        bottom: 0,
        zIndex: 10,
        backgroundColor: "var(--app-bg-primary)",
        borderTop: "1px solid",
        borderColor: "var(--app-secondary-200)",
      }}
    >
      <Box
        className="flex items-end gap-2 rounded-2xl p-2"
        sx={{
          border: "1px solid",
          borderColor: "var(--app-secondary-300)",
          backgroundColor: "var(--app-bg-secondary)",
          "&:focus-within": {
            borderColor: "var(--app-primary-500)",
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.1)",
          },
        }}
      >
        <IconButton
          size="small"
          sx={{ 
            flexShrink: 0,
            color: "var(--app-text-secondary)",
            "&:hover": {
              backgroundColor: "var(--app-primary-100)",
              color: "var(--app-primary-500)",
            },
          }}
        >
          <AttachFileIcon fontSize="small" />
        </IconButton>
        <TextField
          inputRef={textareaRef}
          multiline
          maxRows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            flex: 1,
            "& .MuiInputBase-input": {
              fontSize: "0.9375rem",
              color: "var(--app-text-primary)",
              padding: "0.5rem",
              maxHeight: "150px",
              overflowY: "auto",
              "&::placeholder": {
                color: isDark ? "#9ca3af" : "#6b7280",
                opacity: 1,
              },
            },
          }}
        />
        <IconButton
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          sx={{
            bgcolor: message.trim() && !disabled ? "var(--app-primary-500)" : undefined,
            color: message.trim() && !disabled ? "white" : undefined,
            flexShrink: 0,
            "&:hover": {
              bgcolor: message.trim() && !disabled ? "var(--app-primary-600)" : undefined,
            },
            "&.Mui-disabled": {
              color: isDark ? "#6b7280" : "#9ca3af",
            },
          }}
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>
      <Typography
        variant="caption"
        sx={{ 
          fontSize: "0.75rem",
          color: "var(--app-text-secondary)",
          mt: 2,
          textAlign: "center",
          display: "block",
        }}
      >
        AI can make mistakes. Check important info.
      </Typography>
    </Box>
  );
};

export default ChatInput;

