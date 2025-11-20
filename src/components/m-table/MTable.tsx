import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { CircularProgress } from "@mui/material";
import { apiInstance } from "../../services/api/axios-setup/axiosInstance";

export default function DynamicMRTTable({ apiUrl }:any) {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseurl= "http://localhost:4002/api/v1/"

  useEffect(() => {
    const fetchData =  async () => {
      try {
        const resData = await  apiInstance(baseurl + apiUrl);
        const  res = resData.data.data.response
       

        console.log(res , "json")

        // Transform headers → MRT column definitions
        const cols = res.headers.map((header :any) => ({
          accessorKey: header.feildName, // use fieldName from API
          header: header.displayName,
          enableSorting: header.sort || false,
          enableColumnFilter: header.search || false,
          size: 200,
        }));




        // Transform itemsData → plain objects { username: "...", role: "..." }
        const rows = Object?.values(res.dummyItems).map((row) => {
          const flatRow = {};
          res.headers.forEach((h) => {
            flatRow[h.feildName] = row[h.feildName]?.value ?? "-";
          });

          console.log(flatRow , "flatrow")
          return flatRow;

        });

        setColumns(cols);
        setData(rows);

        console.log(cols,  rows , "cols and rows")
      } catch (error) {
        console.error("Error fetching table data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  const table = useMaterialReactTable({
    columns:columns,
    data: useMemo(() => data, [data]),
    enableColumnOrdering: true,
    enableColumnPinning: true,
    enableColumnFilters: true,
    enableSorting: true,
    enableGlobalFilter: true,
    enablePagination: true,
    initialState: {
      showGlobalFilter: true,
      pagination: {
          pageSize: 10,
          pageIndex: 0
      },
    },
  });

  if (loading) return <CircularProgress />;

  return <MaterialReactTable table={table} />;
}
