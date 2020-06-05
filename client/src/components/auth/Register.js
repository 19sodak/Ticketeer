import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Auth.css"

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    const { history } = this.props;
    if (this.props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };


  render() {
    const { errors } = this.state;
    return (
      <div>
        <header>
          <div className="container">
            <nav>
              <ul className="nav-float-left">
                <li>
                  <a href="/" className="fontStyle1" style={{ fontFamily: 'Josefin Sans' }}>Ticketeer</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div>
              <div>
                <h4 className="text1">
                  Register
                </h4>
              </div>
              <form noValidate onSubmit={this.onSubmit} className="register-body">
                <div className="modal-textfield">
                  <label htmlFor="name">Name</label>
                  <span className="red-text">{errors.name}</span>
                  <input
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames("", {
                      invalid: errors.name
                    })}
                  />
                </div>
                <div className="modal-textfield">
                  <label htmlFor="email">Email</label>
                  <span className="red-text">{errors.email}</span>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email
                    })}
                  />
                </div>
                <div className="modal-textfield">
                  <label htmlFor="password">Password</label>
                  <span className="red-text">{errors.password}</span>
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                  />
                </div>
                <div className="modal-textfield">
                  <label htmlFor="password2">Confirm Password</label>
                  <span className="red-text">{errors.password2}</span>
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2
                    })}
                  />
                </div>
                <div >
                  <button

                    type="submit"
                    className="register-button"
                  >
                    Sign up
                </button>
                </div>
              </form>
              <p className="modal-content">
                Already have an account? <Link to="/">Log in</Link>
              </p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));