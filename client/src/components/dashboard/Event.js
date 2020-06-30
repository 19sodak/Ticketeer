import React, { Component } from "react";
import PropTypes from "prop-types";
import { getEvent } from "../../redux/actions/eventActions";
import { connect } from "react-redux";
import "./Slider.css"



class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.eventId,
            data: []
        }
    }

    componentDidMount() {
        this.props.getEvent(this.state.eventId, (res) => {
            this.setState({ 
                data: res.data[0]
            })
            console.log(res.data[0]);

        }, (err) => {
            alert(err);
        });
    }

    //return a carousel card containing event info
    render () {
        return (
            <div className="card--content">
                {this.state.data.name}
                
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