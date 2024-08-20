// src/models/FlightModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IFlight extends Document {
    flightNumber: string;
    departure: string;
    arrival: string;
    price: number;
    availableSeats: number;
}

const FlightSchema: Schema = new Schema({
    flightNumber: { type: String, required: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    price: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
});

export default mongoose.model<IFlight>('Flight', FlightSchema);
