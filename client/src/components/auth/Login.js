import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Auth.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
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
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <body>
        <div className="container modalContainer">
          <div>
            <h4 className="text1">Login</h4>
          </div>
          <div class="form-option"> or </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div class="modal-textField">
              <label htmlFor="email">Email Address</label>
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
              />
            </div>
            <div class="modal-textField">
              <label htmlFor="password">Password</label>
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
              <br />
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
              />
            </div>
            <div>
              <button type="submit" className="modal-button">
                Log In
              </button>
            </div>
            <p className="modal-content">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>

        <div className="crossContainer">
          <p onClick={this.props.onClick}>X</p>
        </div>
      </body>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
