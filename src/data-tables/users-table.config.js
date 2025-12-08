/**
 * Users Table Configuration
 * Defines the column structure for the users table
 */

export const usersTableConfig = [
    {
        id: 1,
        order: 1,
        fieldName: "name",
        displayName: "User Name",
        dbFieldName: "name", // Database field name
        sort: true,
        search: true,
        filter: false,
        type: "string"
    },
    {
        id: 2,
        order: 2,
        fieldName: "email",
        displayName: "Email",
        dbFieldName: "email",
        sort: true,
        search: true,
        filter: false,
        type: "string"
    },
    {
        id: 3,
        order: 3,
        fieldName: "role",
        displayName: "User Role",
        dbFieldName: "role",
        sort: true,
        search: true,
        filter: true,
        type: "string",
        formatter: (value) => {
            // Format role display (e.g., SUPER_ADMIN -> SUPER-ADMIN)
            if (value) {
                return value.replace(/_/g, '-');
            }
            return value;
        }
    },
    {
        id: 4,
        order: 4,
        fieldName: "companyId",
        displayName: "Company ID",
        dbFieldName: "company_id",
        sort: true,
        search: false,
        filter: false,
        type: "string"
    },
    {
        id: 5,
        order: 5,
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
];




