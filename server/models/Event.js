const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  description: String,
/* https://stackoverflow.com/questions/27218389/location-in-mongoose-mongodb */
  location: {
    type: [number],
    index: '2dsphere',
  },
  
  date: {
    type: Date,
    required: true,
  },
  time: {
    startTime: Date,
    endTime: Date,
  },
  paymentMethod: String,
  maxAttendees: Number,
  price: Number, 
  /* guest list */
  /* confirmed guest list */
});

module.exports = Event = mongoose.model("events", EventSchema);