const Event = require("../models/event");

exports.getEvents = async (req, res) =>{
  try {
    const events = await Event.find();
    res.json(events);
  }catch(err){
    console.error("Error fetching products: ", err);
    res.status(500).json({error: "Internal server error"});
  }
};