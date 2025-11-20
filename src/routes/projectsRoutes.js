import express from 'express';
const router = express.Router();
import {createProject , getAllProjects , updateProject , getProjectById , deleteProject, getAllProjectsTable} from "../controllers/projects.controller.js";
import { authenticateToken } from "../services/jwt/auth.middleware.js";

//Projects Routes (Protected)
router.post('/', authenticateToken, createProject);
router.get('/tabledata', authenticateToken, getAllProjectsTable);
router.get('/', authenticateToken, getAllProjects);
router.get('/:id', authenticateToken, getProjectById);
router.put('/:id', authenticateToken, updateProject);
router.delete('/:id', authenticateToken, deleteProject);

export default router;