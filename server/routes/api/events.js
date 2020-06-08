//route for events
const express = require("express");
const router = express.Router();
const validateHostEventInput = require("../../utils/hostEventValidator");
const { postEvent } = require("../../db/db");

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

module.exports = router;
