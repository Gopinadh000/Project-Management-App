import { ReS, ReE } from "../../utils/Res.utils.js";
import { db } from "../../config/db-config.js";
import { buildTableResData } from "../../services/data-table-service/tableData.service.js";
import {
  projectsTableMeta,
  projectsTableConfig,
} from "../../data-tables/project-table.config.js";


export const getProjectsSampleTable = async (req, res)=>{
  const tableData = {
    status: true,
    message: "Projects table data retrieved successfully",
    statusCode: 200,
    resData: {
      meta: {
        tableId: "projects",
        viewId: "default",
        views: [
          { id: "default", name: "All Projects" },
          { id: "active", name: "Active Projects" },
          { id: "my_projects", name: "My Projects" },
        ],
        download: {
          enabled: true,
          formats: ["csv", "excel"],
        },
      },

      columns: [
        {
          id: 1,
          fieldName: "project_name",
          displayName: "Project Name",
          type: "string",
          sortable: true,
          searchable: true,
          filterable: false,
        },
        {
          id: 2,
          fieldName: "description",
          displayName: "Description",
          type: "string",
          sortable: false,
          searchable: true,
          filterable: false,
        },
        {
          id: 3,
          fieldName: "owner_name",
          displayName: "Project Owner",
          type: "string",
          sortable: true,
          searchable: true,
          filterable: false,
        },
        {
          id: 4,
          fieldName: "status",
          displayName: "Status",
          type: "string",
          sortable: true,
          searchable: false,
          filterable: true,
        },
        {
          id: 5,
          fieldName: "priority",
          displayName: "Priority",
          type: "string",
          sortable: true,
          searchable: false,
          filterable: true,
        },
        {
          id: 6,
          fieldName: "start_date",
          displayName: "Start Date",
          type: "date",
          sortable: true,
          searchable: false,
          filterable: false,
        },
        {
          id: 7,
          fieldName: "end_date",
          displayName: "End Date",
          type: "date",
          sortable: true,
          searchable: false,
          filterable: false,
        },
        {
          id: 8,
          fieldName: "created_at",
          displayName: "Created At",
          type: "datetime",
          sortable: true,
          searchable: false,
          filterable: false,
        },
      ],

      rows: [
        {
          project_name: {
            value: "Website Redesign",
            link: { url: "/projects/101" },
            tooltip: "Click to view project",
          },
          description: {
            value: "Redesign company website with modern UI",
          },
          owner_name: {
            value: "Alice Johnson",
          },
          status: {
            value: "Active",
            badge: { text: "Active", color: "green" },
          },
          priority: {
            value: "High",
            badge: { text: "High", color: "red" },
          },
          start_date: {
            value: "2024-01-15",
            displayValue: "15 Jan 2024",
            type: "date",
          },
          end_date: {
            value: "2024-06-30",
            displayValue: "30 Jun 2024",
            type: "date",
          },
          created_at: {
            value: "2024-01-10T09:15:00Z",
            displayValue: "10 Jan 2024, 09:15 AM",
            type: "datetime",
          },
        },

        {
          project_name: {
            value: "Mobile App Development",
            link: { url: "/projects/102" },
          },
          description: {
            value: "Develop Android and iOS mobile app",
          },
          owner_name: {
            value: "Bob Smith",
          },
          status: {
            value: "In Progress",
            badge: { text: "In Progress", color: "blue" },
          },
          priority: {
            value: "Critical",
            badge: { text: "Critical", color: "purple" },
          },
          start_date: {
            value: "2024-02-01",
            displayValue: "01 Feb 2024",
            type: "date",
          },
          end_date: {
            value: "2024-09-15",
            displayValue: "15 Sep 2024",
            type: "date",
          },
          created_at: {
            value: "2024-01-28T11:45:00Z",
            displayValue: "28 Jan 2024, 11:45 AM",
            type: "datetime",
          },
        },

        {
          project_name: {
            value: "Marketing Campaign Q2",
          },
          description: {
            value: "Launch Q2 digital marketing campaign",
          },
          owner_name: {
            value: "Carol White",
          },
          status: {
            value: "Completed",
            badge: { text: "Completed", color: "gray" },
          },
          priority: {
            value: "Medium",
            badge: { text: "Medium", color: "orange" },
          },
          start_date: {
            value: "2024-03-01",
            displayValue: "01 Mar 2024",
          },
          end_date: {
            value: "2024-05-31",
            displayValue: "31 May 2024",
          },
          created_at: {
            value: "2024-02-20T14:30:00Z",
            displayValue: "20 Feb 2024, 02:30 PM",
          },
        },
      ],

      pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 50,
        totalPages: 5,
      },
    },
  };

  return ReS(res, {
    data: tableData,
    message: "Sample projects table data retrieved successfully",
  });
}


export const getProjectTableData = async (req, res) => {
  const {user} = req;
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(req.query.pageSize, 10) || 10));
    const offset = (page - 1) * pageSize;

    const countQuery = `SELECT COUNT(*) as total FROM projects WHERE company_id = ?`;
    const [countResult] = await db.query(countQuery, [user.companyId]);
    const totalCount = countResult[0]?.total ?? 0;

    const dataQuery = `
      SELECT p.id, p.project_name, p.description, p.status, p.priority,
             p.start_date, p.end_date, p.created_at,
             u.name AS owner_name
      FROM projects p
      LEFT JOIN users u ON p.project_owner = u.id
      WHERE p.company_id = ?  
      ORDER BY p.created_at ASC
      LIMIT ? OFFSET ?
    `;
    const [rows] = await db.query(dataQuery, [user.companyId, pageSize, offset]);

    const resData = buildTableResData({
      meta: projectsTableMeta,
      columnsConfig: projectsTableConfig,
      rows,
      totalCount,
      page,
      pageSize,
      rowOptions: {
        linkTemplate: (row) => ({
         url: `/projects/projectstasks/projectid=${row.id}`,
          tooltip: "Click to view project",
        }),
        rowIdField: "id",
      },
    });

    return ReS(res, {
      data: { resData },
      message: "Projects table data retrieved successfully",
    });
  } catch (err) {
    console.error("getProjectTableData error:", err);
    return ReE(res, { message: "Failed to fetch projects table data" });
  }
};
 