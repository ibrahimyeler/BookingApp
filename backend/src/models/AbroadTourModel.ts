// src/models/AbroadTourModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAbroadTour extends Document {
    destination: string;
    duration: number; // gün cinsinden
    price: number;
    description: string;
}

const AbroadTourSchema: Schema = new Schema({
    destination: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
});

export default mongoose.model<IAbroadTour>('AbroadTour', AbroadTourSchema);
