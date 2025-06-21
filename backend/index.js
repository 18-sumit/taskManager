import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


import taskRoutes from './routes/task.routes.js';
const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });