const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

// Import route files
const crimeRoutes = require('./routes/crimeRoutes');
const userRoutes = require('./routes/userRoutes');
const texasRoutes = require('./routes/texasRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Get environment variables
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.URL || "mongodb://localhost:27017/";
const port = process.env.PORT || 3000;

// Setup API to handle JSON & setup cors
app.use(express.json());
app.use(cors());

// Use route files
app.use("/crime", crimeRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);
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
  return res.json({ message: "Server is up and running️" });
});

start();