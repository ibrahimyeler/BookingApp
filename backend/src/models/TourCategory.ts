// src/models/TourCategory.ts
import mongoose, { Document, Schema } from 'mongoose';

interface ITourCategory extends Document {
  name: string;
  description?: string;
}

const TourCategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const TourCategory = mongoose.model<ITourCategory>('TourCategory', TourCategorySchema);

export default TourCategory;
