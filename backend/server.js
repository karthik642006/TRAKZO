require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const userRoutes = require('./routes/userRoutes');
const vitalsRoutes = require('./routes/vitalsRoutes');

// Basic Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'VitalCare API is running' });
});

app.use('/api/users', apiLimiter, userRoutes);
app.use('/api/vitals', apiLimiter, vitalsRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Successfully connected to MongoDB');
  
  // Start server only after DB connects
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
