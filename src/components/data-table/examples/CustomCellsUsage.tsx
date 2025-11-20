/**
 * Example: How to use Custom Cell Renderers with DataTable
 * 
 * This file demonstrates how to implement custom cell rendering
 * for columns where customCell is set to true
 */

import { DataTable, CustomCellRenderers } from '../index';
import {
  CellWithPopover,
  CellWithActions,
  CellWithBadge,
  CellWithIcon,
  CellWithTooltip,
  EditableCell,
} from '../components/CustomCellExamples';
import usersData from '../dummy-data/usersData';

export default function CustomCellsUsageExample() {
  // Define custom cell renderers for specific fields
  const customCellRenderers: CustomCellRenderers = {
    // Phone field: Show with icon
    phone: ({ value, field }) => (
      <CellWithIcon value={value} field={field} />
    ),

    // Address field: Show with popover for full details
    address: ({ value, row }) => (
      <CellWithPopover value={value} row={row} />
    ),

    // City field: Show with location icon and tooltip
    city: ({ value, field }) => (
      <CellWithIcon value={value} field={field} />
    ),

    // Role field: Show with colored badge
    role: ({ value }) => (
      <CellWithBadge value={value} />
    ),

    // Created At field: Show with tooltip
    createdat: ({ value }) => (
      <CellWithTooltip value={value} />
    ),

    // Updated At field: Show with actions menu
    updatedat: ({ value, row }) => (
      <CellWithActions value={value} row={row} />
    ),
  };

  return (
    <DataTable
      columnsData={usersData.columnsData}
      rowsData={usersData.rowsData}
      customCellRenderers={customCellRenderers}
      totalItems={usersData.totalItems}
      totalPages={usersData.totalPages}
      totalItemsPerPage={usersData.totalItemsPerPage}
    />
  );
}

/**
 * Alternative Example: Using inline custom renderers
 */
export function InlineCustomCellsExample() {
  const customRenderers: CustomCellRenderers = {
    phone: ({ value }) => (
      <div style={{ color: 'blue', fontWeight: 'bold' }}>
        📞 {value}
      </div>
    ),
    
    email: ({ value, row }) => (
      <a 
        href={`mailto:${value}`} 
        onClick={(e) => {
          e.stopPropagation();
          console.log('Email clicked for user:', row.username);
        }}
        style={{ color: '#1976d2', textDecoration: 'none' }}
      >
        {value}
      </a>
    ),

    role: ({ value }) => {
      const colors: Record<string, string> = {
        'Admin': '#f44336',
        'Manager': '#2196f3',
        'Developer': '#4caf50',
        'Designer': '#ff9800',
        'Analyst': '#9c27b0',
      };

      return (
        <span
          style={{
            backgroundColor: colors[value as string] || '#757575',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {value}
        </span>
      );
    },
  };

  return (
    <DataTable
      columnsData={usersData.columnsData}
      rowsData={usersData.rowsData}
      customCellRenderers={customRenderers}
    />
  );
}

/**
 * Example: Editable cells
 */
export function EditableCellsExample() {
  const editableRenderers: CustomCellRenderers = {
    phone: ({ value, row, field }) => (
      <EditableCell value={value} row={row} field={field} />
    ),
    
    address: ({ value, row, field }) => (
      <EditableCell value={value} row={row} field={field} />
    ),
    
    city: ({ value, row, field }) => (
      <EditableCell value={value} row={row} field={field} />
    ),
  };

  return (
    <DataTable
      columnsData={usersData.columnsData}
      rowsData={usersData.rowsData}
      customCellRenderers={editableRenderers}
      onRowClick={(row) => console.log('Row clicked:', row)}
    />
  );
}


