const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { collection: 'admin_login' }); // Explicitly specify the collection name

const adminModel = mongoose.model('adminModel', adminSchema);

module.exports = adminModel;
