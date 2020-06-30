const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
  },
  hostName: {
    type: String,
  },
  description: {
    type: String,
  },
  /* https://stackoverflow.com/questions/27218389/location-in-mongoose-mongodb */
  location: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  maxAttendees: {
    type: Number,
  },
  price: {
    type: Number,
  },
  guestList: {
    type: [String],
    default: [],
  },
  confirmedGuestList: [String],
  admins: [String],
});

module.exports = Event = mongoose.model("events", EventSchema);
