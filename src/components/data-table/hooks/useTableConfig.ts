import { useMemo } from 'react';
import { ColumnData, TableConfig } from '../types';

/**
 * Custom hook to manage table configuration
 */
export const useTableConfig = (columnsData: ColumnData[]): TableConfig => {
  // Check if checkbox selection should be enabled based on showCheckbox property
  const showCheckbox = useMemo(() => {
    return columnsData.some((col) => col.showCheckbox === true);
  }, [columnsData]);

  return {
    showCheckbox,
    rowHeight: 60,
    scrollbarSize: 20,
    pageSizeOptions: [5, 10, 25, 50],
  };
};

