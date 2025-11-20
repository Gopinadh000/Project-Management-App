# TableBuilder Class - Usage Guide

## Overview

The `TableBuilder` class provides a class-based approach to building standardized table data for the frontend table plugin.

## Class Structure

```javascript
class TableBuilder {
    constructor(columnsConfig, options)
    buildColumnsData(columnsConfig)
    extractValue(row, dbFieldName)
    formatCellValue(value, row, columnConfig)
    buildRowsData(rawData, columnsConfig)
    build(rawData, paginationInfo, options, columnsConfig)
    getErrorResponse(error)
    static calculatePagination(total, page, limit)
    static buildTableData(columnsConfig, rawData, paginationInfo, options)
}
```

## Usage Examples

### Method 1: Instance-based (Recommended)

```javascript
import { TableBuilder } from '../services/table-builder.service.js';
import { usersTableConfig } from '../config/table-configs/users-table.config.js';

// Create instance with configuration
const tableBuilder = new TableBuilder(usersTableConfig, {
    downloadenable: true,
    lastPageNavigation: true
});

// Calculate pagination
const paginationInfo = TableBuilder.calculatePagination(total, page, limit);

// Build table data
const tableData = tableBuilder.build(rawData, paginationInfo);
```

### Method 2: Static Method (Backward Compatible)

```javascript
import { TableBuilder } from '../services/table-builder.service.js';
import { usersTableConfig } from '../config/table-configs/users-table.config.js';

// Use static method (same as before)
const paginationInfo = TableBuilder.calculatePagination(total, page, limit);
const tableData = TableBuilder.buildTableData(
    usersTableConfig,
    rawData,
    paginationInfo,
    { downloadenable: true, lastPageNavigation: true }
);
```

### Method 3: Reusable Instance

```javascript
// Create once, reuse multiple times
const usersTableBuilder = new TableBuilder(usersTableConfig);

// Use for different data sets
const tableData1 = usersTableBuilder.build(data1, paginationInfo1);
const tableData2 = usersTableBuilder.build(data2, paginationInfo2);
```

## Class Methods

### Constructor

```javascript
new TableBuilder(columnsConfig, options)
```

- `columnsConfig` (Array): Column configuration array
- `options` (Object): Default options for table building
  - `downloadenable` (Boolean): Enable download feature
  - `lastPageNavigation` (Boolean): Enable last page navigation

### build(rawData, paginationInfo, options, columnsConfig)

Main method to build table data.

**Parameters:**
- `rawData` (Array): Raw data from database
- `paginationInfo` (Object): `{ totalItemsCount, pageLimitSize, pages }`
- `options` (Object): Override default options
- `columnsConfig` (Array): Override instance config (optional)

**Returns:**
```javascript
{
    resData: {
        columnsData: [...],
        rowsData: [...],
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

### Static Methods

#### TableBuilder.calculatePagination(total, page, limit)

Calculate pagination information.

```javascript
const paginationInfo = TableBuilder.calculatePagination(100, 1, 20);
// Returns: { totalItemsCount: 100, pageLimitSize: 20, pages: 5 }
```

#### TableBuilder.buildTableData(columnsConfig, rawData, paginationInfo, options)

Static convenience method (backward compatible).

### Instance Methods (Internal)

These methods are used internally but can be accessed if needed:

- `buildColumnsData(columnsConfig)` - Build columns data structure
- `extractValue(row, dbFieldName)` - Extract value from row (supports nested properties)
- `formatCellValue(value, row, columnConfig)` - Format a single cell value
- `buildRowsData(rawData, columnsConfig)` - Build rows data structure
- `getErrorResponse(error)` - Get error response structure

## Complete Controller Example

```javascript
import { TableBuilder } from '../services/table-builder.service.js';
import { usersTableConfig } from '../config/table-configs/users-table.config.js';
import { db } from '../config/db-config.js';
import { ReS, ReE } from '../utils/utils.js';

export const getAllUsersTable = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        const offset = (pageNum - 1) * limitNum;

        // Get total count
        const [countResult] = await db.query(`SELECT COUNT(*) as total FROM users`);
        const total = countResult[0].total;

        // Get users with pagination
        const [usersData] = await db.query(
            `SELECT * FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?`,
            [limitNum, offset]
        );

        // Calculate pagination
        const paginationInfo = TableBuilder.calculatePagination(total, pageNum, limitNum);

        // Build table data using class instance
        const tableBuilder = new TableBuilder(usersTableConfig, {
            downloadenable: true,
            lastPageNavigation: true
        });
        const tableData = tableBuilder.build(usersData, paginationInfo);

        return ReS(res, {
            data: tableData,
            message: "Users table data retrieved successfully"
        });
    } catch (err) {
        console.error("Error fetching users table data:", err);
        return ReE(res, { message: "Failed to fetch users table data" });
    }
};
```

## Benefits of Class-Based Approach

1. **Reusability**: Create instance once, use multiple times
2. **Configuration**: Set default options in constructor
3. **Extensibility**: Easy to extend with additional methods
4. **State Management**: Can maintain state if needed
5. **Testability**: Easier to mock and test
6. **Backward Compatible**: Static methods still work

## Migration from Functional Approach

The class-based approach is backward compatible. You can:

1. **Keep using static methods** (no changes needed)
2. **Gradually migrate** to instance-based approach
3. **Mix both** approaches as needed

```javascript
// Old way (still works)
const tableData = buildTableData(config, data, pagination, options);

// New way (recommended)
const builder = new TableBuilder(config, options);
const tableData = builder.build(data, pagination);
```



