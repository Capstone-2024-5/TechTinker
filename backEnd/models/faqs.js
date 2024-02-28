const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    answer: String,
    question: String
})

const FAQModel = mongoose.model("faqs", FAQSchema)

module.exports = FAQModel