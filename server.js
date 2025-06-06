const express = require('express');
const app = express();
const calculatorRoutes = require('./routes/calculator');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/calculate', calculatorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
