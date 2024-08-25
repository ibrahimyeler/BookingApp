// src/models/CulturalTourModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICulturalTour extends Document {
    tourName: string;
    description: string;
    location: string;
    price: number;
    duration: number; // in hours
}

const CulturalTourSchema: Schema = new Schema({
    tourName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
});

export default mongoose.model<ICulturalTour>('CulturalTour', CulturalTourSchema);
