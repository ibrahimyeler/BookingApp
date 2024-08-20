// src/routes/hotelRoutes.ts
import { Router } from 'express';
import { addHotel, getAllHotels, updateHotel, deleteHotel } from '../controllers/hotelController';

const router = Router();

router.post('/', addHotel);
router.get('/', getAllHotels);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

export default router;
