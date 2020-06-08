const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = require('mongoose').model('User').schema



const TicketSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  qrCode: {
    type: String,
    required: true,
  },
  ticketOwner: {
      type: UserSchema,
  },
});

module.exports = Ticket = mongoose.model("tickets", TicketSchema);