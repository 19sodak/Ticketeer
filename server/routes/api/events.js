//route for events
const express = require("express");
const router = express.Router();
const validateHostEventInput = require("../../utils/hostEventValidator");
const Event = require("../../models/Event");

// @route POST api/events/hostEvent
// @desc Register event
// @access Public
router.post("/hostEvent", (req, res) => {
  // Validation
  const { errors, isValid } = validateHostEventInput(req.body);
  console.log("1.5");
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Create event
  const newEvent = new Event({
    // TODO: generate id
    // id:
    name: req.body.name,
    hostName: req.body.hostName,
    description: req.body.description,
    location: req.body.location,
    paymentMethod: req.body.paymentMethod,
    maxAttendees: req.body.maxAttendees,
    price: req.body.price,
  });

  newEvent
    .save()
    .then(event => res.json(event))
    .catch(err => console.log(err));
});

module.exports = router;
