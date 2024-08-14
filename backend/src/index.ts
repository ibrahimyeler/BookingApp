import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

// MongoDB bağlantısı
const mongoConnectionString = process.env.MONGODB_CONNECTION_STRING as string;

if (!mongoConnectionString) {
  console.error('MONGO_CONNECTION_STRING environment variable is not defined');
  process.exit(1);
}

mongoose.connect(mongoConnectionString)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test endpoint
app.get("/api/test", async (req: Request, res: Response) => {
   res.json({ message: "hello from express endpoint!" });
});

// Sunucuyu başlat
app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});
