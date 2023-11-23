// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");


// Import your route files
const crimeRoutes = require('./routes/crimeRoutes');
const userRoutes = require('./routes/userRoutes');
const texasRoutes = require('./routes/texasRoutes');

const url = process.env.URL || "mongodb://localhost:27017/testDB";
const port = process.env.PORT || 5001;

// Setup cors
app.use(express.json());
app.use(cors());

// Route files
app.use("/crime", crimeRoutes);
app.use("/users", userRoutes);
app.use("/texas",texasRoutes);

const start = async () => {
  try {
    await mongoose.connect(url);

    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Default route
app.get("/", (req, res) => {
  return res.json({ message: "MongoDB is up and running️" });
});

start();