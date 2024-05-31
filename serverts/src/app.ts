import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';
import userRouter from './routes/user';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/users', userRouter);

// Connect to MongoDB
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

export default app;
