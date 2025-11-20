# Table Builder Service - Quick Usage Guide

## Overview

The table builder service provides a standardized way to format table data for your frontend table plugin. It transforms raw database data into the required format with columnsData and rowsData.

## Architecture

```
src/
├── services/
│   └── table-builder.service.js    # Core table builder utility
├── config/
│   └── table-configs/
│       ├── users-table.config.js    # Users table column definitions
│       ├── projects-table.config.js # Projects table column definitions
│       ├── tasks-table.config.js    # Tasks table column definitions
│       └── README.md                # Detailed configuration guide
└── controllers/
    ├── users.controller.js          # Uses table builder for users
    ├── projects.controller.js       # Uses table builder for projects
    └── tasks.controller.js          # Uses table builder for tasks
```

## API Endpoints

### Users Table
- **GET** `/api/v1/users/usersdata`
- Query params: `page`, `limit`
- Example: `/api/v1/users/usersdata?page=1&limit=20`

### Projects Table
- **GET** `/api/v1/projects/tabledata`
- Query params: `page`, `limit`, `status`, `priority`
- Example: `/api/v1/projects/tabledata?page=1&limit=20&status=ACTIVE`

### Tasks Table
- **GET** `/api/v1/tasks/tabledata`
- Query params: `page`, `limit`, `status`, `priority`, `projectId`
- Example: `/api/v1/tasks/tabledata?page=1&limit=20`

## Response Format

All table endpoints return data in this standardized format:

```json
{
  "data": {
    "resData": {
      "columnsData": [
        {
          "id": 1,
          "order": 1,
          "fieldName": "name",
          "displayName": "User Name",
          "sort": true,
          "search": true,
          "filter": false,
          "type": "string"
        }
      ],
      "rowsData": [
        {
          "name": { "value": "Gopinadh" },
          "role": { "value": "SUPER-ADMIN" }
        }
      ],
      "totalItemsCount": 100,
      "pageLimitSize": 20,
      "pages": 5,
      "downloadenable": true,
      "lastPageNavigation": true
    },
    "status": true,
    "statusMsg": ""
  },
  "message": "Users table data retrieved successfully",
  "status": true
}
```

## How to Add a New Table

### Step 1: Create Table Configuration

Create a file: `src/config/table-configs/your-table.config.js`

```javascript
export const yourTableConfig = [
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
];
```

### Step 2: Create Controller Function

In your controller file:

```javascript
import { buildTableData, calculatePagination } from '../services/table-builder.service.js';
import { yourTableConfig } from '../config/table-configs/your-table.config.js';
import { db } from '../config/db-config.js';
import { ReS, ReE } from '../utils/utils.js';

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

        // Build table data
        const paginationInfo = calculatePagination(total, pageNum, limitNum);
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

### Step 3: Add Route

In your routes file:

```javascript
import { getAllYourTable } from '../controllers/your.controller.js';
import { authenticateToken } from '../services/jwt/auth.middleware.js';

router.get('/tabledata', authenticateToken, getAllYourTable);
```

## Key Features

1. **Single Responsibility**: Table builder service handles all formatting logic
2. **Reusable**: Same service works for all tables
3. **Configurable**: Column definitions in separate config files
4. **Type Safe**: Supports string, number, date, boolean types
5. **Custom Formatting**: Formatter functions for data transformation
6. **Pagination**: Built-in pagination calculation
7. **Flexible**: Supports nested properties and JOIN results

## Column Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `sort` | Enable column sorting | `true` |
| `search` | Enable column searching | `true` |
| `filter` | Enable column filtering | `false` |
| `type` | Data type (string/number/date/boolean) | `"string"` |
| `formatter` | Custom formatting function | `undefined` |

## Examples

### Users Table
- Endpoint: `/api/v1/users/usersdata`
- Columns: name, email, role, companyId, createdAt

### Projects Table
- Endpoint: `/api/v1/projects/tabledata`
- Columns: projectName, description, ownerName, status, priority, startDate, endDate, createdAt

### Tasks Table
- Endpoint: `/api/v1/tasks/tabledata`
- Columns: taskName, description, projectName, assignedTo, status, priority, dueDate, createdAt

## Notes

- All table endpoints support pagination via `page` and `limit` query parameters
- Projects and Tasks endpoints support filtering via query parameters
- The table builder automatically handles null/undefined values
- Custom formatters can access the entire row object for complex transformations



