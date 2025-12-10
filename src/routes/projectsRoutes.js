import express from 'express';
import {
  createProject,
  getAllProjects,
  updateProject,
  getProjectById,
  deleteProject,
  getAllProjectsTable,
} from "../controllers/projects.controller.js";

const router = express.Router();

//Projects Routes (Protected)
router.post("/", createProject);
router.get("/tabledata", getAllProjectsTable);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;