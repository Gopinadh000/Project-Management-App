import express from 'express';
import {
  createProject,
  getAllProjects,
  updateProject,
  getProjectById,
  deleteProject,
  getAllProjectsTable,
} from "../controllers/projects.controller.js";

import {
  jwtTokenAuthorization,
  cookieTokenAuthorization,
} from "../services/jwt/jwt.service.js";

const router = express.Router();


//  baseurl : "projects

router.post("/", cookieTokenAuthorization,  createProject);
router.get("/tabledata", getAllProjectsTable);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;