import express from 'express';
import {
  getProjectsSampleTable,
  getProjectTableData,
} from "../controllers/table/projectsTable.controller.js";
import {
  getUsersTableData,
  getAllUsersTableData,
} from "../controllers/table/usersTable.controller.js";
import { cookieTokenAuthorization } from "../services/jwt/jwt.service.js";

const router = express.Router();

router.get("/projectstable", getProjectsSampleTable);
router.get("/userstable", getUsersTableData);
router.get("/userstable/data", cookieTokenAuthorization, getAllUsersTableData);

router.get(
  "/projectstable/data",
  cookieTokenAuthorization,
  getProjectTableData
);




export default router;