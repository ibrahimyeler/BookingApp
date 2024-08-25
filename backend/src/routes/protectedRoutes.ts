// src/routes/protectedRoutes.ts
import express, { Request, Response } from 'express';
import { authenticateToken } from '../middleware/authenticateToken';

const router = express.Router();

router.get('/protected', authenticateToken, (req: Request, res: Response) => {
    res.status(200).json({ message: 'You have access to this route' });
});

export default router;
