// src/routes/culturalTourRoutes.ts
import { Router } from 'express';
import { addTour, getAllTours, updateTour, deleteTour } from '../controllers/culturalTourController';

const router = Router();

router.post('/', addTour);
router.get('/', getAllTours);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour); // Bu satır DELETE işlemini tanımlar

export default router;
