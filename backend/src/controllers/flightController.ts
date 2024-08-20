// src/controllers/flightController.ts
import { Request, Response } from 'express';
import Flight from '../models/FlightModel';

// Yeni bir uçuş ekleme
export const addFlight = async (req: Request, res: Response) => {
    try {
        const newFlight = new Flight(req.body);
        await newFlight.save();
        res.status(201).json(newFlight);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Tüm uçuşları listeleme
export const getAllFlights = async (req: Request, res: Response) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Uçuş güncelleme
export const updateFlight = async (req: Request, res: Response) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFlight);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

// Uçuş silme
export const deleteFlight = async (req: Request, res: Response) => {
    try {
        await Flight.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
