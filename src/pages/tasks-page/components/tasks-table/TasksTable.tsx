import React, { useState } from "react";
import { Checkbox, Tooltip } from "@mui/material";

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
    <div className="table-container bg-white p-4 h-screen">
      <table className="table w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th
                key={header.id}
                className="border p-2 bg-blue-50"
                onClick={() => header.sort && handleSort(header.fieldname)}
              >
                <div className="flex justify-between items-center">
                  {header.displayName}
                  {header.sort && (
                    <span className="text-sm cursor-pointer text-blue-400">
                      ▲ ▼
                    </span>
                  )}
                </div>
                {header.search && (
                  <input
                    type="text"
                    placeholder={`Search ${header.displayName}`}
                    className="mt-2 w-full border p-1"
                    onChange={(e) => handleSearchChange(e, header.fieldname)}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {tableHeaders.map((header) => (
                <td key={header.id} className="border p-2">
                  {header.tooltip ? (
                    <Tooltip title={row[header.fieldname].value}>
                      {renderCustomCell(header, row)}
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
    </div>
  );
};

export default DynamicTable;
