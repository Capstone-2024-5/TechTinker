const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Validate email format using regex
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
