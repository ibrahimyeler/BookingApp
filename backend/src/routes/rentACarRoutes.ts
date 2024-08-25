// src/routes/rentACarRoutes.ts
import { Router } from 'express';
import { addCar, getAllCars, updateCar, deleteCar } from '../controllers/rentACarController';

const router = Router();

router.post('/', addCar);
router.get('/', getAllCars);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;
