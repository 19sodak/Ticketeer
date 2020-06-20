const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id: {
    type: String,
  },
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
  date: {
    type: Date,
  },
  time: {
    startTime: {
      type: Date,
      default: Date.now,
    },
    endTime: {
      type: Date,
      default: Date.now,
    },
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
    type: Array,
    default: [],
  },
  confirmedGuestList: {
    type: Array,
    default: [],
  },
  admins: {
    type: Array,
    default: []
  }
});

module.exports = Event = mongoose.model("events", EventSchema);
