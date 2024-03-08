const bcrypt = require('bcrypt');
const adminModel = require('../models/adminLogin_model');
const express = require("express");
const app = express();

const adminlogin = app.post(async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await adminModel.findOne({ username });

    if (!admin) {
      // return res.status(401).json({ message: 'Invalid credentials' });
      return res.status(401).json('notexist');
    }

    const validPassword = await bcrypt.compare(password, adminModel.password);

    if (!validPassword) {
      // return res.status(401).json({ message: 'Invalid credentials' });
      return res.status(401).json('notexist');
    }

    // res.json({ message: 'Login successful' });
    res.json('exist');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = adminlogin;
