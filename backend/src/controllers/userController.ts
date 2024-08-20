// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/UserModel';

// Kullanıcı kaydetme
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Basit doğrulama örneği
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
