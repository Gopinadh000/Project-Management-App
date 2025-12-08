import { ReS, ReE } from '../utils/utils.js';
import { db } from '../config/db-config.js';
import { TableBuilder } from '../services/table-builder.service.js';
import { tasksTableConfig } from "../data-tables/tasks-table.config.js";


export const createTask = (req, res)=>{
    return ReS(res, {data : "Task Created"})
}

export const getAllTasks = (req, res)=>{
    return ReS(res, {data : "All Tasks"})
};

export const getTaskById = (req, res)=>{
    return ReS(res, {data : "Task Data with id : OE0394"})
}

export const updateTask = (req, res)=>{
    return ReS(res, {data : "Task Data Updated"})
} 

export const deleteTask = (req, res)=>{

    return ReS(res, {data : "Task Data Deleted"})
}

export const getAllTasksTable = async (req, res) => {
    const { user } = req;
    const { page = 1, limit = 20, status, priority, projectId } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;

    try {
        // Note: This assumes a tasks table exists with appropriate structure
        // Adjust the query based on your actual tasks table schema
        let whereClause = "WHERE company_id = ?";
        let params = [user.companyId];

        if (status) {
            whereClause += " AND status = ?";
            params.push(status);
        }

        if (priority) {
            whereClause += " AND priority = ?";
            params.push(priority);
        }

        if (projectId) {
            whereClause += " AND project_id = ?";
            params.push(projectId);
        }

        // Get total count
        // Note: Update this query when tasks table is created
        const [countResult] = await db.query(
            `SELECT COUNT(*) as total FROM tasks ${whereClause}`,
            params
        );

        const total = countResult[0].total;

        // Get tasks with pagination and JOINs
        // Note: Update this query based on your actual tasks table structure
        const [tasks] = await db.query(
            `SELECT t.*, 
                    p.project_name,
                    u.name as assigned_to_name
             FROM tasks t
             LEFT JOIN projects p ON t.project_id = p.id
             LEFT JOIN users u ON t.assigned_to = u.id
             ${whereClause}
             ORDER BY t.created_at DESC
             LIMIT ? OFFSET ?`,
            [...params, limitNum, offset]
        );

        // Calculate pagination info
        const paginationInfo = TableBuilder.calculatePagination(total, pageNum, limitNum);

        // Build table data using class-based approach
        const tableBuilder = new TableBuilder(tasksTableConfig, {
            downloadenable: true,
            lastPageNavigation: true
        });
        const tableData = tableBuilder.build(tasks, paginationInfo);

        return ReS(res, {
            data: tableData,
            message: "Tasks table data retrieved successfully"
        });

    } catch (error) {
        console.error('Error fetching tasks table data:', error);
        // If tasks table doesn't exist yet, return empty table structure
        if (error.code === 'ER_NO_SUCH_TABLE') {
            const tableBuilder = new TableBuilder(tasksTableConfig, {
                downloadenable: true,
                lastPageNavigation: true
            });
            const emptyTableData = tableBuilder.build(
                [],
                { totalItemsCount: 0, pageLimitSize: limitNum, pages: 0 }
            );
            return ReS(res, {
                data: emptyTableData,
                message: "Tasks table not found. Please create the tasks table first."
            });
        }
        return ReE(res, { message: "Failed to fetch tasks table data", error: error.message });
    }
};