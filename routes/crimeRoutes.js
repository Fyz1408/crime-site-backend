const express = require('express');
const router = express.Router();
const crimeController = require("../controllers/crimeController");

// GET all crimes
router.get('/', crimeController.getAllCrime);

module.exports = router;
