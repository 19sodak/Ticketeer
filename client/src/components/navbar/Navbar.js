import React, { Component } from "react";
import "./Navbar.css";
import { logoutUser } from "../../redux/actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";



class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <div className="container">
                <nav>
                    <ul className="nav-float-left">
                        <li>
                            <a
                                href="/"
                                className="fontStyle1"
                                style={{ fontFamily: "Josefin Sans" }}
                            >
                                Ticketeer
                </a>
                        </li>
                    </ul>
                    <ul class="nav-float-right">

                        <li>
                            <a
                                href="/"
                                className="fontStyle1"
                                style={{ fontFamily: "Josefin Sans" }}
                                onClick={this.onLogoutClick}
                            >
                                Logout
                </a>
                        </li>

                    </ul>
                    <ul class="nav-float-right">

                        <li>
                            <a
                                href="/dashboard"
                                className="fontStyle1"
                                style={{ fontFamily: "Josefin Sans" }}

                            >
                                Dashboard
                </a>
                        </li>

                    </ul>

                </nav>
            </div>
        )
    }


}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
