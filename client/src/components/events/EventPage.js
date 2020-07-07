import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEvent, editEvent } from "../../redux/actions/eventActions";
import { logoutUser } from "../../redux/actions/authActions";
import "./Events.css"
import Navbar from "../navbar/Navbar";



class EventPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    //TODO:
    //make the event details render

    componentWillMount() {
        var url = window.location.pathname;
        var id = url.substr(url.lastIndexOf('/') + 1);

        this.props.getEvent(id, (res) => {
            this.setState({ data: res.data[0] })
            console.log(res.data[0])
        }, (err) => {
            alert(err);
        });

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    onEditClick = e => {
        e.preventDefault();
        this.props.editEvent(this.state.data, this.props.history);
    };




    render() {
        const { user } = this.props.auth;

        var eventData = this.state.data;
        //const isAdmin = eventData.admins.includes(user.id)
        var admins = eventData.admins;



        return (
            <div className="grad">
                <div className="navComponent">
                    <Navbar />
                </div>
                <div className="body">
                    <div className="titleContainer">
                        <h4 className="title">
                            <b>{eventData.name}</b>
                        </h4>
                        <h5 className="host">
                            by {eventData.hostName}
                        </h5>
                        <h5 className="description">
                            {eventData.description}

                        </h5>

                    </div>
                    <div className="eventDetails">
                        <div>
                            {eventData.description}
                            {eventData.location}
                            {eventData.price}

                        </div>

                    </div>
                    {admins && admins.includes(user.id) ?
                    <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem",
                        }}
                        onClick={this.onEditClick}
                        className="editButton"
                    >Edit Event</button> :
                    " "
                }

                </div>

                
            </div>
        )
    }


}

EventPage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    editEvent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});



export default connect(mapStateToProps, { logoutUser, getEvent, editEvent })(EventPage)