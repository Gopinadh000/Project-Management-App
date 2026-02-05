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
  errMessage?: any;
  startIcon?: React.ReactNode;
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
  console.log(rest, "rest");
  return (
    <Box className="px-2 gap-1 flex flex-col w-full">
      <p className="font-medium text-app-text-primary">
        {label} {required && <span className="text-app-error text-lg">*</span>}
      </p>
      <div
        className="flex items-center gap-2 border border-app-secondary-200
    w-full text-sm
    p-2 rounded-sm
    transition-colors duration-200
    focus-within:border-app-primary-500
    focus-within:ring-1
    focus-within:ring-app-primary-100
  "
      >
        {rest.startIcon ? rest?.startIcon : ""}
        <input
          className="outline-none w-full"
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          {...rest}
        />
      </div>

      {errMessage ? (
        <p className="text-app-error text-xs mt-0.5">{errMessage}</p>
      ) : null}
    </Box>
  );
};

export default InputFeild;
