// src/models/HotelModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IHotel extends Document {
    name: string;
    location: string;
    pricePerNight: number;
    availableRooms: number;
}

const HotelSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    availableRooms: { type: Number, required: true },
});

export default mongoose.model<IHotel>('Hotel', HotelSchema);
