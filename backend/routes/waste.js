// routes/waste.js (NEW FILE)
const express = require('express');
const auth = require('../middleware/auth');
const WasteEntry = require('../models/WasteEntry');

const router = express.Router();

// Get authenticated user's waste entries
router.get('/entries', auth, async (req, res) => {
  try {
    const entries = await WasteEntry.find({ userId: req.userId })
      .sort({ createdAt: -1 }) // Sort by creation date descending
      .lean();

    // Normalize date for frontend (convert to YYYY-MM-DD string)
    const normalizedEntries = entries.map(entry => ({
      ...entry,
      id: entry._id,
      date: entry.date ? new Date(entry.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
    }));

    res.json({ success: true, entries: normalizedEntries });
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ success: false, message: 'Server error fetching entries' });
  }
});

// Create new waste entry for authenticated user
router.post('/entries', auth, async (req, res) => {
  try {
    const entryData = {
      ...req.body,
      userId: req.userId,
      quantity: parseFloat(req.body.quantity),
      date: new Date(req.body.date)
    };

    const entry = new WasteEntry(entryData);
    await entry.save();

    // Fetch normalized entry for response
    const savedEntry = await WasteEntry.findById(entry._id).lean();
    const normalizedEntry = {
      ...savedEntry,
      id: savedEntry._id,
      date: new Date(savedEntry.date).toISOString().split('T')[0]
    };

    res.status(201).json({ success: true, entry: normalizedEntry, id: entry._id });
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(500).json({ success: false, message: 'Server error creating entry' });
  }
});

// Update waste entry (only if owned by authenticated user)
router.put('/entries/:id', auth, async (req, res) => {
  try {
    const updates = {
      ...req.body,
      quantity: parseFloat(req.body.quantity),
      date: new Date(req.body.date)
    };

    const entry = await WasteEntry.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { ...updates, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).lean();

    if (!entry) {
      return res.status(404).json({ success: false, message: 'Entry not found or access denied' });
    }

    const normalizedEntry = {
      ...entry,
      id: entry._id,
      date: new Date(entry.date).toISOString().split('T')[0]
    };

    res.json({ success: true, entry: normalizedEntry });
  } catch (error) {
    console.error('Error updating entry:', error);
    res.status(500).json({ success: false, message: 'Server error updating entry' });
  }
});

// Delete waste entry (only if owned by authenticated user)
router.delete('/entries/:id', auth, async (req, res) => {
  try {
    const entry = await WasteEntry.findOneAndDelete({ _id: req.params.id, userId: req.userId });

    if (!entry) {
      return res.status(404).json({ success: false, message: 'Entry not found or access denied' });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ success: false, message: 'Server error deleting entry' });
  }
});

module.exports = router;