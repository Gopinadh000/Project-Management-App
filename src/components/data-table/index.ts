/**
 * Data Table Module
 * 
 * A comprehensive, modular table component system
 */

// Main component
export { default as DataTable } from './DataTable';

// Types
export type { 
  ColumnData, 
  RowData, 
  TransformedRow, 
  DataTableProps,
  TableConfig,
  CustomCellRenderer,
  CustomCellRenderers,
  TableParams
} from './types';

// Hooks
export { useTableData, useTableConfig, useTableReloadKey, TableReloadProvider } from './hooks';

// Components
export { 
  TableHeader, 
  TableCell, 
  TableFooter, 
  TablePagination,
  // Custom Cell Examples
  CellWithPopover,
  CellWithActions,
  CellWithBadge,
  CellWithIcon,
  CellWithTooltip,
  CellWithBadgeCount,
  EditableCell,
} from './components';

// Styles
export { tableStyles, headerStyles, cellStyles, footerStyles } from './styles/tableStyles';

