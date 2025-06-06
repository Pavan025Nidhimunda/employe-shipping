const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { weight, distance, speed } = req.body;

  if (!weight || !distance || !speed) {
    return res.status(400).json({ error: 'Missing input data' });
  }

  // Simple cost calculation
  const cost = (weight * 0.5 + distance * 0.3) * (speed === 'express' ? 1.5 : 1.0);

  // Delivery estimate
  const estimate = speed === 'express' ? distance / 60 : distance / 30;
  const estimatedDays = Math.ceil(estimate);

  res.json({ cost: cost.toFixed(2), estimatedDays });
});

module.exports = router;
