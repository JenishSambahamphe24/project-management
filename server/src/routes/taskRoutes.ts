import { Router } from "express";
import { getTasks, createTask, updateTaskStatus } from "../controllers/taskControllers";

const router = Router();
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:tasksId/status', updateTaskStatus);

export default router