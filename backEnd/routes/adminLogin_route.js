const express = require('express');
const authController = require('../controllers/adminLogin_controller');

const router = express.Router();

router.post('/admin_login', authController);

module.exports = router;
