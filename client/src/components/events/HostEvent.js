import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

class HostEvent extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render() {
        return (
            <div>
                <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
            >
              Logout
            </button>
            <br></br>
            

            </div>
        );
    }
}

HostEvent.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    auth: state.auth,
  });

export default connect(mapStateToProps, { logoutUser })(HostEvent);
