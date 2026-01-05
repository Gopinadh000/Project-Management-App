import express from 'express';
import {
  createProject,
  getAllProjects,
  updateProject,
  getProjectById,
  deleteProject,
  // getAllProjectsTable,
} from "../controllers/projects.controller.js";
// import { getProjectsSampleTable } from "../controllers/projects.controller.js";

import {
  jwtTokenAuthorization,
  cookieTokenAuthorization,
} from "../services/jwt/jwt.service.js";

const router = express.Router();

//  baseurl : "projects

router.post("/", cookieTokenAuthorization, createProject);

router.get("/", cookieTokenAuthorization, getAllProjects);
router.get("/:id", cookieTokenAuthorization, getProjectById);
router.put("/:id", cookieTokenAuthorization, updateProject);
router.delete("/:id", cookieTokenAuthorization, deleteProject);
// router.get("/tabledata", getAllProjectsTable);

export default router;