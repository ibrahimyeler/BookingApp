import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import TourCategory from '../models/TourCategory'; // Doğru yolun kullanıldığından emin olun

const router = express.Router();

// Get all tour categories
router.get('/', async (req, res) => {
  try {
    const categories = await TourCategory.find();
    res.json(categories);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Get a single tour category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await TourCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Create a new tour category
router.post('/', authenticateToken, async (req, res) => {
  const { name, description } = req.body;
  const category = new TourCategory({ name, description });
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

// Update a tour category
router.put('/:id', authenticateToken, async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await TourCategory.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

// Delete a tour category
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const category = await TourCategory.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

export default router;
