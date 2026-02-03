import React from "react";
import { Box } from "@mui/material";

interface TableComponentProps {
  children: React.ReactNode;
}

const TableComponent = ({children}:TableComponentProps) => {
  return (
    <Box 
      sx={{
        height: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'var(--app-bg-primary)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </Box>
  );
};

export default TableComponent;
