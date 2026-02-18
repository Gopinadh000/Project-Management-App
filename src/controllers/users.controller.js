import { db } from '../config/db-config.js';
import { ReS, ReE } from '../utils/Res.utils.js';
import { TableBuilder } from "../services/data-table-service/data-table.service.js";
import { usersTableConfig } from "../data-tables/users-table.config.js";
import { generateNextId } from "../utils/common.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, role, phoneNumber } = req?.body || {};

  if (!firstName || !lastName || !email || !role || !phoneNumber) {
    return ReE(res, { message: "All fields are required" });
  }
  const companyId = req?.companyId;

  //step 1 :  get last user from the compnayID; ->,  Creating User Companay Id

  try {
    const getLastUserQuery = `SELECT id FROM users WHERE company_id = ? ORDER BY created_at DESC LIMIT 1`;

    const [lastUserData] = await db.query(getLastUserQuery, [companyId]);

    const lastUserId = lastUserData.length ? lastUserData[0].id : null;

    let newUserId = generateNextId(req.companyId, "", lastUserId);

    if (!newUserId) {
      return ReE(res, { message: "Failed to generate user ID" });
    }
    const fullName = `${firstName} ${lastName}`;

    const insertNewUserQueryforUserTable =
      "INSERT INTO users (id, name, email, role, company_id, status) VALUES (?, ?,?,?,?,?)";
    const insertNewUserQueryData = [
      newUserId,
      fullName,
      email,
      role,
      companyId,
      0,
    ];

    const [insertResult] = await db.query(
      insertNewUserQueryforUserTable,
      insertNewUserQueryData
    );

    // Step 2: Insert default password into users_passwords table
    const newUserDefaultPassword = email.split("@")[0] + "123"; // Default password logic (can be improved)
    const passwordHash = await bcrypt.hash(newUserDefaultPassword, 10);

    await db.query(
      "INSERT INTO users_passwords (user_id, password , hash_password) VALUES (?, ?, ?)",
      [newUserId, newUserDefaultPassword, passwordHash]
    );

    //step 3 . store basic user info
    await db.query(
      "INSERT INTO users_details_info(user_id , first_name , last_name, phone_number)  VALUES (? , ? , ? , ?)",
      [newUserId, firstName, lastName, phoneNumber]
    );

    return res.json({
      data: insertResult[0],
      message: "User Created Successfully",
    });
  } catch (err) {
    return ReE(res, { message: "Failed to create user", error: err.message });
  }
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


export const getAllMembersInCompany = async (req, res) => {
  try {
    const [usersdata] = await db.query(
      "SELECT * FROM users WHERE company_id = ?",
      [req?.companyId]
    );

    const formattedData = usersdata.map((eachuser) => {
      return {
        id: eachuser.id,
        label: eachuser.name,
        value: eachuser.id,
      };
    });

    return ReS(res, {
      data: formattedData,
      message: "Users table data retrieved successfully",
    });
  } catch (err) {
    return ReE(res, { message: "Failed to fetch users data" });
  }
};
