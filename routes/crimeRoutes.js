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
router.get('/area', crimeController.getAreaCount);
router.get('/desc', crimeController.getCrimesDesc);
router.get('/date', crimeController.getCrimeDates);
router.get('/date/:year', crimeController.getCrimeDatesByYear);
router.get('/time', crimeController.getCrimeTimes);

module.exports = router;
