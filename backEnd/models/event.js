const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  EventName: String,
  ImageUrl: String
});

const Event = mongoose.model('events', eventSchema);

module.exports = Event;