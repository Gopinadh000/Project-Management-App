import React, { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import ChatHistory, { Message } from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

const AiAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load messages from localStorage on mount
  React.useEffect(() => {
    const savedMessages = localStorage.getItem("ai-assistant-history");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed);
      } catch (error) {
        console.error("Error loading chat history:", error);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  React.useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("ai-assistant-history", JSON.stringify(messages));
    }
  }, [messages]);

  const simulateAIResponse = useCallback((userMessage: string): string => {
    // Simulate AI response - replace with actual API call
    const responses = [
      `I understand you're asking about "${userMessage}". Let me help you with that.`,
      `That's an interesting question. Based on what you've mentioned, I'd suggest considering a few approaches.`,
      `I can help you with that! Here's what I think might be useful for your situation.`,
      `Thanks for your question. Let me provide you with some insights on this topic.`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }, []);

  const handleSendMessage = useCallback(
    async (messageText: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: messageText,
        isUser: true,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      // Simulate API delay
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: simulateAIResponse(messageText),
          isUser: false,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000); // 1-2 second delay
    },
    [simulateAIResponse]
  );

  const handleClearHistory = () => {
    if (window.confirm("Are you sure you want to clear chat history?")) {
      setMessages([]);
      localStorage.removeItem("ai-assistant-history");
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--app-bg-primary)",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          padding: 3,
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "var(--app-bg-primary)",
          borderBottom: "1px solid",
          borderColor: "var(--app-secondary-200)",
        }}
      >
        <Box className="flex items-center justify-between">
          <Box>
            <Typography
              variant="h5"
              sx={{ 
                fontSize: "1.25rem", 
                fontWeight: 600,
                color: "var(--app-text-primary)",
              }}
            >
              AI Assistant
            </Typography>
            <Typography
              variant="body2"
              sx={{ 
                fontSize: "0.875rem", 
                mt: 0.5,
                color: "var(--app-text-secondary)",
              }}
            >
              Ask me anything about your projects and tasks
            </Typography>
          </Box>
          {messages.length > 0 && (
            <Typography
              variant="body2"
              onClick={handleClearHistory}
              sx={{
                fontSize: "0.875rem",
                color: "var(--app-text-secondary)",
                cursor: "pointer",
                textDecoration: "underline",
                "&:hover": {
                  color: "var(--app-primary-500)",
                },
              }}
            >
              Clear History
            </Typography>
          )}
        </Box>
      </Box>

      {/* Chat History */}
      <ChatHistory messages={messages} isLoading={isLoading} />

      {/* Chat Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={isLoading}
        placeholder="Message AI Assistant..."
      />
    </Box>
  );
};

export default AiAssistantPage;
