//route for events
const express = require("express");
const router = express.Router();
const validateHostEventInput = require("../../utils/hostEventValidator");
const { postEvent, editEvent } = require("../../db/db");
const Event = require("../../db/models/Event")

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
    // Validate edit... should we pass the whole body through validator, or fin a way to individually validate the edit?
    const {erros, isValid} = validateHostEventInput(req.body);
    if(!isValid) {
        return res.status(400).json(erros);
    }
    editEvent(req.body)
        .then(event => res.json(event))
        .catch(err => console.log(err));
});

//@route Get api/events/eventId
//@desc get the event details for display
//@access
router.get("/", (req, res) => {
  Event.findOne({_id : req.body}).then(event => {
    if (event) {
      return res
    } else {
      return res.status(400)
    }
  })
});


module.exports = router;
