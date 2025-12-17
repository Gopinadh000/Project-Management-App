import router from "../config/router.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import userRoutes from "./usersRoutes.js";
import projectRoutes from "./projectsRoutes.js";
import taskRoutes from "./tasksRoutes.js";
import settingsRoutes from "./settingsRoutes.js";
import aiRoutes from "./aiRoutes.js";
import dashboardRoutes from "./dashboardRoutes.js";
import { cookieTokenAuthorization } from "../services/jwt/jwt.service.js";

//Test api
router.get("/", (req, res) => res.send({ message: "api parcel pending!" }));

//Auth Routes (Public)
router.get("/auth/me", cookieTokenAuthorization, getCurrentUser);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);

//app Routes
router.use("/users", cookieTokenAuthorization, userRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", cookieTokenAuthorization, taskRoutes);
router.use("/settings", settingsRoutes);
router.use("/ai", aiRoutes);
router.use("/dashbaord", dashboardRoutes);


export  {router};





