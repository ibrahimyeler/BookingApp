// src/controllers/hotelController.ts
import { Request, Response } from 'express';
import Hotel from '../models/HotelModel';

// Yeni bir otel ekleme
export const addHotel = async (req: Request, res: Response) => {
    try {
        const newHotel = new Hotel(req.body);
        await newHotel.save();
        res.status(201).json(newHotel);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Tüm otelleri listeleme
export const getAllHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Otel güncelleme
export const updateHotel = async (req: Request, res: Response) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Otel silme
export const deleteHotel = async (req: Request, res: Response) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
