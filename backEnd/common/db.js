require('dotenv').config()
const mongoose = require("mongoose");

function ConnectToDB() {
    const url = process.env.DB_URL || "mongodb+srv://admin:admin@cluster0.rungowt.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(url);
    console.log("MongoDB Connected");
 }

module.exports = ConnectToDB;