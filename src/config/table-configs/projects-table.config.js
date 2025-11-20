/**
 * Projects Table Configuration
 * Defines the column structure for the projects table
 */

//  COLUMN_TYPES_SUPPORTED : [
//     'string', 'number', 'date', 'boolean', 'object' , 'datetime', 
// ]


export const projectsTableConfig = [
    {
        id: 1,
        order: 1,
        fieldName: "projectName",
        displayName: "Project Name",
        dbFieldName: "project_name",
        sort: true,
        search: true,
        filter: false,
        type: "string"
    },
    {
        id: 2,
        order: 2,
        fieldName: "description",
        displayName: "Description",
        dbFieldName: "description",
        sort: false,
        search: true,
        filter: false,
        type: "string"
    },
    {
        id: 3,
        order: 3,
        fieldName: "ownerName",
        displayName: "Project Owner",
        dbFieldName: "owner_name", // From JOIN query
        sort: true,
        search: true,
        filter: false,
        type: "string"
    },
    {
        id: 4,
        order: 4,
        fieldName: "status",
        displayName: "Status",
        dbFieldName: "status",
        sort: true,
        search: false,
        filter: true,
        type: "string"
    },
    {
        id: 5,
        order: 5,
        fieldName: "priority",
        displayName: "Priority",
        dbFieldName: "priority",
        sort: true,
        search: false,
        filter: true,
        type: "string"
    },
    {
        id: 6,
        order: 6,
        fieldName: "startDate",
        displayName: "Start Date",
        dbFieldName: "start_date",
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
    },
    {
        id: 7,
        order: 7,
        fieldName: "endDate",
        displayName: "End Date",
        dbFieldName: "end_date",
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
    },
    {
        id: 8,
        order: 8,
        fieldName: "createdAt",
        displayName: "Created At",
        dbFieldName: "created_at",
        sort: true,
        search: false,
        filter: false,
        type: "datetime",
        formatter: (value) => {
            if (value) {
                const date = new Date(value);
                return date.toLocaleDateString();
            }
            return '';
        }
    }
];



