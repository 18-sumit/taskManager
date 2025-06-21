import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getTasks = (params) => api.get('/tasks', { params });
export const createTask = (task) => api.post('/tasks', task);
export const updateTaskStatus = (id, status) => api.patch(`/tasks/${id}`, { status });
export const deleteTask = (id) => api.delete(`/tasks/${id}`);