import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <body>
                <header>
                    <div className="container">
                        <nav>
                            <ul className="nav-float-left">
                                <li>
                                    <a href="#" className="fontStyle1" style={{ fontFamily: 'Josefin Sans' }}>Ticketeer</a>
                                </li>
                            </ul>
                            <ul class="nav-float-right">
                                <li>
                                    <a href="#" className="fontStyle1" style={{ fontFamily: 'Josefin Sans' }}>Host an Event</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="img-container1">
                    <img src={require('./images/banner.png')} className="banner-image" alt="" />
                    <div className="right-text">
                        <div className="fontStyle2" style={{ fontFamily: 'Josefin Sans' }}>
                            <div className="slidingVertical">
                                <span>Finding events</span>
                                <span>Hosting events</span>
                            </div>
                            <br />
                            <span> has never been easier.</span>
                        </div>
                        <br />
                        <div className="fontStyle1 centralize-text" style={{ color: 'white', fontFamily: 'Josefin Sans' }}>
                            Start your journey now
                        </div>
                        <Link
                            to="/login"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large btn-flat waves-effect white black-text">
                            Log In
                        </Link>

                        <Link
                            to="/register"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Register
                        </Link>
                    </div>
                </div>

                <div className="grid-container" style={{ fontFamily: 'Josefin Sans' }}>
                    <div className="grid-content-container">
                        <img src={require('./images/stage.png')} className="img-container2" alt=""></img>
                        <strong>Find events near you with ease</strong>
                        <br />
                        <br />
                    No more of "Whats going on this weekend?" Find events near you with ease.
                </div>
                    <div className="grid-content-container">
                        <img src={require('./images/tickets.png')} className="img-container2" alt=""></img>
                        <strong>Make ticket management easier than ever</strong>
                        <br />
                        <br />
                    Stop worrying about your tickets. Let us remind you of when and where you'll have to go.
                </div>
                    <div className="grid-content-container">
                        <img src={require('./images/poles.png')} className="img-container2" alt=""></img>
                        <strong>Shorten the queues</strong>
                        <br />
                        <br />
                    Our scannable ticket feature allows seamless entry, eliminating the need to wait for traditional guest verification procedures.
                </div>
                </div>
                <div className="grid-container2" style={{ fontFamily: 'Josefin Sans' }}>
                    <div className="grid-content-container2">
                        <strong style={{ fontSize: 'xx-large' }}>About Ticketeer</strong>
                    </div>
                    <div className="grid-content-container2">
                        Ticketeer makes it easier than ever to find events near you. Simply check out the events
                        that are selected by proximity or category, and request a ticket if you find an event of your
                        liking. Follow the payment method listed on the event page, and the host will shortly confirm
                        your attendance. Soon, you'll have a wallet full of tickets for events to go to. Don't worry,
                        we'll send you notofications whenever an event date is near, or if a new event is scheduled near you.
                </div>
                </div>
            </body>

        )

    }


}

export default Landing;