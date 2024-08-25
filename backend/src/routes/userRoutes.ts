// src/routes/userRoutes.ts

import express, { Request, Response } from 'express';
import User from '../models/UserModel';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Kullanıcıları listeleme
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Kullanıcı kaydetme
router.post("/register", [
  check("firstName", "First name is required").notEmpty(),
  check("lastName", "Last name is required").notEmpty(),
  check("email", "Valid email is required").isEmail(),
  check("password", "Password with at least 6 characters required").isLength({ min: 6 }),
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Invalid input data' });
  }

  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Test endpoint (bu sadece geliştirme amacıyla)
router.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "User registration route is working" });
});

export default router;
