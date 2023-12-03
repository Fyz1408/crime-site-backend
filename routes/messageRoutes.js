const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messsageController');

// GET request
router.get('/', messageController.getAllMessages);

// POST request
router.post('/send', messageController.sendMessage);

module.exports = router;
