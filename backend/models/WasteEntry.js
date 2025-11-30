const mongoose = require('mongoose');

const wasteEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wasteType: {
    type: String,
    enum: ['plastic', 'paper', 'glass', 'metal', 'organic', 'electronic', 'hazardous'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    enum: ['kg', 'lb', 'items'],
    default: 'kg'
  },
  location: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  collectionDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'collected', 'recycled'],
    default: 'pending'
  },
  notes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('WasteEntry', wasteEntrySchema);