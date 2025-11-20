/**
 * Column configuration interface
 */
export interface ColumnData {
  fieldname: string;
  displayName: string;
  sort: boolean;
  search: boolean;
  tooltip: boolean;
  customCell: boolean;
  order: number;
  type: string;
  width: number;
  minWidth: number;
  resizable: boolean;
  editable: boolean;
  filterable: boolean;
  showCheckbox?: boolean;
}

/**
 * Row data interface with dynamic fields
 */
export interface RowData {
  [key: string]: {
    value: string | number | boolean;
    type: string;
  } | undefined;
}

/**
 * Transformed row interface for MUI DataGrid
 */
export interface TransformedRow {
  id: number;
  [key: string]: string | number | boolean;
}

/**
 * Custom cell renderer function type
 */
export type CustomCellRenderer = (params: {
  value: any;
  row: TransformedRow;
  field: string;
}) => React.ReactNode;

/**
 * Custom cell renderers map
 */
export interface CustomCellRenderers {
  [fieldname: string]: CustomCellRenderer;
}

/**
 * Table parameters for API integration
 */
export interface TableParams {
  page: number;
  pageSize: number;
  search?: Record<string, string>; // { fieldname: searchValue }
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
  filters?: Record<string, any>; // Custom filters
}

/**
 * Main DataTable component props
 */
export interface DataTableProps {
  columnsData?: ColumnData[];
  rowsData?: RowData[];
  pageIndex?: number;
  totalItemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
  onRowClick?: (row: TransformedRow) => void;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onTableParamsChange?: (params: TableParams) => void;
  height?: string | number;
  customCellRenderers?: CustomCellRenderers;
}

/**
 * Table configuration interface
 */
export interface TableConfig {
  showCheckbox: boolean;
  rowHeight: number;
  scrollbarSize: number;
  pageSizeOptions: number[];
}

