import React from "react";
import { Skeleton } from "@mui/material";

const TableSkleton = () => {
  const rows = Array.from({ length: 10 });
  return (
    <div className="space-y-2 w-full!">
      {rows.map((_, index) => (
        <Skeleton key={index} variant="rectangular" height={40} />
      ))}
    </div>
  );
};

export default TableSkleton;
