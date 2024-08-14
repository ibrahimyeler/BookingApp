import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes);

// Sunucuyu başlat
app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});
app.get('/api/test', (req: Request, res: Response) => {
    res.send('API is working!');
});