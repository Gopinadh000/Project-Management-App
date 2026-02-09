import express from 'express';
import {
  getProjectsSampleTable,
  getProjectTableData,
} from "../controllers/table/projectsTable.controller.js";
import {
  getUsersTableData,
  getAllUsersTableData,
} from "../controllers/table/usersTable.controller.js";

const router = express.Router();

router.get("/projectstable", getProjectsSampleTable);
router.get("/userstable", getUsersTableData);
router.get("/userstable/data", getAllUsersTableData);

router.get("/projectstable/data", getProjectTableData);




export default router;