const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  heartRate: {
    current: { type: Number },
    avg: { type: Number },
    history: [{ timestamp: Date, value: Number }]
  },
  bloodPressure: {
    systolic: { type: Number },
    diastolic: { type: Number },
    history: [{ timestamp: Date, systolic: Number, diastolic: Number }]
  },
  spO2: {
    current: { type: Number },
    history: [{ timestamp: Date, value: Number }]
  },
  recordedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vitals', vitalsSchema);
