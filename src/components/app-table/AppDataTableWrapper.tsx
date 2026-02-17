import { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import {
  MaterialReactTable,
} from 'material-react-table';
import TableSkleton from "./components/TableSkleton";
import TableFiltersContainer from "./components/TableFiltersContainer";
import TablePagination from "./components/TablePagination";
import TableComponent  from "./components/TableComponent";
import {apiInstance} from "../../services/api/axios-setup/axiosInstance";
// import { useTableData } from "../data-table";
import  buildColumns  from "./utils/ColumBuilder";
import NoDataMessage from "./components/NoDataMessage";


interface TableData {
  rows: Record<string, unknown>[];
  columns: unknown[];
  isLoading: boolean;
  pagination: Record<string, unknown> | null;
}

interface AppDataTableWrapperProps {
  tableInstanceDetails: {
    tableId: string;
    apiUrl: string;
  };
  baseUrl: string;
  initialQueryParams: unknown;
  tableProps?: unknown;
  systemCells?: unknown[];
  customCells?: unknown[];
  filtersConfig: {
    enabledFilters: boolean;
  };
  enablePagination: boolean;
}

const AppDataTableWrapper = ({
  tableInstanceDetails,
  baseUrl,
  initialQueryParams,
  filtersConfig,
  enablePagination,
}: AppDataTableWrapperProps) => {
  const [tableData, setTableData] = useState<TableData>({
    rows: [],
    columns: [],
    isLoading: false,
    pagination: null,
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(
    (initialQueryParams as { pagination?: { pageSize?: number } })?.pagination
      ?.pageSize ?? 10
  );

  const { tableId, apiUrl } = tableInstanceDetails;

  const fetchTableData = useCallback(
    async (currentPage: number, currentPageSize: number) => {
      try {
        setTableData((prev) => ({ ...prev, isLoading: true }));
        const params = new URLSearchParams();
        params.set("page", String(currentPage));
        params.set("pageSize", String(currentPageSize));
        const url = `${baseUrl}/${apiUrl}?${params.toString()}`;
        const res = await apiInstance.get(url);
        const resData = res.data?.data?.resData;
        if (!resData) {
          setTableData((prev) => ({ ...prev, isLoading: false }));
          return;
        }
        setTableData({
          columns: resData.columns ?? [],
          rows: resData.rows ?? [],
          pagination: resData.pagination ?? null,
          isLoading: false,
        });
      } catch (err) {
        console.error(err);
        setTableData((prev) => ({ ...prev, isLoading: false }));
      }
    },
    [baseUrl, apiUrl]
  );

  useEffect(() => {
    fetchTableData(page, pageSize);
  }, [fetchTableData, page, pageSize]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const columns = buildColumns(tableData?.columns);

  return (
    <>
      <TableComponent>
        {tableData?.isLoading && (
          <Box
            className="p-4 border-b"
            sx={{
              borderColor: "var(--app-secondary-200)",
              backgroundColor: "var(--app-bg-primary)",
            }}
          >
            <TableSkleton />
          </Box>
        )}
        {filtersConfig.enabledFilters && <TableFiltersContainer />}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: 0,
            height: "100%",
          }}
          className="oescroll-wrapper"
        >
          <MaterialReactTable
            data-testid={`app-data-table-${tableId}`}
            columns={columns}
            data={tableData?.rows || []}
            layoutMode="grid"
            enablePagination={false}
            enableGlobalFilter={false}
            enableDensityToggle={false}
            enableGlobalFilterModes={false}
            enableColumnFilters={false}
            enableHiding={false}
            enableFullScreenToggle={false}
            enableTopToolbar={false}
            enableRowSelection={true}
            enableColumnResizing={true}
            enableResizing={true}
            columnResizeMode="onChange"
            defaultColumn={{
              minSize: 50,
              maxSize: 800,
              size: 200,
            }}
            columnFilterDisplayMode="custom"
            enableStickyHeader={true}
            enableStickyFooter={enablePagination}
            // memoMode="cells"
            renderEmptyRowsFallback={() => (
              <Box className="h-full flex items-center justify-center p-4 min-h-50">
                <NoDataMessage />
              </Box>
            )}
            MuiTableContainer-root={{
              sx: {
                overflow: "hidden",
              },
            }}
            muiTablePaperProps={{
              elevation: 0,
              sx: {
                height: "100%",
                maxHeight: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                flex: 1,
                minHeight: 0,
                "& .MuiCheckbox-root": {
                  margin: "10px !important",
                  color: "var(--app-text-secondary)",
                  "&.Mui-checked": {
                    color: "var(--app-primary-500)",
                  },
                  "&:hover": {
                    backgroundColor: "transparent !important",
                  },
                },
              },
            }}
            muiTableContainerProps={{
              sx: {
                flex: 1,
                minHeight: 0,
                overflow: "hidden",
                width: "100%",
                overflowX: "auto",
                border: "1px solid",
                borderColor: "var(--app-secondary-200)",
                borderBottom: "none",
                borderRadius: "8px 8px 0 0",
                position: "relative",
                backgroundColor: "var(--app-bg-primary)",
                "& .MuiTableHead-root": {
                  position: "sticky",
                  top: 0,
                  zIndex: 20,
                },
              },
              className: "oescroll",
            }}
            MuiTableCell-root={{
              sx: {
                paddingTop: "0px",
              },
            }}
            muiTableProps={{
              sx: {
                tableLayout: "auto",
                borderCollapse: "separate",
                borderSpacing: 0,
                width: "100%",
                minWidth: "max-content",
              },
            }}
            muiTableBodyProps={{
              sx: {
                display: "block",
                overflowY: "auto",
                height: `calc(100vh - 200px)`,
              },
            }}
            muiTableHeadProps={{
              sx: {
                opacity: 1,
              },
            }}
            muiTableHeadRowProps={{
              sx: {
                borderTop: "none",
                borderBottom: "2px solid",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "var(--app-secondary-300)",
                height: "56px",
                textAlign: "center",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--app-text-primary)",
                boxShadow: "none",
                backgroundColor: "var(--app-bg-secondary)",
                position: "sticky",
                top: 0,
                zIndex: 20,
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                backgroundColor: "var(--app-bg-secondary)",
                borderTop: "none",
                borderBottom: "none",
                borderLeft: "none",
                borderColor: "var(--app-secondary-200)",
                height: "56px",
                textAlign: "center",
                padding: "0px 4px",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--app-text-primary)",
                position: "sticky",
                top: 0,
                zIndex: 20,
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "var(--app-primary-50)",
                },
                "&:last-child": {
                  borderRight: "none",
                },
                "& .Mui-TableHeadCell-Content-Labels": {
                  fontWeight: 600,
                  color: "var(--app-text-primary)",
                },
                "& .Mui-TableHeadCell-Content-Wrapper": {
                  width: "100%",
                },
                "& .Mui-TableHeadCell-ResizeHandle-Wrapper": {
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "5px",
                  height: "100%",
                  // cursor: "col-resize",
                  // userSelect: "none",
                  touchAction: "none",
                  zIndex: 11,
                  "&:hover": {
                    backgroundColor: "var(--app-primary-500)",
                    opacity: 0.8,
                  },
                  "&.isResizing": {
                    backgroundColor: "var(--app-primary-500)",
                    opacity: 1,
                  },
                  "& .MuiCheckbox-root": {
                    margin: "0px 10px !important",
                    color: "var(--app-text-secondary)",
                  },
                },
                "& .Mui-TableHeadCell-ResizeHandle-Divider": {
                  height: "100%",
                  width: "10px",
                  backgroundColor: "transparent",
                  marginLeft: "auto",
                },
              },
            }}
            muiTableBodyCellProps={{
              sx: {
                borderTop: "none",
                borderLeft: "none",
                borderColor: "var(--app-secondary-200)",
                height: "52px",
                textAlign: "left",
                padding: "12px 4px",
                fontSize: "14px",
                fontWeight: 400,
                color: "var(--app-text-primary)",
                backgroundColor: "transparent",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                "&:last-child": {
                  borderRight: "none",
                },
              },
            }}
            muiTableBodyRowProps={{
              sx: {
                height: "52px",
                textAlign: "center",
                color: "var(--app-text-primary)",
                backgroundColor: "var(--app-bg-primary)",
                "&:nth-of-type(even)": {
                  backgroundColor: "var(--app-bg-secondary)",
                },
                "&:hover": {
                  backgroundColor: "var(--app-primary-50) !important",
                },
                "&.Mui-selected": {
                  backgroundColor: "var(--app-primary-100) !important",
                  "&:hover": {
                    backgroundColor: "var(--app-primary-100) !important",
                  },
                },
                "&.MuiTableRow-selected": {
                  backgroundColor: "var(--app-primary-100) !important",
                  "&:hover": {
                    backgroundColor: "var(--app-primary-100) !important",
                  },
                },
              },
              className: "group",
            }}
            muiTableFooterProps={{
              sx: {
                outline: "none",
              },
            }}
            muiBottomToolbarProps={{
              sx: {
                display: "none",
              },
            }}
          />
          {enablePagination && (
            <Box
              sx={{
                border: "1px solid",
                borderTop: "none",
                borderColor: "var(--app-secondary-200)",
                borderRadius: "0 0 8px 8px",
                backgroundColor: "var(--app-bg-secondary)",
                flexShrink: 0,
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TablePagination
                pagination={tableData.pagination}
                onPageChange={handlePageChange}
              />
            </Box>
          )}
        </Box>
      </TableComponent>
    </>
  );
};

export default AppDataTableWrapper;
