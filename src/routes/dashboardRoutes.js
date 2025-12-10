import express from "express";
import { getDashboardData, getTotalUsers, getTotalProjects, getTotalTasks } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get('/dashboard',  getDashboardData);
router.get('/dashboard/total-users',  getTotalUsers);
router.get('/dashboard/total-projects',  getTotalProjects);
router.get('/dashboard/total-tasks',  getTotalTasks);


export default router;