import React from "react";




interface ColumnConfig {
  order: number;
  fieldName: string;        // frontend key
  displayName: string;      // UI label
  dbfieldName: string;      // backend DB column
  type: 'string' | 'object' | 'number' | 'date' | 'boolean';

  sortable: boolean;
  searchable: boolean;
  globalSearch: boolean;
  filterable: boolean;

  tooltip?: boolean;
  anchorCell?: boolean;
  inNewTab?: boolean;
  customCell?: boolean;
}





const TableHeaders = ({headersData, itemsData}: any) => {
  return <div>TableHeaders</div>;
};

export default TableHeaders;
