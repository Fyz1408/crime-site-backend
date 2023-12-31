const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET request
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

// POST request
router.post('/login', userController.login);
router.post('/register', userController.createUser);

// DELETE request
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;
