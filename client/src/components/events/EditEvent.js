import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { getEvent, submitEdit } from "../../redux/actions/eventActions";
import classnames from "classnames"
import "./Events.css"
import Navbar from "../navbar/Navbar";





class EditEvent extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
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

    componentWillMount() {
        var url = window.location.pathname;
        var id = url.substr(url.lastIndexOf('/') + 1);
        var eventId = id;

        this.props.getEvent(id, (res) => {
            this.setState({
                id: eventId,
                name: res.data[0].name,
                hostName: res.data[0].hostName,
                description: res.data[0].description,
                location: res.data[0].location,
                paymentMethod: res.data[0].paymentMethod,
                price: res.data[0].price,
                maxAttendees: res.data[0].maxAttendees,
                admins: res.data[0].admins,
            })
        }, (err) => {
            alert(err);
        });
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
        console.log("edit")
        const editedEvent = {
            name: this.state.name,
            hostName: this.state.hostName,
            description: this.state.description,
            location: this.state.location,
            paymentMethod: this.state.paymentMethod,
            price: this.state.price,
            maxAttendees: this.state.maxAttendees,
            admins: this.state.admins,
            errors: {},
        };
        this.props.submitEdit(editedEvent, this.state.id, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div >
                <div className="navComponent">
                    <Navbar />
                </div>
                <h4>EditEvent</h4>
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
                            Submit Edits
            </button>
                    </div>
                </form>
            </div>
        );
    }

}

EditEvent.propTypes = {
    submitEdit: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    getEvent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser, getEvent, submitEdit })(EditEvent)