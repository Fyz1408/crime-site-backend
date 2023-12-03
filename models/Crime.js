const mongoose = require("mongoose");

// Schema for crime
const MixedCrime = new mongoose.Schema({
  any: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Crime', MixedCrime, 'losAngeles');