# DataTable Component

A modular, reusable table component built on top of MUI DataGrid with a clean, organized architecture.

## 📁 Structure

```
data-table/
├── components/           # Reusable sub-components
│   ├── TableHeader.tsx  # Custom header component
│   ├── TableCell.tsx    # Custom cell component
│   ├── TableFooter.tsx  # Custom footer component
│   └── index.ts         # Component exports
├── hooks/               # Custom React hooks
│   ├── useTableData.ts  # Data transformation hook
│   ├── useTableConfig.ts # Configuration management hook
│   └── index.ts         # Hook exports
├── styles/              # Centralized styling
│   └── tableStyles.ts   # MUI sx styles
├── types/               # TypeScript interfaces
│   └── index.ts         # Type definitions
├── dummy-data/          # Sample data for testing
│   ├── usersData.ts
│   ├── tasksData.ts
│   └── tableData.ts
├── DataTable.tsx        # Main component
├── index.ts             # Module exports
└── README.md            # Documentation
```

## 🚀 Usage

### Basic Example

```tsx
import { DataTable } from '@/components/data-table';

function MyComponent() {
  return (
    <DataTable
      columnsData={columns}
      rowsData={rows}
      pageIndex={0}
      totalItemsPerPage={10}
    />
  );
}
```

### With API Integration (Search, Sort, Pagination)

```tsx
import { DataTable, TableParams } from '@/components/data-table';
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Handle table parameter changes
  const handleTableParamsChange = async (params: TableParams) => {
    console.log('Table Params:', params);
    // params contains: { page, pageSize, search, sort, filters }
    
    // Make API call with parameters
    const response = await fetch(`/api/users?${new URLSearchParams({
      page: params.page.toString(),
      pageSize: params.pageSize.toString(),
      search: JSON.stringify(params.search),
      sortField: params.sort?.field || '',
      sortOrder: params.sort?.order || 'asc',
    })}`);
    
    const result = await response.json();
    setData(result.data);
    setTotalItems(result.totalItems);
    setTotalPages(result.totalPages);
  };

  return (
    <DataTable
      columnsData={columns}
      rowsData={data}
      totalItems={totalItems}
      totalPages={totalPages}
      onTableParamsChange={handleTableParamsChange}
    />
  );
}
```

### With Custom Callbacks

```tsx
import { DataTable, TransformedRow } from '@/components/data-table';

function MyComponent() {
  const handleRowClick = (row: TransformedRow) => {
    console.log('Selected row:', row);
  };

  const handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
  };

  return (
    <DataTable
      columnsData={columns}
      rowsData={rows}
      onRowClick={handleRowClick}
      onPageChange={handlePageChange}
      height="600px"
    />
  );
}
```

### With Custom Cell Renderers

```tsx
import { 
  DataTable, 
  CustomCellRenderers,
  CellWithBadge,
  CellWithIcon,
  CellWithPopover 
} from '@/components/data-table';

function MyComponent() {
  const customCellRenderers: CustomCellRenderers = {
    // Render role with colored badge
    role: ({ value }) => <CellWithBadge value={value} />,
    
    // Render phone with icon
    phone: ({ value, field }) => <CellWithIcon value={value} field={field} />,
    
    // Render address with popover for details
    address: ({ value, row }) => <CellWithPopover value={value} row={row} />,
  };

  return (
    <DataTable
      columnsData={columns}
      rowsData={rows}
      customCellRenderers={customCellRenderers}
    />
  );
}
```

## 📝 Props

### DataTableProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columnsData` | `ColumnData[]` | `usersData.columnsData` | Column configuration |
| `rowsData` | `RowData[]` | `usersData.rowsData` | Row data |
| `pageIndex` | `number` | `0` | Current page index |
| `totalItemsPerPage` | `number` | `10` | Items per page |
| `totalItems` | `number` | - | Total number of items |
| `totalPages` | `number` | - | Total number of pages |
| `onRowClick` | `(row: TransformedRow) => void` | - | Row click handler |
| `onPageChange` | `(page: number) => void` | - | Page change handler |
| `onPageSizeChange` | `(size: number) => void` | - | Page size change handler |
| `onTableParamsChange` | `(params: TableParams) => void` | - | Handler for all table parameter changes (search, sort, pagination) |
| `height` | `string \| number` | `'500px'` | Table container height |
| `customCellRenderers` | `CustomCellRenderers` | - | Custom cell renderer functions |

### TableParams

The `TableParams` interface contains all parameters needed for API integration:

```typescript
interface TableParams {
  page: number;                        // Current page number (0-indexed)
  pageSize: number;                    // Items per page
  search?: Record<string, string>;     // Search values by field
  sort?: {                             // Sort configuration
    field: string;
    order: 'asc' | 'desc';
  };
  filters?: Record<string, any>;       // Custom filters
}
```

