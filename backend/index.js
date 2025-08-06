const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Allow frontend requests (adjust for production)
const PORT = process.env.PORT || 5000;

app.get('/api/games', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.collegefootballdata.com/games?year=2025',
      { headers: { Authorization: `Bearer ${process.env.CFBD_API_KEY}` } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
