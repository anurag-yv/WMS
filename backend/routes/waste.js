const express = require('express');
const router = express.Router();
const WasteEntry = require('../models/WasteEntry');

// Get all waste entries
router.get('/', async (req, res) => {
  try {
    const entries = await WasteEntry.find().populate('userId', 'name email');
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new waste entry
router.post('/', async (req, res) => {
  try {
    const wasteEntry = new WasteEntry(req.body);
    const savedEntry = await wasteEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get waste statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await WasteEntry.aggregate([
      {
        $group: {
          _id: '$wasteType',
          totalQuantity: { $sum: '$quantity' },
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;