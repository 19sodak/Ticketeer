import React, { Component } from "react";
import Event from "./Event";
import "./Slider.css"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserHostedEvents, getUserTicketEvents } from "../../redux/actions/eventActions";



class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            hosts: this.props.hosts,
            eventsId: [],

        };
    }

    //res.data.map(x => x._id)

    componentWillMount() {
        //TODO: fetch all events this user hosts, and store as an array in eventsId
        if (this.state.hosts) {
            this.props.getUserHostedEvents(this.state.userId, (res) => {
                this.setState({ eventsId: res.data.map(x => x._id) })
            },
                (err) => {
                    alert(err);
                });
        } else {
            this.props.getUserTicketEvents(this.state.userId, (res) => {
                this.setState({ eventsId: res.data.map(x => x._id) })
            }, (err) => {
                alert(err);
            });
        }


    }




    //TODO: render a carousel 
    //TODO: iterate through this.state.eventsId, and create a <Event /> component for each one, render them
    //      in carousel

    // iterate through eventsId
    

    render() {
        return (
            <div>
                <section className="card" id="events">
                    {this.state.eventsId.map((x, i) => <a href={"/getEvent/" + x} key={i}><Event eventId={x}/></a>)}
                </section>
                <h4> h4</h4>
            </div>

        )
    }
}

Slider.propTypes = {
    getUserHostedEvents: PropTypes.func.isRequired,
    getUserTicketEvents: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { getUserHostedEvents, getUserTicketEvents })(Slider);