import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEvent } from "../../redux/actions/eventActions"

class EventPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

//TODO:
//make the event details render

componentDidMount() {
    var url = window.location.pathname;
    var id = url.substr(url.lastIndexOf('/') + 1);
    
    this.props.getEvent(id);
    
 

    }

render() {
    return (
        <div>
            <b>hello</b>
            <b>{this.state.data}</b>
        </div>
    )
}


}

EventPage.propTypes = {
    getEvent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
  });



export default connect(mapStateToProps, { getEvent })(EventPage)