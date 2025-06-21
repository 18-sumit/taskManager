import Task from '../models/task.model.js';

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, status } = req.body;
    const newTask = new Task({ title, description, assignedTo, status });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tasks with optional filters
export const getTasks = async (req, res) => {
  try {
    const { status, assignedTo } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (assignedTo) filter.assignedTo = { $regex: assignedTo, $options: 'i' }; // Case-insensitive search

    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task's status
export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};