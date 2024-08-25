<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import "dotenv/config";
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
=======
// src/index.ts
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
import hotelRoutes from './routes/hotelRoutes';
import rentACarRoutes from './routes/rentACarRoutes';
import flightRoutes from './routes/flightRoutes';
import culturalTourRoutes from './routes/culturalTourRoutes';
<<<<<<< HEAD
import abroadTourRoutes from './routes/abroadTourRoutes';
import connectDB from './config/db';
import { authenticateToken } from './middleware/authenticateToken'; // Middleware importu
import tourCategoriesRouter from './routes/tourCategories';
=======
import abroadTourRoutes from './routes/abroadTourRoutes'; // Abroad Tours rotalarını ekledik
import connectDB from './config/db';

>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
<<<<<<< HEAD
app.use('/api/tourcategories', tourCategoriesRouter);
=======

>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rentacar', rentACarRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/culturaltours', culturalTourRoutes);
<<<<<<< HEAD
app.use('/api/abroadtours', abroadTourRoutes);

// Connect to the database
connectDB();

=======
app.use('/api/abroadtours', abroadTourRoutes); // Abroad Tours rotalarını ekledik

// MongoDB connection
connectDB();

// Start server
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});
