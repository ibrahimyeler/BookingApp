// src/controllers/abroadTourController.ts
import { Request, Response } from 'express';
import AbroadTour from '../models/AbroadTourModel';

// Yeni bir yurt dışı turu ekleme
export const addTour = async (req: Request, res: Response) => {
    try {
        const newTour = new AbroadTour(req.body);
        await newTour.save();
        res.status(201).json(newTour);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Tüm yurt dışı turlarını listeleme
export const getAllTours = async (req: Request, res: Response) => {
    try {
        const tours = await AbroadTour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Yurt dışı turunu güncelleme
export const updateTour = async (req: Request, res: Response) => {
    try {
        const updatedTour = await AbroadTour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTour);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Yurt dışı turunu silme
export const deleteTour = async (req: Request, res: Response) => {
    try {
        await AbroadTour.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
