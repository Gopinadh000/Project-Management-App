import React, { useEffect, useRef } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import MessageBubble from "./MessageBubble";

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatHistoryProps {
  messages: Message[];
  isLoading?: boolean;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <Box
      ref={chatContainerRef}
      className="flex-1 overflow-y-auto px-4 py-6"
      sx={{
        backgroundColor: "var(--app-bg-primary)",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "var(--app-secondary-300)",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "var(--app-secondary-400)",
          },
        },
      }}
    >
      {messages.length === 0 ? (
        <Box className="flex flex-col items-center justify-center h-full text-center py-12">
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              bgcolor: "var(--app-primary-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: 600 }}
            >
              AI
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ 
              fontWeight: 600, 
              mb: 1,
              color: "var(--app-text-primary)",
            }}
          >
            How can I help you today?
          </Typography>
          <Typography
            variant="body2"
            sx={{ 
              maxWidth: "500px",
              color: "var(--app-text-secondary)",
            }}
          >
            Ask me anything about your projects, tasks, or get assistance with
            your work.
          </Typography>
        </Box>
      ) : (
        <>
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={formatTimestamp(message.timestamp)}
            />
          ))}
          {isLoading && (
            <Box className="flex gap-3 mb-6">
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: "var(--app-primary-500)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CircularProgress size={20} sx={{ color: "white" }} />
              </Box>
              <Box
                className="rounded-2xl px-4 py-3"
                sx={{
                  backgroundColor: "var(--app-bg-secondary)",
                  borderTopLeftRadius: "0.25rem",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--app-text-secondary)",
                  }}
                >
                  AI is thinking...
                </Typography>
              </Box>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </>
      )}
    </Box>
  );
};

export default ChatHistory;

