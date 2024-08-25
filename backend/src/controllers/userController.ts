<<<<<<< HEAD
import { Request, Response } from 'express';
import User from '../models/UserModel';
import bcrypt from 'bcryptjs';
=======
// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/UserModel';
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387

// Kullanıcı kaydetme
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;

<<<<<<< HEAD
=======
        // Basit doğrulama örneği
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

<<<<<<< HEAD
        // Şifreyi hashleyin
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

=======
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
        const newUser = new User({
            firstName,
            lastName,
            email,
<<<<<<< HEAD
            password: hashedPassword
=======
            password
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
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
