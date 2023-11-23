// Models
const mongoose = require("mongoose");

// Schema for texas
const TexasSchema = new mongoose.Schema({
  'Incident Number': {
    type: Number,
  },
  'Highest Offense Description': {
    type: String,
  },
  'Highest Offense Code': {
    type: Number,
  },
  'Family Violence': {
    type: String,
  },
  'Occurred Date Time': {
    type: String,
  },
  'Occurred Date': {
    type: String,
  },
  'Occurred Time': {
    type: Number,
  },
  'Report Date Time': {
    type: String,
  },
  'Report Date': {
    type: String,
  },
  'Report Time': {
    type: Number,
  },
  'Location Type': {
    type: String,
  },
  'Address': {
    type: String,
  },
})

module.exports = mongoose.model('Texas', TexasSchema);