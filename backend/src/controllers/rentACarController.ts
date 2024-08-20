// src/controllers/rentACarController.ts
import { Request, Response } from 'express';
import RentACar from '../models/RentACarModel';

// Yeni bir araç ekleme
export const addCar = async (req: Request, res: Response) => {
    try {
        const newCar = new RentACar(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Tüm araçları listeleme
export const getAllCars = async (req: Request, res: Response) => {
    try {
        const cars = await RentACar.find();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Araç güncelleme
export const updateCar = async (req: Request, res: Response) => {
    try {
        const updatedCar = await RentACar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCar);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Araç silme
export const deleteCar = async (req: Request, res: Response) => {
    try {
        await RentACar.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
