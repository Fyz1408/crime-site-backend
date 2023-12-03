const Message = require('../models/Message');

// Get all messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({'date': -1});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};