## 🎨 Components

### TableHeader

Custom header component with sorting and filtering support.

```tsx
import { TableHeader } from '@/components/data-table';
```

### TableCell

Custom cell component with tooltip support and custom rendering.

```tsx
import { TableCell } from '@/components/data-table';

<TableCell
  params={cellParams}
  enableTooltip={true}
  customRenderer={(params) => <CustomContent {...params} />}
/>
```

### TableFooter

Custom footer component displaying pagination info and selected row count.

```tsx
import { TableFooter } from '@/components/data-table';

<TableFooter
  totalItems={100}
  currentPage={0}
  totalPages={10}
  selectedRows={5}
/>
```

### TablePagination

Custom pagination component with page numbers on the left and total count on the right.

```tsx
import { TablePagination } from '@/components/data-table';

<TablePagination
  currentPage={0}
  totalPages={5}
  totalItems={50}
  itemsPerPage={10}
  onPageChange={(page) => console.log('Page:', page)}
/>
```

**Features:**
- Page numbers displayed as: `<< < 1 2 3 4 > >>`
- Shows maximum 4 page numbers at a time
- **First Page** (`<<`) - Jump to first page
- **Previous Page** (`<`) - Go to previous page
- **Next Page** (`>`) - Go to next page
- **Last Page** (`>>`) - Jump to last page
- Ellipsis (...) for large page ranges
- Active page highlighting
- Total items count on the right
- Buttons disabled at boundaries (first/last page)
- Responsive design

## 🔧 Hooks

### useTableData

Transforms raw column and row data into MUI DataGrid format.

```tsx
import { useTableData } from '@/components/data-table';

const { columns, rows } = useTableData(columnsData, rowsData);
```

### useTableConfig

Manages table configuration including checkbox visibility and display settings.

```tsx
import { useTableConfig } from '@/components/data-table';

const config = useTableConfig(columnsData);
// Returns: { showCheckbox, rowHeight, scrollbarSize, pageSizeOptions }
```

## 🎭 Types

### ColumnData

```typescript
interface ColumnData {
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
```

### RowData

```typescript
interface RowData {
  [key: string]: {
    value: string | number | boolean;
    type: string;
  } | undefined;
}
```

## 🎨 Styling

Styles are centralized in `styles/tableStyles.ts` and include:

- `tableStyles` - Main table styles
- `headerStyles` - Header-specific styles
- `cellStyles` - Cell-specific styles
- `footerStyles` - Footer-specific styles

### Custom Styling

```tsx
import { DataTable, tableStyles } from '@/components/data-table';

// Extend or override styles
const customStyles = {
  ...tableStyles,
  '& .MuiDataGrid-row': {
    backgroundColor: 'lightblue',
  },
};
```

## ✨ Features

- ✅ **Custom Search** - Inline search in column headers
- ✅ **Custom Sort** - Click to toggle ascending/descending
- ✅ **API Integration** - Complete parameter handling for backend calls
- ✅ **Server-side Pagination** - Handle large datasets
- ✅ Dynamic column configuration
- ✅ Row selection with checkboxes  
- ✅ Resizable columns
- ✅ Editable cells
- ✅ Custom cell rendering (Popovers, Badges, Icons, Actions)
- ✅ Tooltips
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Modular architecture
- ✅ **No MUI built-in filters** - Complete control over filtering logic

### 🔍 Search & Sort

When you set `search: true` or `sort: true` in your column configuration:
- **Search Icon** appears in the header
- Click the search icon to open an inline search input
- **Sort Icon** appears in the header  
- Click to toggle between ascending/descending order
- All changes are passed to `onTableParamsChange` for API integration

```typescript
{
  fieldname: "username",
  displayName: "Username",
  search: true,   // ✅ Shows search icon in header
  sort: true,     // ✅ Shows sort icon in header
  // ...other props
}
```

## 🔄 Data Format Example

```typescript
const columnsData = [
  {
    fieldname: 'username',
    displayName: 'Username',
    sort: true,
    search: true,
    order: 1,
    type: 'string',
    width: 150,
    // ...other properties
  },
];

const rowsData = [
  {
    username: {
      value: 'John Doe',
      type: 'string',
    },
    // ...other fields
  },
];
```

## 📦 Module Exports

```typescript
// Import everything
import {
  DataTable,           // Main component
  useTableData,        // Hooks
  useTableConfig,
  TableHeader,         // Components
  TableCell,
  TableFooter,
  tableStyles,         // Styles
  ColumnData,          // Types
  RowData,
  TransformedRow,
} from '@/components/data-table';
```

## 🎨 Custom Cell Renderers

