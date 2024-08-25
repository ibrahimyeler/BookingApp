import { Schema, model, Document } from 'mongoose';

interface ITourCategory extends Document {
  name: string;
  description: string;
}

const TourCategorySchema = new Schema<ITourCategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TourCategory = model<ITourCategory>('TourCategory', TourCategorySchema);

export default TourCategory;
