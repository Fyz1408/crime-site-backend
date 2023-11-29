const Texas = require('../models/Texas');

// Get all users
exports.getAllCrime = async (req, res) => {
  try {
    const allCrimes = await Texas.find().limit(100);
    return res.status(200).json(allCrimes);
  } catch (e) {
    res.send(e);
  }
};