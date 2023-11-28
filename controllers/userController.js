const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
  console.log(req.method, req.baseUrl);
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a user by id
exports.getUserById = async (req, res) => {
  console.log(req.method, req.baseUrl);
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a user
exports.createUser = async (req, res) => {
  console.log(req.method, req.baseUrl);
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};