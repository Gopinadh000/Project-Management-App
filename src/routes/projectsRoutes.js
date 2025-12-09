import express from 'express';
import {createProject , getAllProjects , updateProject , getProjectById , deleteProject, getAllProjectsTable} from "../controllers/projects.controller.js";
// import { authenticateToken } from "../services/jwt/auth.middleware.js";

const router = express.Router();

// //Projects Routes (Protected)
// router.post('/', , createProject);
// router.get('/tabledata', authenticateToken, getAllProjectsTable);
// router.get('/', authenticateToken, getAllProjects);
// router.get('/:id', authenticateToken, getProjectById);
// router.put('/:id', authenticateToken, updateProject);
// router.delete('/:id', authenticateToken, deleteProject);

export default router;