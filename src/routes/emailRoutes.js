const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Email routes
router.post('/send-email', emailController.sendEmail);

module.exports = router; 