import React, { Component } from "react";
import Slider from "./Slider";
import Navbar from "../navbar/Navbar";
import "./Dashboard.css"
//import Tickets from "./components/dashboard/Tickets"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onCreateEventClick = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push("/hostevent");
  };

  render() {
    const { user } = this.props.auth;
    console.log(user.id);
    return (
      <div className="bodyDash">
        <div className="navComponent">
          <Navbar />
        </div>
        <div className="dash">
          <div >
            <div>
              <div>
                <h4 className="welcome">
                  <b>Welcome,</b> {user.name.split(" ")[0]}
                </h4>
                <div className="horizontalWheel">
                  <h4 className="wheelText">Your hosted events</h4>
                  <Slider userId={user.id} hosts={true} />
                </div>
                <div className="horizontalWheel">
                  <h4 className="wheelText">Your Tickets</h4>
                  <Slider userId={user.id} hosts={false} />
                </div>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  onClick={this.onCreateEventClick}
                >
                  Create Event
            </button>

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
