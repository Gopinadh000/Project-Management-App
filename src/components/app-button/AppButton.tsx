import { Button, CircularProgress } from '@mui/material';
import React from 'react';

type AppButtonProps = {
  text: string;
  variant: 'contained' | 'outlined' 
  onClick: () => void;
  iconName?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  disabled?:boolean;
  loading? :boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  onClick,
  text,
  variant,
  iconName,
  iconPosition = "start",
  disabled,
  loading,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        textTransform: "none",
        fontWeight: 500,
        px: 1.5,
        py: 0.5,
        borderRadius: "0.3rem",
        ...(variant === "contained" && {
          backgroundColor: "var(--app-primary-500)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--app-primary-600)",
          },
          "&.Mui-disabled": {
            backgroundColor: "var(--app-secondary-300)",
            color: "var(--app-text-secondary)",
          },
        }),
        ...(variant === "outlined" && {
          borderColor: "var(--app-primary-500)",
          color: "var(--app-primary-500)",
          "&:hover": {
            borderColor: "var(--app-primary-600)",
            backgroundColor: "var(--app-primary-100)",
            color: "var(--app-primary-600)",
          },
          "&.Mui-disabled": {
            borderColor: "var(--app-secondary-300)",
            color: "var(--app-text-secondary)",
          },
        }),
      }}
    >
      {loading ? (
        <CircularProgress
          size={16}
          className="text-white"
          variant="intermediate"
        />
      ) : (
        <>
          {iconPosition === "start" && <span>{iconName}</span>}
          <span className="font-medium">{text}</span>
          {iconPosition === "end" && <span>{iconName}</span>}
        </>
      )}
    </Button>
  );
};

export default AppButton;
