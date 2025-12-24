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
  const getButtonClasses = () => {
    switch (variant) {
      case "contained":
        return "bg-blue-900! text-white hover:bg-blue-800"; // Contained blue button
      case "outlined":
        return "border border-white text-white hover:bg-gray-100 hover:text-black"; // Outlined button
      default:
        return "text-blue-900 hover:text-blue-700";
    }
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`flex justify-center items-center gap-1 px-2 py-1 rounded-lg ${getButtonClasses()}`}
      disabled={disabled || loading}
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
          <span className="">{text}</span>
          {iconPosition === "end" && <span>{iconName}</span>}
        </>
      )}
    </Button>
  );
};

export default AppButton;
