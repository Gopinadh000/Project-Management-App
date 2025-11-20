# Table Configuration Guide

This directory contains table configuration files that define the structure and behavior of table columns for the standardized table plugin format.

## How to Create a New Table Configuration

### Step 1: Create a Configuration File

Create a new file in this directory (e.g., `your-table.config.js`) with the following structure:

```javascript
export const yourTableConfig = [
    {
        id: 1,
        order: 1,
        fieldName: "fieldName",        // Frontend field name (camelCase)
        displayName: "Display Name",   // Column header text
        dbFieldName: "db_field_name",  // Database column name (snake_case)
        sort: true,                     // Enable sorting
        search: true,                   // Enable searching
        filter: false,                  // Enable filtering
        type: "string",                 // Data type: "string", "number", "date", "boolean"
        formatter: (value, row) => {   // Optional: Custom formatter function
            // Transform the value before displaying
            return value;
        }
    },
    // Add more columns...
];
```

### Step 2: Column Configuration Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | Number | Yes | Unique identifier for the column |
| `order` | Number | Yes | Display order (1, 2, 3, ...) |
| `fieldName` | String | Yes | Frontend field name (used in rowsData) |
| `displayName` | String | Yes | Column header display text |
| `dbFieldName` | String | Yes | Database column name (can use dot notation for nested: "user.name") |
| `sort` | Boolean | No | Enable column sorting (default: true) |
| `search` | Boolean | No | Enable column searching (default: true) |
| `filter` | Boolean | No | Enable column filtering (default: false) |
| `type` | String | No | Data type: "string", "number", "date", "boolean" (default: "string") |
| `formatter` | Function | No | Custom function to format the value: `(value, row) => formattedValue` |

### Step 3: Use in Controller

```javascript
import { buildTableData, calculatePagination } from '../services/table-builder.service.js';
import { yourTableConfig } from '../config/table-configs/your-table.config.js';

export const getAllYourTable = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        const offset = (pageNum - 1) * limitNum;

        // Get total count
        const [countResult] = await db.query(`SELECT COUNT(*) as total FROM your_table`);
        const total = countResult[0].total;

        // Get data with pagination
        const [data] = await db.query(
            `SELECT * FROM your_table ORDER BY created_at DESC LIMIT ? OFFSET ?`,
            [limitNum, offset]
        );

        // Calculate pagination
        const paginationInfo = calculatePagination(total, pageNum, limitNum);

        // Build table data
        const tableData = buildTableData(
            yourTableConfig,
            data,
            paginationInfo,
            {
                downloadenable: true,
                lastPageNavigation: true
            }
        );

        return ReS(res, {
            data: tableData,
            message: "Table data retrieved successfully"
        });
    } catch (err) {
        return ReE(res, { message: "Failed to fetch table data" });
    }
};
```

## Examples

### Example 1: Simple String Column

```javascript
{
    id: 1,
    order: 1,
    fieldName: "name",
    displayName: "Name",
    dbFieldName: "name",
    sort: true,
    search: true,
    filter: false,
    type: "string"
}
```

### Example 2: Date Column with Formatter

```javascript
{
    id: 2,
    order: 2,
    fieldName: "createdAt",
    displayName: "Created At",
    dbFieldName: "created_at",
    sort: true,
    search: false,
    filter: false,
    type: "date",
    formatter: (value) => {
        if (value) {
            const date = new Date(value);
            return date.toLocaleDateString();
        }
        return '';
    }
}
```

### Example 3: Nested Property (JOIN result)

```javascript
{
    id: 3,
    order: 3,
    fieldName: "ownerName",
    displayName: "Owner",
    dbFieldName: "owner_name", // From JOIN query: SELECT u.name as owner_name ...
    sort: true,
    search: true,
    filter: false,
    type: "string"
}
```

### Example 4: Custom Formatter with Row Context

```javascript
{
    id: 4,
    order: 4,
    fieldName: "status",
    displayName: "Status",
    dbFieldName: "status",
    sort: true,
    search: false,
    filter: true,
    type: "string",
    formatter: (value, row) => {
        // Access other row properties if needed
        if (value === 'ACTIVE' && row.priority === 'HIGH') {
            return `${value} (Urgent)`;
        }
        return value;
    }
}
```

## Response Format

The table builder service returns data in this standardized format:

```javascript
{
    resData: {
        columnsData: [
            {
                id: 1,
                order: 1,
                fieldName: "name",
                displayName: "User Name",
                sort: true,
                search: true,
                filter: false,
                type: "string"
            }
        ],
        rowsData: [
            {
                name: { value: "John Doe" },
                email: { value: "john@example.com" }
            }
        ],
        totalItemsCount: 100,
        pageLimitSize: 20,
        pages: 5,
        downloadenable: true,
        lastPageNavigation: true
    },
    status: true,
    statusMsg: ""
}
```

## Best Practices

1. **Consistent Naming**: Use camelCase for `fieldName` and snake_case for `dbFieldName`
2. **Order Matters**: Set `order` values sequentially (1, 2, 3, ...)
3. **Type Safety**: Always specify the correct `type` for proper frontend rendering
4. **Formatter Functions**: Keep formatters simple and pure (no side effects)
5. **Performance**: Only enable `search` and `filter` for columns that need it



