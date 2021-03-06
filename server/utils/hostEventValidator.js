const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateHostEventInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.maxAttendees = !isEmpty(data.maxAttendees) ? data.maxAttendees : -1;
  data.price = !isEmpty(data.price) ? data.maxAttendees : "";
  data.paymentMethod = !isEmpty(data.paymentMethod) ? data.paymentMethod : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Event name is required";
  }

  // Location checks
  if (Validator.isEmpty(data.location)) {
    errors.location = "Event location is required";
  }

  // Description checks
  if (Validator.isEmpty(data.description)) {
    errors.description = "Event description is required";
  }

  //time checks

  // MaxAttendees checks
  if (data.maxAttendees === -1) {
    errors.maxAttendees = "Max attendees number is required";
  } else if (data.maxAttendees === 0) {
    errors.maxAttendees = "Max attendees must be greater than 0";
  }

  if (data.price < 0) {
    errors.price = "Price must be greater than zero";
  }

  if (data.price > 0 && Validator.isEmpty(data.paymentMethod)) {
    errors.paymentMethod = "Must list a payment method for event attendees";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
