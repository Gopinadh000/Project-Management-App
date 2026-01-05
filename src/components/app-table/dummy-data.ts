









const projects = [
    {
  order :  1,
  fieldName: "taskName",
  displayName: "Task Name",
  dbfieldName: "task_name",
  type: "string",
  sort: true,
  search: true,
  globalSearch: true,
  tooltip : true,
  filter :  false,
  anchorCell : true,
  inNewTab :  false,
  customCell : false,
},
 {
  order :  2,
  fieldName: "taskDescription",
  displayName: "Description",
  dbfieldName: "task_description",
  type: "string",
  sor: true,
  search: true,
  globalSearch: true,
  tooltip : true,
  filter :  false,
  anchorCell : false,
  inNewTab :  false,
  customCell : false,
},
{
   order :  3,
  fieldName: "taskAssignee",
  displayName: "Assignee",
  dbfieldName: "task_assignee",
  type: "object",
  sortable: true,
  searchable: true,
  globalSearch: true,
  tooltip : true,
  filter :  false,
  anchorCell : false,
  inNewTab :  false,
  customCell : true,

},
{
  order :  4,
  fieldName: "taskStatus",
  displayName: "Task Status",
  dbfieldName: "task_status",
  type: "object",
  sortable: true,
  searchable: true,
  globalSearch: true,
  tooltip : true,
  filter :  false,
  anchorCell : false,
  inNewTab :  false,
  customCell : true,
},
{
  order :  4,
  fieldName: "taskPriority",
  displayName: "Task Priority",
  dbfieldName: "task_priority",
  type: "object",
  sortable: true,
  searchable: true,
  globalSearch: true,
  tooltip : true,
  filter :  false,
  anchorCell : false,
  inNewTab :  false,
  customCell : true,
},
]