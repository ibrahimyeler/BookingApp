import express, { Request, Response } from 'express';
import { check, validationResult } from 'express-validator'; // Eksik içe aktarımlar
import User from '../models/user';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Kullanıcı kaydı endpoint'i
router.post("/register", [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
        min: 6,
    }),
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        user = new User(req.body);
        await user.save();

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: "1d",
        });

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: false, // Geliştirme sırasında secure seçeneğini false yapın
            maxAge: 86400000,
        });

        // Yanıt olarak mesaj gönder
        return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Something went wrong!" });
    }
});

// Tüm kullanıcıları listeleyen endpoint
router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await User.find(); // Kullanıcıları almak için
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something went wrong!" });
    }
});

export default router;
