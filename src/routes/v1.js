import express  from "express";
import {registerUser , loginUser} from "../controllers/auth.controller.js";
import {createProject , getAllProjects , getProjectById , updateProject , deleteProject} from "../controllers/projects.controller.js";
import {notificationSettings , emailSettings , securitySettings , privacySettings , applicationSettings} from "../controllers/settings.controller.js";
import {getDashboardData , getTotalUsers , getTotalProjects , getTotalTasks} from "../controllers/dashboard.controller.js";
import { authenticateToken, authorizeRoles } from "../services/jwt/auth.middleware.js";
import {createTask , getAllTasks, updateTask , getTaskById , deleteTask, getAllTasksTable} from "../controllers/tasks.controller.js"

import userRoutes from  "./usersRoutes.js";
import projectRoutes  from "./projectsRoutes.js"

const router = express.Router();


 //Test api
router.get('/' ,  (req, res)=>  res.send({message :"api parcel pending!"}));



//User Routes 
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);


//Auth Routes (Public)
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

//Protected Routes (require authentication)
router.get('/auth/me', authenticateToken, (req, res) => {
    return res.json({ 
        success: true, 
        data: { user: req.user }, 
        message: "Current user info" 
    });
});



//Tasks Routes (Protected)
router.post('/tasks', authenticateToken, createTask);
router.get('/tasks/tabledata', authenticateToken, getAllTasksTable);
router.get('/tasks', authenticateToken, getAllTasks);
router.get('/tasks/:id', authenticateToken, getTaskById);
router.put('/tasks/:id', authenticateToken, updateTask);
router.delete('/tasks/:id', authenticateToken, deleteTask);


//Settings Routes (Protected)
router.get('/settings/notification', authenticateToken, notificationSettings);
router.get('/settings/email', authenticateToken, emailSettings);
router.get('/settings/security', authenticateToken, securitySettings);
router.get('/settings/privacy', authenticateToken, privacySettings);
router.get('/settings/application', authenticateToken, applicationSettings);


//Dashboard Routes (Protected)
router.get('/dashboard', authenticateToken, getDashboardData);
router.get('/dashboard/total-users', authenticateToken, getTotalUsers);
router.get('/dashboard/total-projects', authenticateToken, getTotalProjects);
router.get('/dashboard/total-tasks', authenticateToken, getTotalTasks);


export  {router};





