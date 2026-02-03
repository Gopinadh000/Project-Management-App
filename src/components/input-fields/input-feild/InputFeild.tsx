import React from "react";
import { Box } from "@mui/material";

interface InputFeildProps {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  errMessage?: string;
}

const InputFeild = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  required,
  errMessage,
  ...rest
}: InputFeildProps) => {
  return (
    <Box className="px-2 gap-1 flex flex-col w-full">
      <p className="font-medium text-app-text-primary">
        {label} {required && <span className="text-app-error">*</span>}
      </p>
      <input
        className="border border-app-secondary-200 w-full text-sm outline-none p-2 rounded-sm focus:border-app-primary-500 focus:ring-1 focus:ring-app-primary-100 transition-colors duration-200"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        {...rest}
      />
      {errMessage ? (
        <p className="text-app-error text-xs mt-0.5">{errMessage}</p>
      ) : null}
    </Box>
  );
};

export default InputFeild;
