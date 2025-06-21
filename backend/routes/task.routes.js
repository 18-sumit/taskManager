import { Router } from 'express';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../controllers/task.controller.js';

const router = Router();

router.get('/', getTasks);

router.post('/', createTask);

router.patch('/:id', updateTaskStatus);

router.delete('/:id', deleteTask);

export default router;