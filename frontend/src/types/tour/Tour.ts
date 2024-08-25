// src/types/tour/Tour.ts
export interface Tour {
  _id: string;
  destination: string;
  duration: number;
  price: number;
  description: string;
  category: string; // Turun kategorisini belirtmek için eklendi
}
