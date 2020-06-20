const Event = require("./models/Event");

// @route POST api/events/hostEvent
// @desc Register event
// @access Public
async function postEvent({
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
  return newEvent;
}

async function editEvent({
  update,
}) {
  //edit event
  const x = detail;
  Event.findOne({id: eventId})
    .then(event => {
      event.name = update.name;
      event.hostName = update.hostName,
      event.description = update.description,
      event.location = update.location,
      event.paymentMethod = update.paymentMethod,
      event.maxAttendees = update.maxAttendees,
      event.save(err => console.log(err))
    })

}

// Exports
module.exports = {
  postEvent: postEvent,
  editEvent: editEvent,
};
