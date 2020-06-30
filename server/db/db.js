const Event = require("./models/Event");
const mongoose = require("mongoose");

// @route POST api/events/hostEvent
// @desc Register event
// @access Public
async function postEvent({
  name,
  hostName,
  description,
  location,
  paymentMethod,
  price,
  maxAttendees,
  admins,
}) {
  // Create event
  const newEvent = new Event({
    // TODO: generate id
    // id:
    name: name,
    hostName: hostName,
    description: description,
    location: location,
    paymentMethod: paymentMethod,
    price: price,
    maxAttendees: maxAttendees,
    admins: admins,
  });

  // Save event to db
  newEvent.save();
  return newEvent;
}




// Exports
module.exports = {
  postEvent: postEvent,
};
