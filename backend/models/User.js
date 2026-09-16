const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['patient', 'family', 'clinician'], default: 'patient' },
  avatarUrl: { type: String },
  connectedDevices: [{ type: String }],
  medicalProfile: {
    bloodType: String,
    allergies: [String],
    conditions: [String]
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
