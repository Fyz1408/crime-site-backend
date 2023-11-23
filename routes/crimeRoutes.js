const express = require('express');
const router = express.Router();
const Crime = require('../models/Crime'); // Import your Crime model

router.get("/", async (req, res) => {
  try {
    const allCrime = await Crime.find();
    console.log("GET /crime", allCrime);
    return res.status(200).json(allCrime);
  } catch (e) {
    res.send(e); // TODO Don't send the full error in production
  }
});

// Add more crime-related routes as needed

module.exports = router;
