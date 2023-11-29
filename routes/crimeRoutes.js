const express = require('express');
const router = express.Router();
const crimeController = require("../controllers/crimeController");

// GET Request
router.get('/', crimeController.getAllCrime);
router.get('/limit/:amount', crimeController.getLimitedCrime);
router.get('/count', crimeController.getAllCrimeCount);
router.get('/genders', crimeController.getGenderCount);
router.get('/weapons', crimeController.getWeaponsCount);
router.get('/street', crimeController.getStreetCount);
router.get('/desc', crimeController.getCrimesDesc);

module.exports = router;
