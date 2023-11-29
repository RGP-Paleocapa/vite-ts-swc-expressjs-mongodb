require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/items');

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json
app.use('/api/items', itemRoutes);

app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
