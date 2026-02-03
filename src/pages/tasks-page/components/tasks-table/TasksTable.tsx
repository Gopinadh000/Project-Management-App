import React, { useState } from "react";
import { Checkbox, Tooltip, Box } from "@mui/material";

// Sample tableHeaders and tableRowsData
const tableHeaders = [
  {
    id: 1,
    fieldname: "taskname",
    columnType: "String",
    search: false,
    sort: true,
    displayName: "Task Name",
    customCell: true,
    order: 1,
    tooltip: true,
  },
  {
    id: 2,
    fieldname: "description",
    columnType: "String",
    search: false,
    sort: false,
    displayName: "Description",
    customCell: true,
    order: 2,
    tooltip: true,
  },
  {
    id: 3,
    fieldname: "assigne", 
    columnType: "String",
    search: false,
    sort: false,
    displayName: "Assignee",
    customCell: true,
    order: 3,
    tooltip: false,
  },
  {
    id: 4,
    fieldname: "startdate",
    columnType: "Date",
    search: false,
    sort: false,
    displayName: "Start Date",
    customCell: true,
    order: 4,
    tooltip: true,
  },
  {
    id: 5,
    fieldname: "enddate",
    columnType: "String",
    search: false,
    sort: false,
    displayName: "End Date",
    customCell: true,
    order: 5,
    tooltip: true,
  },
];

const tableRowsData = [
  {
    taskname: { value: "Web Development Task" },
    assigne: { value: "Gopinadh Vallabhannei" },
    description:{ value :"Web dev description"},
    startdate:{ value :"2024-01-01"},
    enddate :{value :"2024-01-30"}
  },
  {
    taskname: { value: "UI Design Task" },
    assigne: { value: "John Doe" },
    description :{ value :"UI dev description"},
    startdate:{ value :"2024-01-01"},
    enddate :{value :"2024-01-30"}
  },
];

const DynamicTable = () => {
  const [searchQuery, setSearchQuery] = useState({});
  const [sortConfig, setSortConfig] = useState({});

  // Handle search input changes
  const handleSearchChange = (e, fieldname) => {
    setSearchQuery({
      ...searchQuery,
      [fieldname]: e.target.value.toLowerCase(),
    });
  };

  // Sort rows based on selected column
  const handleSort = (fieldname) => {
    const direction = sortConfig[fieldname] === "asc" ? "desc" : "asc";
    setSortConfig({ [fieldname]: direction });
  };

  // Apply sorting to data
  const getSortedRows = () => {
    let sortedRows = [...tableRowsData];
    const [fieldname, direction] = Object.entries(sortConfig)[0] || [];

    if (fieldname) {
      sortedRows.sort((a, b) => {
        const valueA = a[fieldname].value.toLowerCase();
        const valueB = b[fieldname].value.toLowerCase();
        if (valueA < valueB) return direction === "asc" ? -1 : 1;
        if (valueA > valueB) return direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortedRows;
  };

  // Apply search filter to rows
  const getFilteredRows = () => {
    return getSortedRows().filter((row) =>
      tableHeaders.every((header) => {
        if (header.search && searchQuery[header.fieldname]) {
          return row[header.fieldname].value
            .toLowerCase()
            .includes(searchQuery[header.fieldname]);
        }
        return true;
      })
    );
  };

  const renderCustomCell = (header, row) => {
    if (header.customCell) {
      return <span>{row[header.fieldname].value}</span>;
    }
    return row[header.fieldname].value;
  };

  const filteredRows = getFilteredRows();

  return (
    <Box
      sx={{
        backgroundColor: "var(--app-bg-primary)",
        padding: 2,
        borderRadius: "12px",
        overflow: "auto",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <table 
        className="table w-full border-collapse" 
        style={{ borderColor: "var(--app-secondary-200)" }}
      >
        <thead>
          <tr style={{ backgroundColor: "var(--app-bg-secondary)" }}>
            {tableHeaders.map((header) => (
              <th
                key={header.id}
                className="border p-3 font-semibold text-sm"
                style={{
                  backgroundColor: "var(--app-bg-secondary)",
                  borderColor: "var(--app-secondary-200)",
                  color: "var(--app-text-primary)",
                }}
                onClick={() => header.sort && handleSort(header.fieldname)}
              >
                <div className="flex justify-between items-center">
                  <span>{header.displayName}</span>
                  {header.sort && (
                    <span 
                      className="text-sm cursor-pointer"
                      style={{ color: "var(--app-primary-500)" }}
                    >
                      ▲ ▼
                    </span>
                  )}
                </div>
                {header.search && (
                  <input
                    type="text"
                    placeholder={`Search ${header.displayName}`}
                    className="mt-2 w-full border p-1.5 rounded text-sm"
                    style={{
                      backgroundColor: "var(--app-bg-primary)",
                      borderColor: "var(--app-secondary-300)",
                      color: "var(--app-text-primary)",
                    }}
                    onChange={(e) => handleSearchChange(e, header.fieldname)}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              style={{
                backgroundColor: rowIndex % 2 === 0 ? "var(--app-bg-primary)" : "var(--app-bg-secondary)",
                borderColor: "var(--app-secondary-200)",
              }}
            >
              {tableHeaders.map((header) => (
                <td 
                  key={header.id} 
                  className="border p-3 text-sm"
                  style={{
                    borderColor: "var(--app-secondary-200)",
                    color: "var(--app-text-primary)",
                  }}
                >
                  {header.tooltip ? (
                    <Tooltip title={row[header.fieldname].value}>
                      <span>{renderCustomCell(header, row)}</span>
                    </Tooltip>
                  ) : (
                    renderCustomCell(header, row)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default DynamicTable;
