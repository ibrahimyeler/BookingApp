// src/index.ts
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import hotelRoutes from './routes/hotelRoutes';
import rentACarRoutes from './routes/rentACarRoutes';
import flightRoutes from './routes/flightRoutes';
import culturalTourRoutes from './routes/culturalTourRoutes';
import abroadTourRoutes from './routes/abroadTourRoutes'; // Abroad Tours rotalarını ekledik
import connectDB from './config/db';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rentacar', rentACarRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/culturaltours', culturalTourRoutes);
app.use('/api/abroadtours', abroadTourRoutes); // Abroad Tours rotalarını ekledik

// MongoDB connection
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});
