import { useMemo } from 'react';
import { GridColDef, GridRenderCellParams, GridColumnHeaderParams } from '@mui/x-data-grid';
import { ColumnData, RowData, TransformedRow, CustomCellRenderers } from '../types';
import { SearchableHeader } from '../components/SearchableHeader';

/**
 * Custom hook to transform table data for MUI DataGrid
 */
export const useTableData = (
  columnsData: ColumnData[], 
  rowsData: RowData[],
  customCellRenderers?: CustomCellRenderers,
  onSearch?: (field: string, value: string) => void,
  onSort?: (field: string, order: 'asc' | 'desc') => void,
  currentSortField?: string,
  currentSortOrder?: 'asc' | 'desc'
) => {
  // Transform columnsData to MUI DataGrid column format
  const columns: GridColDef[] = useMemo(() => {
    return columnsData
      .sort((a, b) => a.order - b.order)
      .map((col) => {
        // Skip checkbox/select columns entirely - they're handled by DataGrid's checkboxSelection
        if (col.type === 'checkbox' || col.fieldname === 'select') {
          return null;
        }

        const columnDef: GridColDef = {
          field: col.fieldname,
          headerName: col.displayName,
          width: col.width,
          minWidth: col.minWidth,
          sortable: false, // Disable MUI's built-in sorting
          editable: col.editable,
          resizable: col.resizable,
          filterable: false, // Disable MUI's built-in filtering
          disableColumnMenu: true, // Disable column menu
        };

        // Add custom header with search/sort if enabled
        if (col.search || col.sort) {
          columnDef.renderHeader = (params: GridColumnHeaderParams) => {
            return (
              <SearchableHeader
                params={params}
                searchEnabled={col.search}
                sortEnabled={col.sort}
                onSearch={onSearch}
                onSort={onSort}
                currentSortField={currentSortField}
                currentSortOrder={currentSortOrder}
              />
            );
          };
        }

        // Add custom cell renderer if customCell is true and renderer is provided
        if (col.customCell && customCellRenderers && customCellRenderers[col.fieldname]) {
          columnDef.renderCell = (params: GridRenderCellParams) => {
            return customCellRenderers[col.fieldname]({
              value: params.value,
              row: params.row as TransformedRow,
              field: params.field,
            });
          };
        }

        return columnDef;
      })
      .filter(Boolean) as GridColDef[];
  }, [columnsData, customCellRenderers, onSearch, onSort, currentSortField, currentSortOrder]);

  // Transform rowsData to MUI DataGrid row format
  const rows: TransformedRow[] = useMemo(() => {
    return rowsData.map((row, index) => {
      const transformedRow: TransformedRow = {
        id: index + 1, // MUI DataGrid requires an 'id' field
      };

      // Extract value from each field
      Object.keys(row).forEach((key) => {
        const field = row[key];
        if (field) {
          transformedRow[key] = field.value;
        }
      });

      return transformedRow;
    });
  }, [rowsData]);

  return { columns, rows };
};
