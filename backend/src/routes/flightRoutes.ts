// src/routes/flightRoutes.ts
import { Router } from 'express';
import { addFlight, getAllFlights, updateFlight, deleteFlight } from '../controllers/flightController';

const router = Router();

router.post('/', addFlight);
router.get('/', getAllFlights);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

export default router;
