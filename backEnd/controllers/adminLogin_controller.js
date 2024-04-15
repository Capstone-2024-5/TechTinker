// const adminModel = require('../models/adminLogin_model');

// const adminlogin = async (req, res) => {
//   try {
//     // Check if the username already exists
//     const existingAdmin = await adminModel.findOne({ username: req.body.username });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Username already exists' });
//     } else {
//       // If the username does not exist, throw a validation message
//       return res.status(400).json({ message: 'Username not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// module.exports = adminlogin;

const adminModel = require('../models/adminLogin_model');

const adminlogin = async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    // Check if the username already exists
    const existingAdmin = await adminModel.findOne({ username: req.body.username });
    console.log('Existing Admin:', existingAdmin);

    if (existingAdmin) {
      return res.status(200).json({ message: 'Username already exists' });
    } else {
      // If the username does not exist, throw a validation message
      return res.status(400).json({ message: 'Username not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = adminlogin;

