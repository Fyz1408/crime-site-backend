// Models
const mongoose = require("mongoose");

// Schema for crime
const CrimeSchema = new mongoose.Schema({
  DR_NO: {
    type: Number,
  },
  'Date Rptd': {
    type: Date,
    default: Date.now,
  },
  'DATE OCC': {
    type: Date,
    default: Date.now,
  },
  'TIME OCC': {
    type: Number,
    default: Date.now,
  },
  AREA: {
    type: Number,
  },
  'AREA NAME': {
    type: String,
  },
  'Rpt Dist No': {
    type: Number,
  },
  'Part 1-2': {
    type: Number,
  },
  'Crm Cd': {
    type: Number,
  },
  'Crm Cd Desc': {
    type: String,
  },
  Mocodes: {
    type: String,
  },
  'Vict Age': {
    type: Number,
  },
  'Vict Sex': {
    type: String,
  },
  'Vict Descent': {
    type: String,
  },
  'Premis Cd': {
    type: Number,
  },
  'Premis Desc': {
    type: String,
  },
  'Weapon Used Cd': {
    type: Number,
  },
  'Weapon Desc': {
    type: String,
  },
  Status: {
    type: String,
  },
  'Status Desc': {
    type: String,
  },
  'Crm Cd 1': {
    type: Number,
  },
  LOCATION: {
    type: String,
  },
  LAT: {
    type: Number,
  },
  LON: {
    type: Number,
  },
});

module.exports = mongoose.model('Crime', CrimeSchema);