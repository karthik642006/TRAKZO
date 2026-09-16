const express = require('express');
const router = express.Router();
const Vitals = require('../models/Vitals');

// Get vitals for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const vitals = await Vitals.findOne({ userId: req.params.userId }).sort({ recordedAt: -1 });
    if (!vitals) return res.status(404).json({ message: 'Vitals not found' });
    res.json(vitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update vitals record for a user
router.post('/', async (req, res) => {
  try {
    const { userId, heartRate, bloodPressure, spO2 } = req.body;
    let vitals = await Vitals.findOne({ userId });
    
    if (vitals) {
      // Update existing record
      if (heartRate) {
        vitals.heartRate.current = heartRate;
        vitals.heartRate.avg = heartRate; // naive avg update for demo
        vitals.heartRate.history.push({ timestamp: new Date(), value: heartRate });
      }
      if (bloodPressure && bloodPressure.systolic && bloodPressure.diastolic) {
        vitals.bloodPressure.systolic = bloodPressure.systolic;
        vitals.bloodPressure.diastolic = bloodPressure.diastolic;
        vitals.bloodPressure.history.push({ timestamp: new Date(), systolic: bloodPressure.systolic, diastolic: bloodPressure.diastolic });
      }
      if (spO2) {
        vitals.spO2.current = spO2;
        vitals.spO2.history.push({ timestamp: new Date(), value: spO2 });
      }
      const updatedVitals = await vitals.save();
      return res.status(200).json(updatedVitals);
    } else {
      // Create new record if it doesn't exist
      const newVitals = new Vitals(req.body);
      const savedVitals = await newVitals.save();
      return res.status(201).json(savedVitals);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
