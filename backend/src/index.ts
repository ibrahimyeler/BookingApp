import express from 'express';
import cors from 'cors';
import "dotenv/config";
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import hotelRoutes from './routes/hotelRoutes';
import rentACarRoutes from './routes/rentACarRoutes';
import flightRoutes from './routes/flightRoutes';
import culturalTourRoutes from './routes/culturalTourRoutes';
import abroadTourRoutes from './routes/abroadTourRoutes';
import connectDB from './config/db';
import { authenticateToken } from './middleware/authenticateToken'; // Middleware importu
import tourCategoriesRouter from './routes/tourCategories';
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/tourcategories', tourCategoriesRouter);
// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rentacar', rentACarRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/culturaltours', culturalTourRoutes);
app.use('/api/abroadtours', abroadTourRoutes);

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});
