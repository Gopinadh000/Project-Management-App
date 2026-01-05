import React from "react";
import { Box } from "@mui/material";

interface TableComponentProps {
  children: React.ReactNode;
}

const TableComponent = ({children}:TableComponentProps) => {
  return <Box className="h-full border-2  flex flex-col overflow-auto grow">{children}</Box>;
};

export default TableComponent;
