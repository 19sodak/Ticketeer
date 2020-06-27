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


async function editEvent({
  id,
  data,
}) {
  //edit event
  console.log(data);
  var update = new Event({
    name: data.name,
    hostName: data.hostName,
    description: data.description,
    location: data.location,
    paymentMethod: data.paymentMethod,
    price: data.price,
    maxAttendees: data.maxAttendees,
    admins: data.admins,
  })

  delete update._id;

  Event.findOneAndUpdate({_id: id}, update, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});

}



// Exports
module.exports = {
  postEvent: postEvent,
  editEvent: editEvent,
};
