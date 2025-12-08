import { ReS, ReE } from '../utils/Res.utils.js';
import { db } from '../config/db-config.js';
import { TableBuilder } from '../services/table-builder.service.js';
import { projectsTableConfig } from "../data-tables/project-table.config.js";


export const createProject = async (req, res) => {
    const { projectName, description, projectOwner, startDate, endDate, priority, status } = req.body;
    const { user } = req; // From auth middleware

    if (!projectName || projectName.trim() === "") {
        return ReE(res, { message: "Project Name is required." });
    }

    try {
        // Generate unique project ID
        const [existingProjects] = await db.query(
            "SELECT id FROM projects WHERE company_id = ? ORDER BY created_at DESC LIMIT 1",
            [user.companyId]
        );

        let projectNumber = 1;
        if (existingProjects.length > 0) {
            const lastProject = existingProjects[0];
            const lastNumber = parseInt(lastProject.id.split('-')[1]);
            projectNumber = lastNumber + 1;
        }

        const projectId = `${user.companyId}-PROJ-${projectNumber.toString().padStart(4, '0')}`;

        // Insert project
        const [result] = await db.query(
            `INSERT INTO projects (
                id, project_name, description, project_owner, created_by, 
                company_id, status, priority, start_date, end_date
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                projectId,
                projectName.trim(),
                description || null,
                projectOwner || user.id,
                user.id,
                user.companyId,
                status || 'ACTIVE',
                priority || 'MEDIUM',
                startDate || null,
                endDate || null
            ]
        );

        // Get the created project
        const [newProject] = await db.query(
            "SELECT * FROM projects WHERE id = ?",
            [projectId]
        );

        return ReS(res, {
            data: newProject[0],
            message: "Project created successfully"
        });

    } catch (error) {
        console.error('Error creating project:', error);
        return ReE(res, { message: "Failed to create project", error: error.message });
    }
};

export const getAllProjects = async (req, res) => {
    const { user } = req;
    const { page = 1, limit = 10, status, priority } = req.query;

    try {
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

        // Get total count
        const [countResult] = await db.query(
            `SELECT COUNT(*) as total FROM projects ${whereClause}`,
            params
        );

        const total = countResult[0].total;
        const offset = (page - 1) * limit;

        // Get projects with pagination
        const [projects] = await db.query(
            `SELECT p.*, 
                    u1.name as owner_name, 
                    u2.name as creator_name
             FROM projects p
             LEFT JOIN users u1 ON p.project_owner = u1.id
             LEFT JOIN users u2 ON p.created_by = u2.id
             ${whereClause}
             ORDER BY p.created_at DESC
             LIMIT ? OFFSET ?`,
            [...params, parseInt(limit), offset]
        );

        return ReS(res, {
            data: {
                projects,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            },
            message: "Projects retrieved successfully"
        });

    } catch (error) {
        console.error('Error fetching projects:', error);
        return ReE(res, { message: "Failed to fetch projects", error: error.message });
    }
};

export const getProjectById = async (req, res) => {
    const { id } = req.params;
    const { user } = req;

    try {
        const [projects] = await db.query(
            `SELECT p.*, 
                    u1.name as owner_name, 
                    u2.name as creator_name
             FROM projects p
             LEFT JOIN users u1 ON p.project_owner = u1.id
             LEFT JOIN users u2 ON p.created_by = u2.id
             WHERE p.id = ? AND p.company_id = ?`,
            [id, user.companyId]
        );

        if (projects.length === 0) {
            return ReE(res, { message: "Project not found" }, 404);
        }

        return ReS(res, {
            data: projects[0],
            message: "Project retrieved successfully"
        });

    } catch (error) {
        console.error('Error fetching project:', error);
        return ReE(res, { message: "Failed to fetch project", error: error.message });
    }
};

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { projectName, description, projectOwner, startDate, endDate, priority, status } = req.body;
    const { user } = req;

    // Check if user has permission to update (SUPER-ADMIN or project owner)
    try {
        const [projects] = await db.query(
            "SELECT * FROM projects WHERE id = ? AND company_id = ?",
            [id, user.companyId]
        );

        if (projects.length === 0) {
            return ReE(res, { message: "Project not found" }, 404);
        }

        const project = projects[0];

        // Only SUPER-ADMIN or project owner can update
        if (user.role !== 'SUPER-ADMIN' && project.project_owner !== user.id) {
            return ReE(res, { message: "Insufficient permissions to update this project" }, 403);
        }

        // Validate project name if provided
        if (projectName !== undefined && projectName.trim() === "") {
            return ReE(res, { message: "Project Name cannot be empty" });
        }

        // Build update query dynamically
        const updateFields = [];
        const updateValues = [];

        if (projectName !== undefined) {
            updateFields.push("project_name = ?");
            updateValues.push(projectName.trim());
        }

        if (description !== undefined) {
            updateFields.push("description = ?");
            updateValues.push(description);
        }

        if (projectOwner !== undefined) {
            updateFields.push("project_owner = ?");
            updateValues.push(projectOwner);
        }

        if (startDate !== undefined) {
            updateFields.push("start_date = ?");
            updateValues.push(startDate);
        }

        if (endDate !== undefined) {
            updateFields.push("end_date = ?");
            updateValues.push(endDate);
        }

        if (priority !== undefined) {
            updateFields.push("priority = ?");
            updateValues.push(priority);
        }

        if (status !== undefined) {
            updateFields.push("status = ?");
            updateValues.push(status);
        }

        if (updateFields.length === 0) {
            return ReE(res, { message: "No fields to update" });
        }

        updateFields.push("updated_at = CURRENT_TIMESTAMP");
        updateValues.push(id);

        const [result] = await db.query(
            `UPDATE projects SET ${updateFields.join(', ')} WHERE id = ?`,
            updateValues
        );

        // Get updated project
        const [updatedProject] = await db.query(
            "SELECT * FROM projects WHERE id = ?",
            [id]
        );

        return ReS(res, {
            data: updatedProject[0],
            message: "Project updated successfully"
        });

    } catch (error) {
        console.error('Error updating project:', error);
        return ReE(res, { message: "Failed to update project", error: error.message });
    }
};

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    const { user } = req;

    try {
        // Check if project exists and user has permission
        const [projects] = await db.query(
            "SELECT * FROM projects WHERE id = ? AND company_id = ?",
            [id, user.companyId]
        );

        if (projects.length === 0) {
            return ReE(res, { message: "Project not found" }, 404);
        }

        const project = projects[0];

        // Only SUPER-ADMIN can delete projects
        if (user.role !== 'SUPER-ADMIN') {
            return ReE(res, { message: "Only SUPER-ADMIN can delete projects" }, 403);
        }

        // Delete the project
        await db.query("DELETE FROM projects WHERE id = ?", [id]);

        return ReS(res, {
            data: { deletedProjectId: id },
            message: "Project deleted successfully"
        });

    } catch (error) {
        console.error('Error deleting project:', error);
        return ReE(res, { message: "Failed to delete project", error: error.message });
    }
};

export const getAllProjectsTable = async (req, res) => {
    const { user } = req;
    const { page = 1, limit = 20, status, priority } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;

    try {
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

        // Get total count
        const [countResult] = await db.query(
            `SELECT COUNT(*) as total FROM projects ${whereClause}`,
            params
        );

        const total = countResult[0].total;

        // Get projects with pagination and JOIN for owner name
        const [projects] = await db.query(
            `SELECT p.*, 
                    u1.name as owner_name, 
                    u2.name as creator_name
             FROM projects p
             LEFT JOIN users u1 ON p.project_owner = u1.id
             LEFT JOIN users u2 ON p.created_by = u2.id
             ${whereClause}
             ORDER BY p.created_at DESC
             LIMIT ? OFFSET ?`,
            [...params, limitNum, offset]
        );

        // Calculate pagination info
        const paginationInfo = TableBuilder.calculatePagination(total, pageNum, limitNum);

        // Build table data using class-based approach
        const tableBuilder = new TableBuilder(projectsTableConfig, {
            downloadenable: true,
            lastPageNavigation: true
        });
        const tableData = tableBuilder.build(projects, paginationInfo);

        return ReS(res, {
            data: tableData,
            message: "Projects table data retrieved successfully"
        });

    } catch (error) {
        console.error('Error fetching projects table data:', error);
        return ReE(res, { message: "Failed to fetch projects table data", error: error.message });
    }
};
