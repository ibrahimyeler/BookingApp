// src/controllers/culturalTourController.ts
import { Request, Response } from 'express';
import CulturalTour from '../models/CulturalTourModel';

// Yeni bir kültürel tur ekleme
export const addTour = async (req: Request, res: Response) => {
    try {
        const newTour = new CulturalTour(req.body);
        await newTour.save();
        res.status(201).json(newTour);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Tüm kültürel turları listeleme
export const getAllTours = async (req: Request, res: Response) => {
    try {
        const tours = await CulturalTour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Kültürel tur güncelleme
export const updateTour = async (req: Request, res: Response) => {
    try {
        const updatedTour = await CulturalTour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTour);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Kültürel tur silme
export const deleteTour = async (req: Request, res: Response) => {
    try {
        await CulturalTour.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
