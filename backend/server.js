import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/AuthRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', authRoutes);
// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .catch(err => console.error('Database connection error:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

