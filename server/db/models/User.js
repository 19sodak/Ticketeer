const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tickets: {
    type: Array,
    default: [],
  },
  //events that the user hosts
  hostEvents: {
    type: Array,
    default: []
  },
  //events that the user is interested in
  interestEvents: {
    type: Array,
    default: []
  },
  

});

module.exports = User = mongoose.model("users", UserSchema);
