import React, { Component } from "react";
import Event from "./Event";
import "./Slider.css"


class Slider extends Component {
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
    render() {
        const container = document.getElementById("events");
            for (var i = 0; i < this.state.eventsId.length; i++) {
                container.innerHTML+=`<Event ${this.state.eventsId[i]} />`;
            }
        return (
            <section class="card" id="events">
                {container}
            </section>
        )
    }
}

export default Slider;