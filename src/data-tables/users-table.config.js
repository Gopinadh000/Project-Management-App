//  COLUMN_TYPES_SUPPORTED : [
//     'string', 'number', 'date', 'boolean', 'object' , 'datetime',
// ]

//10 options supporting

export const usersTableConfig = [
  {
    id: 1,
    order: 1,
    fieldName: "username",
    displayName: "User Name",
    dbFieldName: "username",
    sort: true,
    search: true,
    filter: false,
    type: "string",
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
    type: "string",
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
    type: "string",
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
  },
];
