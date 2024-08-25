// src/routes/abroadTourRoutes.ts
import { Router } from 'express';
import { addTour, getAllTours, updateTour, deleteTour } from '../controllers/abroadTourController';

const router = Router();

router.post('/', addTour);
router.get('/', getAllTours);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

export default router;
