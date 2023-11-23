const express = require('express');
const router = express.Router();
const Texas = require('../models/Texas');

// GET all texas
router.get("/", async (req, res) => {
  try {
    const allTexas = await Texas.find().limit(100);

    console.log("GET /texas", allTexas)
    return res.status(200).json(allTexas);
  } catch (e) {
    res.send(e); // TODO Dont send full error in prod
  }
});

module.exports = router;