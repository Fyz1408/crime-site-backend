const Crime = require("../models/Crime");

// Gets all crime
exports.getAllCrime = async (req, res) => {
  try {
    const allCrime = await Crime.find().limit(100);
    return res.status(200).json(allCrime);
  } catch (e) {
    res.send(e); // TODO Don't send the full error in production
  }
};

