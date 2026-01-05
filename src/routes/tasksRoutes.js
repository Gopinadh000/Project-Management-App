import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  getTaskById,
  deleteTask,
  // getAllTasksTable,
} from "../controllers/tasks.controller.js";

const router = express.Router();

//Tasks Routes (Protected)
router.post("/tasks", createTask);

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
// router.get("/tasks/tabledata", getAllTasksTable);

export default router;
