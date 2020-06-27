import React, { Component } from "react";
import Event from "./Event";


class Hosted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            eventsId: [],
        };
    }

    componentDidMount() {
        //TODO: fetch all events this user hosts, and store as an array in eventsId
    }

    //TODO: render a carousel 
    //TODO: iterate through this.state.eventsId, and create a <Event /> component for each one, render them
    //      in carousel
    render () {
        return (
            <div>
                
            </div>
        )
    }
}

export default Hosted;