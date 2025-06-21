import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['To do', 'In progress', 'Done'],
    default: 'To do',
  },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

export default Task;