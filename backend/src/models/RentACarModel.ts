// src/models/RentACarModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IRentACar extends Document {
    carModel: string;
    brand: string;
    year: number;
    dailyRate: number;
}

const RentACarSchema: Schema = new Schema({
    carModel: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },
    dailyRate: { type: Number, required: true },
});

export default mongoose.model<IRentACar>('RentACar', RentACarSchema);
