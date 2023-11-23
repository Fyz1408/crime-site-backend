const express = require('express');
const router = express.Router();
const texasController = require("../controllers/texasController");

// GET all crimes
router.get('/', texasController.getAllCrime);

module.exports = router;