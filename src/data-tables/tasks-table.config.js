/**
 * Tasks Table Configuration
 * Defines the column structure for the tasks table
 */

export const tasksTableConfig = [
    {
        id: 1,
        order: 1,
        fieldName: "taskName",
        displayName: "Task Name",
        dbFieldName: "task_name",
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
        fieldName: "projectName",
        displayName: "Project",
        dbFieldName: "project_name",
        sort: true,
        search: true,
        filter: true,
        type: "string"
    },
    {
        id: 4,
        order: 4,
        fieldName: "assignedTo",
        displayName: "Assigned To",
        dbFieldName: "assigned_to_name",
        sort: true,
        search: true,
        filter: false,
        type: "string"
    },
    {
        id: 5,
        order: 5,
        fieldName: "status",
        displayName: "Status",
        dbFieldName: "status",
        sort: true,
        search: false,
        filter: true,
        type: "string"
    },
    {
        id: 6,
        order: 6,
        fieldName: "priority",
        displayName: "Priority",
        dbFieldName: "priority",
        sort: true,
        search: false,
        filter: true,
        type: "string"
    },
    {
        id: 7,
        order: 7,
        fieldName: "dueDate",
        displayName: "Due Date",
        dbFieldName: "due_date",
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




