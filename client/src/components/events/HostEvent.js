import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEvent } from "../../redux/actions/eventActions";
import { logoutUser } from "../../redux/actions/authActions";
import classnames from "classnames"
import "../auth/Auth.css";

//TODO:
//include Dates in events



class HostEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hostName: "",
      description: "",
      location: "",
      paymentMethod: "",
      price: 0,
      maxAttendees: "",
      admins: [],
      errors: {},
    };


  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    const newEvent = {
      name: this.state.name,
      hostName: this.state.hostName,
      description: this.state.description,
      location: this.state.location,
      paymentMethod: this.state.paymentMethod,
      price: this.state.price,
      maxAttendees: this.state.maxAttendees,
      admins: [user.id],
      errors: {},
    };
    this.props.createEvent(newEvent, this.props.history);
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    return (
      <div>
        <h4>
          <b>Welcome,</b> {user.name.split(" ")[0]}
        </h4>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
        >
          Logout
            </button>
        <br></br>
        <form
          noValidate
          onSubmit={this.onSubmit}
          className="register-body"
        >
          <div className="modal-textfield">
            <label htmlFor="name">Event Name</label>
            <span className="red-text">{errors.name}</span>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="hostName">Host Name</label>
            <span className="red-text">{errors.hostName}</span>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.hostName}
              id="hostName"
              type="hostName"
              
              className={classnames("", {
                invalid: errors.hostName,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="description">Description</label>
            <span className="red-text">{errors.description}</span>
            <input
              onChange={this.onChange}
              value={this.state.description}
              error={errors.description}
              id="description"
              type="text"
              
              className={classnames("", {
                invalid: errors.description,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="location">Location</label>
            <span className="red-text">{errors.location}</span>
            <input
              onChange={this.onChange}
              value={this.state.location}
              error={errors.location}
              id="location"
              type="text"
              
              className={classnames("", {
                invalid: errors.location,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="paymentMethod">Payment Method</label>
            <span className="red-text">{errors.paymentMethod}</span>
            <input
              onChange={this.onChange}
              value={this.state.paymentMethod}
              error={errors.paymentMethod}
              id="paymentMethod"
              type="text"
              
              className={classnames("", {
                invalid: errors.paymentMethod,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="Price">Price</label>
            <span className="red-text">{errors.price}</span>
            <input
              onChange={this.onChange}
              value={this.state.price}
              error={errors.price}
              id="price"
              type="number"
              
              className={classnames("", {
                invalid: errors.price,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="maxAttendees">Maximum Attendees</label>
            <span className="red-text">{errors.maxAttendees}</span>
            <input
              onChange={this.onChange}
              value={this.state.maxAttendees}
              error={errors.maxAttendees}
              id="maxAttendees"
              type="number"
              
              className={classnames("", {
                invalid: errors.maxAttendees,
              })}
              
            />
          </div>
          <div>
            <button type="submit" className="create-button">
              Create Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

HostEvent.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logoutUser, createEvent })(HostEvent);


/*
<div className="modal-textfield">
            <label htmlFor="date">Date</label>
            <span className="red-text">{errors.date}</span>
            <input
              onChange={this.onChange}
              value={this.state.date}
              error={errors.date}
              id="date"
              type="date"
              
              className={classnames("", {
                invalid: errors.date,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="startTime">Start Time</label>
            <span className="red-text">{errors.time}</span>
            <input
              onChange={this.onChange}
              value={this.state.startTime}
              error={errors.time}
              id="startTime"
              type="datetime-local"
              
              className={classnames("", {
                invalid: errors.time,
              })}
              
            />
          </div>
          <div className="modal-textfield">
            <label htmlFor="endTime">End Time</label>
            <span className="red-text">{errors.time}</span>
            <input
              onChange={this.onChange}
              value={this.state.endTime}
              error={errors.time}
              id="endTime"
              type="datetime-local"
              
              className={classnames("", {
                invalid: errors.time,
              })}
            
            />
          </div>
*/