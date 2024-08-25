import mongoose from 'mongoose';

<<<<<<< HEAD
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred');
    }
    process.exit(1);
=======
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Uygulamayı sonlandır
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
  }
};

export default connectDB;
