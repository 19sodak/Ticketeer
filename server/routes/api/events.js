//route for events
const express = require("express");
const router = express.Router();
const validateHostEventInput = require("../../utils/hostEventValidator");
const { postEvent } = require("../../db/db");
const Event = require("../../db/models/Event")
const mongoose = require("mongoose");


// @route POST api/events/hostEvent
// @desc Register event
// @access Public
router.post("/hostEvent", (req, res) => {
  // Validation
  const { errors, isValid } = validateHostEventInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  postEvent(req.body)
    .then(event => res.json(event))
    .catch(err => console.log(err));
});

// @route PUT api/events/editEvent
// @desc Edit event - gets the new event details, confirms the user is an event admin, then updates event. 
// @access Private
router.put("/editEvent", (req, res) => {
  console.log(req.body.params.data);


  var update = new Event({
    name: req.body.params.data.name,
    hostName: req.body.params.data.hostName,
    description: req.body.params.data.description,
    location: req.body.params.data.location,
    paymentMethod: req.body.params.data.paymentMethod,
    price: req.body.params.data.price,
    maxAttendees: req.body.params.data.maxAttendees,
    admins: req.body.params.data.admins,
  })

  const { errors, isValid } = validateHostEventInput(update);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Event.updateOne({ _id: mongoose.Types.ObjectId(req.body.params.id) }, {
    $set: {               
      name: update.name,
      hostName: update.hostName,
      description: update.description,
      location: update.location,
      paymentMethod: update.paymentMethod,
      price: update.price,
      maxAttendees: update.maxAttendees,
      admins: update.admins,
    }
  }
  ).then(result => {
    console.log("updated");
  });
})

//@route Get api/events/getEvent
//@desc get the event details for display
//@access
router.get("/getEvent", (req, res) => {
  //console.log(req.query.id);
  Event.find({ _id: mongoose.Types.ObjectId(req.query.id) })
    .then(event => res.json(event))//res.json(event))
    .catch(err => console.log(err));
});

// console.log(req.query.userId);
//   console.log(typeof(req.query.userId))

router.get("/getHosted", (req, res) => {
  Event.find({ admins: req.query.userId })
    .then(event => res.json(event))
    .catch(err => console.log(err))

});

// console.log(req.query.userId);

router.get("/getTickets", (req, res) => {
  Event.find({ confirmedGuests: req.query.userId })
    .then(event => res.json(event))
    .catch(event => console.log(err));
  
})

module.exports = router;
