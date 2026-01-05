import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import usersData from './dummy-data/usersData';
import { DataTableProps, TransformedRow, TableParams } from './types';
import { useTableData, useTableConfig } from './hooks';
import { tableStyles } from './styles/tableStyles';
import { TablePagination } from './components/TablePagination';
import { apiInstance } from "../../services/api/axios-setup/axiosInstance";

/**
 * DataTable Component
 * A modular, reusable table component built on top of MUI DataGrid
 * 
 * Features:
 * - Dynamic column configuration
 * - Row selection with checkboxes
 * - Sorting, filtering, and pagination
 * - Custom cell rendering
 * - Responsive design
 * 
 * @example
 * ```tsx
 * <DataTable
 *   columnsData={columns}
 *   rowsData={rows}
 *   pageIndex={0}
 *   totalItemsPerPage={10}
 * />
 * ```
 */
export default function DataTable({ 
  columnsData = usersData.columnsData, 
  rowsData = usersData.rowsData,
  pageIndex = usersData.pageIndex,
  totalItemsPerPage = usersData.totalItemsPerPage,
  totalItems = usersData.totalItems,
  totalPages = usersData.totalPages,
  onRowClick,
  onPageChange,
  onPageSizeChange,
  onTableParamsChange,
  height = '500px',
  customCellRenderers,
}: DataTableProps) {

  // State management for table parameters
  const [currentPage, setCurrentPage] = useState(pageIndex);
  const [searchParams, setSearchParams] = useState<Record<string, string>>({});
  const [sortField, setSortField] = useState<string | undefined>();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | undefined>();

  const [data, setData] = useState<any[]>([]);

  // Handle search
  const handleSearch = useCallback((field: string, value: string) => {
    setSearchParams((prev) => {
      const newParams = { ...prev };
      if (value) {
        newParams[field] = value;
      } else {
        delete newParams[field];
      }
      return newParams;
    });
  }, []);

  // Handle sort
  const handleSort = useCallback((field: string, order: 'asc' | 'desc') => {
    setSortField(field);
    setSortOrder(order);
  }, []);

  // Notify parent component when table params change
  useEffect(() => {
    if (onTableParamsChange) {
      const params: TableParams = {
        page: currentPage,
        pageSize: totalItemsPerPage,
        search: Object.keys(searchParams).length > 0 ? searchParams : undefined,
        sort: sortField && sortOrder ? { field: sortField, order: sortOrder } : undefined,
      };
      onTableParamsChange(params);
    }
  }, [currentPage, totalItemsPerPage, searchParams, sortField, sortOrder, onTableParamsChange]);

  // Transform data using custom hook
  const { columns, rows } = useTableData(
    columnsData, 
    rowsData, 
    customCellRenderers,
    handleSearch,
    handleSort,
    sortField,
    sortOrder
  );

  // Get table configuration
  const config = useTableConfig(columnsData);

  // Calculate total pages from data
  const calculatedTotalPages = totalPages || Math.ceil(totalItems / totalItemsPerPage);
  const calculatedTotalItems = totalItems || rows.length;

  // Handle row click
  const handleRowClick = (params: { row: TransformedRow }) => {
    console.log("Row clicked - selected data:", params.row);
    if (onRowClick) {
      onRowClick(params.row);
    }
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  // Handle page size change
  const handlePageSizeChange = (newPageSize: number) => {
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };


  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    try {
      const resData = await apiInstance.get("/projects/datatable/projects");
      setData(resData.data.data.resData);
      console.log("resData", resData.data.data.resData);
    } catch (err) {
      console.log("err", err);
    }
  };



  return (
    <Box
      className="bg-white h-screen flex-grow-1"
      sx={{ height, display: "flex", flexDirection: "column" }}
    >
      <Box>
        <DataGrid
          key="data-table"
          rows={rows}
          columns={columns}
          paginationMode="server"
          paginationModel={{
            page: currentPage,
            pageSize: totalItemsPerPage,
          }}
          pageSizeOptions={config.pageSizeOptions}
          checkboxSelection={config.showCheckbox}
          hideFooter={true}
          rowHeight={config.rowHeight}
          scrollbarSize={config.scrollbarSize}
          onRowClick={handleRowClick}
          onPaginationModelChange={(model) => {
            handlePageChange(model.page);
            handlePageSizeChange(model.pageSize);
          }}
          sx={tableStyles}
        />
      </Box>

      {/* Custom Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalPages={calculatedTotalPages}
        totalItems={calculatedTotalItems}
        itemsPerPage={totalItemsPerPage}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}