import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <body>
                <div className="crossContainer">
                    <p onClick={this.props.onClick}>X</p>
                </div>
                <div className="container modalContainer">
                    <div>
                        <h4 className="text1">
                            Login
                        </h4>
                    </div>
                    <div class="form-option"> or </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div class="modal-textField">
                            <label htmlFor="email">Email Address</label>
                            <br />
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                            />
                        </div>
                        <div class="modal-textField">
                            <label htmlFor="password">Password</label>
                            <br />
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                            />
                
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="modal-button">
                                Log In
                                    </button>
                        </div>
                        <p className="modal-content">
                            Don't have an account? <Link to="/register">Sign up</Link>
                        </p>
                    </form>


                </div>
            </body>
        );
    }
}
export default Login;