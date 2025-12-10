import { db } from '../config/db-config.js';
import { ReS, ReE } from '../utils/Res.utils.js';
import { TableBuilder } from '../services/table-builder.service.js';
import { usersTableConfig } from "../data-tables/users-table.config.js";

export const createUser = (req,res) =>{
    const { name, email, role, companyId } = req.body;

    const userdata = {
      userId: "COMPANYID-001",
      name: name,
      email: email,
      role: role,
      companyId: companyId,
    };
    return res.json({data : "User Created"})
};

export const getAllUsers =  async (req, res) => {
    try {
        const getUsersQuery = `SELECT * FROM users`;
        const [usersData] = await db.query(getUsersQuery);

        if (!usersData || usersData.length === 0) {
            return ReS(res, { data: [], message: "No users found" });
        }

        return ReS(res, { data: usersData, message: "All Users Data" });
    } catch (err) {
        console.error("Error fetching users:", err);
        return ReE(res, { message: "Failed to fetch users" });
    }
};

export const getUserById = async (req, res) => {

    const {id } = req.params

    try {
        const getSingleUserQuery = `SELECT * FROM users WHERE id= ? OR name = ?`;

        const [userData] = await  db.query(getSingleUserQuery ,[id ,  `${id}`]  );

        if (userData.length === 0) {
            return ReE(res, { message: "User not found" });
        }

        return ReS(res, { data: userData, message: "Single Users Data" });
    } catch (err) {
        return ReE(res, { message: "Failed to fetch users" });
    }    
};

export const updateUser =(req, res)=>{
    return res.json({data : "User Data Updated"})
};

export const deleteUser= async (req, res)=>{

    const {id} =  req.params;
   try {
        // Step 1: Delete from child table (users_passwords)
        const deletePasswordQuery = `DELETE FROM users_passwords WHERE user_id = ?`;
        await db.query(deletePasswordQuery, [id]);

        // Step 2: Delete from parent table (users)
        const deleteUserQuery = `DELETE FROM users WHERE id = ?`;
        const [deletedData] = await db.query(deleteUserQuery, [id]);

        if (deletedData.affectedRows === 0) {
            return ReE(res, { message: "User not found" });
        }

        return ReS(res, { data: deletedData, message: "User Deleted Successfully" });
    } catch (err) {
        console.error("Delete error:", err);
        return ReE(res, { message: "User could not be deleted" });
    }
};

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
    const getUsersQuery = `SELECT * FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    const [usersData] = await db.query(getUsersQuery, [limitNum, offset]);

    // Calculate pagination info
    const paginationInfo = TableBuilder.calculatePagination(total, pageNum, limitNum);

    // Build table data using class-based approach
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
