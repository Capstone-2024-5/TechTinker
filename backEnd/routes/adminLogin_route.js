const express = require('express');
const router = express.Router();
const authController = require('../controllers/adminLogin_controller');

router.post('/admin', authController);

module.exports = router;