The DataTable supports custom cell rendering for columns where `customCell: true`. This allows you to add interactive elements like popovers, badges, icons, and more.

### How It Works

1. **Mark Column as Custom**: Set `customCell: true` in your column configuration
2. **Create Renderer Function**: Define a function that returns a React component
3. **Pass to DataTable**: Provide the `customCellRenderers` prop

### Custom Renderer Function

```typescript
type CustomCellRenderer = (params: {
  value: any;           // The cell value
  row: TransformedRow;  // The entire row data
  field: string;        // The field name
}) => React.ReactNode;
```

### Built-in Custom Cell Components

We provide several ready-to-use custom cell components:

#### 1. **CellWithPopover**
Shows additional information in a popover on click.

```tsx
import { CellWithPopover } from '@/components/data-table';

customCellRenderers={{
  address: ({ value, row }) => <CellWithPopover value={value} row={row} />
}}
```

#### 2. **CellWithActions**
Displays an actions menu with edit/delete/view options.

```tsx
import { CellWithActions } from '@/components/data-table';

customCellRenderers={{
  name: ({ value, row }) => <CellWithActions value={value} row={row} />
}}
```

#### 3. **CellWithBadge**
Shows a colored badge/chip based on the value.

```tsx
import { CellWithBadge } from '@/components/data-table';

customCellRenderers={{
  role: ({ value }) => <CellWithBadge value={value} />
}}
```

#### 4. **CellWithIcon**
Displays an icon alongside the value.

```tsx
import { CellWithIcon } from '@/components/data-table';

customCellRenderers={{
  phone: ({ value, field }) => <CellWithIcon value={value} field={field} />
}}
```

#### 5. **CellWithTooltip**
Shows full text in a tooltip on hover.

```tsx
import { CellWithTooltip } from '@/components/data-table';

customCellRenderers={{
  description: ({ value }) => <CellWithTooltip value={value} />
}}
```

#### 6. **EditableCell**
Allows inline editing with click.

```tsx
import { EditableCell } from '@/components/data-table';

customCellRenderers={{
  email: ({ value, row, field }) => (
    <EditableCell value={value} row={row} field={field} />
  )
}}
```

### Complete Example

```tsx
import { 
  DataTable, 
  CustomCellRenderers,
  CellWithBadge,
  CellWithIcon,
  CellWithActions,
  CellWithPopover,
  EditableCell,
} from '@/components/data-table';

function UsersTable() {
  const customRenderers: CustomCellRenderers = {
    // Phone with icon
    phone: ({ value, field }) => (
      <CellWithIcon value={value} field={field} />
    ),
    
    // Address with popover
    address: ({ value, row }) => (
      <CellWithPopover value={value} row={row} />
    ),
    
    // Role with colored badge
    role: ({ value }) => (
      <CellWithBadge value={value} />
    ),
    
    // Editable city
    city: ({ value, row, field }) => (
      <EditableCell value={value} row={row} field={field} />
    ),
    
    // Updated date with actions
    updatedat: ({ value, row }) => (
      <CellWithActions value={value} row={row} />
    ),
  };

  return (
    <DataTable
      columnsData={columns}
      rowsData={rows}
      customCellRenderers={customRenderers}
    />
  );
}
```

### Creating Custom Renderers

You can create your own custom cell renderers:

```tsx
const customRenderers: CustomCellRenderers = {
  status: ({ value, row }) => {
    const color = value === 'Active' ? 'green' : 'red';
    return (
      <div style={{ color, fontWeight: 'bold' }}>
        {value}
      </div>
    );
  },
  
  email: ({ value }) => (
    <a href={`mailto:${value}`}>{value}</a>
  ),
  
  actions: ({ row }) => (
    <div>
      <button onClick={() => handleEdit(row)}>Edit</button>
      <button onClick={() => handleDelete(row)}>Delete</button>
    </div>
  ),
};
```

## 🛠️ Customization

### Custom Cell Renderer (Advanced)

You can create custom cell renderers for specific columns:

```tsx
const customColumns = columnsData.map(col => ({
  ...col,
  renderCell: col.customCell ? (params) => (
    <CustomCellComponent {...params} />
  ) : undefined,
}));
```

### Custom Header

Override the default header with your own component:

```tsx
const customColumns = columnsData.map(col => ({
  ...col,
  renderHeader: (params) => <CustomHeaderComponent {...params} />,
}));
```

## 🐛 Troubleshooting

### Checkboxes not showing
Ensure one of your columns has `showCheckbox: true`:

```typescript
{
  fieldname: 'select',
  type: 'checkbox',
  showCheckbox: true,
  // ...
}
```

### Styles not applying
Make sure you're importing the styles from the correct path and that MUI theme is properly configured.

## 📄 License

Part of the admin-frontend project.

