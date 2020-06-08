const Event = require("./models/Event");

// @route POST api/events/hostEvent
// @desc Register event
// @access Public
async function putEvent({
  name,
  hostName,
  description,
  location,
  paymentMethod,
  maxAttendees,
  price,
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
    maxAttendees: maxAttendees,
    price: price,
  });

  // Save event to db
  newEvent.save();
}

// Exports
module.exports = {
  putEvent: putEvent,
};
