
import React from "react";
import { Box } from "@mui/material";

interface InputFeildProps {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}: InputFeildProps) => {
  return (
    <Box className="px-2 gap-1 flex flex-col">
      <p className="font-medium">
        {label} {required && <span className="text-red-700">*</span>}{" "}
      </p>
      <input
        className="border border-b w-full text-sm  outline-none p-1 rounded-sm"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      {errMessage ? (
        <p className="text-red-600 text-xs mt-0.5">{errMessage}</p>
      ) : null}
    </Box>
  );
};

export default InputFeild
