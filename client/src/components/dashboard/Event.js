import React, { Component } from "react";
import PropTypes from "prop-types";
import { getEvent } from "../../redux/actions/eventActions";
import { connect } from "react-redux";



class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.id,
            name: "",
            hostName: "",
            description: "",
            location: "",
            paymentMethod: "",
            price: 0,
            maxAttendees: "",
            admins: [],
        }
    }

    componentDidMount() {
        this.props.getEvent(this.state.eventId, (res) => {
            this.setState({ 
                name: res.data[0].name,
                hostName: res.data[0].hostName,
                description: res.data[0].description,
                location: res.data[0].location,
                paymentMethod: res.data[0].paymentMethod,
                price: res.data[0].price,
                maxAttendees: res.data[0].maxAttendees,
            })
        }, (err) => {
            alert(err);
        });
    }

    //return a carousel card containing event info
    render () {
        return (
            <div>
                
            </div>
        )
    }
}

Event.propTypes = {
    getEvent: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { getEvent }) (Event);